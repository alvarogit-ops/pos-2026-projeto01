const api = 'https://dummyjson.com/'

export async function buscarProdutos(){

    try{
        const response = await fetch (`${api}products`)

        if (!response.ok){
            throw new Error('Erro na requisição')
    }
    
    const data = await response.json()
    return data
    } catch (error){
        console.log('Erro ao buscar produtos', error)
        throw Error
    }

  

}
