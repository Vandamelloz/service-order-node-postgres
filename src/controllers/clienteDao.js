import {Cliente} from 'models/cliente.js';

class ClienteDao{
    //métodos estáticos assíncronos= posso chamálos sem instanciar a classe
    static async listAll(){
       try{
        const clientes= await Cliente.findAll(); //sequelize busca todos os registros da tabela
        return clientes;
       }catch(err){
        throw new Error('Erro ao listar clientes: '+ err.message);
        throw err;
       }

    }
    static async findById(id){
       try{
        const cliente= await Cliente.findByPk(id); //busca por chave primária
        return cliente;
       } 
       catch(err){  
       throw new Error('Erro ao buscar cliente por ID: '+ err.message);
       throw err;
         }
    }
    static async create(data){
        try{
            const novoCliente= await Cliente.create(data);
            return novoCliente;
        }
        catch(err){
            throw new Error('Erro ao criar cliente: '+ err.message);
            throw err;
        }
    
    }
    static async update(id, data){
        try{
            const [atualizarCliente]= await Cliente.update(data, {
                where:{
                    id:id
                }
            })
            return atualizarCliente; //número de linhas afetadas
        }catch(err){
            throw new Error('Erro ao atualizar cliente: '+ err.message);
            throw err;
        }
    }
     static async delete(id){
        try{
            const deletarCliente= await Cliente.destroy({
                where:{
                    id:id
                }
            })
            return deletarCliente; //número de linhas afetadas
        }catch(err){
            throw new Error('Erro ao deletar cliente: '+ err.message);
            throw err;
            }
        }
     }
export {ClienteDao}; //exporta a classe para ser usada em outros arquivos