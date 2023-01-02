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

const name = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

function searchName(subString, limit, callback) {
  let newName = name
    .filter((string) => string.toLowerCase().includes(subString.toLowerCase())) // filter pada variabel name
    .filter((string, index) => index < limit); // filter pada array baru setelah difilter awal
  callback(newName);
}

searchName('an', 3, (data) => {
  console.log(data); // contoh callback
});
