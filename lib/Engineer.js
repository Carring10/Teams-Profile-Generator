class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
