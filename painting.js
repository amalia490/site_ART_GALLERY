
function addElement()
{
    const newEl = document.createElement("div");
    const newText = document.createTextNode("A heart full of art");
    newEl.appendChild(newText);
    const curentEl = document.querySelectorAll("div.tablouri");
    const currentEl = curentEl[curentEl.length-1];
    currentEl.parentNode.insertBefore(newEl, currentEl)

    function schimba_stil(el)
{
    el.style.fontFamily = "Lucida Handwriting";
    el.style.color = "white";
    el.style.display = "flex";
    el.style.justifyContent = "center"
}
    schimba_stil(newEl)
}

document.addEventListener("DOMContentLoaded", addElement);

clickCounter();
function clickCounter(){
    if(localStorage.clickcount){
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    }
    else{
        localStorage.clickcount = 1;
    }
    document.getElementById("demo").innerHTML = localStorage.clickcount;
}