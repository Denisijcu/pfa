var db = openDatabase('pfa', '1.0', 'Personal Finantial Activities', 2 * 1024 * 1024);
db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS activities (id unique, name, amount, datecreated, status, type)');
    // tx.executeSql('Drop table activities');
});

db.transaction(function(th) {
    th.executeSql('CREATE TABLE IF NOT EXISTS history (id, name, amount, datecreated, status, type)');
    //th.executeSql('Drop table history');
});

db.transaction(function(tc) {
    tc.executeSql('CREATE TABLE IF NOT EXISTS config (id unique, userName, date, month, status)');
    //tc.executeSql('Drop table config');
    let date = new Date();
    tc.executeSql('INSERT INTO  config (id,UserName, date, month, status) VALUES (?,?,?,?,?)', [1, '', Date(), date.getMonth() + 1, 'Open']);
});
db.transaction(function(tu) {
    tu.executeSql('CREATE TABLE IF NOT EXISTS users (id, userName, password, datecreated)');
    //th.executeSql('Drop table history');
});


let items = [];

let item = {
    id: 0,
    name: '',
    amount: 0,
    datecreated: '',
    status: '',
    type: ''
};

let month = 0;
let status = '';
let confStatus = '';


class Activity {
    constructor() {}
    getItems() {
        db.transaction(async function(d) {
            d.executeSql('Select * from activities', [], function(a, results) {
                let len = results.rows.length;
                data = [];
                for (let i = 0; i < len; i++) {
                    item = {
                        id: results.rows.item(i).id,
                        name: results.rows.item(i).name,
                        amount: results.rows.item(i).amount,
                        datecreated: results.rows.item(i).datecreated,
                        status: results.rows.item(i).status,
                        type: results.rows.item(i).type
                    }
                    items.push(item);
                    data.push(item);
                }
            });
            return items;
        });
        return items;
    }
    getItem(id) {
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
                    items.push(item);
                }
            });
            return items;
        });
        return items;
    }
    addItem(_d) {
        db.transaction(async function(d) {
            // d.executeSql('delete from activities');
            let id = _d.id;
            let name = _d.name;
            let amount = _d.amount;
            let datecreated = _d.date;
            let status = _d.status;
            let type = _d.type;
            d.executeSql('INSERT INTO  activities (id,name, amount, datecreated, status, type) VALUES (?,?,?,?,?,?)', [id, name, amount, datecreated, status, type]);
        });
        return;
    }

    // To Update before to close bills
    addItems() {
        let id = 0;
        let name = "";
        let amount = 0;
        let datecreated = "";
        let status = "";
        let type = "";

        db.transaction(async function(d) {

            console.log(data);
            data.forEach(e => {
                id = e.id;
                name = e.name;
                amount = e.amount;
                datecreated = e.date;
                status = e.status;
                type = e.type;

                d.executeSql('INSERT INTO  activities (id,name, amount, datecreated, status, type) VALUES (?,?,?,?,?,?)', [id, name, amount, datecreated, status, type]);

            });
        });
    }






    updateItem(id, _d) {
        db.transaction(function(d) {
            d.executeSql('update activities set name = ?, amount =?, status = ?  where id=?', [_d.name, _d.amount, _d.status, id]);
        });
    }
    deleteItem(id) {
        db.transaction(function(d) {
            d.executeSql('delete from activities where id=?', [id]);
        });
    }
    deleteItems() {
        db.transaction(function(d) {
            d.executeSql('delete from activities');
        });
    }


    /* Get Totals to Dashboard */

    getTotalIn() {
        let _type = 'In';
        db.transaction(async function(d) {
            await d.executeSql('Select sum(amount) as total  from activities  where type=? group by type', [_type], function(a, results) {
                let len = results.rows.length;
                if (len === 0) {
                    return;
                }
                _in = results.rows.item(0).total;
            });
        });
    }

    getTotalOut() {
        let _type = 'Out';
        db.transaction(async function(d) {
            d.executeSql('Select sum(amount) as total  from activities  where type=? group by type', [_type], function(a, results) {
                let len = results.rows.length;
                if (len === 0) {
                    return;
                }
                _out = results.rows.item(0).total;
            });
        });

    }

    getCloseBills() {
        let id = 0;
        let name = "";
        let amount = 0;
        let datecreated = "";
        let status = "";
        let type = "";


        db.transaction(async function(d) {
            let _date = new Date();
            data.forEach(e => {
                id = e.id;
                name = e.name;
                amount = e.amount;
                datecreated = _date;
                status = e.status;
                type = e.type;
                d.executeSql('INSERT INTO  history (id,name, amount, datecreated, status, type) VALUES (?,?,?,?,?,?)', [id, name, amount, datecreated, status, type]);

            });
        });

        db.transaction(async function(c) {
            let date = new Date();
            c.executeSql('update config set userName = ?, date =?, month = ?, status = ? ', ['', Date(), date.getMonth() + 1, 'Close']);
        })

    }

    getMonth() {

        db.transaction(async function(c) {

            c.executeSql('Select month, status from config', [], function(a, results) {

                month = results.rows.item(0).month;
                status = results.rows.item(0).status;

            });
            return month, status;
        });
        return month, status;
    }

    openMonth() {
        db.transaction(function(d) {
            d.executeSql('update activities set  status = ?', ['No Paid']);
        });

        for (let i = 0; i < data.length; i++) {
            data[0].status = 'No Paid';
        }
    }


    closeMonth() {
        db.transaction(async function(c) {
            let date = new Date();
            c.executeSql('update config set userName= ?, date = ?, month = ?, status = ? ', ['test', Date(), date.getMonth(), 'Open']);
        })
    }

    /*

    configStatus() {
        db.transaction(function(d) {
            d.executeSql('select status from config', [], function(a, results) {
                confStatus = results.rows.item(0).status;
                // console.log(confStatus);
            });
        });
    }
    */
}