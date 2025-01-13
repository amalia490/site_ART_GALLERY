function schimba_stil(el)
{
    el.style.fontFamily = "Lucida Handwriting";
}
const elemente = document.getElementsByClassName("stil");
for(let i = 0; i < elemente.length; i++)
    schimba_stil(elemente[i]);

function sendtext() {
    const textInput = document.getElementById('textinput');
    const valoare = textInput.value; // Accesarea valorii
    if (valoare)
    {
        console.log('text-trimis: ', valoare);
        textInput.value = '';
    }
    else{
        console.log('campule este gol');
    }
}
