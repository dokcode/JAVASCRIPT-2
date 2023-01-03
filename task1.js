// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in
//     Functions) beserta contoh penggunaannya(kecuali : split, reverse,
//     join, foreach)

// 1. concat()
// Menggabungkan dua array atau lebih
const fruits = ['Apple', 'Mango', 'Pineapple'];
const fruitsTwo = ['Lemon'];
const fruitsThree = fruits.concat(fruitsTwo);

// console.log(fruitsThree)

// 2. includes()
// Mengembalikan nilai true jika terdapat array yang ditentukan
const cars = ['BMW', 'Toyota', 'Hyundai'];
const isCars = cars.includes('Toyota', 1); // start

// console.log(isCars);

// 3. indexOf()
// Mengembalikan index pertama dari nilai yang ditentukan
const stationary = ['Pencil', 'Bolpoint', 'Eraser'];
const showStationary = stationary.indexOf('Pencil');

// console.log(showStationary)

// 4. isArray()
// ? array
const weather = ['Hot', 'Rain', 'Cloud', 'Sunny'];
const isArr = Array.isArray(weather);

// console.log(isArr);

// 5. lastIndexOf()
// Mengembalikan posisi index terakhir
const month = ['January', 'February', 'March', 'April', 'May'];
const indexOfMonth = month.lastIndexOf('January', 1); // start

// console.log(indexOfMonth);

// 6. pop()
// Menghapus element terakhir
const musicalInstrument = ['Guiter', 'Drum', 'Piano'];
const removeMusical = musicalInstrument.pop();

// console.log(removeMusical);

// 7. push()
// Menambahkan item baru di akhir array
const country = ['Indonesian', 'Malaysia', 'Singapore'];
const addCountry = country.push('Vietnam');

// console.log(country)
//8.  Date
let date = Date();
console.log(date);
console.log('\n');

// console.log(revProvince);

// 9. shift()
// Menghapus item pertama
const drink = ['Coffe', 'Juice', 'Milk'];
const remDrink = drink.shift();

// console.log(drink);

// 10. unshift()
// Menambahkan elements baru ke array
const food = ['Fried rice', 'Grilled ribs', 'Soup'];
const addFood = food.unshift('Chicken');

// console.log(food);
