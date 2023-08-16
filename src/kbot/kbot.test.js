const Kbot = require("./kbot");

describe("Saludor", () => {
    it("Saludar a Andrés en español por la mañana", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 7) 
        expect(resultado).toEqual("Buenos días Andrés");
    });

    it("Saludar a Andrés en español por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    it("Saludar a Andrés en español por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 22)
        expect(resultado).toEqual("Buenas noches Andrés");
    });

    it("Saludar a Hannah en ingles por la mañana", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Hannah", 10) 
        expect(resultado).toEqual("Good morning Hannah");
    });

    it("Saludar a Hannah en ingles por la tarde", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Hannah", 17)
        expect(resultado).toEqual("Good afternoon Hannah");
    });

    it("Saludar a Hannah en ingles por la noche", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Hannah", 19)
        expect(resultado).toEqual("Good evening Hannah");
    });
    
    it("Saludar a Steve por default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Steve")
        expect(resultado).toEqual("Buenas tardes Steve");
    });

  });
  