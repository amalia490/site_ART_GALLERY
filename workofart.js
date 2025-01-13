window.onload = function() {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);
    function makeRequest(){
        httpRequest = new XMLHttpRequest();
        if (!httpRequest){
            alert('Giving up :( Cannot creat an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'https://raw.githubusercontent.com/amalia490/site_ART_GALLERY/refs/heads/main/arta.json');
        httpRequest.send();
    }
    function alertContents(){
        if (httpRequest.readyState == 4){
            if (httpRequest.status == 200){
                var jsonFile = httpRequest.responseText;
                var data = JSON.parse(jsonFile);
                var content = "";
                content += "Made by: " + data.made_by + " \n" + "Title: " + data.title + " \n" + "Type: " + data.type + " \n";
                alert(content);
            }
            else{
                alert('There was a problme with the request.');
            }
        }
    }
}
