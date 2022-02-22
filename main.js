// tady je místo pro náš program

function hodCislo()
{
let cislo = Math.ceil(Math.random()*6);
//Math.floor(Math.random()*6+1); toto je bezpecnejsi, protoze 6 krat 0 je nula!!!!

const kostka = document.getElementById("kostka");
kostka.src = "obrazky/" + cislo + ".png"

if (cislo === 6)
{
    document.querySelector("#zprava").innerHTML = "Gratuluji vyhral jsi";
   
}

else if (cislo !== 6)
{
    document.querySelector("#zprava").innerHTML = "Zkus to znovu, padla ti " + cislo;
      
    
    /*if (cislo === 5)
        {
            document.getElementById(".kostka") = src="obrazky/5.png"
        }
        else if (cislo === 4)
        {
            document.getElementById(".kostka") = src="obrazky/4.png"
        }
        else if (cislo === 3)
        {
            document.getElementById(".kostka") = src="obrazky/3.png"
        }
        else if (cislo === 2)
        {
            document.getElementById(".kostka")= src="obrazky/2.png"
        }
        else if (cislo === 1)
        {
            document.getElementById(".kostka") = src="obrazky/1.png"
        }
        */
}

console.log(cislo);

}