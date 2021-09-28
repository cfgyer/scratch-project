import 'dotenv/config';
import cors from 'cors'
import express from 'express'

import routes from './routes'

const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routes.products);
app.use('/api/users', routes.users);
app.use('/api/orders', routes.orders);

// TODO: global error handler

app.listen(3000, () => {
    console.log(`App listening on port ${process.env.PORT}.`)
})
