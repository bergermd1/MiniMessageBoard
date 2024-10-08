const express = require('express');
const app = express();
const path = require('node:path');
const router = require('./routes/pageRouter')
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', router);

// app.get('/', (req, res) => {
//     res.render('index', { title: 'index', messages: messages });
// })

app.listen(port);
