/**  Accion Bills **/

const btnActivities = document.querySelector("#btn-activity");
btnActivities.addEventListener('click', fnActivities, false);


function fnActivities() {



    /* Variable to show bills in the Bills seccion */
    let html_table = '<div style="background:white"><table id="bills"><th>Id</th><th>Name</th><th>Amount</th><th>Status</th>';
    let html_body = '';

    data.forEach(e => {

        if (e.type !== 'In') {
            html_body += `
            <tr>
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.amount}</td>
                <td>${e.status}</td>
            </tr>`;
        }
    });
    html_table += html_body + "</table></div>";


    let totalBills = [];
    data.map(e => {
        if (e.type !== 'In') {
            totalBills.push(parseInt(e.amount))
        }
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = totalBills.reduce(reducer).toFixed(2);



    const bills = `

    <h3>Bills </h3>
    
    <div class="seccion">
      
    ${html_table}

    <h2>Total</h2>
    <h1><span style="font-size:14px; font-weight:bold; top: -20px; left: 0px; position: relative">  $  </span>  ${total} </h1>
    </div>
    `
    content.innerHTML = bills;

    seccion = 2;
}