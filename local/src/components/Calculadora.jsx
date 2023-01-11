import './Calculadora.scss';

import React from 'react';
import { useState } from 'react';

import botao from '../img/Converter.jpg'
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';

function Conversor() {
    const [numberBin, setNumberBin] = useState('');
    const [numberDec, setNumberDec] = useState('');

    const converterNumberBin = () => {
        let binArray = Array.from(numberBin);
        let binNumberArray = [];
        let sum = 0;

        for (let i = 0; i < binArray.length; i++) {
            binNumberArray.push(parseInt(binArray[i]));
        }

        

        for (let j = binNumberArray.length - 1; j >= 0; j--) {
            sum += (binNumberArray[j] * Math.pow(2, j))
        }

        setNumberDec(sum);
    } 

    const verifyInputNumber = (value) => {
        const splittedNumbers = value.split('');

        let isValid = true;

        splittedNumbers.forEach(element => {
            if (Number(element) !== 0 && Number(element) !== 1) {
                isValid = false;
            }
        })

        console.log(isValid)
        return isValid
    }

    return(
        <div className="conversor">
            
                <h1> Conversor </h1>
                <h2> Binário <span>para</span> Decimal </h2>
                <input type="text" className='numero_binario' placeholder='Número Binário'
                onChange={(e) =>  { verifyInputNumber(e.target.value) && setNumberBin(e.target.value) }} 
                value={numberBin}/>

                <input type="text" className='numero_decimal' placeholder='Número Decimal' 
                 value={numberDec} />

                <img src={botao} onClick={converterNumberBin} alt="img_button" className='img_button' />   

                <footer class="rodape">
                    <p>Conversor em React</p>
                    <span>Desenvolvido por Marcos Castro</span>
                    <div class="rodape-media">
                    <a href="https://github.com/MarcosCast"><img src={Linkedin} alt="github"/></a>
                    
                    <a href="https://www.linkedin.com/in/marcos--castro/"><img src={Github} alt="linkedin"/></a>
                    </div>
                </footer>           
        </div>
    );
}

export default Conversor;