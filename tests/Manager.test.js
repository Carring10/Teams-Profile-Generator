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

describe("method", () => {
  describe("getName", () => {
    it("returns the name", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.getName()).toBe("Piper");
    });
  });
  describe("getId", () => {
    it("returns the id", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.getId()).toBe(9);
    });
  });
  describe("getEmail", () => {
    it("returns the email", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.getEmail()).toBe("piper@mydog.com");
    });
  });
  describe("officeNumber", () => {
    it("returns the officeNumber", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.getEmail()).toBe("piper@mydog.com");
    });
  });
  describe("getRole", () => {
    it("returns the name", () => {
      const manager = new Manager("Piper", 9, "piper@mydog.com", 1);

      expect(manager.getRole()).toBe("Manager");
    });
  });
});
