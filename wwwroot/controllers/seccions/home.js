/** Seccion Home **/
document.querySelector("#nav-home").addEventListener('click', fnHome, false);

function fnHome() {
    let home = ` <div class="mdScreen">
    <h1>Welcome to PFA</h1>

    <div class="seccion">
    
    <p>PFA App will help you to register your financial activities.</p>

    

    <p>Hope PFA App be usefull for you.</p>

    </div>
    </div>
    
    `;
    content.innerHTML = home;
    seccion = 5;
}