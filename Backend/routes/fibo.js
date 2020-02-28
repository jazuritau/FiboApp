function get (req, res, next){

    const number = req.params.number
    const valid  = RegExp(/^\d*$/).test(number)
    
    if (valid == false) {
        res.send('Error!... Solo acepto números')
    }

    try {            
        let result = fibonacci(parseInt(req.params.number))
        res.status(200).send(`Para el número ${number} la secuencia es : ${result} `)
        
    } catch (error) {
        next(error)
    }
}
   
function fibonacci(value){
    let n = 0
    let arreglo = []
        for (n; n<value; n++){
            if(n==0){
                arreglo.push(0)
            }
            else if(n==1){
                arreglo.push(1)
            }
            else{
                arreglo.push(arreglo[n-1]+arreglo[n-2])
            }
        }
    return arreglo
}


module.exports = get