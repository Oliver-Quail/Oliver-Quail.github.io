<!DOCTYPE html>
<html lang="en">
<head>
    <script  src="https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js"  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link type="text/css" rel="stylesheet" href="CSS/LiveData.css"

</head>

<body>
    <div id="Holder">
    <div id="LiveDataIntroText">
    <p>Welcome to Waste Audit Management System Live Data. <br/> Data will be updated on your device approximately every 60 seconds <br/> Enjoy and please put your rubbish in the correct bin! <br/><br/> - <i>Mr. Conron, Ms. Holton, Mr. McLoed, Oliver Quail & The Earthcore committe</i></p>
    
    </div>
        <div id="GraphHolder">
            <div class="Graph" id="Graph1">
            <canvas id="Chart1" class="chart"></canvas>
            <script>
var ctx = document.getElementById('Chart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            
        }
    }
});
</script>

            </div>
            <div class="Graph" id="Graph2">
            <canvas id="Chart2" class="chart"></canvas>
            <script>
var ctx = document.getElementById('Chart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
            display: true,
            position: "top",
            text: "Waste idk",
            fontSize: 18,
            fontColor: "#0099FF"

        }
        }
        ,
        scales: {
          /*  y: {
                beginAtZero: true,
                scaleLabel: {
                 display: true,
                 labelString: 'cheeeeeseeeeeeeeee'
            
                }
                
            },*/
        /*yAxes: [{
            scaleLabel: {
                 display: true,
                 labelString: 'cheeeeeseeeeeeeeee'
            
                }
             }],
        xAxes: [{
            scaleLabel: {
                 display: true,
                 labelString: 'cheeeeeseeeeeeeeee'
            
                }
             }]*/
        }
    }
});
</script>
            </div>
            <div class="Graph" id="Graph3">
            <canvas id="Chart3" class="chart"></canvas>
            <script>
var ctx = document.getElementById('Chart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
         
        }
    }
});
</script>
            </div>
        
        </div>
        <h2 id="StatTitle">Live statics</h2>
        <div id="StatisticsHolderTotals">
            <h3 id="TotalsHolder">Totals</h3>
            <div class="Satistic2" id="StatT1">
                <p><b>Blue Bin Total</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>
            </div>
                <div class="Satistic2" id="StatT2">
                <p><b>Blue Bin Total</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>
                </div>
                <div class="Satistic2" id="StatT3">
                <p><b>Blue Bin Total</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>
                </div>
                <div class="Satistic2" id="StatT4">
                <p><b>Blue Bin Total</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>
                </div>
                <div class="Satistic2" id="StatT5">
                <p><b>Blue Bin Total</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>
                </div>


        </div>
        </div>
        <div id="SatisticsHolder">
            <div class="Satistic" id="Stat1">
                <p><b>Green Bin</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>

            </div>
            <div class="Satistic" id="Stat2">
                <p><b>Blue Bin</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>

            </div>
            <div class="Satistic" id="Stat3">
                <p><b>Red Bin</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>

            </div>
            <div class="Satistic" id="Stat4">
                <p><b>Another Bin</b></p>
                <div class="StatBox2">
                    <p class="stat1">stat1</p>
                    <p class="stat2">stat2</p>
                </div>

            </div>

        
        </div>

    </div>    

    <?php
        include("assets/footer.php");
    ?>
</body>
</html>