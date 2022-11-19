const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect with medicine model
let medicine = require('../Models/medicine');
let medicineController = require('../controller/medicine')
//crud operation
//read operation
// get routes for the medicine list

router.get('/',medicineController.displaymedicines);

// add operation
// get route
router.get('/add',medicineController.AddPage);
//post route for displaying the add page -- create operation
router.post('/add',medicineController.processAddPage);

// edit operation
// get route
router.get('/edit/:id',medicineController.displayEditPage);
//post route for displaying the edit operation - update operation
router.post('/edit/:id',medicineController.processEditPage);

// delete operation
// get route
router.get('/delete/:id',medicineController.preformDelete);

module.exports = router;

