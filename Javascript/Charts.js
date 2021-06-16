window.onload = function() {
    AOS.init();

    //global graph settings
    Chart.defaults.font.size = 16;
    Chart.defaults.font.family = "'Roboto', sans-serif";
    Chart.defaults.font.weight = "bold";


    //spectific default settings
    Chart.defaults.plugins.legend.labels.color = "White";
    Chart.defaults.plugins.title.font.size = 24;


    //Graph 1

    var Chart1 = document.getElementById("Chart1");
    Chart1.width = 0;
    //Chart.defaults.global.legend.display = false;
    //Chart.defaults.global.plugins.color = "white";

    var ctx = document.getElementById('Chart1').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            data: [12, 19, 3, 5],
            backgroundColor: [
                'hsl(4, 82%, 67%)',
                '#4EDAFF',
                'hsl(42, 100%, 80%)',
                'hsl(145, 82%, 67%)',
                
            ],
            borderColor: [
                /*'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',*/
                "#FFF",
                "#FFF",
                "#FFF",
                "#FFF"
                
            ],
            color: [
                "#FFF"
            ],
            borderWidth: 0
        }]
    },
    options: {
        
        scales: {
            
           /* yAxes: {
                ticks: {
                    color: "white",
                    family: "'Roboto', sans-serif"
                }
            },
            xAxis: {
                ticks: {
                    color: "white",
                    family: "'Roboto', sans-serif"

                }
            }*/
        },
        plugins : {
            title: {
                display: true,
                align: "center",
                color: "white",
                text: "Break down of waste by mass",
                font : {
                    size: 20
                }
              
            },
            legend: {
                display: true,
                position: "bottom",

                labels: {
                    color: "white",
                    //family: "'Roboto', sans-serif",
                    font: {
                        size: "16"
                    },
                    boxWidth: 20
                    

                }
            },
            
        }
    }
});
    //graph 2
    var Chart2 = document.getElementById("Chart2");
    Chart1.width = 0;
    //Chart.defaults.global.legend.display = false;
    //Chart.defaults.global.plugins.color = "white";

    var ctx = document.getElementById('Chart2').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Contaminated', 'Non-contaminated'],
        datasets: [{
            data: [12, 19],
            backgroundColor: [
                '#f07167',
                'hsl(145, 82%, 67%)',
                
            ],
            borderColor: [
                /*'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',*/
                "#FFF",
                "#FFF",
              
                
            ],
            color: [
                "#FFF"
            ],
            borderWidth: 0
        }]
    },
    options: {
        
        scales: {
        
            
        },
        plugins : {
            title: {
                display: true,
                align: "center",
                color: "white",
                text: "Contaminated vs non-contaminated",
                font : {
                    size: 18
                }
              
            },
            legend: {
                display: true,
                position: "bottom",

                labels: {

                    
                    

                }
            },
            
        }
    }
});

    //Graph 3 
    
    var Chart3 = document.getElementById("Chart3");
    Chart3.width = 0;
    //Chart.defaults.global.legend.display = false;
    //Chart.defaults.global.plugins.color = "white";

    var ctx = document.getElementById('Chart3').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            data: [12, 19, 3, 5],
            backgroundColor: [
                'hsl(4, 82%, 67%)',
                '#4EDAFF',
                'hsl(42, 100%, 80%)',
                'hsl(145, 82%, 67%)',
                
            ],
            borderColor: [
                /*'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',*/
                "#FFF",
                "#FFF",
                "#FFF",
                "#FFF"
                
            ],
            color: [
                "#FFF"
            ],
            borderWidth: 0
        }]
    },
    options: {
        
        scales: {
            
           /* yAxes: {
                ticks: {
                    color: "white",
                    family: "'Roboto', sans-serif"
                }
            },
            xAxis: {
                ticks: {
                    color: "white",
                    family: "'Roboto', sans-serif"

                }
            }*/
        },
        plugins : {
            title: {
                display: true,
                align: "center",
                color: "white",
                text: "placeholder",
              
            },
            legend: {
                display: true,
                position: "bottom",

                labels: {
                    color: "white",
                    //family: "'Roboto', sans-serif",
                    font: {
                        size: "20"
                    }
                    

                }
            },
            
        }
    }
});



    setInterval(UpdateTime, 1000);
    //Timer function 
    var Timer = document.getElementById("Timer");
    var TimeUntilUpdate = 30;
    function UpdateTime() {
        TimeUntilUpdate -= 1;
        Timer.textContent = TimeUntilUpdate;

        if(TimeUntilUpdate == 0) {
            console.log("Update graph function called");
            TimeUntilUpdate = 31;
        }
        
        

    }






//end code
}