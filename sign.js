window.onload = function() {
    var data;
    var promiseFetch = fetch('https://raw.githubusercontent.com/amalia490/site_ART_GALLERY/refs/heads/main/conturi.json');

    promiseFetch.then(function (response){
        console.log("merge");
        if(response.status == '200')
            {console.log("merge");
            return response.json();}
        else
          throw "Error: Unable to fetch JSON file";
        })
        .then(function(jsonData) { 
                data = jsonData;
                document.getElementById("buton").addEventListener('click', myfunction());
                function myfunction(){
        if (!data) {
            console.log(data);
            document.getElementById("demo").innerHTML = "Data is not loaded yet. Please try again later.";
            return;
        }
          let userfound = false;
          console.log("merge");
          for (var i = 0; i < data.length; i++)
          {
            const emailmeu = document.getElementById("email");
            const parola = document.getElementById("password");
                console.log(emailmeu.value);
                console.log("merge");
                console.log(data[i].email);
              if (data[i].email == emailmeu.value){
                    userfound = true;
                    console.log("merge");
                    console.log(data[i].email);
              if (data[i].password == parola.value)
                  window.location.href = "my_account.htm";
              else{
                  let text = "Invalid password or email. Please try again."
                  document.getElementById("demo").innerHTML = text;   
              }
            }
            
          }
    }
            })
        .catch(function(err){
            alert(err);
        });
 }; 
