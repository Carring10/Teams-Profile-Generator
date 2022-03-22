const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should have a name that is a string", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.name).toBe("Piper");
    });

    it("should have an id that is a valid number", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.id).toBe(9);
    });

    it("should have an email that is a string", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.email).toBe("piper@mydog.com");
    });

    it("should have an office number that is a number", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.school).toBe("Lick A Lot University");
    });
  });
});

describe("method", () => {
  describe("getName", () => {
    it("returns the name", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.getName()).toBe("Piper");
    });
  });
  describe("getId", () => {
    it("returns the id", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.getId()).toBe(9);
    });
  });
  describe("getEmail", () => {
    it("returns the email", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.getEmail()).toBe("piper@mydog.com");
    });
  });
  describe("getSchool", () => {
    it("returns the school", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.getSchool()).toBe("Lick A Lot University");
    });
  });
  describe("getRole", () => {
    it("returns the name", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", "Lick A Lot University");

      expect(intern.getRole()).toBe("Intern");
    });
  });
});
