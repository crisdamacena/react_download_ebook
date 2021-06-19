import { Fragment } from 'react';
import './assets/css/style.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@material-ui/core';
import { validaCPF } from './models/validaCPF';
import { validaNome } from './models/validaNome';
import { validaEmail } from './models/validaEmail';


function App() {
  return (
    <Fragment>
        <header >
            <div className="row">
                <div className="column book">
                </div>
                <div className="column form">
                  <h1 className="titulo">Download Gratuito!</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim su </h2>
                  <Container maxWidth="sm">
                    <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF} validaNome={validaNome} validaEmail={validaEmail}/>
                  </Container>
                </div>
            </div>
        </header>     
    </Fragment>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
