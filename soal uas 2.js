function proses() {
  // Deklarasi
  var Jam = document.getElementById("Jam").value;
  var Upah = document.getElementById("Upah").value;
  var Anak = document.getElementById("Anak").value;

  // menghitung hasil
  var Gaji = Jam * Upah;
  document.getElementById("Gaji").value = Gaji;

  // menghitung tunjangan
  var TA = Gaji * 0.1 * Anak;
  document.getElementById("TA").value = TA;

  // menghitung total gaji
  var Total = Gaji + TA;

  document.getElementById("Total").value = Total;
}
