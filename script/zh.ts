function paralelogramma1(oldal: number, magassag: number): number {
    {return oldal*magassag};
}

function paralelogramma2(oldal1: number, oldal2: number, szog: number): number {
    {return oldal1*oldal2*Math.sin(szog)};
}

function stringek(string1: string, string2: string): number {
    let stringegyutt: string = string1 + string2;
    {return stringegyutt.length};
}

function sokszorositas(szoveg: string, szam: number): string[] {
    var output: string[] = [] /*[]: listát csinál*/
    for (let i = 0, n = szam; i < n; ++i) {
        output = output.concat(szoveg);
    }
    {return output}
}

function sokszorositas2(szoveg: string, szam: number): string[] {
    var output: string[] = []
    if (szam < 1) {return []; }
    else { sokszorositas2(szoveg,szam-1);
        output.concat(szoveg);
        return output; }
    }

function kivalaszt(lista: string[]): string[] {
    var r1 : number = Math.floor(Math.random() * lista.length);
    var r2 : number = Math.floor(Math.random() * lista.length);
    var r3 : number = Math.floor(Math.random() * lista.length);
    var output: string[] = []
    output.push (lista[r1]);
    output.push (lista[r2]);
    output.push (lista[r3]);
        return output;
}

function legolcsobb(termek_neve: string[], termek_ara: number[]): string {
    var minimumertek : number = Math.min(...termek_ara);
    var minimumertek_helye: number = termek_ara.indexOf(minimumertek);
    return termek_neve[minimumertek_helye];
}