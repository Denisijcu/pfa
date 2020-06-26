function onBills() {
    let textToSearch = document.querySelector("#txt-search").value.toLowerCase().trim();
    const resultado = data.filter(item => item.name.toLowerCase().trim() === textToSearch);
    if (resultado.length === 0) {
        contenido = `${textToSearch} no found!`;
    } else {

        let html_table = '<div style="background:white"><table id="bills"><th>Id</th><th>Name</th><th>Date</th><th>Amount</th><th>Status</th>';
        let html_body = '';

        resultado.forEach(e => {

            html_body += `
               <tr>
               <td>${e.id}</td>
               <td>${e.name}</td>
               <td>${e.date}</td>
               <td>${e.amount}</td>
               <td>${e.status}</td>
               </tr>`;
        });

        html_table += html_body + "</table></div>";
        contenido = "<h3>Bills</h3>" + html_table;
    }
}