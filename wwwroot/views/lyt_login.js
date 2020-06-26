const login = `

<div class="seccion bg-gray">

    <div class="row">

    <div class="col-3"> </div>
    <div class="col-6 bg-white">
    <br> 
    <br>
    <br>

<!-- Nav tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
  </li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="login" role="tabpanel" aria-labelledby="login-tab">

  <div>
 

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" id="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="lpsw" required>

    <button id="frmLogin" class="buttona" type="button">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

</div>
  
  
  </div>
  <div class="tab-pane" id="register" role="tabpanel" aria-labelledby="register-tab">
  <div>
  <div class="container">
  
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <hr>

    <!--<p>By creating an account you agree to our Terms & Privacy.</p>-->
    <button id="fmR" type="button" class="registerbtn">Register</button>
  </div>

  
</div>
  
  </div>
</div>

</div>
</div>
   <div class="col-3"></div>
</div>
`;