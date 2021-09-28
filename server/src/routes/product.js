import { Router } from 'express'

const router = Router();

router.post("/", (req, res) => {
    return res.send(`Created product: ${req.body.productName}`)
})

router.get('/', (req, res) => {
    return res.send('<h1>Hello from server/products</h1>')
})

router.get('/:productName', (req, res) => {
    return res.send(`Hello from server/${req.params.productName}`)
})

router.patch("/", (req, res) => {
    return res.send(`Updated product ${req.body.productName} to ${req.body.updatedProduct.productName}`)
})

router.delete('/:productName', (req, res) => {
    return res.send(`Deleted product ${req.params.productName}`)
})


export default router