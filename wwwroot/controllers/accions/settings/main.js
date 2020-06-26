/** Section Settings **/

const btnSettings = document.querySelector("#btn-setting");
btnSettings.addEventListener('click', fnSettings, false);

function fnSettings() {


    globalFunctionSetting(); // loc:  ./startup/globals.js

    let settingsHtml = `
            <h3> Settings </h3>
            <div class="se-ting">
               <div class="row">
                  <div class="col-3">   
                     ${lyt_addItem}
                  </div>
                  <div class="col-9">
                     <h3>Income and Bills</h3> 
                     ${html_Settings}
                  </div>
               </div>
            </div>
    `
    content.innerHTML = settingsHtml;

    seccion = 4;

    /** Add New Bill Settings **/
    const btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener('click', fnAddBill, false);
    /** Update Item selected **/
    const btnUpdate = document.querySelector("#btnUpdate");
    btnUpdate.addEventListener('click', fnUpdateBill, false);
}