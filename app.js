let numeroAleatorio = null;
console.log(numeroAleatorio);
let intentos = null;
let listaNumeros = [];
let numeroMax=parseInt(prompt('Ingrese el número máximo a adivinar'));

const numeroSecreto = () => {
    let numero = parseInt(Math.floor(Math.random() * numeroMax)+1);
    if (listaNumeros.includes(numero)){
        return numeroSecreto();
    }else{
        listaNumeros.push(numero);
        return numero;
    }
    // return Math.floor(Math.random() * 10)+1;
}

const asignarTextoElemento = (elemento, texto) => {
    document.querySelector(elemento).textContent = texto;
}

const limpiarCaja = () => {
    document.getElementById('valorUsuario').value = '';
    // document.querySelector('#valorUsuario').value = '';
    document.querySelector('#valorUsuario').focus();
}

const verificarIntento = () => {
    let intento = parseInt(document.getElementById('valorUsuario').value);
    if (intento === numeroAleatorio){ 
        asignarTextoElemento('h1', '¡GANASTE!');
        asignarTextoElemento('p', `Número de intentos: ${intentos} ${(intentos==1)?'vez':'veces'}.`)     
        document.getElementById('intentar').setAttribute('disabled', true);
        document.getElementById('valorUsuario').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (isNaN(intento)){
        asignarTextoElemento('p', 'Debes ingresar un número');
        limpiarCaja();
    }
    else{ 
        (intento > numeroAleatorio) 
        ? asignarTextoElemento('p', 'El número secreto es menor') 
        : asignarTextoElemento('p', 'El número secreto es mayor');    
        intentos++;
        limpiarCaja();
    }
}

const condicionesIniciales = () => {
    limpiarCaja();
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMax}`);
    numeroAleatorio = numeroSecreto();
    console.log(numeroAleatorio);
    intentos = 1;
}

const reiniciarJuego = () => {
    //limpiar caja
    //Indicar el número máximo a adivinar
    //Generar el número aleatorio
    //Inicializar el número de intentos
    //Deshablitar el boton reiniciar
    if (listaNumeros.length === numeroMax){
        if(confirm('¿Desea aumentar el número máximo a adivinar?')){
            numeroMax = parseInt(prompt('Ingrese el nuevo número máximo a adivinar'));
        }else{
            numeroMax = 10;
        }
        listaNumeros = [];
    }
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('valorUsuario').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    condicionesIniciales();
}
condicionesIniciales();
