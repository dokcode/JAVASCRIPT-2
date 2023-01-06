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

let name = ['Abigail', 'Alexandra', 'Alison', 'Ammanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
function cekData(str, num, cb) {
  try {
    valInput(str);
    valNum(num);
    cb(str, num, tampilkan);
  } catch (err) {
    console.log(err);
  }
}
function output(str, num, cb) {
  let result = name.filter((name) => name.toLowerCase().indexOf(str.toLowerCase()) !== -1);
  result = result.slice(0, num);
  if (result == '') {
    console.log(`Nilai tidak ditemukan`);
    return;
  }
  cb(result);
}
function valInput(str) {
  if (str == '') throw `input tidak boleh kosong`;
  if (Number(str)) throw `input tidak boleh number`;
}
function valNum(num) {
  if (num == '') throw `data tidak boleh kosong`;
  if (!Number(num)) throw `data harus berupa string`;
}
function tampilkan(result) {
  console.log(result);
}

cekData('an', 6, output);
