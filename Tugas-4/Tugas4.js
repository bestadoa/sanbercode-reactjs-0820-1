// soal 1
console.log("---Jawaban 1----")
console.log('LOOPING PERTAMA')
var nilaiAwal = 2
while (nilaiAwal <= 20) {
    console.log(nilaiAwal + ' -' + ' I love coding')
    nilaiAwal = nilaiAwal + 2;
}

console.log()
console.log('LOOPING KEDUA')
var nilaiAwal = 20
while (nilaiAwal >= 2) {
    console.log(nilaiAwal + ' -' + ' I will become a frontend developer')
    nilaiAwal = nilaiAwal - 2;
}

// soal 2
console.log()
console.log("---Jawaban 2----")

for (var i = 1; i <= 20; i++) {
    if (i % 3 == 1) {
        console.log(i + ' -' + " Santai")
    } else if (i % 3 == 2) {
        console.log(i + ' -' + " Berkualitas")
    } else {
        console.log(i + ' -' + " I love coding")
    }
}

// soal 3 
console.log()
console.log("---Jawaban 3----")
for (var i = 0; i < 7; i++) {
    var output = ""
    for (var j = 0; j < 7; j++) {
        if (j <= i) {
            output += "*"
        } else {
            output += " "
        }
    }
    console.log(output)
}

// Soal 4
console.log()
console.log("---Jawaban 4----")

var kalimat = "saya sangat senang belajar javascript"

console.log(kalimat.split(" "))

// soal 5
console.log()
console.log("---Jawaban 5----")
var i = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var a = i.sort()
for (var i = 0; i < a.length; i++) { console.log(a[i]) }