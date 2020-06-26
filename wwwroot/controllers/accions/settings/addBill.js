function fnAddBill() {

    let name = document.querySelector("#name").value.trim();
    let amount = document.querySelector("#amount").value;
    let type = document.querySelector("#in").checked ? 'In' : 'Out';

    amount = parseInt(amount).toFixed(2);

    let id = data.length + 1;
    let newBill = {
        id,
        name,
        amount,
        date: '',
        status: 'No Paid',
        type
    };

    let msj = document.querySelector("#alert");

    if (amount === "NaN") {
        msj.classList.remove("alert-success");
        msj.classList.add("alert-danger");
        msj.textContent = "Error found in amount. Please try again.";
        setTimeout(() => {
            msj.textContent = "";
            msj.classList.remove("alert-danger");

        }, 2000);
        document.querySelector("#amount").value = 0.00;
        return
    } else if (amount === "0.00") {
        msj.textContent = "Amount Should be greater than Zero. Please try again.";
        msj.classList.remove("alert-success");
        msj.classList.add("alert-danger");
        setTimeout(() => {
            msj.textContent = "";
            msj.classList.remove("alert-danger");
        }, 2000);
        return
    }

    if (name === "") {
        msj.classList.remove("alert-success");
        msj.classList.add("alert-danger");
        msj.textContent = "Name should not be empty. Please try again.";
        setTimeout(() => {
            msj.textContent = "";
            msj.classList.remove("alert-danger");
        }, 2000);
        return
    } else {
        msj.classList.remove("alert-danger");
        msj.classList.add("alert-success");
        msj.textContent = "Saved Successfully.";
        setTimeout(() => {
            msj.textContent = "";
            msj.classList.remove("alert-success");
        }, 2000);
        activity = new Activity;
        activity.addItem(newBill);
        data.push(newBill);
        globalFunctionSetting();
        fnSettings();
        return
    }
}