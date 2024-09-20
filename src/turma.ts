import { Aluno } from "./aluno";

export class Turma {
  alunos: Aluno[];
  constructor(private id: string, private edicao: number, private programa: string) {
    this.alunos = [];
  }

  listarAlunos(): void {
    console.log(`Alunos da turma ${this.programa} (Edição: ${this.edicao}):`);
    this.alunos.forEach((aluno) => {
      console.log(`- ${aluno.getNome()}`);
    });
  }

  adicionarAluno(aluno: Aluno): void {
    this.alunos.push(aluno);
    aluno.turma = this; // Atualiza a turma do aluno
  }
}