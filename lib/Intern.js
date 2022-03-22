function Intern(name, id, email, role, school) {
  if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
  }

  if (typeof id !== "number") {
    throw new Error("Expected parameter 'id' to be a number");
  }

  if (typeof email !== "string" || !email.trim().length) {
    throw new Error("Expected parameter 'email' to be a non-empty string");
  }

  if (typeof school !== "string" || !school.trim().length) {
    throw new Error("Expected parameter 'school' to be a non-empty string");
  }

  if (role instanceof Intern === false) {
    throw new Error('Expected parameter "role" to be an instance of Intern');
  }
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
  this.role = role;
}

module.exports = Intern;
