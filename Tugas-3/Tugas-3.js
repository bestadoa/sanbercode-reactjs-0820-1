// Soal 1
var a = "saya";
var b = " senang";
var c = " belajar";
var d = " javascript";
console.log(a + b.replace("senang", "Senang") + c + d.toUpperCase());


// Soal 2
var a = 1;
var b = 2;
var c = 4;
var d = 5;
console.log(a + b + c + d);


// Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18)
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima)


// Soal 4
var nilai = 69
if (nilai >= 80) {
    console.log("A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("D")
} else if (nilai < 50) {
    console.log("E")
}

// Soal 5
var tanggal = 19;
var bulan = 6;
var tahun = 1996;

switch (bulan) {
    case 6:
        console.log('19 Juni 1996');
        break;
}