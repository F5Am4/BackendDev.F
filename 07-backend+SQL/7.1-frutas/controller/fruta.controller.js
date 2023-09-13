class FrutaController{

    async createFrutas(request, response){
           try {
               const id = await SERVICE;
               request.status(201).json(id)
           } catch(error){
            console.error(error);
            response.status(500).send('Internal server Error')
           }
    }

    async getFrutasByID(request, response){
        try {
            const id = request.params.id;
            const fruta = await SERVICE;

            if(!fruta){
                 return response.status(404).send('Fruta not found');
            }

            return response.status(201).json(fruta);
        } catch(error){
            console.error(error);
            return response.status(500).send('Internal server Error')
        }
    }

    async updateFruta(request, response){
        try {
            const id = request.params.id;
            const update = request.body;
            const success = await SERVICE;

            if (!success) {
                return response.status(404).send('Fruta not found');
            }
            request.status(201).send('Fruta actualizada');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal server Error');
        }
    }

    async deleteFruta(request, response){
        try {
            const id = request.params.id;
            const success = await SERVICE;

            if (!success) {
                return response.status(404).send('Fruta not found');
            }
            return request.status(201).send('Fruta eliminada');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Internal server Error');
        }
    }
}

export default new FrutaController();

// clase 23/08/2023 min 1:01:02