import './Calculadora.scss';
import React from 'react';
import { useState } from 'react';

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
            <div className="input">
                <input type="text" className='numero_binario' placeholder='Número Binário'
                /*onChange={e} value={numberBin}*/ />

                <input type="text" className='numero_decimal' placeholder='Número Decimal' 
                 /*value={numberDec}*/ />
            </div>
        </div>
    );
}

export default Conversor;