// In-memory user store (no database needed for this lab)
const users = [];

const User = {
  create(userData) {
    users.push(userData);
    return userData;
  },

  findByEmail(email) {
    return users.find((u) => u.email === email);
  },

  findById(id) {
    return users.find((u) => u.id === id);
  },

  clear() {
    users.length = 0;
  },
};

module.exports = User;
