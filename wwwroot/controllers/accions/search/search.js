const btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener('click', fnSearch, false);


function fnSearch() {

    let textToSearch = document.querySelector("#txt-search").value.toLowerCase().trim();
    if (textToSearch === "") {
        fnDashboard();
        return;
    }

    console.log(seccion);


    contenido = "";

    switch (seccion) {
        case 1:
            fnDashboard();
            break;
        case 2:
            onBills();
            break;
        case 3:
            onClose();
            break;
        case 4:
            onSettings();
            break;
        default:
            fnDashboard();
            break;
    }
    content.innerHTML = contenido;
}