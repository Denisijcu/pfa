function onSettings() {

    let textToSearch = document.querySelector("#txt-search").value.toLowerCase().trim();

    const res = data.filter(item => item.name.toLowerCase().trim() === textToSearch);
    if (res.length === 0) {
        contenido = `${textToSearch} no found!`;
    } else {

        let layout = `
            <h3> Settings </h3>
            <div class="search-layout">
            <div class="row">
                <div class="col-3">
                    ${lyt_form}
                </div>
            <div class="col-9">
            <h3>Ingress and Bills</h3>
            <div style="background:white"><table id="bills"><th>Id</th><th>Name</th><th>Amount</th><th></th><th></th>`;

        let body = "";

        res.forEach(e => {
            body += `
                    <tr>
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.amount}</td>
                    <td><button onClick="editBill(${e.id})" class="btn btn-info">Edit</button></td>
                    <td><button onClick="deleteBill(${e.id})" class="btn btn-danger">Delete</button></td>
                    </tr>`;
        });

        layout += body + "</table></div></div></div> </div>";

        contenido = layout;


        return;
    }

}