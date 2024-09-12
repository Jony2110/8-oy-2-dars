"use strict";
//                                             №1
// a) To'g'ri TypeScript turlari bilan o'zgaruvchilarni e'lon qiling
let ism = "Ali";
let yosh = 25;
let talabami = true;
let hobby = "Shaxmat";
// b) Raqam yoki stringni stringga aylantiruvchi funksiya
function stringgaAylantir(qiymat) {
    return qiymat.toString();
}
// b) Kitob interfeysi asosida 3 ta kitob obyektini yarating
const kitob1 = {
    sarlavha: "O'tgan kunlar",
    muallif: "Abdulla Qodiriy",
    nashrYili: 1925,
    sahifalarSoni: 300,
    mavjud: true,
};
const kitob2 = {
    sarlavha: "Shum bola",
    muallif: "G'afur G'ulom",
    nashrYili: 1935,
    sahifalarSoni: 150,
    mavjud: false,
};
const kitob3 = {
    sarlavha: "Alpomish",
    muallif: "Furqat",
    nashrYili: 1975,
    sahifalarSoni: 200,
    mavjud: true,
};
// c) Kitob haqida ma'lumot qaytaruvchi funksiya
function kitobHaqidaMalumot(kitob) {
    return `${kitob.sarlavha} kitobi muallifi ${kitob.muallif}, ${kitob.nashrYili} yilda nashr qilingan va ${kitob.sahifalarSoni} sahifa.`;
}
//                                                   №3
// a) Kutubxona classini yarating
class Kutubxona {
    constructor() {
        this.kitoblar = [];
    }
    kitobQoshish(kitob) {
        this.kitoblar.push(kitob);
    }
    kitobniTopish(sarlavha) {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }
    mavjudKitoblarSoni() {
        return this.kitoblar.length;
    }
}
// b) Kutubxona classidan obyekt yarating va kitoblar qo'shing
const kutubxona = new Kutubxona();
kutubxona.kitobQoshish(kitob1);
kutubxona.kitobQoshish(kitob2);
kutubxona.kitobQoshish(kitob3);
// c) Qo'shilgan kitoblarni topish
console.log(kutubxona.kitobniTopish("Alpomish"));
// d) Mavjud kitoblar sonini chiqarish
console.log(kutubxona.mavjudKitoblarSoni());
// №1. Basic Types: stringgaAylantir
console.log(stringgaAylantir(123)); 
console.log(stringgaAylantir("Hello")); 
// №2. Kitoblar haqida ma'lumot
console.log(kitobHaqidaMalumot(kitob1)); 
console.log(kitobHaqidaMalumot(kitob2)); 
// №3. Kutubxona tizimi
console.log(kutubxona.kitobniTopish("O'tgan kunlar")); 
console.log(kutubxona.mavjudKitoblarSoni()); 
