function Employee(name, id, email, role) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number") {
    throw new Error("Expected parameter 'id' to be a number");
  }

  if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  if (role instanceof Employee === false) {
    throw new Error('Expected parameter "role" to be an instance of Employee');
  }
  this.name = name;
  this.id = id;
  this.email = email;
  this.role = role;
}

module.exports = Employee;
