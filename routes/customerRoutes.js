const express = require('express')
const router = express.Router();
const customerController = require('../controller/customerController')

router.get('/',customerController.getAllCustomers)  // All user info page

router.get('/details/:user_id',customerController.getCustomer)

router.post('/update/:user_id',customerController.updateCustomer)
router.put('/update/:user_id',customerController.updateCustomer)
router.get('/update/:user_id',customerController.updateCustomerForm)

router.post('/insert',customerController.createCustomer)

router.get('/image/:user_id',customerController.getImage)

router.post('/delete/:user_id',customerController.deleteCustomer)  // override
router.delete('/delete/:user_id',customerController.deleteCustomer)

module.exports = router;
