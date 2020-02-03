//Arrow Function
let verifyEmail = () => {
    fetch('../../Back-End/Register/verifyEmail.php')
    .then(res => {
        return res.text();
    })
    .then(data => {
        let dataJson = JSON.parse(data);
        const inputEmail = document.getElementById('inputEmail');
        dataJson.forEach(data => {
            inputEmail.addEventListener('keyup', () => {
                let inputEmailValue = inputEmail.value;

                if(inputEmailValue.includes('@')) {
                    if(inputEmailValue.includes('.com')) {
                        if(inputEmailValue === data.us_email) {
                            smallVerifyEmail('Este correo ya ha sido utilizado', '#c0392b');
                            console.log(data.us_email);
                            inputVerifySubmit(true);
                        }
                        else {
                            smallVerifyEmail('Puedes utilizar letras y números.', 'black');
                            inputVerifySubmit(false);
                        }
                    }
                    else {
                        smallVerifyEmail('Correo Inválido', '#c0392b');
                        inputVerifySubmit(true);
                    }
                }
                else {
                    smallVerifyEmail('Correo Inválido', '#c0392b');
                    inputVerifySubmit(true);
                }
            });
        });
    })
    .catch(err => {
        console.log('Error: ',err);
    });
}
let smallVerifyEmail = (message, color) => {
    const smallVerifyEmail = document.getElementById('smallVerifyEmail');
    smallVerifyEmail.innerText = message;
    smallVerifyEmail.style.color = color;
}
let inputVerifySubmit = (boolean) => {
    const inputSubmit = document.getElementById('inputSubmit');
    inputSubmit.disabled = boolean;
}
//Call Arrow Function
verifyEmail();