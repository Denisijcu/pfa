const btnCloseBills = document.querySelector("#btn-closebill");
btnCloseBills.addEventListener('click', fnCloseBills, false);

class CloseBills {
    constructor() {
        this.output = lyt_closebill;
    }

    selectOne(id) {
        document.getElementById(`${id}`).innerHTML = "Paid";
        let idx = data.findIndex(x => x.id === id);
        data[idx].status = "Paid";
        document.getElementById("btnClose").classList.remove("d-none");
    }
    unSelectOne(id) {
        console.log(id);
        document.getElementById(`${id}`).innerHTML = "No Paid";
        let idx = data.findIndex(x => x.id === id);
        data[idx].status = "No Paid";
    }

    selectAll() {
        console.log("Select All classe");

        data.forEach(e => {
            if (e.type === 'Out') {
                document.getElementById(`${e.id}`).innerHTML = 'Paid';
                document.getElementById(`${e.name}`).innerHTML = `<input   type="checkbox" checked  onclick="selectOne(${e.id})"/>`;
                console.log(data);
            }
        });

        document.querySelector("#btnSelectAll").textContent = "Unselect All";
        for (let i = 0; i < data.length; i++) {
            data[i].status = "Paid";
            data[i].datecreated = now;
        }

        document.getElementById("btnClose").classList.remove("d-none");
    }
    unSelectAll() {
        console.log("Select All classe");
        data.forEach(e => {
            document.getElementById(`${e.id}`).innerHTML = 'No Paid';
            document.getElementById(`${e.name}`).innerHTML = `<input   type="checkbox"   onclick="selectOne(${e.id})"/>`;
        });
        document.querySelector("#btnSelectAll").textContent = "Select All";
        for (let i = 0; i < data.length; i++) {
            data[i].status = "No Paid";
        }
    }

    html() {
        return this.output;
    }
}


function fnCloseBills() {

    seccion = 3;

    content.innerHTML = "<div> <img src='../../public/spinner.gif' /> </div>";
    content.classList.add('bg-white');
    let tbody = `
    <th>Id</th>
    <th>Description</th>
    <th>Amount</th>
    <th>Statuts</th>
    <th>Pay </th>
    `;
    data.forEach(e => {
        if (e.status !== 'Paid' && e.type !== 'In') {
            tbody += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.amount}</td><td id="${e.id}">${e.status}</td><td id="${e.name}"> <input   type="checkbox" class="pay" name="pay" value="paid" onclick="selectOne(${e.id})" /></td></tr>`;
        }
    });


    setTimeout(() => {

        let date = new Date();
        let m_state = month === date.getMonth() + 1 ? true : false;

        if (m_state && status === 'Close') {
            content.innerHTML = "<h3> The current month is closed !!! </h3>";
            return
        } else {
            activity.openMonth();
        }

        if (data.length === 0) {
            content.innerHTML = "<h3> No Bills to Show !!! </h3>";
            return
        }


        let _status = data.filter(p => p.status !== 'Paid');
        if (_status.length === 0) {
            content.innerHTML = "<h3> Bills Closed </h3>";
            return
        }


        closebills = new CloseBills();
        content.innerHTML = closebills.html();
        document.querySelector(".table").innerHTML = tbody;

    }, 300);

}


function selectOne(id) {
    closebills = new CloseBills();
    document.getElementById(`${id}`).textContent === 'Paid' ? closebills.unSelectOne(id) : closebills.selectOne(id);
}

function selectAll() {

    closebills = new CloseBills();
    document.querySelector("#btnSelectAll").textContent === "Select All" ? closebills.selectAll() : closebills.unSelectAll();
}


function onMakePayment() {

    let _bills = data.filter(f => f.status === 'Paid');

    let closeAll = _bills.length !== 0 ? true : false;


    if (closeAll) {
        activity = new Activity();
        activity.deleteItems();
        activity.addItems();
        activity.getCloseBills();
        fnCloseBills();
    } else {
        console.log("There bill pending to pay");
    }
}