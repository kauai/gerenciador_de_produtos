import axios from 'axios'
const uuidv1 = require('uuid/v1');

const api = axios.create({
    baseURL:'http://localhost:3001/'
})

class Api{
    async loadCategorias(){
        return (await api.get('categorias')).data
    }

    async createCategoria(categoria){
        return await api.post('categorias',{  
            id:uuidv1(),
            categoria
        })
    }

    async deleteCategoria(id) {
        return await api.delete(`categorias/${id}`)
    }
}

export default new Api()