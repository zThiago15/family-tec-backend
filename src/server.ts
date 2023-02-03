import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send('teste')
})

const port = 3000;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})