function schimba_stil(el)
{
    el.style.fontFamily = "Helvetica";
    el.style.color = "pink";
}
var elemente = document.getElementsByClassName("stil");
for(let i = 0; i < elemente.length; i++)
    schimba_stil(elemente[i]);