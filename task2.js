// Buatlah program searching nama yang dapat dibatasi jumlah
// outputnya yang menerapkan callback function dengan data
// sebagai berikut:
// const name = [
// "Abigail", "Alexandra", "Alison",
// "Amanda", "Angela", "Bella",
// "Carol", "Caroline", "Carolyn",
// "Deirdre", "Diana", "Elizabeth",
// "Ella", "Faith", "Olivia", "Penelope"]
// Contoh:
// searchName(“an”, 3, callback)

// Output:
// [“Alexandra”,”Amanda”,”Angela”]

const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function cekData(string, number, callback) {
  try {
    if (typeof string != 'string') throw 'inputkan data berupa string';
    filterData(string, number, callback);
  } catch (err) {
    console.log(err);
  }
}

function filterData(string, number, callback) {
  let result = nama.filter((nama) => nama.toLowerCase().indexOf(string.toLowerCase()) !== -1);
  result = result.slice(0, number);
  callback(result); //revisi, solved
}

function callback(result) {
  console.log(result);
}

cekData('an', 3, callback);
// cekData(4, 3, callback);
