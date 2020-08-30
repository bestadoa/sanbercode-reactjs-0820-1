function luasSegitiga(alas, tinggi) {
    var luas = 1 / 2 * alas * tinggi
    return (luas)
}
var alas = 6
var tinggi = 4
var luas = luasSegitiga(alas, tinggi)
console.log(luas)

function luasLingkaran(jariJari) {
    var luas = 3.14 * jariJari * jariJari
    return (luas)

}
var jariJari = 4
var luas = luasLingkaran(jariJari)
console.log(luas)

function luasPersegi(sisi) {
    var luas = sisi * sisi
    return (luas)
}
var sisi = 6
var luas = luasPersegi(sisi)
console.log(luas)



var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
var a = daftarAlatTulis.sort()
var i = 0
while (i < a.length) {
    console.log(a[i])
    i++
}


var pesertaLomba = [
    ["Budi", "Pria", "172cm"],
    ["Susi", "Wanita", "162cm"],
    ["Lala", "Wanita", "155cm"],
    ["Agung", "Pria", "175cm"]
]

var tampungan = []
for (var i = 0; i < pesertaLomba.length; i++) {
    var data = {}

    data.name = pesertaLomba[i][0]
    data.gender = pesertaLomba[i][1]
    data.height = pesertaLomba[i][2]

    tampungan.push(data)
}

console.log(tampungan)


var daftarNama = []

function tambahNAma(nama, jenisKelamin, panggilan) {
    var data = {
        name: nama,
        gender: jenisKelamin,
        panggilan: panggilan
    }
    daftarNama.push(data)
}
var name = "Asep"
var jenisKelamin = "Laki-laki"
var panggilan = "Bapak"
tambahNAma(name, jenisKelamin, panggilan)

var name = "Siti"
var jenisKelamin = "Perempuan"
var panggilan = "Ibu"
tambahNAma(name, jenisKelamin, panggilan)

var name = "Yeni"
var jenisKelamin = "Perempuan"
var panggilan = "Ibu"
tambahNAma(name, jenisKelamin, panggilan)

var name = "Rudi"
var jenisKelamin = "Laki-laki"
var panggilan = "Bapak"
tambahNAma(name, jenisKelamin, panggilan)

var name = "Adit"
var jenisKelamin = "Laki-laki"
var panggilan = "Bapak"
tambahNAma(name, jenisKelamin, panggilan)


for (var i = 0; i < daftarNama.length; i++) {
    console.log(i + 1 + "." + daftarNama[i].panggilan + " " + daftarNama[i].name)
}