import express from 'express'
import morgan from 'morgan'
import handlebars  from "express-handlebars"
import path from 'path'
import methodOverride from 'method-override'

import routesProductos from './src/routers/routersproductos.js'
import routesPosteos from './src/routers/routesPosteos.js'

const app = express()

const __dirname = path.resolve();
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 
app.use(methodOverride('_method'))
// -------------- Configuracion Handlebars ----------------------------------
app.engine("hbs", handlebars({
  extname: "hbs",
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "/src/views/layouts"),
  partialsDir: path.join(__dirname, "/src/views/partials"),
}));
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs');

routesProductos(app)
routesPosteos(app)
// servidor
app.listen(3000, () => {
    console.log(`el servidor esta corriendo en http://localhost:${3000}`)
  })