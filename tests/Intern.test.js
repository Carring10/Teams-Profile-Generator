const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should have a name that is a string", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", 1);

      expect(intern.name).toBe("Piper");
    });

    it("should have an id that is a valid number", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", 1);

      expect(intern.id).toBe(9);
    });

    it("should have an email that is a string", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", 1);

      expect(intern.email).toBe("piper@mydog.com");
    });

    it("should have an office number that is a number", () => {
      const intern = new Intern("Piper", 9, "piper@mydog.com", 1);

      expect(intern.officeNumber).toBe(1);
    });
  });
});

// TODO: Can get name.

// TODO: Can get ID.

// TODO: Can get Email.

// TODO: Can get school.

// TODO: Can get role - overwritten to return 'Intern'.
