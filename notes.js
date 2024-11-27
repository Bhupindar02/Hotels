const express = require('express')
const Router = express.Router()

Router.get('/Students',(req,res)=>{
     const studentList = {
        Ramesh,Sures,vighnesh,Naresh
     }
     res.status(200).json(studentList)
})
//post endpoint for student
Router.post('/Students',async(req,res)=>{
    try{
         const input = req.body
         const newPerson = new Student(input)
         const response = await newPerson.save()

         console.log('new student hasbeen saved')
         res.status(200).json(response)


    }catch(err){
        console.log("unable to save data");``
        res.status(500).json("internal server error");
    }
})
Router.put("/ID",async(req,res)=>{
    try{
      const studentId= req.params.ID;
      const upStudent = req.body;

      const response = await Student.findByIdandUpdate(studentId,upStudent,{
        new: true,
        runValidators: true,
      })
      if(!response){
        res.status(404).json({error:"Internal server error"})
      }
      console.log('data updated sucessfully')
      res.status(200).json(response)
    }catch(err){
       console.log('internal server error')
       res.status(500).json({err:'internal server error'})
    }
})
//delete student document
Router.delete("/:ID",async(req,res)=>{
    try{
      const studentId = req.params.ID
      const response = await Student.findByIdandDelete(studentId)
      if(!response){
        res.status(404).json({err:"ID didn't match"})
      }
      res.status(200).json({message:"sucessfully deleted"})
    }catch(err){
       console.log("Internal server error")
       res.status(500).json({err:'Internalserver error'})
    }
})