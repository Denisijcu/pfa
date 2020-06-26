//activity = new Activity();
//activity.closeMonth();
//activity.configStatus();
//console.log(status);




/*
console.log("App running ...");

let item = {
    id: 0,
    name: '',
    amount: 0,
    datecreated: '',
    status: '',
    type: ''
};



var db = openDatabase('pfa', '1.0', 'Personal Finantial Activities', 2 * 1024 * 1024);
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS activities (id unique, name, amount, datecreated, status, type)');
    //tx.executeSql('Drop table activities');
});


function getAll() {

    let mydb = [];

    db.transaction(async function(d) {

        d.executeSql('Select * from activities', [], function(a, results) {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {

                item = {
                    id: results.rows.item(i).id,
                    name: results.rows.item(i).name,
                    amount: results.rows.item(i).amount,
                    datecreated: results.rows.item(i).datecreated,
                    status: results.rows.item(i).status,
                    type: results.rows.item(i).type
                }

                mydb.push(item);


            }

        });

        return mydb;

    });

    return mydb;
}

function getItem(id) {

    let mydb = [];

    db.transaction(async function(d) {

        d.executeSql('Select * from activities where id=?', [id], function(a, results) {
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {

                item = {
                    id: results.rows.item(i).id,
                    name: results.rows.item(i).name,
                    amount: results.rows.item(i).amount,
                    datecreated: results.rows.item(i).datecreated,
                    status: results.rows.item(i).status,
                    type: results.rows.item(i).type
                }

                mydb.push(item);


            }

        });

        return mydb;

    });

    return mydb;
}


function newItems() {

    id = 0;
    name = "";
    amount = 0;
    datecreated = "";
    status = "";
    type = "";

    db.transaction(async function(d) {

        //  d.executeSql('delete from activities');

        console.log(data);

        data.forEach(e => {
            id = e.id;
            name = e.name;
            amount = e.amount;
            datecreated = e.date;
            status = e.status;
            type = e.status;

            d.executeSql('INSERT INTO  activities (id,name, amount, datecreated, status, type) VALUES (?,?,?,?,?,?)', [id, name, amount, datecreated, status, type]);

        });



    });


}


function newItem(e) {

    db.transaction(async function(d) {

        d.executeSql('delete from activities');

        id = e.id;
        name = e.name;
        amount = e.amount;
        datecreated = e.date;
        status = e.status;
        type = e.status;

        d.executeSql('INSERT INTO  activities (id,name, amount, datecreated, status, type) VALUES (?,?,?,?,?,?)', [id, name, amount, datecreated, status, type]);

    });
}


function deleteItem(id) {


    db.transaction(function(d) {

        d.executeSql('delete from activities where id=?', [id]);

    });


}

function deleteAll() {

    db.transaction(function(d) {

        d.executeSql('delete from activities');

    });

}


function updateItem(id, i) {

    db.transaction(function(d) {

        d.executeSql('update activities set name = ?, amount =?, status = ?  where id=?', [i.name, i.amount, i.status, id]);

    });


}
*/