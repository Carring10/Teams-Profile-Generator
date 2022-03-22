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

// TODO: Can get name.

// TODO: Can get ID.

// TODO: Can get Email.

// TODO: Can get role, returns 'Employee'.
