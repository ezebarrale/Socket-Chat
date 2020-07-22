class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => { //filter devuelve un nuevo arreglo por eso el [0]
            return persona.id === id;
        })[0];

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {

        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => { //reemplaza el arreglo actual de personas (devuelve el mismo arreglo menos la persona borrada)
            return persona.id != id
        });

        return personaBorrada;

    }
}

module.exports = {
    Usuarios
}