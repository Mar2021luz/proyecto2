import * as controllerproductos from '../controllers/controllerProductos.js'

const routesProducts = app => {

    app.get('/productos',controllerproductos.view)
    app.post('/productos',controllerproductos.create)


   
}
export default routesProducts
