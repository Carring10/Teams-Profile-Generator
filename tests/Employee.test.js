const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an obj with name that is a string", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.name).toBe("Piper");
    });

    it("should have an id that is a valid number", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.id).toBe(9);
    });

    it("should have an email that is a string", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.email).toBe("piper@mydog.com");
    });
  });
});

describe("method", () => {
  describe("getName", () => {
    it("returns the name", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.getName()).toBe("Piper");
    });
  });
  describe("getId", () => {
    it("returns the id", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.getId()).toBe(9);
    });
  });
  describe("getEmail", () => {
    it("returns the email", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.getEmail()).toBe("piper@mydog.com");
    });
  });
  describe("getRole", () => {
    it("returns the name", () => {
      const employee = new Employee("Piper", 9, "piper@mydog.com");

      expect(employee.getRole()).toBe("Employee");
    });
  });
});
