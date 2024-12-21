abstract class FiguraGeometrica {
    nombre: String = ""

    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract calcularPerimetro(): number
}

export class Circulo extends FiguraGeometrica {
    radio: number
    
    constructor(radio:number) {
        super("Círculo")
        this.radio = radio
    }

    calcularPerimetro(): number {
        return Math.PI * this.radio * 2
    }
}

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number
    ladoB: number
    ladoC: number

    constructor(ladoA:number, ladoB:number, ladoC:number) {
        super("triángulo")
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}

export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(ladoA: number) {
        super(ladoA, ladoA, ladoA)
    }
}