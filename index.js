fetch('http://10.0.74.239:8080/api2/piechart/2017').then(resp => resp.json())
.then(d=> {
    console.log(d)
    drawPieChart(d,"myChart1")
})
fetch('http://10.0.74.239:8080/api2/piechart/2018').then(resp => resp.json())
.then(d=> {
    console.log(d)
    drawPieChart(d,"myChart2")
})
fetch('http://10.0.74.239:8080/api2/piechart/2019').then(resp => resp.json())
.then(d=> {
    console.log(d)
    drawPieChart(d,"myChart3")
})

fetch('http://10.0.74.239:8080/api2/linechart/TEGALREJO').then(resp => resp.json())
    .then(d=> {
        console.log(d)
        lineChartDraw(d)
    })

function drawPieChart(d,id){
    var label = []
    var data = []
    d.forEach(element => {
        label.push(element['categories'])
        data.push(element['measure']*100)
    });

    var ctx = document.getElementById(id).getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
    labels: label,
    datasets: [{
      backgroundColor: [
          //Kasih Warna Bro
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#ff4343"
      ],
      data: data
        }]
    }
    });
}

function lineChartDraw(data){
    var lineChart = new Taucharts.Chart({
        data: data,
        type: 'line',
        x: 'tahun',
        y: 'count',
        color: 'jenjang',
        plugins: [
            Taucharts.api.plugins.get('legend')(),
            Taucharts.api.plugins.get('tooltip')()
        ]
    })

    lineChart.renderTo('#line');
}

function myFunc(){
    var x= document.getElementById("mySelect").value;  
    document.getElementById("line").innerHTML=""
    console.log(x)
    //lineChart.setData(d)
    fetch('http://10.0.74.239:8080/api2/linechart/'+x+"/").then(resp => resp.json())
    .then(d=> {
        console.log(d)
        lineChartDraw(d)
    })
}