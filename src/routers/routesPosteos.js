import * as controllerPosteos from '../controllers/controllerPosteos.js'

const routesPosteos = app => {

    app.get('/posteo',controllerPosteos.view)
    app.post('/posteo',controllerPosteos.create)

} 
export default routesPosteos