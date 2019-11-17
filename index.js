fetch('http://10.0.74.239:8080/api2/piechart/2018').then(resp => resp.json())
.then(d=> {
    console.log(d)
    drawPieChart(d)
})

function drawPieChart(d){
    var label = []
    var data = []
    d.forEach(element => {
        label.push(element['categories'])
        data.push(element['measure']*100)
    });

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
    labels: label,
    datasets: [{
      backgroundColor: [
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