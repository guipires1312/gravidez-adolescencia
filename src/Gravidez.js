import React from 'react';
import gravidez1 from './img/gravidez-1.png';

export class Gravidez extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            image: gravidez1, 
            text1: "A gravidez na adolescência é considerada a que ocorre entre os 10 e 20 anos, de acordo com a Organização Mundial de Saúde (OMS).",
            text2: "7,3 milhões de adolescentes se tornam mães a cada ano ao redor do mundo, das quais 2 milhões são menores de 15 anos;",
            text3: "No ano de 2010 um relatório divulgado por um órgão ligado à ONU indica que 12% das adolescentes entre 15 e 19 anos tinham pelo menos um filho;"     
        };
    }

    render() {
        return (
            <div className="App">
              <header className="App-header"></header>
              <body>
                <h1>Gravidez na adolescência</h1>
                <div id="buttons"> 
                  <button className="ButtonPrincipal">O que é?</button>
                  <button className="ButtonPrincipal">Consequências e riscos</button>
                  <button className="ButtonPrincipal">Principais fatores</button>
                  <button className="ButtonPrincipal">Como evitar</button>
                </div>
                <div>
                  <img src={this.state.image}/>
                </div>
                <div>
                  <p>{this.state.text1}</p>
                  <p>{this.state.text2}</p>
                  <p>{this.state.text3}</p>
                </div>
              </body>
            </div>
          );
    }
}