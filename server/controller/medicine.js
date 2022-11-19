let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with medicine model
let medicine = require('../Models/medicine');
//crud operation

module.exports.displaymedicines = (req,res,next)=>{
    medicine.find((err,MedicineStore)=>{
        if(err)
        {
            return console.error(err);
        
        }
        else
        {
            res.render('medicine/store',{
                title:'Medicine',
                MedicineStore: MedicineStore 
            })
        }
    });
}

module.exports.AddPage = (req,res,next)=>{
    res.render('medicine/add',{title: 'Add Medicine'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newMedicine = medicine({
        "name":req.body.name,
        "Type":req.body.Type,
        "amount":req.body.amount,
    });
    medicine.create(newMedicine,(err,medicine) =>{
      if(err)
      {
        console.log(err);
        res.end(err);
      }
      else
      {
        res.redirect('/medicine');
      }
    })
}


module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    medicine.findById(id,(err,medicinetoedit)=>{
        if(err)
        {
          console.log(err);
          res.end(err);
        }
        else
        {
            res.render('medicine/edit',{title:'edit medicine',medicine:medicinetoedit});
        }
    });
}


module.exports.processEditPage =(req,res,next)=>{
    let id =req.params.id;
    let updatemedicine = medicine({
        "_id":id,
        "name":req.body.name,
        "Type":req.body.Type,
        "amount":req.body.amount,
    });
    medicine.updateOne({_id:id},updatemedicine,(err) =>{
        if(err)
        {
          console.log(err);
          res.end(err);
        }
        else
        {
            res.redirect('/medicine');  
        }
    });
}


module.exports.preformDelete =(req,res,next)=>{
    let id = req.params.id;
    medicine.remove({_id:id},(err)=>{
        if(err)
        {
          console.log(err);
          res.end(err);
        }
        else
        {
            res.redirect('/medicine');  
        }
    })
}