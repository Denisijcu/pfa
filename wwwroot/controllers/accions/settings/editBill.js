function editBill(id) {

    console.log("Edit function works", id);

    const arr = data.filter(e => e.id === id);



    idEdit = arr[0].id;

    console.log("arrEdit", idEdit);



    document.querySelector("#idTitle").textContent = "Edit";
    document.querySelector("#name").value = arr[0].name;
    document.querySelector("#amount").value = arr[0].amount;
    document.querySelector("#btnAdd").classList.replace("show", "hide");
    document.querySelector("#btnUpdate").classList.replace("hide", "show");


}