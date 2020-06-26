/** Accions Dashboard **/

const btnDashboard = document.querySelector("#btn-dashboard");
btnDashboard.addEventListener('click', fnDashboard, false);

//activity = new Activity();

//activity.deleteItems();
//activity.addItems();


function fnDashboard() {


    activity.getTotalIn();
    activity.getTotalOut();





    content.innerHTML = "<div> <img src='../../public/spinner.gif' /> </div>";



    setTimeout(() => {



        if (data.length === 0) {
            content.innerHTML = "<h3> No data to show !!!</h3>";
            return
        }


        let title = "Dashboard";
        let dashboardContent = `
    
    
            <h3>${title}</h3>
            <h2> Current Month </h2>

            <div class="seccion">
                <div class="row">
                    <div class="col-6">
                        <div id="columnchart"></div>
                    </div>
                    <div class="col-6">
                        <div id="piechart"> </div>
                    </div>
                </div>
                <div class="row">
                <div class="col-3">
                </div>
                <div class="col-6">
                 
                </div>
                <div class="col-3">
                <span style="font-size:14px; font-weight:bold; top: 60px; left: -70px; position: relative">$ </span>
                <h5> Balance <h1> ${(_in - _out).toFixed(2)} </h1> </h5>
                </div>
            </div>
            </div>


            <hr> 
            <br>
            <div id="lbRegistered">

                <h2> Registered </h2>

                <div class="seccion">
                    <div class="row">
                        <div class="col-5">
                            <div id="piechart2"></div>
                        </div>
                        <div class="col-7">
                            <div id="columnchart2"> </div>
                        </div>
                    </div>
                    <div class="row">
                    <div class="col-3"></div>
                    <div class="col-6"></div>
                    <div class="col-3"></div>
                </div>
            </div>
        </div>



        
    
    `;

        content.innerHTML = dashboardContent;

        seccion = 1;

        showGraph();

    }, 300)
};



function showGraph() {

    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        let arr = [
            ["Activities", "Amount", { role: "style" }],
        ];
        let x = "";
        let y = 0;
        let z = colors[0];
        let a = []
        let i = 65;
        data.forEach(e => {
            x = e.name;
            y = parseInt(e.amount);
            z = colors[i];
            a = [x, y, z];
            arr.push(a);
            i += 2;
        })

        var dataBills = google.visualization.arrayToDataTable(
            arr
        );
        var optionsColumn = {
            title: "Income and Bills",
            width: 600,
            height: 400,

            bar: { groupWidth: "95%", is3D: true },
            legend: { position: "none" },

        }

        /** Pie **/

        let arr2 = [
            ["Activity", "Amount", { role: "style" }],
            ["In", _in, colors[3]],
            ["Out", _out, colors[65]]
        ];

        var dataPie = google.visualization.arrayToDataTable(
            arr2
        );
        var optionsPie = {
            title: 'In vs Out',
            width: 400,
            height: 400,
            is3D: true,
            pieStartAngle: 100

        };


        var column = new google.visualization.ColumnChart(document.getElementById("columnchart"));
        var pie = new google.visualization.PieChart(document.getElementById('piechart'));

        column.draw(dataBills, optionsColumn);
        pie.draw(dataPie, optionsPie);




        /* History */

        if (history.length === 0) {
            document.querySelector("#lbRegistered").innerHTML = '';
            return;
        }
        // document.querySelector("#lbRegistered")


        let arr3 = [
            ["Activities", "Amount", { role: "style" }],
        ];
        x = "";
        y = 0;

        z = colors[0];
        a = []
        i = 65;
        history.forEach(e => {
            x = e.name;
            y = parseInt(e.amount);
            z = colors[i];
            a = [x, y, z];
            arr3.push(a);
            i += 2;
        })



        var dataHistoryColumn = google.visualization.arrayToDataTable(
            arr3
        );
        var optionsColumn2 = {
            title: "Income and Bills",
            width: 600,
            height: 400,

            bar: { groupWidth: "95%" },
            legend: { position: "none" },

        }

        /** Pie **/

        let arr4 = [
            ["Activity", "Amount", { role: "style" }],
            ["In", _inHistory, colors[3]],
            ["Out", _outHistory, colors[65]]
        ];

        var dataHistoryPie = google.visualization.arrayToDataTable(
            arr4
        );
        var optionsPie2 = {
            title: 'In vs Out',
            pieHole: 0.4,
            width: 400,
            height: 400,


        };


        var columnHistory = new google.visualization.ColumnChart(document.getElementById("columnchart2"));
        var pieHistory = new google.visualization.PieChart(document.getElementById('piechart2'));

        columnHistory.draw(dataHistoryColumn, optionsColumn2);
        pieHistory.draw(dataHistoryPie, optionsPie2);



    }

}