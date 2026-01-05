export class Aluno {
    constructor(public nome: string, public matricula: number) { }
    exibirInfo(): void {
        console.log(`Aluno: ${this.nome}, Matrícula: ${this.matricula}`);
    }
}