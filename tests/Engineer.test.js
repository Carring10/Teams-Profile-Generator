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

describe("method", () => {
  describe("getName", () => {
    it("returns the name", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.getName()).toBe("Piper");
    });
  });
  describe("getId", () => {
    it("returns the id", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.getId()).toBe(9);
    });
  });
  describe("getEmail", () => {
    it("returns the email", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.getEmail()).toBe("piper@mydog.com");
    });
  });
  describe("getGitHub", () => {
    it("returns the officeNumber", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.getEmail()).toBe("piper@mydog.com");
    });
  });
  describe("getRole", () => {
    it("returns the name", () => {
      const engineer = new Engineer("Piper", 9, "piper@mydog.com", "iluvbones9");

      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
