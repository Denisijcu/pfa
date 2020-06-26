const btnPayment = document.querySelector("#btn-payment");
btnPayment.addEventListener('click', fnPayment, false);

let chk = false;

function fnPayment() {

    content.innerHTML = "<div> <img src='../../public/spinner.gif' /> </div>";
    content.classList.add('bg-white');


    setTimeout(() => {

        let date = new Date();

        let now = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() //date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();

        let tbody = '';

        data.forEach(e => {

            if (e.status !== 'Paid') {
                tbody += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.amount}</td><td id="${e.id}">${e.status}</td><td class="pagar"> <input type="checkbox" class="pay" name="pay" value="paid" onclick="onPay(${e.id})" /></td></tr>`;
            }
        });

        content.innerHTML = `<div class="seccion"> 
        
        <h3>PAYMENT</h3>

        <h1> ${now} </h1>

        <table id="bills"> 
          <th>Id</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Statuts</th>
          <th>Pay </th>
          ${tbody}
        </table>
        <br>

        <div class="">
        <div class="row">
            <div class="col-10">
                <div></div>
            </div>
            <div class="col-2">
                <div style="margin-left:20px"><button class = 'btn btn-info' onclick="onPayAll()"> Select All </button>  </div>
            </div>
        </div>
        </div>

        <div class="">
        <div class="row">
            <div class="col-4">
                <div></div>
            </div>
            <div class="col-4">
                <div style="margin-left:20px"><button class = 'btn btn-success' onclick="onMakePayment()"> Make the Payment </button>  </div>
            </div>
            <div class="col-4">
            <div></div>
        </div>
        </div>
        </div>
        </div>`;

    }, 600);

    console.log("Payment function works");
}

function onPay(id) {

    chk = document.getElementById(`${id}`).textContent === 'No Paid' ? false : true;
    let idx = '';

    if (!chk) {
        idx = data.findIndex(x => x.id === id);
        data[idx].status = "Paid";
        document.getElementById(`${id}`).innerHTML = "Paid";
        chk = true;
    } else {
        idx = data.findIndex(x => x.id === id);
        data[idx].status = "No Paid";
        document.getElementById(`${id}`).innerHTML = "No Paid";
        chk = false;
    }
}

function onPayAll() {

    content.innerHTML = "<div> <img src='../../public/spinner.gif' /> </div>";
    setTimeout(() => {
        let date = new Date();
        let now = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        let tbody = '';
        data.forEach(e => {

            tbody += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.amount}</td><td id="${e.id}">Paid</td><td><input type="checkbox" checked class="pay" name="pay" value="paid" onclick="onPay(${e.id})" /></td></tr>`;
        });

        content.innerHTML = `<div class="seccion"> 
        
        <h3>PAYMENT</h3>
        <h1> ${now} </h1>
        <table id="bills"> 
          <th>Id</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Statuts</th>
          <th>Pay </th>
          ${tbody}
        </table>
        <br>
        <div class="">
        <div class="row">
            <div class="col-10">
                <div></div>
            </div>
            <div class="col-2">
                <div style="margin-left:20px"><button class = 'btn btn-info' onclick="onPayAllUndo()"> Unselect all </button> </div>
            </div>
        </div>
        </div>
        <div class="">
        <div class="row">
            <div class="col-4">
                <div></div>
            </div>
            <div class="col-4">
                <div style="margin-left:20px"><button class = 'btn btn-success' onclick="onMakePayment()"> Make the Payment </button>  </div>
            </div>
            <div class="col-4">
            <div></div>
        </div>
        </div>
        </div>
        </div>`;
    }, 200);

    for (let i = 0; i < data.length; i++) {
        data[i].status = "Paid";
        chk = true;
    }
}

function onPayAllUndo() {
    content.innerHTML = "<div> <img src='../../public/spinner.gif' /> </div>";
    setTimeout(() => {

        let date = new Date();
        let now = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
        let tbody = '';
        data.forEach(e => {
            tbody += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.amount}</td><td id="${e.id}">No Paid</td><td class="pagar"> <input type="checkbox"  class="pay" name="pay" value="paid" onclick="onPay(${e.id})" /></td></tr>`;
        });

        content.innerHTML = `<div class="seccion"> 
                <h3>PAYMENT</h3>
                <h1> ${now} </h1>
                <table id="bills"> 
                <th>Id</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Statuts</th>
                <th>Pay </th>
                ${tbody}
                </table>
                <br>
                <div class="">
                <div class="row">
                    <div class="col-10">
                        <div></div>
                    </div>
                    <div class="col-2">
                        <div style="margin-left:20px"><button class = 'btn btn-info' onclick="onPayAll()"> Select all </button> </div>
                    </div>
                </div>
                </div>
                <div class="">
                <div class="row">
                    <div class="col-4">
                        <div></div>
                    </div>
                    <div class="col-4">
                        <div style="margin-left:20px"><button class = 'btn btn-success' onclick="onMakePayment()"> Make the Payment </button>  </div>
                    </div>
                    <div class="col-4">
                    <div></div>
                </div>
                </div>
                </div>
                </div>`;
    }, 200);

    for (let i = 0; i < data.length; i++) {
        data[i].status = "No Paid";
    }
}


function onMakePayment() {
    console.log("Payment Done");
    console.log(data);
    fnPayment();


}