function hitung(){

    // Deklarasi
    var harga=document.getElementById("Harga").value;
    var jumlah=document.getElementById("Jumlah").value;

    // menghitung hasil
    var hasil= harga*jumlah;
    document.getElementById("Total").value=hasil;

    // menghitung diskon
    if(hasil<250000){
        diskon=0;
        document.getElementById("Diskon").value="tidak dapat diskon";
    }else{
        diskon=.2;
        document.getElementById("Diskon").value="20%";
    }

    // menghitung total yang harus dibayar sesudah diskon
    var totalbayar=hasil*diskon;
    bayar=hasil-totalbayar
    document.getElementById("Bayar").value=bayar;

}