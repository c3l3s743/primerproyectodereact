import { Component } from 'react'
import Boton from './Boton'

export default class Contador extends Component{
  constructor(props){
    super(props);
    this.state = { valor: 0}
  }
  restar() {
    this.setState({valor: this.state.valor - 1});
    // NO => this.state.valor =xxxx;
  }
  sumar() {
    this.setState({valor: this.state.valor + 1});
  }
  multiplicar2() {
    this.setState({valor: this.state.valor * 2});
  } 
  multiplicar3() {
    this.setState({valor: this.state.valor * 3});
  } 
  multiplicar4() {
    this.setState({valor: this.state.valor * 4});
  }
  multiplicar5() {
    this.setState({valor: this.state.valor * 5});
  }

  render(){
    return(
      <div className="Contador">
        <span className='Titulo'>{this.props.children}</span>
        <span className='Valor'>{this.state.valor}</span>
        <div className="Botonera">
          <Boton simbolo='-'
          accion={() => this.restar()}
          />
          <Boton simbolo='+'
          accion={() => this.sumar()}
          />
          <Boton simbolo='2x'
         accion={() => this.multiplicar2()}
         />
           <Boton simbolo='3x'
          accion={() => this.multiplicar3()}
          />
          <Boton simbolo='4x'
          accion={() => this.multiplicar4()}
          />
          <Boton simbolo='5x'
         accion={() => this.multiplicar5()}
         />
        </div>
      </div>
    )
  }
}