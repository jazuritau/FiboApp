import React from 'react'
import '../assets/styles/components/Fibo.css'

const Fibo = ({ title }) => (
<section className="Fibo">
<h2>{title}</h2>
    <p>Digite el numero de la secuencia que quiera calcular</p>
    <input type="number" name="Position" id="position"></input>
    <input type="button" value="Calcular" id="calculate" onClick="fibonacci()"></input>
</section>
)

function fibonacci() {

    let pos = document.getElementById("position")
    let valor = parseInt(pos.value)


    .then(function (res) {
        resultado.innerHTML = res.data
    })

    .catch (function (error){
        console.log(error)
    })
}

let resultado = document.getElementById("resultado")
let calcular = document.getElementById("calcular")
calcular.addEventListener("click", fibonacci)


export default Fibo