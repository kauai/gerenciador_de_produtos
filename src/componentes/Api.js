import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3001/'
})

class Api{
    async loadCategorias(){
        return (await api.get('categorias')).data
    }

    async deleteCategoria(id) {
        return await api.delete(`categorias/${id}`)
    }
}

export default new Api()