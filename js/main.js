/* Holiii acá va tu código también */
const inputMail = document.getElementById('mail').value;
const inputPass = document.getElementById('password').value;
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
    if(inputPass.length > 8){
    console.log('correcto')
    }else{
    console.log('incorrecto')
  }
})
