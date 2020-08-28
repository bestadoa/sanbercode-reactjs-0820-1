///// Soal no 1
function halo() {
    return ("Halo Sanbers!")
}
console.log("----Jawaban 1----")
console.log(halo())
console.log()

///// Soal No 2
function kalikan(num1, num2) {
    return (
        num1 * num2
    )
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log("----Jawaban 2----")
console.log(hasilKali)
console.log()

///// Soal No 3
function introduce(name, age, address, hobby) {
    return (
        "Nama Saya " + name + ", umur saya " + age + " tahun, alamat saya di " +
        address + ", dan saya punya hobby yaitu " + hobby
    )
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log("----Jawaban 3----")
console.log(perkenalan)
console.log()

///// Soal No 4
var arrayDaftarPeserta = ["Asep", "Laki - Laki", "Baca Buku", 1992]

var object = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}
console.log("----Jawaban 4----")
console.log(object)
console.log()

///// Soal No 5
var buah = [
    { nama: "Strawberry", warna: "Merah", adaBijinya: "Tidak", harga: 9000 },
    { nama: "jeruk", warna: "Oranye", adaBijinya: "Ada", harga: 8000 },
    { nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "Ada", harga: 10000 },
    { nama: "Pisang", warna: "Kuning", adaBijinya: "Tidak", harga: 5000 }
]
console.log("----Jawaban 5----")
console.log(buah[0])
console.log()

///// Soal No 6
var dataFilm = []

function addFilm(nama, durasi, genre, tahun) {
    var data = {
        name: nama,
        duration: durasi,
        genre: genre,
        tahun: tahun
    }

    dataFilm.push(data)
}


addFilm("Angling dharma", "2 Jam", "Comedy", "1992")
addFilm("Hey Tayo", "2 Abad", "Horror", "2000 Sebelum Masehi")
console.log("----Jawaban 6----")
console.log(dataFilm)