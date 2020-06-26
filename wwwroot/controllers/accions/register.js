/**  Accion Register  **/

const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener('click', fnRegister, false);

function fnRegister() {


    console.log(history.length);

    if (history.length === 0) {
        return;
    }
    /* Variable to show bills in the Bills seccion */
    let html_table = '<div style="background:white"><table id="bills"><th>Id</th><th>Name</th><th>Date</th><th>Amount</th><th>Status</th>';
    let html_body = '';

    history.forEach(e => {

        if (e.type !== 'In') {
            html_body += `
              <tr>
                  <td>${e.id}</td>
                  <td>${e.name}</td>
                  <td>${e.datecreated.substr(0,15)}</td>
                  <td>${e.amount}</td>
                  <td>${e.status}</td>
              </tr>`;
        }
    });
    html_table += html_body + "</table></div>";


    let totalBills = [];
    history.map(e => {
        if (e.type !== 'In') {
            totalBills.push(parseInt(e.amount))
        }
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = totalBills.reduce(reducer).toFixed(2);



    let html = `
      <h3> Register </h3>
      <div class="seccion">
          <div class="row">
              <div class="col-2">
                  ${lyt_filter}
              </div>
          </div>   
          <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <h1>Bills </h1>  
                ${html_table}
                <h2>Total</h2>
                <h1 id="total"> <span style="font-size:14px; font-weight:bold; top: -20px; left: 0px; position: relative">  $  </span>  ${total} </h1>
              </div>
          <div class="col-1"></div>
      </div>
    `;

    content.innerHTML = html;

    seccion = 3;

    const btnOk = document.querySelector("#btnOK");
    btnOk.addEventListener('click', fnBtnOK, true);

    function fnBtnOK() {

        // const _month = month === 'Jan' ? 1 : month === 'Feb' ? 2 : month === 'Mar' ? 3 : month === 'Apr' ? 4 : month === 'May' ? 5 : month === 'Jun' ? 6 : month === 'Jul' ? 7 : month === 'Aug' ? 8 : month === 'Sep' ? 9 : month === 'Oct' ? 10 : month === 'Nov' ? 11 : month === 'Dic' ? 12 : 0
        async function go() {
            const month = document.querySelector("#month").value;
            const year = parseInt(document.querySelector("#year").value);
            _history = new History();
            const h_data = await _history.getItem(month, year);
        }
        go();
        setTimeout(() => {

            console.log(history);


            let f_html_table = '<table id="bills"><th>Id</th><th>Name</th><th>Date</th><th>Amount</th><th>Status</th>';
            let f_html_body = '';

            history.forEach(e => {
                if (e.type !== 'In') {
                    f_html_body += `
                      <tr>
                          <td>${e.id}</td>
                          <td>${e.name}</td>
                          <td>${e.datecreated.substr(0,15)}</td>
                          <td>${e.amount}</td>
                          <td>${e.status}</td>
                      </tr>`;
                }
            });

            f_html_table += f_html_body + "</table>";

            let totalBills = [];
            history.map(e => {
                if (e.type !== 'In') {
                    totalBills.push(parseInt(e.amount))
                }
            });
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            console.log(history.length);
            let total = 0;
            if (history.length !== 0) {
                total = totalBills.reduce(reducer).toFixed(2);
            }

            document.querySelector("#total").textContent = total;


            document.querySelector('#bills').innerHTML = f_html_table;




        }, 2000);

    }

}