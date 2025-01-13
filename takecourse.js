const element = document.getElementById("sters");
element.remove();

const element2 = document.getElementById("sters2");
element2.remove()

const mybox = document.getElementsByClassName("schimbare");

for (var i = 0; i < mybox.length; i++){
    mybox[i].addEventListener("click", event =>{
        event.target.style.fontFamily = "Lucida Handwriting";
})
}

window.onload = function(){
    document.body.onkeyup = function(event){
        switch (event.key){
            case "l":
                const imagine = document.getElementById("1poza");
                imagine.src = "fundal2.jpeg";
                break;
            case "m":
                const imagine2 = document.getElementById("2poza");
                imagine2.src = "";
                break;
            case "r":
                const imagine3 = document.getElementById("3poza");
                imagine3.src = "";
                break;
            default:
                alert("alta tasta"); return; 
        }
    }
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i ++)
        {color += letters[Math.floor(Math.random()*16)];
        }
    return color;
}

const culoare = document.getElementsByTagName("header");

for (var i = 0; i < culoare.length; i++){
    culoare[i].addEventListener("click", event =>{
        event.target.style.backgroundColor = getRandomColor();
})
}

window.onload = function() {
    var timp = document.getElementsByClassName("schimbare");
    for (var i = 0; i < timp.length; i++)
        setTimeout(colorare, 700*(i+1), "pink", timp[i]);
    function colorare(culoare, ob){
        ob.style.color = culoare;
    }   
}

function myfunction(){
    const e = document.getElementById("email");
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let text;
    if(!emailPattern.test(email)){
        text = "Invalid input";
    }
    else{
        text = "Trimis cu succes!";
        console.log('text-trimis: ', email);
        e.value = '';
    }
    document.getElementById("demo").innerHTML = text;
}