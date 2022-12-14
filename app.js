//Requiriendo express
const express = require("express");

//Le decimos a express cual es nuestra carpeta de archivos publicos
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

//Ejecutando express
const app = express();

app.use(express.static(publicPath));

/* SERVIDOR DE RENDER */
const port = process.env.PORT || 3000;

//Levantando servidor con express
app.listen(port, () => {
    console.log("Servidor funcionando en http://localhost:" + port)
});

//Definiendo ruta de raiz
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/home.html"))
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"))
})

app.post("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/login.html"))
})

