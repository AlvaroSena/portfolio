var request = new XMLHttpRequest();

rquest.open('GET', 'https://api.github.com/users/alvarosena/repos', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    var statusHTML = '';

    $.each(data, function(i, status){
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
    });
}

request.send();