const lyt_addItem = `
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
            <div class="form-group">
            <p>Type</p>
            <input type="radio" id="in" name="type" value="in">
            <label for="male">In</label>
            <input type="radio" id="out" name="type" checked value="out">
            <label for="out">Out</label>
            </div>
            <hr>
            <button type = "button" id="btnAdd"    class="btn btn-success show"> Save </button>
            <button type = "button" id="btnUpdate" class="btn btn-success hide"> Update </button>
            <br>
            <div style="font-size='10px';"id = "alert" class="alert"  role="alert"></div>
        </form>
       
        <em>Use Int type for Income.</em>
        <br>
        <em>Use Out type for Bills and Debts. This type is selected by default.</em>
`;