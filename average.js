try {
    var taulut = document.getElementsByTagName("table");
    var taulu = taulut.length >= 5 ? taulut[4] : taulut[2];
    var rivit = Array.from(taulu.getElementsByTagName("tr"));
    rivit.shift();
    var summa = 0;
    var maara = 0;
    var pain_summa = 0;
    var pain_maara = 0;
    rivit.forEach(rivi => {
        var arvo = parseFloat(rivi.getElementsByTagName("td")[3].innerText);
        var op = parseFloat(rivi.getElementsByTagName("td")[2].innerText);
        if (!isNaN(arvo)) {
            summa += arvo;
            maara += 1;

            pain_summa += op * arvo
            pain_maara += op
        }
    })
    var keskiarvo = Number((summa/maara).toFixed(2));
    var pain_ka = Number((pain_summa/pain_maara).toFixed(2));
    console.log("Keskiarvo: " + keskiarvo);
    console.log("Painotettu keskiarvo: " + pain_ka);
    document.getElementsByClassName("puhval")[0].innerText += "Keskiarvo: " + keskiarvo + "\nPainotettu keskiarvo: " + pain_ka;
} catch (TypeError) {}