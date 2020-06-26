db.transaction(function(tu) {
    tu.executeSql('CREATE TABLE IF NOT EXISTS users (id, userName, password, datecreated)');
    //th.executeSql('Drop table history');
});


let email = '';


class User {
    constructor() {}

    getUser(userName, password) {

        console.log(userName, password);
        db.transaction(async function(d) {

            d.executeSql('Select * from users where userName = ?  and password = ?', [userName, password], function(a, results) {
                let len = results.rows.length;
                console.log(len);
                email = '';
                if (len !== 0) {
                    email = results.rows.item(0).userName;
                } else if (len === 0) {
                    email = '';
                }

            });
            return email;
        });
        return email;
    }

    addUser(user) {

        db.transaction(async function(d) {
            // d.executeSql('delete from activities');
            let id = user.id;
            let userName = user.userName;
            let password = user.password;
            let datecreated = new Date().toString();

            d.executeSql('INSERT INTO  users (id,userName, password, datecreated) VALUES (?,?,?,?)', [id, userName, password, datecreated]);
        });
        return;
    }







}