function Manager(name, id, email, role, officeNumber) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number") {
    throw new Error("Expected parameter 'id' to be a number");
  }

  if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  if (typeof officeNumber !== "number") {
    throw new Error("Expected parameter 'officeNumber' to be a non-empty string");
  }

  if (role instanceof Manager === false) {
    throw new Error('Expected parameter "role" to be an instance of Manager');
  }
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNumber = officeNumber;
  this.role = role;
}

module.exports = Manager;
