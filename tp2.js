function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);

    t3.value = c
}

function soustraction()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);

    t3.value = c
}

function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);

    t3.value = c
}

function multiplication()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);

    t3.value = c
}

function parité()
{
    var v = Number(document.getElementById("t1").value);
    if (v%2 == 0)

    alert("Ce nombre est pair");
else
    alert("Ce nombre est impair");
}

function permuter()
{
    var V3= "";
    a =document.getElementById(t1).value;
    b =document.getElementById(t1).value;
    V3=a;
    a=b;
    b=V3;


    t1.value = a;
    t2.value = b;
}

