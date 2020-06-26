let date = new Date();
let now = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
//let tbody = '';

const lyt_closebill = `

<div class="seccion"> 
        
        <h3>Close Bills</h3>

        <h1> ${now} </h1>

        <table id="bills" class="table"> 
          <th>Id</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Statuts</th>
          <th>Pay </th>
        </table>
        <br>

        <div class="">
        <div class="row">
            <div class="col-10">
                <div></div>
            </div>
            <div class="col-2">
                <div style="margin-left:20px"><button  id="btnSelectAll" class = 'btn btn-info' onclick="selectAll()">Select All</button>  </div>
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