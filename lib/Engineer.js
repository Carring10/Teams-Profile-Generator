function Engineer(name, id, email, role, gitHub) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number") {
    throw new Error("Expected parameter 'id' to be a number");
  }

  if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  if (typeof gitHub !== "string" || !gitHub.trim().length) {
    throw new Error("Expected parameter 'gitHub' to be a non-empty string");
  }

  if (role instanceof Engineer === false) {
    throw new Error('Expected parameter "role" to be an instance of Engineer');
  }
  this.name = name;
  this.id = id;
  this.email = email;
  this.gitHub = gitHub;
  this.role = role;
}

module.exports = Engineer;
