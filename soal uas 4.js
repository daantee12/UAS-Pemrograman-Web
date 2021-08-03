function proses() {
    var barang=document.getElementById("pilihan").value;

    var jumlah=document.getElementById("Jumlah").value;

    switch (barang) {
        case "Pilih Barang":
            alert("Pilih Barang Terlebih Dahulu!");
            break;
        case "Lcd":
            // Harga
            var hargaLcd= document.getElementById("Harga").value=500000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaLcd;
            break;
        case "Keyboard":
            // Harga
            var hargaKeyboard= document.getElementById("Harga").value=100000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaKeyboard;
            break;
        case "Mousepad":
            // Harga
            var hargaMousepad= document.getElementById("Harga").value=50000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaMousepad;
            break;
        case "Mouse":
            // Harga
            var hargaMouse= document.getElementById("Harga").value=100000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaMouse;
            break;
        case "Hardisk":
            // Harga
            var hargaHardisk= document.getElementById("Harga").value=150000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaHardisk;
            break;
        case "Usb":
            // Harga
            var hargaUsb= document.getElementById("Harga").value=85000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaUsb;
            break;
        case "Vga":
            // Harga
            var hargaVga= document.getElementById("Harga").value=1500000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaVga;
            break;
        case "Cpu":
            // Harga
            var hargaCpu= document.getElementById("Harga").value=15000000; 
            // Total
            document.getElementById("Total").value=jumlah*hargaCpu;
            break;
    
        default:
            alert("Data Tidak Valid!");
            break;
    }

  }