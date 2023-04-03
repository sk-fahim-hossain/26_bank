document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passlField = document.getElementById('user-password');
    const password = passlField.value;

    if(email === 'hello@gmail.com' && password === 'secret'){
       window.location.href = 'bank.html';
    }else{
        console.log('invalid user')
    }
})