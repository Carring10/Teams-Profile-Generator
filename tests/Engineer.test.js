const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should have a name that is a string", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.name).toBe("Piper");
    });

    it("should have an id that is a valid number", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.id).toBe(9);
    });

    it("should have an email that is a string", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.email).toBe("piper@mydog.com");
    });

    it("should have a github username that is a string", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.github).toBe("iluvbones9");
    });
  });
});

// TODO: Can get name.

// TODO: Can get ID.

// TODO: Can get Email.

// TODO: Can get github.

// TODO: Can get role - overwritten to return 'Engineer'.
