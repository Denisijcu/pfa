const uri = 'https://script.google.com/macros/s/AKfycbx_Ej8ML-YgotAEgaJbNfBa0BM9U-5n5bH5eg_oCkDXSpyKj1Q/exec';
let users = [];


let areaA = document.querySelector("#area");
let editArea = document.querySelector("#edit-area");

let userCount = 0;

function searchItem() {
    let email = document.getElementById('seach-name').value;
    console.log(email);
    getUser(email);
}



function getUsers() {

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "NID=204=TqVKVDmeZnczSrMNXm-S-Cw_fvwk1tYE1Yrf7WnIBayOs_nmN4QzWEHklDlEp6wm2npaGp6JS-H8YGD6qBLzGeZVYDBhzlVJfm9LWr3by8J_Kc2LWFpxUrKzMQK-kEIaOxJtyZL9goSiiV9gB7RIt0CmlTc3al-oJ33qss2wCUw");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://script.google.com/macros/s/AKfycbx_Ej8ML-YgotAEgaJbNfBa0BM9U-5n5bH5eg_oCkDXSpyKj1Q/exec?get", requestOptions)
        .then(response => response.text())
        .then(result => _displayItems(JSON.parse(result)))
        .catch(error => console.log('error', error));

}

function getUser(email) {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "NID=204=TqVKVDmeZnczSrMNXm-S-Cw_fvwk1tYE1Yrf7WnIBayOs_nmN4QzWEHklDlEp6wm2npaGp6JS-H8YGD6qBLzGeZVYDBhzlVJfm9LWr3by8J_Kc2LWFpxUrKzMQK-kEIaOxJtyZL9goSiiV9gB7RIt0CmlTc3al-oJ33qss2wCUw");

    var raw = "";

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://script.google.com/macros/s/AKfycbx_Ej8ML-YgotAEgaJbNfBa0BM9U-5n5bH5eg_oCkDXSpyKj1Q/exec?get=${email}`, requestOptions)
        .then(response => response.text())
        .then(result => _displayItems(JSON.parse(result)))
        .catch(error => console.log('error', error));

}

function addItem() {
    const addEmail = document.getElementById('add-email');
    const addUserName = document.getElementById('add-userName');
    const addDateRegistered = document.getElementById('add-dateRegistered');
    const addAllowNotification = document.getElementById('add-allowNotification');


    console.log(addAllowNotification);

    let sNotification = false;
    if (addAllowNotification.value = "on") {
        sNotification = true;
    }


    const item = {
        Id: userCount,
        Email: addEmail.value.trim(),
        UserName: addUserName.value.trim(),
        DateRegistered: addDateRegistered.value.trim(),
        AllowNotification: sNotification

    };


    console.log(item);

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "NID=204=TqVKVDmeZnczSrMNXm-S-Cw_fvwk1tYE1Yrf7WnIBayOs_nmN4QzWEHklDlEp6wm2npaGp6JS-H8YGD6qBLzGeZVYDBhzlVJfm9LWr3by8J_Kc2LWFpxUrKzMQK-kEIaOxJtyZL9goSiiV9gB7RIt0CmlTc3al-oJ33qss2wCUw");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://script.google.com/macros/s/AKfycbx_Ej8ML-YgotAEgaJbNfBa0BM9U-5n5bH5eg_oCkDXSpyKj1Q/exec?Id=${item.Id}&Email=${item.Email}&UserName=${item.UserName}&DateRegistered=${item.DateRegistered}&AllowNotification=${item.AllowNotification}`, requestOptions)
        .then(response => response.text())
        .then(result => getUsers())
        .catch(error => console.log('error', error));

}



function deleteItem(id) {

    console.log(id);

    return;



    fetch(`${uri}/${id}`, {
            method: 'DELETE'
        })
        .then(() => getItems())
        .catch(error => console.error('Unable to delete item.', error));
}

function deleteUser(email) {


    var myHeaders = new Headers();
    myHeaders.append("Cookie", "NID=204=TqVKVDmeZnczSrMNXm-S-Cw_fvwk1tYE1Yrf7WnIBayOs_nmN4QzWEHklDlEp6wm2npaGp6JS-H8YGD6qBLzGeZVYDBhzlVJfm9LWr3by8J_Kc2LWFpxUrKzMQK-kEIaOxJtyZL9goSiiV9gB7RIt0CmlTc3al-oJ33qss2wCUw");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://script.google.com/macros/s/AKfycbxGDGIO1XU_yeKQw3tL8Zh5Vtf_txrlV0iiRROHiGbTousuW0E/exec?email=${email}`, requestOptions)
        .then(response => response.text())
        .then(result => getUsers())
        .catch(error => console.log('error', error));

}


function editUser(item) {

    let arr = item.split(',');
    console.log(arr[1]);



    editArea.classList.replace("hide-area", "show-area");
    areaA.classList.replace("show-area", "hide-area");


    document.getElementById('edit-email').value = arr[1];
    document.getElementById('edit-userName').value = arr[2];
    document.getElementById('edit-dateRegistered').value = arr[3];
    document.getElementById('edit-allowNotification').value = arr[4];

}

function saveEdit() {

    //  let id = document.getElementById('edit-id').value;
    let email = document.getElementById('edit-email').value;
    let userName = document.getElementById('edit-userName').value;
    let dateRegistered = document.getElementById('edit-dateRegistered').value;
    let allowNotification = document.getElementById('edit-allowNotification').value;



    var myHeaders = new Headers();
    myHeaders.append("Cookie", "NID=204=TqVKVDmeZnczSrMNXm-S-Cw_fvwk1tYE1Yrf7WnIBayOs_nmN4QzWEHklDlEp6wm2npaGp6JS-H8YGD6qBLzGeZVYDBhzlVJfm9LWr3by8J_Kc2LWFpxUrKzMQK-kEIaOxJtyZL9goSiiV9gB7RIt0CmlTc3al-oJ33qss2wCUw");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`https://script.google.com/macros/s/AKfycbxGDGIO1XU_yeKQw3tL8Zh5Vtf_txrlV0iiRROHiGbTousuW0E/exec?Email=${email}&UserName=${userName}&DateRegistered=${dateRegistered}&AllowNotification=${allowNotification}`, requestOptions)
        .then(response => response.text())
        .then(result => getUsers())
        .catch(error => console.log('error', error));

    editArea.classList.replace("show-area", "hide-area");
    areaA.classList.replace("hide-area", "show-area");


}




function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
    const name = (itemCount === 1) ? 'user' : 'users';

    document.getElementById('counter').innerText = `${itemCount} ${name}`;


}


function _displayItems(data) {
    let tBody = document.getElementById('todos');


    _displayCount(data.length);

    userCount = data.length + 1;

    //  const button = document.createElement('button');

    let rows = "";

    data.forEach(item => {

        email = item[1];

        rows += `
         <tr>
         <td>
         <button onClick="editUser('${item}')">Edit</button>
         <td>
         <td>${item[0]}</td>
         <td>${item[1]}</td>
         <td>${item[2]}</td>
         <td>${item[3]}</td>
         <td>
           <button onClick="deleteUser('${email}')">Delete</button>
         </td>
         </tr>
        
        `
    });

    tBody.innerHTML = rows;
}