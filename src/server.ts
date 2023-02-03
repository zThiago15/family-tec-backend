import express from 'express';
import router from './routes/feedback';

const app = express();

app.use(express.json());
app.use(router)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})