const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should creat an obj with name, id, email, and role properties if it has valid arguments", () => {
      // Arrange
      const employee = new Employee("Piper", 839, "piper@dog.com", true);

      // Act

      // Assert
      expect(employee.name).toBe("Piper");
      expect(employee.id).toBe(839);
      expect(employee.email).toBe("piper@dog.com");
      expect(employee.role).toBe(true);
    });
  });
});

// TODO: Can get name.

// TODO: Can get ID.

// TODO: Can get Email.

// TODO: Can get role, returns 'Employee'.
