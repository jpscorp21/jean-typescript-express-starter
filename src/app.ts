import express from "express";

const app = express();

app.get("/", (req, res) => {    
    res.json({
        mensaje: "Bienvenido al api rest de productos naturales"
    });
});

export default app;

