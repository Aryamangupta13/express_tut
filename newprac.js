
//<canvas id="myChart"></canvas>
//<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
let nums=[1,2,3,4,5,6,7];
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: '',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: nums
        }]
    },

    // Configuration options go here
    options: {}
});