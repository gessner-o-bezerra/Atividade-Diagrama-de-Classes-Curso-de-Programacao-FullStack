export class Skill {
  
 
  

  constructor(private id: string, private descricao: string, private ativo: boolean) {
   
  }

  getDescricao() {
    return this.descricao
  }

}