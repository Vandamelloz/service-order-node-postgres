import {Tecnico} from 'models/tecnicos.js';

class TecnicoDao{
    static async listAll(){
        try{
            const tecnico= await Tecnico.findAll();
            return tecnico;

        }catch(err){
            throw new Error('Erro ao listar técnicos: '+ err.message);
            throw err; //re-lançar o erro para tratamento posterior
        }
    }
    static async findById(id){
        try{
            const tecnico= await Tecnico.findByPk(id);
            return tecnico;
        }catch(err){
            throw new Error('Erro ao buscar técnico por ID: '+ err.message);
            throw err;
        }
    }
    static async create(data){
        try{
            const novoTecnico= await Tecnico.create(data);
            return novoTecnico;
        }catch(err){
            throw new Error('Erro ao criar técnico: '+ err.message);
            throw err;
        }
    }
    static async update(id, data){
      try{
            const [atualizarTecnico]= await Tecnico.update(data, {
                where:{
                    id:id
                }
            })
            return atualizarTecnico; //número de linhas afetadas
        }catch(err){
            throw new Error('Erro ao atualizar técnico: '+ err.message);
            throw err;
        }
      }
      static async delete(id){
        try{
            const deletarTecnico= await Tecnico.destroy({
                where:{
                    id:id
                }
            })
            return deletarTecnico; //número de linhas afetadas
        }
        catch(err){
            throw new Error('Erro ao deletar técnico: '+ err.message);
            throw err;
            }
        }
      }
      export {TecnicoDao};
        
 