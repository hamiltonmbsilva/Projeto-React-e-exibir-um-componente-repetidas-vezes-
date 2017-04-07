import React from 'react';

const Valores = (props) => <p> {props.nome}</p>;

Valores.propTypes = { nome: React.PropTypes.string.isRequired } ; export default Valores;


/*export default class Valores extends React.Component {
 render() {
 return <p> {this.props.nome}</p>;
 }
}
 
Valores.propTypes = {
 nome: React.PropTypes.string.isRequired
}*/

 
