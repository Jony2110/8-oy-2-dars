//                                             №1


// a) To'g'ri TypeScript turlari bilan o'zgaruvchilarni e'lon qiling
let ism: string = "Ali";
let yosh: number = 25;
let talabami: boolean = true;
let hobby: string | null = "Shaxmat";

// b) Raqam yoki stringni stringga aylantiruvchi funksiya
function stringgaAylantir(qiymat: number | string): string {
    return qiymat.toString();
}




//                                               №2
// a) "Kitob" interfeysi
interface Kitob {
    sarlavha: string;
    muallif: string;
    nashrYili: number;
    sahifalarSoni: number;
    mavjud: boolean;
}

// b) Kitob interfeysi asosida 3 ta kitob obyektini yarating
const kitob1: Kitob = {
    sarlavha: "O'tgan kunlar",
    muallif: "Abdulla Qodiriy",
    nashrYili: 1925,
    sahifalarSoni: 300,
    mavjud: true,
};

const kitob2: Kitob = {
    sarlavha: "Shum bola",
    muallif: "G'afur G'ulom",
    nashrYili: 1935,
    sahifalarSoni: 150,
    mavjud: false,
};

const kitob3: Kitob = {
    sarlavha: "Alpomish",
    muallif: "Furqat",
    nashrYili: 1975,
    sahifalarSoni: 200,
    mavjud: true,
};

// c) Kitob haqida ma'lumot qaytaruvchi funksiya
function kitobHaqidaMalumot(kitob: Kitob): string {
    return `${kitob.sarlavha} kitobi muallifi ${kitob.muallif}, ${kitob.nashrYili} yilda nashr qilingan va ${kitob.sahifalarSoni} sahifa.`;
}




//                                                   №3


// a) Kutubxona classini yarating
class Kutubxona {
    private kitoblar: Kitob[] = [];

    kitobQoshish(kitob: Kitob) {
        this.kitoblar.push(kitob);
    }

    kitobniTopish(sarlavha: string): Kitob | undefined {
        return this.kitoblar.find(kitob => kitob.sarlavha === sarlavha);
    }

    mavjudKitoblarSoni(): number {
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
console.log(stringgaAylantir(123)); // "123"
console.log(stringgaAylantir("Hello")); // "Hello"

// №2. Kitoblar haqida ma'lumot
console.log(kitobHaqidaMalumot(kitob1)); // "O'tgan kunlar kitobi muallifi Abdulla Qodiriy, 1925 yilda nashr qilingan va 300 sahifa."
console.log(kitobHaqidaMalumot(kitob2)); // "Shum bola kitobi muallifi G'afur G'ulom, 1935 yilda nashr qilingan va 150 sahifa."

// №3. Kutubxona tizimi
console.log(kutubxona.kitobniTopish("O'tgan kunlar")); // Kitob obyektini qaytaradi
console.log(kutubxona.mavjudKitoblarSoni()); // 3


