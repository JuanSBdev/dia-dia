import React from 'react'

export default function validate(input) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPass =new RegExp('[0-9]');
    const error = {}
  
    if(!input.email){
        error.email = "agrega un email"
    }
    if(!input.email.length > 35){
        error.email = 'mayor a 35 caracteres'
    }  
    if(!input.password){
        error.password = 'Ingrrese un pass'
    }
    if(!regexPass.test(input.password)){
        error.password = 'almenos un numero'
    }
    return error;

}
