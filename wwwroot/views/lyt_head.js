const nav = `
        <div class="mdScreen">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <div class="col-7">
                    <a class=" navbar-brand" onClick="fnHome()" href="#"><span class="logo">PFA</span></a> <span class="subtitle">PERSONAL FINANCIAL ACTIVITIES</span>
                    <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class=" navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class=" col-2">
                    <div class="collapse navbar-collapse" id="navbarNav">
                     
                        <ul class="navbar-nav">
                            <li class="nav-item active" style="display:none">
                                <a class=" nav-link text-white dashboard" id="nav-home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <!--
                            <li class="nav-item">
                                <a class=" nav-link text-white activities" id="nav-about">ToDos</a>
                            </li>
                            <li class="nav-item">
                                <a class=" nav-link text-white register" id="nav-contact">Contacts</a>
                            </li>
                            -->
                            
                           
                           
                        </ul>
                     
                    </div>
                </div>
                <div class=" col-3">
                    <ul class=" navbar-nav">
                        <li class="nav-item">
                           <a style="position:relative;top:9px;margin-right: 100px; color: gold;" id="nav-userName"></a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-link text-white show" id="nav-login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class=" nav-link text-white hide" id="nav-logout">Logout</a>
                        </li>
                    </ul>
                </div>
        </nav>
    
        </div>
        <div class="smScreen">
                <h1>PFA<h1>
                <p>Personal Financial Activities</p>
                <h2> No availabel for Small Devices <h2>
        </div>
`