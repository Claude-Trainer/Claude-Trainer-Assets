const request = require("supertest");
const app = require("../api/server");
const User = require("../api/models/User");

beforeEach(() => {
  User.clear();
});

describe("POST /api/auth/signup", () => {
  it("creates a new user with valid data", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      name: "Alice",
      email: "alice@example.com",
      password: "password123",
    });

    expect(res.status).toBe(201);
    expect(res.body.data.user.name).toBe("Alice");
    expect(res.body.data.user.email).toBe("alice@example.com");
    expect(res.body.data.token).toBeDefined();
  });

  it("returns 400 when required fields are missing", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      name: "Alice",
    });

    expect(res.status).toBe(400);
    expect(res.body.error.code).toBe("MISSING_FIELDS");
  });

  it("returns 422 when password is too short", async () => {
    const res = await request(app).post("/api/auth/signup").send({
      name: "Alice",
      email: "alice@example.com",
      password: "123",
    });

    expect(res.status).toBe(422);
    expect(res.body.error.code).toBe("WEAK_PASSWORD");
  });

  it("returns 409 when email already exists", async () => {
    await request(app).post("/api/auth/signup").send({
      name: "Alice",
      email: "alice@example.com",
      password: "password123",
    });

    const res = await request(app).post("/api/auth/signup").send({
      name: "Alice 2",
      email: "alice@example.com",
      password: "password456",
    });

    expect(res.status).toBe(409);
    expect(res.body.error.code).toBe("EMAIL_EXISTS");
  });

  // TODO: Students should add email validation tests here
  // - Test that invalid emails (no @, no domain, spaces) return 422
  // - Test that valid emails (standard, plus-sign, subdomains) succeed
});

describe("POST /api/auth/login", () => {
  beforeEach(async () => {
    await request(app).post("/api/auth/signup").send({
      name: "Alice",
      email: "alice@example.com",
      password: "password123",
    });
  });

  it("logs in with correct credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "alice@example.com",
      password: "password123",
    });

    expect(res.status).toBe(200);
    expect(res.body.data.token).toBeDefined();
  });

  it("returns 401 with wrong password", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "alice@example.com",
      password: "wrongpassword",
    });

    expect(res.status).toBe(401);
  });
});
