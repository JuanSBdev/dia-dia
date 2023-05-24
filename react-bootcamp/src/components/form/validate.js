import React from 'react'

export default function validate(input) {
        let regexMail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        const regexPass = new RegExp('[0-9]');
    const error = {}
  
    if(!input.email){
        error.email = "agrega un email"
    }
    if(!regexMail.test(input.email)){
        error.email = "agrega un email válido"
    }
    if(!input.email.length > 35){
        error.email = 'mayor a 35 caracteres'
    }
    if(regexMail.test(input.email)){
        error.email = "prueba con ejemplo@gmail.com "
    }
    if(!input.password){
        error.password = 'Ingrrese un pass'
    }
    if(input.password.length <= 3 ){
        error.password = 'Ingrrese un pass válido'
    }
    if(!regexPass.test(input.password)){
        error.password = 'almenos un numero'
    }
    if(regexPass.test(input.password) &&  input.password.length > 3){
        error.password = 'Intenta con 123'
    }
    return error;

}
