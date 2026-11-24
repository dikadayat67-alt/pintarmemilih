
/* =====================================
   1. MENUNGGU HALAMAN SELESAI DIMUAT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website PINTAR MEMILIH berhasil dimuat.");

    /* =====================================
       2. MENAMPILKAN TAHUN OTOMATIS
    ===================================== */

    const tahunSekarang = new Date().getFullYear();

    const elemenTahun = document.getElementById("tahun");

    if (elemenTahun) {
        elemenTahun.textContent = tahunSekarang;
    }

    /* =====================================
       3. MENANDAI MENU NAVIGASI AKTIF
    ===================================== */

    const semuaMenu = document.querySelectorAll(".nav-menu a");

    const halamanSekarang = window.location.pathname;

    semuaMenu.forEach(function (menu) {

        const alamatMenu = new URL(menu.href).pathname;

        if (alamatMenu === halamanSekarang) {
            menu.classList.add("active");
        }

    });

});


/* =====================================
   4. FUNGSI KEMBALI KE ATAS
===================================== */

function kembaliKeAtas() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
