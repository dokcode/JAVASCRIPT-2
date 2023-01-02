// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan
// nilaiAkhir (number), serta dataArray (array).
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
// jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang
// memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
// hasil pencarian dan menampilkannya ke layar/console.
// Contoh :
// SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// [8, 14, 17]

// Fullstack Web Developer Batch 1 Pijar Camp

// SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”
// SeleksiNilai(5, 17 , [2, 25, 4])
// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”
// SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
// Output:
// “Nilai tidak ditemukan”

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi nilaiAwal < nilaiAkhir
  if (nilaiAwal < nilaiAkhir) {
    // validasi dataArray harus array
    if (typeof nilaiAwal === 'number' && typeof nilaiAkhir === 'number' && Array.isArray(dataArray)) {
      // validasi semua elemen dalam dataArray harus bertipe number
      if (dataArray.every((item) => typeof item === 'number')) {
        // validasi panjang dataArray > 5
        if (dataArray.length > 5) {
          filterData(nilaiAwal, nilaiAkhir, dataArray);
        } else {
          console.log('Jumlah elemen dalam dataArray harus lebih dari 5');
        }
      } else {
        console.log('Semua elemen dalam dataArray harus bertipe number');
      }
    } else {
      console.log('Parameter pertama dan kedua harus bertipe number, lalu parameter ketiga harus bertipe array');
    }
  } else {
    console.log('Nilai akhir harus lebih besar dari nilai awal');
  }
};

const filterData = (nilaiAwal, nilaiAkhir, dataArray) => {
  const hasil = dataArray
    .filter((item) => {
      if (item >= nilaiAwal && item <= nilaiAkhir) {
        return item;
      }
    })
    .sort((a, b) => a - b);

  if (hasil.length > 0) {
    console.log(hasil);
  } else {
    console.log('Nilai tidak ditemukan');
  }
};

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); //validasi 1
// seleksiNilai(true, '8', undefined); // validasi 2
// seleksiNilai(5, 17, [27, undefined, null]); // validasi 3
// seleksiNilai(5, 17, [2, 25, 4]); // validasi 4
// seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // nilai tidak ditemukan
// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // berhasil
