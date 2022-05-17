import React from 'react';
import gravidez1 from './img/gravidez-1.png';
import gravidez2 from './img/gravidez-2.png';
import gravidez3 from './img/gravidez-3.png';
import gravidez4 from './img/gravidez-4.png';

const content = {
  1: {
    image: gravidez1, 
    text1: "A gravidez na adolescência é considerada a que ocorre entre os 10 e 20 anos, de acordo com a Organização Mundial de Saúde (OMS).",
    text2: "7,3 milhões de adolescentes se tornam mães a cada ano ao redor do mundo, das quais 2 milhões são menores de 15 anos;",
    text3: "No ano de 2010 um relatório divulgado por um órgão ligado à ONU indica que 12% das adolescentes entre 15 e 19 anos tinham pelo menos um filho;"     
  },
  2: {
    image: gravidez2, 
    text1: "A gravidez na adolescência é considerada a que ocorre entre os 10 e 20 anos, de acordo com a Organização Mundial de Saúde (OMS).",
    text2: "7,3 milhões de adolescentes se tornam mães a cada ano ao redor do mundo, das quais 2 milhões são menores de 15 anos;",
    text3: "No ano de 2010 um relatório divulgado por um órgão ligado à ONU indica que 12% das adolescentes entre 15 e 19 anos tinham pelo menos um filho;"     
  },
  3: {
    image: gravidez3, 
    text1: "A gravidez na adolescência é considerada a que ocorre entre os 10 e 20 anos, de acordo com a Organização Mundial de Saúde (OMS).",
    text2: "7,3 milhões de adolescentes se tornam mães a cada ano ao redor do mundo, das quais 2 milhões são menores de 15 anos;",
    text3: "No ano de 2010 um relatório divulgado por um órgão ligado à ONU indica que 12% das adolescentes entre 15 e 19 anos tinham pelo menos um filho;"     
  },
  4: {
    image: gravidez4, 
    text1: "A gravidez na adolescência é considerada a que ocorre entre os 10 e 20 anos, de acordo com a Organização Mundial de Saúde (OMS).",
    text2: "7,3 milhões de adolescentes se tornam mães a cada ano ao redor do mundo, das quais 2 milhões são menores de 15 anos;",
    text3: "No ano de 2010 um relatório divulgado por um órgão ligado à ONU indica que 12% das adolescentes entre 15 e 19 anos tinham pelo menos um filho;"     
  }
};

export class Gravidez extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state=content[1]; 
    }

    changeContent(contentId) {
      this.setState(content[contentId]);
    }

    render() {
        return (
            <div className="App">
                <h1>Gravidez na adolescência</h1>
                <div id="buttons"> 
                  <button id="button1" className="ButtonPrincipal" onClick={() => this.changeContent(1)}>O que é?</button>
                  <button id="button2" className="ButtonPrincipal" onClick={() => this.changeContent(2)}>Consequências e riscos</button>
                  <button id="button3" className="ButtonPrincipal" onClick={() => this.changeContent(3)}>Principais fatores</button>
                  <button id="button4" className="ButtonPrincipal" onClick={() => this.changeContent(4)}>Como evitar</button>
                </div>
                <div className="ImageContainer">
                  <img src={this.state.image}/>
                </div>
                <div>
                  <p>{this.state.text1}</p>
                  <p>{this.state.text2}</p>
                  <p>{this.state.text3}</p>
                </div>
            </div>
          );
    }
}