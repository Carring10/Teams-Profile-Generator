class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
  // Getter Methods
  getName() {
    return this.name;
  }

  getId() {
    return this.Id;
  }

  getEmail() {
    return this.email;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Intern;
