
function drawChart() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1rbkhEc3-L8Tv54agyI14GgN77GSA3mn4B3Cx-dMGvv4/edit#gid=1955664146');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
    chart.draw(data, null);
}



