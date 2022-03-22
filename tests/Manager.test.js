const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should have a name that is a string", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.name).toBe("Piper");
    });

    it("should have an id that is a valid number", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.id).toBe(9);
    });

    it("should have an email that is a string", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.email).toBe("piper@mydog.com");
    });

    it("should have an office number that is a number", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.officeNumber).toBe(1);
    });
  });
});

// TODO: Can get name.

// TODO: Can get ID.

// TODO: Can get Email.

// TODO: Can get office number.

// TODO: Can get role - overwritten to return 'Manager'.
