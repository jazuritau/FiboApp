import React from 'react'
import '../assets/styles/components/Fibo.css'
import axios from 'axios'

class Fibo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {resut: '', title: ''};
  
      // Este enlace es necesario para hacer que `this` funcione en el callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    async handleClick() {
        let pos = document.getElementById("position")
        let number = parseInt(pos.value)
        try {
            let result = await axios.get(`http://localhost:3001/api/v1/fibo/${number}`)
            this.setState(state => ({
            result: result.data,
          
          }))            
        } catch (error) {
            console.log(error)
        }
    
    }
  
    render() {
      return (
            <section className="Fibo">
                <h2>{this.state.title}</h2>
                <p>Digite el número de la secuencia que quiera calcular</p>
                <input type="number" name="Position" id="position"></input>
                <input className="Button" type="button" value="Calcular" id="calculate" onClick={this.handleClick} ></input>
                <p className="Font" id="resultado">{this.state.result}</p>
            </section>
      )
    }
  }

export default Fibo
