



















































































// let haftaKuni = prompt("Hafta kununing sonini kiriting")

// switch (haftaKuni) {
//     case "1":
//         console.log("Dushanba");
//         break;
//         case "2":
//             console.log("Seshanba");
//             break;
//             case "3":
//         console.log("Chorshanba");
//         break;
//           case "4":
//         console.log("Payshanba");
//         break;
//         case "5":
//         console.log("Juma");
//         break;
//         case "6":
//         console.log("Shanba");
//         break;
//         case "7":
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Bunaqa kun yo'q");
//         break;
// }



// let baho = prompt("O'rtacha bahoyingizni kiriting")

// if(baho == 3){
//     console.log("Sizning balingiz 55-70 o'rtasida");
// } else if(baho == 4){
//     console.log("Sizning balingiz 71-85 o'rtasida");
// } else if(baho == 5){
//     console.log("Sizning balingiz 86-100 o'rtasida");
// } else{
//     console.log("Bunaqa baho yo'q");
// }




let mevalar = prompt("Meva nomini kiriting")

let fruits = [
    {
        uz: "Olma",
        en: "Apple",
    },
    {
        uz: "Gilos",
        en: "Cherry",
    },
    {
        uz: "Ananas",
        en: "Pineapple",
    },
    {
        uz: "Banan",
        en: "Banana",
    },
    {
        uz: "Qulupnay",
        en: "Strawberries",
    },
    {
        uz: "Uzum",
        en: "Grapes",
    },
    {
        uz: "Mandarin",
        en: "Mandarin",
    },
    {
        uz: "Kivi",
        en: "Kiwi",
    },
    {
        uz: "Shaftoli",
        en: "Peach",
    },
    {
        uz: "Anor",
        en: "Pomegranate",
    },
    {
        uz: "nok",
        en: "Pear",
    },
    {
        uz: "Avokado",
        en: "Avocado",
    },
    {
        uz: "Mango",
        en: "Mango",
    },
    {
        uz: "Limon",
        en: "Lemon",
    },
    {
        uz: "Tarvuz",
        en: "Watermelon",
    },
    {
        uz: "Qovun",
        en: "Melon",
    },
    {
        uz: "Apelsin",
        en: "Orange",
    },
    {
        uz: "Greypfrut",
        en: "Grapefruit",
    },
    {
        uz: "Anjir",
        en: "Fig",
    },
    {
        uz: "Xurmo",
        en: "Persimmon",
    },
    {
        uz: "Behi",
        en: "Quince",
    },
]

fruits.filter(item => {
    switch (mevalar.toLowerCase()){
        case item.uz.toLowerCase():
            text.textContent = item.en
            break;
    }
})






// let mevalar001 = prompt("Meva nomini kiriting")

// let fruits001 = [
//     {
//         uz: "Olma",
//         en: "Apple",
//     },
//     {
//         uz: "Gilos",
//         en: "Cherry",
//     },
//     {
//         uz: "Ananas",
//         en: "Pineapple",
//     },
//     {
//         uz: "Banan",
//         en: "Banana",
//     },
//     {
//         uz: "Qulupnay",
//         en: "Strawberries",
//     },
//     {
//         uz: "Uzum",
//         en: "Grapes",
//     },
//     {
//         uz: "Mandarin",
//         en: "Mandarin",
//     },
//     {
//         uz: "Kivi",
//         en: "Kiwi",
//     },
//     {
//         uz: "Shaftoli",
//         en: "Peach",
//     },
//     {
//         uz: "Anor",
//         en: "Pomegranate",
//     },
//     {
//         uz: "nok",
//         en: "Pear",
//     },
//     {
//         uz: "Avokado",
//         en: "Avocado",
//     },
//     {
//         uz: "Mango",
//         en: "Mango",
//     },
//     {
//         uz: "Limon",
//         en: "Lemon",
//     },
//     {
//         uz: "Tarvuz",
//         en: "Watermelon",
//     },
//     {
//         uz: "Qovun",
//         en: "Melon",
//     },
//     {
//         uz: "Apelsin",
//         en: "Orange",
//     },
//     {
//         uz: "Greypfrut",
//         en: "Grapefruit",
//     },
//     {
//         uz: "Anjir",
//         en: "Fig",
//     },
//     {
//         uz: "Xurmo",
//         en: "Persimmon",
//     },
//     {
//         uz: "Behi",
//         en: "Quince",
//     },
// ]

// fruits001.filter(item => {
//     if(item.uz == mevalar001){
//         console.log(item.en);
//     }
// })

// let month = prompt("Oy nomini kiriting")

// switch (key) {
//     case "Dekabr":
//     case "Yanvar":    
//     case "Fevral":  
//     console.log("Qish");
//         break;

//         case "Mart":
//         case "Aprel":    
//         case "May":
//             console.log("Bahor");  
//             break;

//             case "Iyun":
//             case "Iyul":    
//             case "Avgust":
//                 console.log("Yoz");  
//                 break; 
                
//                 case "Sentyabr":
//                 case "Oktyabr":    
//                 case "Noyabr":
//                     console.log("Kuz");  
//                     break;            
//     default:
//         break;
// }













