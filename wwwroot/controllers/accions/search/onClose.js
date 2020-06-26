function onClose() {

    let textToSearch = document.querySelector("#txt-search").value.toLowerCase().trim();

    console.log('Onclose works');

    const res = data.filter(item => item.name.toLowerCase().trim() === textToSearch);
    if (res.length === 0) {
        contenido = `${textToSearch} no found!`;
    } else {

        console.log('El status is', status);

        if (status === 'Close') {
            contenido = `<h3> The current month is already closed! </h3>`;
            return;
        }


        tbody = '';

        res.forEach(e => {
            if (e.status !== 'Paid' && e.type !== 'In') {
                tbody += `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.amount}</td><td id="${e.id}">${e.status}</td><td id="${e.name}"> <input   type="checkbox" class="pay" name="pay" value="paid" onclick="selectOne(${e.id})" /></td></tr>`;
            }
        });


        let layout = `
           
<div class="seccion"> 
        
<h3>Close Bills</h3>

<h1> ${now} </h1>

<table id="bills" class="table"> 
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
        <div style="margin-left:20px"></div>
    </div>
</div>
</div>

<div class="">
<div class="row">
    <div class="col-4">
        <div></div>
    </div>
    <div class="col-4">
        <div style="margin-left:20px"><button  id="btnClose" class = 'btn btn-success d-none' onclick="onMakePayment()"> Confirme </button>  </div>
    </div>
    <div class="col-4">
    <div></div>
</div>
</div>
</div>
</div>


           `;

        contenido = layout;


        return;
    }

}