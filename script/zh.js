"use strict";
function paralelogramma1(oldal, magassag) {
    {
        return oldal * magassag;
    }
    ;
}
function paralelogramma2(oldal1, oldal2, szog) {
    {
        return oldal1 * oldal2 * Math.sin(szog);
    }
    ;
}
function stringek(string1, string2) {
    var stringegyutt = string1 + string2;
    {
        return stringegyutt.length;
    }
    ;
}
function sokszorositas(szoveg, szam) {
    var output = []; /*[]: listát csinál*/
    for (var i = 0, n = szam; i < n; ++i) {
        output = output.concat(szoveg);
    }
    {
        return output;
    }
}
function sokszorositas2(szoveg, szam) {
    var output = [];
    if (szam < 1) {
        return [];
    }
    else {
        sokszorositas2(szoveg, szam - 1);
        output.concat(szoveg);
        return output;
    }
}
function kivalaszt(lista) {
    var r1 = Math.floor(Math.random() * lista.length);
    var r2 = Math.floor(Math.random() * lista.length);
    var r3 = Math.floor(Math.random() * lista.length);
    var output = [];
    output.push(lista[r1]);
    output.push(lista[r2]);
    output.push(lista[r3]);
    return output;
}
function legolcsobb(termek_neve, termek_ara) {
    var minimumertek = Math.min.apply(Math, termek_ara);
    var minimumertek_helye = termek_ara.indexOf(minimumertek);
    return termek_neve[minimumertek_helye];
}
