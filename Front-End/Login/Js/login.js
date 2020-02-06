/*  */
const inputSubmit = document.getElementById('inputSubmit');
inputSubmit.disabled = true;
const labelEmail = document.getElementById('labelEmail');
const smallVerifyUser = document.getElementById('smallVerifyUser');

let inputEmailValue = '',
    inputPasswordValue = '';

let verifyUser = () => {
    fetch('../../Back-End/Login/verifyUser.php')
    .then(res => {
        return res.text();
    })
    .then(data => {
        let dataJson = JSON.parse(data);
        dataJson.forEach(data => {
            const inputEmail = document.getElementById('inputEmail');
            const inputPassword = document.getElementById('inputPassword');
            inputEmail.addEventListener('keyup', () => {
                inputEmailValue = inputEmail.value;
                if(inputEmailValue === data.us_email) {
                    inputPassword.addEventListener('keyup', () => {
                        inputPasswordValue = inputPassword.value;
                        if(inputPasswordValue === data.us_password) {
                            removeSmall();
                            inputVerifySubmit(false);
                        }
                        else {
                            showSmall();
                            inputVerifySubmit(true);
                        }
                    });
                }
            });
        });
    })
    .catch(err => {
        console.log(err);
    });
}
//Call Arrow Function
document.addEventListener('DOMContentLoaded', verifyUser);

let labelVerifyInputEmail = (message, color) => {
    labelEmail.innerText = message;
    labelEmail.style.color = color;
}
let inputVerifySubmit = (boolean) => {
    inputSubmit.disabled = boolean;
}
let removeSmall = () => {
    smallVerifyUser.style.display = 'none';
}
let showSmall = () => {
    smallVerifyUser.style.display = 'flex';
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