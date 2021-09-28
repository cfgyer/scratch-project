import { Router } from 'express'

const router = Router()

router.post("/", (req, res) => {
  return res.send(`Created order: ${req.body.order_id}`)
})

router.get('/', (req, res) => {
  return res.send('<h1>Hello from server/order</h1>')
})

// decide whether this needs to be user id or username
router.get('/:order_id', (req, res) => {
  return res.send(`Hello from server/${req.params.order_id}`)
})

router.patch("/", (req, res) => {
  return res.send(`Updated order ${req.body.order_id} to ${req.body.updatedProduct.order_id}`)
})

router.delete('/:order_id', (req, res) => {
  return res.send(`Deleted order ${req.params.order_id}`)
})


export default router