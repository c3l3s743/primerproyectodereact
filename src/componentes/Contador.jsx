import { Component } from 'react'
import Boton from './Boton';

export default class Contador extends Component{
constructor(props){
  super(props);
  this.state = {valor : 1}
}
restar(){
  this.setState({valor: this.state.valor -1})
}
sumar(){
 this.setState({valor: this.state.valor +1})
}
multiplicar(){
  this.setState({valor: this.state.valor *2})
}
dividir(){
  this.setState({valor: this.state.valor /2})
}

render() {
  return(
    <div className='Contador'>
      <span className='Titulo'>{this.props.children}</span>
      <span className='Valor'>{this.state.valor}</span>
       <div className='Botonera'>
        <Boton simbolo='-'
        accion={()=> this.restar()}/>
        <Boton simbolo='+'
        accion={()=> this.sumar()} />
        <Boton simbolo='x2'
        accion={()=> this.multiplicar()} />
        <Boton simbolo='/2'
        accion={()=> this.dividir()} />
        <Boton simbolo='x'
        accion={()=> this.eliminar()}/>

       </div>
    </div>
  )
}
}
 
