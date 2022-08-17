document.getElementById('btn-submit').addEventListener('click', function(){
    const userMail = document.getElementById('user-mail');
    const mail = userMail.value;
    const userPass = document.getElementById('user-pass');
    const pass = userPass.value;
    if(mail === 'sontan@bap.com' && pass === 'secret'){
        window.location.href = 'file:///Users/khaledmahmud/Documents/web-development/practice/module%2026-%20bank%20site/bank.html';
    }
    else{
        alert('Please input valid information!!');
    }
})
