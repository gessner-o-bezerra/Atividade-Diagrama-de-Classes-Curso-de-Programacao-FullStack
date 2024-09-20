import { Aluno } from "./aluno";
import { Skill } from "./skill";
import { Turma } from "./turma";

// Exemplo de uso
const turma1 = new Turma("1", 2023, "FullStack");
const aluno1 = new Aluno("1", "João", 25, turma1);
const aluno2 = new Aluno("1", "Pedro", 32, turma1);
const aluno3 = new Aluno("1", "Carlos", 20, turma1);
const skill1 = new Skill("1", "JavaScript", true);
const skill2 = new Skill("2", "TypeScript", true);

turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);
turma1.adicionarAluno(aluno3);

aluno1.adicionarSkill(skill1);
aluno1.adicionarSkill(skill2);

aluno2.adicionarSkill(skill2);


aluno3.adicionarSkill(skill1);

turma1.listarAlunos();
aluno1.listarSkills();
aluno2.listarSkills();
aluno3.listarSkills();
