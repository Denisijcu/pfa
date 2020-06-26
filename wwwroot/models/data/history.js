db.transaction(function(th) {
    th.executeSql('CREATE TABLE IF NOT EXISTS history (id, name, amount, datecreated, status, type)');
    //  th.executeSql('Drop table history');
});



let h_items = [];
let h_item = {
    id: 0,
    name: '',
    amount: 0,
    datecreated: '',
    status: '',
    type: ''
};

//let month = 0;
//let status = '';

class History {
    constructor() {}
    getItems() {
        db.transaction(async function(d) {
            d.executeSql('Select * from history', [], function(a, results) {
                let len = results.rows.length;

                history = [];
                for (let i = 0; i < len; i++) {
                    h_item = {
                        id: results.rows.item(i).id,
                        name: results.rows.item(i).name,
                        amount: results.rows.item(i).amount,
                        datecreated: results.rows.item(i).datecreated,
                        status: results.rows.item(i).status,
                        type: results.rows.item(i).type
                    }
                    h_items.push(h_item);
                    history.push(h_item);
                }
            });
            return h_items;
        });
        return h_items;
    }
    getItem(month, year) {

        db.transaction(async function(d) {
            console.log(month, year);
            d.executeSql('Select * from history where substr(datecreated,5,3) = ? ', [month], function(a, results) {
                let len = results.rows.length;
                history = [];
                h_items = [];


                for (let i = 0; i < len; i++) {
                    h_item = {
                        id: results.rows.item(i).id,
                        name: results.rows.item(i).name,
                        amount: results.rows.item(i).amount,
                        datecreated: results.rows.item(i).datecreated,
                        status: results.rows.item(i).status,
                        type: results.rows.item(i).type
                    }
                    h_items.push(h_item);
                    history.push(h_item);
                }

            });
            return h_items;
        });
        return h_items;
    }




    /* Get Totals to Dashboard */


    getHistoryTotalIn() {
        let _type = 'In';
        db.transaction(async function(d) {
            await d.executeSql('Select sum(amount) as total  from history  where type=? group by type', [_type], function(a, results) {
                let len = results.rows.length;
                if (len === 0) {
                    return;
                }
                _inHistory = results.rows.item(0).total;
            });
        });
        return
    }

    getHistoryTotalOut() {
        let _type = 'Out';
        db.transaction(async function(d) {
            d.executeSql('Select sum(amount) as total  from history  where type=? group by type', [_type], function(a, results) {
                let len = results.rows.length;
                if (len === 0) {
                    return;
                }
                _outHistory = results.rows.item(0).total;
            });
        });
        return
    }


}