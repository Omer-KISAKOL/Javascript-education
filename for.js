let meyve = ["Elma", "Armut", "Muz", "Portakal", "Karpuz"];

/* for(let i = 0; i < meyve.length; i++){
    console.log(meyve[i]);
} */

//NOTE - 0'dan 100'e kadar sayıları yazdır
/* for(let i = 0; i <= 100; i = i + 2){
    console.log(i);
}  */

//NOTE - sayı toplama
/* let sayilar = [10, 20, 5, 50, 100, 200];
let toplam = 0;

for(let i = 0; i < sayilar.length; i++ ){
    console.log(toplam = toplam + sayilar[i]);
} */

//NOTE - kısayol index
/* let sayilar = [10, 20, 5, 50, 100, 200];
let toplam = 0;

for(let i in sayilar){
    console.log(toplam += sayilar[i]);
} */


//NOTE - direkt sayılar alma
/* let sayilar = [10, 20, 5, 50, 100, 200];
let toplam = 0;

for(let sayi of sayilar){
    console.log(toplam += sayi);
} */

//NOTE - object ile döngü
/* const user = {
    "ad": "Emin",
    "soyad": "Başbayan",
    "email": "basbayanemin@gmail.com",
    "yas": 25
}

for(let key in user){
    console.log(user[key]);
}
 */

//ANCHOR - çoklu kullanıcı
let users =[
    {
        "id": "1",
        "ad": "Emin",
        "soyad": "Başbayan",
        "email": "basbayanemin@gmail.com",
        "yas": "25"
    },
    {
        "id": "2",
        "ad": "Ömer",
        "soyad": "Başbayan",
        "email": "basbayanemin@gmail.com",
        "yas": "25"
    },
    {
        "id": "3",
        "ad": "Bedirhan",
        "soyad": "Başbayan",
        "email": "basbayanemin@gmail.com",
        "yas": "25"
    },
]

for(let i = 0; i < users.length; i++){
    console.log(users[i].ad);
}


//REVIEW
/* console.log(users[0].ad);
console.log(users[1].ad);
console.log(users[2].ad); */