import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {    
    res.json({
        mensaje: 'Bienvenido al api rest de productos naturales'
    });
});

export default app;

