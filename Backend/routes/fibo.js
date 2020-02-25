const joi = require('@hapi/joi')

function get(req,res){
    const position = req.params.id
    if(!joi.number().intefer().valid(position)) 
        return res.statusCode(400).send('Error, solo se aceptan numeros')
    
    fibonacci(req.params.id)
    res.send(arr)
  
}

let arr = []
function fibonacci(n) {
    if(n === 1) {
        return 0
    }
    if(n === 2) {
        return 1
    }
    if(arr[n]) {
        return arr[n]
    }

    const result = fibonacci(n-1) + fibonacci(n-2)
    arr[n] = result

    return result        
}

module.exports = {
    get
}
