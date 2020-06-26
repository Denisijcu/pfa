const lyt_form = `
<h3 id="idTitle">Add New </h3>
<form>
    <div class="form-group">
        <label for = "setName"> Name </label>
        <input class="form-control" type="text" id="name" placeholder ="Name" >
    </div>
    <div class="form-group">
        <label for = "setAmount"> Amount </label>
        <input id="amount" class="form-control" type="number" />
    </div>
    <button type = "button" id="btnAdd"    class="btn btn-success hide"> Save </button>
    <button type = "button" onClick="fnUpdateBill()" id="btnUpdate" class="btn btn-success show"> Update </button>
    <br>
    <div id = "alert" class="alert"  role="alert"></div>
</form>

`;