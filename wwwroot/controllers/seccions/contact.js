/**Seccion Contact **/

document.querySelector("#nav-contact").addEventListener('click', fnContact, false);

function fnContact() {
    let contact = `
    <h3>Phone Numbers List</h3>

    <div class="seccion">

    <p>Keep those phone numbers whose are really important.</p>


    <table id="bills"> 
    
      <th>Phone Number </th>
      <th>Name </th>
      <th>Email</th>
      <tbody>
      <tr><td> 777-777-7777</td><td>John Doe</td><td>jdoe@gmail.com</td> </tr>
      </tbody>
    
    </table>
    </div>
    
    `;
    content.innerHTML = contact;
    seccion = 7;
}