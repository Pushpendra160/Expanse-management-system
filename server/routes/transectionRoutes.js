const express = require('express');
const { addTransection, getAllTransection,editTransection,deleteTransection } = require('../controllers/transectionController');

const router = express.Router();

//routes
 // add transection

 router.post('/add-transection', addTransection);


 //get all transections


 router.post('/get-transection', getAllTransection);


  // Edit transection

  router.put('/edit-transection', editTransection);

   // Delete transection

   router.post('/delete-transection', deleteTransection);
module.exports = router;