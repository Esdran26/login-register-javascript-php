/* Función que utiliza Fetch API para recoger los datos de 
verifyEmail.php hace un bucle en el que los correos que estén
almacenados en la DB no se puedan registrar y mostrar mensajes 
de error en la etiqueta "small" con un callback que limpia el 
compo en concreto */

const inputSubmit = document.getElementById('inputSubmit');
const smallVerifyEmail = document.getElementById('smallEmail');

let verifyEmail = () => {
    fetch('../../Back-End/Register/verifyEmail.php')
    .then(res => {
        return res.text();
    })
    .then(data => {
        let dataJson = JSON.parse(data);
        dataJson.forEach(data => {
            const inputEmail = document.getElementById('inputEmail');
            inputEmail.addEventListener('keyup', () => {
                let inputEmailValue = inputEmail.value;
                if(inputEmailValue === data.us_email) {
                    smallVerifyInputEmail('Este correo ya ha sido utilizado', '#c0392b');
                    inputVerifySubmit(true);
                    setTimeout(() => {
                        smallVerifyEmail.innerText = `Puedes utilizar letras y números.`;
                        smallVerifyEmail.style.color = 'black';
                        inputSubmit.disabled = false;
                        inputEmail.value = '';
                    }, 1500);
                }
            });
        });
    })
    .catch(err => {
        console.log('Error: ',err);
    });
}
let smallVerifyInputEmail = (message, color) => {
    smallVerifyEmail.innerText = message;
    smallVerifyEmail.style.color = color;
}
let inputVerifySubmit = (boolean) => {
    inputSubmit.disabled = boolean;
}

//Call Arrow Function
document.addEventListener('DOMContentLoaded', verifyEmail);

/* Obtener los campos de contraseña y otro campo para verificar la contraseña
se muestran errores y se bloquea el botón de enviar si la contraseña es menor 
a 8 carácteres y si el campo de verificar contraseña no es igual al campo 
anterior */

const smallVerifyPassword = document.getElementById('smallPassword');
const inputPassword = document.getElementById('inputPassword');
const inputVerifyPassword = document.getElementById('inputVerifyPassword');

let inputPasswordValue = '',
    inputVerifyPasswordValue = '';

inputPassword.addEventListener('keyup', () => {
    inputPasswordValue = inputPassword.value;
    if(inputPasswordValue.length < 8) {
        smallVerifyInputPassword('La contraseña debe ser mayor a ocho carácteres.', '#c0392b');
        inputVerifySubmit(true);
    }
    else {
        smallVerifyPassword.innerText = `Puedes utilizar letras y números.`;
        smallVerifyPassword.style.color = 'black';
    }
});

inputVerifyPassword.addEventListener('keyup', () => {
    inputVerifyPasswordValue = inputVerifyPassword.value;
    if(inputVerifyPasswordValue != inputPasswordValue) {
        smallVerifyInputPassword('Las contraseñas no son iguales.', '#c0392b');
        inputVerifySubmit(true);
    }
    else if(inputVerifyPasswordValue === inputPasswordValue) {
        smallVerifyInputPassword('Utiliza ocho caracteres como mínimo con una combinación de letras y números.', 'black');
        inputVerifySubmit(false);
    }
    else {
        smallVerifyInputPassword('Lo siento, hubo un error interno, vuelve a cargar la página.', '#c0392b');
        inputVerifySubmit(true);
    }
});

let smallVerifyInputPassword = (message, color) => {
    smallVerifyPassword.innerText = message;
    smallVerifyPassword.style.color = color;
}

/* Seleccionar los dos íconos que al dar click en alguno
de ellos muestre el otro, creando una función que muestre
en los campos de tipo contraseña a tipo text y viceversa */

const eyeSlash = document.getElementById('eye-slash');
const eye = document.getElementById('eye');

eyeSlash.addEventListener('click', () => {
    eyeSlash.style.display = 'none';
    eye.style.display = 'block';

    inputPassword.type = 'text';
    inputVerifyPassword.type = 'text';
});

eye.addEventListener('click', () => {
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';

    inputPassword.type = 'password';
    inputVerifyPassword.type = 'password';
});