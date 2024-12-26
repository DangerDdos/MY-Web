const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rute untuk halaman login
app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);
    res.send(`Login berhasil untuk ${email}`);
});

// Rute untuk halaman utama
app.get('/', (req, res) => {
    res.render('index');
});

// Rute untuk menangani input data
const inputDataList = [];

app.post('/submit', (req, res) => {
    const inputData = req.body.inputData;
    inputDataList.push(inputData);
    console.log(`Data yang diterima: ${inputData}`);
    res.send(`Data berhasil diterima: ${inputData}`);
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

