import './Calculadora.scss';
import React from 'react';
import { useState } from 'react';

function Conversor() {
    return(
        <div className="conversor">
            <div className="input">
                <input type="text" className='numero_binario' placeholder='Número Binário'
                 />

                <input type="text" className='numero_decimal' placeholder='Número Decimal' 
                  />
            </div>
        </div>
    );
}

export default Conversor;