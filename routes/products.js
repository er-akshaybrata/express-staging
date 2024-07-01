const express = require("express")
const router = express.Router()
const {fetch,create,update,remove} = require("../controller/products")
router.get('/',fetch)

router.post('/',create)

router.put('/',update)

router.delete('/',remove)

module.exports = router