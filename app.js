import express from 'express';
import httpStatus from 'http-status';

// Template Engine
import { engine } from 'express-handlebars';

// Importando el enrutador
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';
@@ -16,6 +19,23 @@ import path from 'path';
// que basicamente es un middleware
const app = express();

// Se crea instancia del template engine
const hbsTemplateEngine = engine({
  // Extensión de los archivos de plantillas
  extname: '.hbs',
  // Nombre del diseño por defecto
  defaultLayout: 'main',
});

// TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2.Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));