const express= require("express");
const res = require("express/lib/response");
const app= express();

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })

  class Cube {
    constructor(length) {
    this.length = length;
    }
    
    getSideLength () {
    return this.length;
    }
    
    getSurfaceArea () {
    return (this.length * this.length) * 6;
    }
    
    getVolume () {
    return Math.pow(this.length,3);
    }
    }
    
    module.exports = {
    Cube:Cube
    }

const port=8080;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})