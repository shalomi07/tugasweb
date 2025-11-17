const tambah = document.getElementById("tambah");
const kurang = document.getElementById("kurang");
const reset = document.getElementById("reset");

let angka = parseInt(document.getElementById("angka").innerHTML);

function tambahbtn() {
    angka += 1;
    document.getElementById("angka").innerHTML = angka;
}

function kurangbtn() {
    if(angka > 0){
        angka -= 1;
        document.getElementById("angka").innerHTML = angka;
    } else {
        angka = 0;
        document.getElementById("angka").innerHTML = angka;
    }
}
function resetbtn() {
    angka = 0;
    document.getElementById("angka").innerHTML = angka;
}