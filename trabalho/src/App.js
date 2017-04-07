import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

import Valores from './valores';

class App extends Component {

  
  render() {
    console.log("render"); 
    const nomes = ["Lucas", "Tableless", "Leitor", "Maria", "João", "Ana"];  
    return (
      <div id="layout">
          
          <a href="#menu" id="menuLink" className="menu-link">
              
              <span></span>
          </a>

          <div id="menu">
              <div className="pure-menu">
                  <a className="pure-menu-heading" href="#">Clientes</a>

                  <ul className="pure-menu-list">
                      <li className="pure-menu-item"><a href="#" className="pure-menu-link">Clientes</a></li>
                      
                     

                      
                  </ul>
              </div>
          </div>
                

              <div id="main">
                  <div className="header">
                    <h1>Cadastro de Clientes</h1>
                  </div>
                  <div className="content" id="content">
                    <div className="pure-form pure-form-aligned">
        
                     
                    <div>
                        <ul>
                         {nomes.map((n, i) =><li> <Valores nome={n} key={i}/></li>)}
    
                        </ul>
                    </div>
        

                    </div>  
                            
                  </div>
                </div>            


      </div>     
    );
  }
}

export default App;
