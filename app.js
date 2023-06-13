const express = require('express');
const path = require('path');
const app = express();
const PORT = 5008;

const homeRouter=require('./routes/homeRouter')

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

app.use(express.urlencoded({ extended : false}));
app.use(express.json())

app.use(express.static( '../public'));

app.use('/', homeRouter);

app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}
`))