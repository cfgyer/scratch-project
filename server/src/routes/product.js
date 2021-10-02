import { Router } from 'express'
import productController from '../controllers/productController';

const router = Router();

router.post("/", productController.createProduct,(req, res) => {
    return res.send(`Created product: ${req.body.product_name}`)
})

router.get('/', productController.getAllProducts, (req, res) => {
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