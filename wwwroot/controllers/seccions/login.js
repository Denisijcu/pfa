document.querySelector("#nav-login").addEventListener('click', fnLogin, false);


function fnLogin() {

    document.querySelector("#nav-login").classList.replace('show', 'hide');

    let loginHtml = `
         ${login}
    `;

    content.innerHTML = loginHtml;
    seccion = 8;


    const fmLogin = document.querySelector("#frmLogin");
    fmLogin.addEventListener('click', fnLogin, true);

    function fnLogin() {

        let userName = document.querySelector("#uname").value;
        let password = document.querySelector("#lpsw").value;

        user = new User();
        let _userName = user.getUser(userName, password);
        setTimeout(() => {

            console.log('El usuario es', _userName);
            if (_userName !== '') {
                document.querySelector("#menu").classList.replace('hide', 'show');
                document.querySelector("#lytsearch").classList.replace('hide', 'show');
                document.querySelector("#nav-userName").textContent = userName;
                document.querySelector("#nav-logout").classList.replace('hide', 'show');
                fnHome();
            }


        }, 2000);





    }


    const fmRegister = document.querySelector("#fmR");
    fmRegister.addEventListener('click', loginRegister, true);

    function loginRegister() {
        console.log('Register Form works');
        let userName = document.querySelector("#email").value;
        if (userName === '') {
            return
        }
        let pass1 = document.querySelector("#psw").value;
        let pass2 = document.querySelector("#psw-repeat").value;
        if (pass1 === pass2) {
            document.querySelector("#menu").classList.replace('hide', 'show');
            document.querySelector("#lytsearch").classList.replace('hide', 'show');
            document.querySelector("#nav-userName").textContent = userName;
            document.querySelector("#nav-logout").classList.replace('hide', 'show');
            let newUser = {
                id: '1',
                userName: userName,
                password: pass1
            }
            user = new User();
            user.addUser(newUser);
            fnHome();
        }
    }
}