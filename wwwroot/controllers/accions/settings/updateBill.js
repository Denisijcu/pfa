function fnUpdateBill() {

    let item = {
        id: idEdit,
        name: document.querySelector("#name").value,
        amount: document.querySelector("#amount").value
    }

    let idx = data.findIndex(x => x.id === idEdit);

    console.log("temp", data);
    console.log("Indx", idx);

    data[idx].amount = item.amount;
    data[idx].name = item.name;

    activity.updateItem(item.id, item);

    let msj = document.querySelector("#alert");
    msj.textContent = "Update Successfully.";

    globalFunctionSetting();
    fnSettings();

    idEdit = 0;


}