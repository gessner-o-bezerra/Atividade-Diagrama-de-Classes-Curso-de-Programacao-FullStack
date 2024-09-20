import { Skill } from "./skill";
import { Turma } from "./turma";

export class Aluno {

  skills: Skill[];
    turma: Turma;
 

  constructor(private id: string, private nome: string, private idade: number, turma: Turma) {
    this.skills = [];
    this.turma = turma;
   
  }

  getNome() {
    return this.nome
  }

  

  listarSkills(): void {
    console.log(`Skills de ${this.nome}:`);
    this.skills.forEach((skill) => {
      console.log(`- ${skill.getDescricao()}`);
    });
  }

  adicionarSkill(skill: Skill): void {
    this.skills.push(skill);
  }
}