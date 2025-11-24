import {Ordens} from '.../models/ordens.js';
import { Ordem } from '../models/ordens';

class OrdensDao{
    static async listAll(){
        try{
            const ordens= await Ordens.findAll();
            return ordens;
            
        }catch(err){
            throw new Error('Erro ao listar ordens: '+ err.message);
            throw err;
        }
    }
    static async findById(id){
        try{
            const ordem= await Ordens.findByPk(id);
            return ordem;
        }catch(err){
            throw new Error('Erro ao buscar ordem por ID: '+ err.message);
            throw err;
        }
    }
    static async create(data){
        try{
            const novaOrdem= await Ordens.create(data);
            return novaOrdem;
        }catch(err){
            throw new Error('Erro ao criar ordem: '+ err.message);
            throw err;
        }
    }
    static async update(id, data){
        //Os colchetes [atualizado] são destructuring assignment para pegar diretamente o número de linhas afetadas do array retornado pelo Sequelize.
        try{
            const [atualizarOrdem]= await Ordens.update(data, {
                where:{
                    id:id
                }
            })
            return atualizarOrdem; //número de linhas afetadas
        }catch(err){
            throw new Error('Erro ao atualizar ordem: '+ err.message);
            throw err;
        }
    }
    static async delete(id){
        try{
            const deletarOrdem= await Ordens.destroy({
                where:{
                    id:id
                }
            })
            return deletarOrdem; //número de linhas afetadas
        }catch(err){
            throw new Error('Erro ao deletar ordem: '+ err.message);
            throw err;
        }
    }
    static async findByIdCliente(cliente_id){
        try{
            const ordens= await Ordens.findAll({
                where:{
                    cliente_id:cliente_id
                }
            });
            return ordens;
        }catch(err){
            throw new Error('Erro ao buscar ordens por ID do cliente: '+ err.message);
            throw err;
        }
    }
    static async findByIdTecnico(tecnico_id){
        try{
            const ordens= await Ordens.findAll({
                where:{
                    tecnico_id:tecnico_id
                }

            })
        }catch(err){
            throw new Error('Erro ao buscar ordens por ID do técnico: '+ err.message);
            throw err;
        }
    }
    static async updateStatus(id, status){
        try{
            const [atualizarStatus]= await Ordens.update({status:status}, {
                where:{
                    id:id
                }
            })
            return atualizarStatus; //número de linhas afetadas
        }catch(err){
            throw new Error('Erro ao atualizar status da ordem: '+ err.message);
            throw err;
        }
    }
    static async GetByidFull(id){
        //retornar uma ordem com os dados do cliente e do técnico, pode usar include do Sequelize:
        try{
        return await Ordens.findByPk(id, {
            include: ['cliente', 'tecnico'] 
        })
    }catch(err){
        throw new Error('Erro ao buscar ordem completa por ID: '+ err.message);
        throw err;
    }
    }
        static async formEdit(req, res) {
            const ordens = await OrdensDao.findById(req.params.id);
            res.render("ordens/edit", { Ordem });
  }
}
export {OrdensDao};