import express from "express";

const app = express();

app.get("/", (req, res) => {    
    res.json({
        mensaje: "Bienvenidos a la aplicacion"
    });
});

export default app;

