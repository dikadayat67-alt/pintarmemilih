
/* =========================================
   PINTAR MEMILIH
   TAHAP 14 - DASHBOARD PEMBELAJARAN
========================================= */


/* =========================================
   1. PENGATURAN DATA MATERI
========================================= */

const dataMateri = [

    {
        nomor: 1,
        judul: "Pengenalan KPU",
        halaman: "materi-1.html"
    },

    {
        nomor: 2,
        judul: "Mengenal Pemilu dan Demokrasi",
        halaman: "materi-2.html"
    },

    {
        nomor: 3,
        judul: "Pemilih Pemula",
        halaman: "materi-3.html"
    },

    {
        nomor: 4,
        judul: "Jenis-Jenis Pemilihan",
        halaman: "materi-4.html"
    },

    {
        nomor: 5,
        judul: "Tata Cara Menggunakan Hak Pilih",
        halaman: "materi-5.html"
    },

    {
        nomor: 6,
        judul: "Menjadi Pemilih Cerdas dan Rasional",
        halaman: "materi-6.html"
    }

];


/* =========================================
   2. MENGAMBIL DATA PROGRES
========================================= */

function ambilDataDashboard() {

    const data = localStorage.getItem(
        "pintarMemilihProgres"
    );

    if (!data) {
        return [];
    }

    try {

        const hasil = JSON.parse(data);

        if (!Array.isArray(hasil)) {
            return [];
        }

        return hasil.filter(
            nomor =>
                Number.isInteger(nomor) &&
                nomor >= 1 &&
                nomor <= 6
        );

    } catch (error) {

        return [];

    }

}


/* =========================================
   3. MENGAMBIL NILAI KUIS TERAKHIR
========================================= */

function ambilNilaiKuis() {

    const data = localStorage.getItem(
        "pintarMemilihNilaiTerakhir"
    );

    if (!data) {
        return null;
    }

    try {

        return JSON.parse(data);

    } catch (error) {

        return null;

    }

}


/* =========================================
   4. MENAMPILKAN RINGKASAN DASHBOARD
========================================= */

function tampilkanRingkasan() {

    const progres = ambilDataDashboard();

    const jumlahSelesai = progres.length;

    const totalMateri = dataMateri.length;

    const persentase = Math.round(
        (jumlahSelesai / totalMateri) * 100
    );


    // Menampilkan total materi

    document.getElementById(
        "totalMateri"
    ).textContent = totalMateri;


    // Menampilkan jumlah materi selesai

    document.getElementById(
        "materiSelesai"
    ).textContent = jumlahSelesai;


    // Menampilkan persentase progres

    document.getElementById(
        "persentaseProgres"
    ).textContent = persentase + "%";


    // Mengatur progress bar

    document.getElementById(
        "dashboardProgressFill"
    ).style.width = persentase + "%";


    // Menampilkan persentase detail

    document.getElementById(
        "persentaseDetail"
    ).textContent = persentase + "% selesai";


    // Menampilkan keterangan progres

    let keterangan = "";

    if (persentase === 0) {

        keterangan =
            "Ayo mulai perjalanan belajar kepemiluanmu!";

    } else if (persentase < 100) {

        keterangan =
            `Kamu telah menyelesaikan ${jumlahSelesai} dari ${totalMateri} materi. Terus lanjutkan!`;

    } else {

        keterangan =
            "Hebat! Kamu telah menyelesaikan seluruh materi pembelajaran.";

    }

    document.getElementById(
        "teksProgres"
    ).textContent = keterangan;

}


/* =========================================
   5. MENAMPILKAN STATUS SETIAP MATERI
========================================= */

function tampilkanStatusMateri() {

    const progres = ambilDataDashboard();

    const container = document.getElementById(
        "daftarStatusMateri"
    );

    container.innerHTML = "";


    dataMateri.forEach(materi => {

        const sudahSelesai = progres.includes(
            materi.nomor
        );

        const sudahTerbuka =
            materi.nomor === 1 ||
            progres.includes(materi.nomor - 1);


        // Membuat kartu materi

        const kartu = document.createElement("div");

        kartu.className = "dashboard-material-card";


        // Membuat nomor materi

        const nomor = document.createElement("div");

        nomor.className = "dashboard-material-number";

        nomor.textContent = String(
            materi.nomor
        ).padStart(2, "0");


        // Membuat informasi materi

        const informasi = document.createElement("div");

        informasi.className = "dashboard-material-info";


        const judul = document.createElement("h3");

        judul.textContent = materi.judul;


        const status = document.createElement("p");


        // Menentukan status materi

        if (sudahSelesai) {

            status.textContent = "✓ Selesai";

            status.className = "dashboard-complete";

        } else if (sudahTerbuka) {

            status.textContent = "Sedang Terbuka";

            status.className = "dashboard-open";

        } else {

            status.textContent = "🔒 Terkunci";

            status.className = "dashboard-locked";

        }


        informasi.appendChild(judul);

        informasi.appendChild(status);


        // Membuat tombol materi

        const tombol = document.createElement("a");

        tombol.className = "dashboard-material-button";


        if (sudahTerbuka) {

            tombol.href = materi.halaman;

            tombol.textContent = sudahSelesai
                ? "Pelajari Kembali"
                : "Mulai Belajar";

        } else {

            tombol.href = "pembelajaran.html";

            tombol.textContent = "Terkunci";

        }


        // Menggabungkan seluruh elemen

        kartu.appendChild(nomor);

        kartu.appendChild(informasi);

        kartu.appendChild(tombol);

        container.appendChild(kartu);

    });

}


/* =========================================
   6. MENAMPILKAN NILAI KUIS
========================================= */

function tampilkanNilaiKuis() {

    const nilai = ambilNilaiKuis();

    const elemenNilai = document.getElementById(
        "nilaiKuis"
    );


    if (nilai && Number.isFinite(nilai.nilai)) {

        elemenNilai.textContent =
            nilai.nilai;

    } else {

        elemenNilai.textContent = "-";

    }

}


/* =========================================
   7. MENGATUR STATUS KUIS AKHIR
========================================= */

function aturStatusKuis() {

    const progres = ambilDataDashboard();

    const tombol = document.getElementById(
        "tombolDashboardKuis"
    );

    const status = document.getElementById(
        "statusKuis"
    );


    if (progres.length === dataMateri.length) {

        status.textContent =
            "Selamat! Semua materi sudah selesai. Kamu dapat mengikuti kuis akhir.";

        tombol.textContent = "Mulai Kuis Akhir";

        tombol.href = "kuis.html";

        tombol.classList.remove("quiz-locked");

    } else {

        status.textContent =
            `Kamu masih harus menyelesaikan ${dataMateri.length - progres.length} materi sebelum membuka kuis akhir.`;

        tombol.textContent = "Kuis Masih Terkunci";

        tombol.href = "pembelajaran.html";

        tombol.classList.add("quiz-locked");

    }

}


/* =========================================
   8. MENJALANKAN DASHBOARD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        tampilkanRingkasan();

        tampilkanStatusMateri();

        tampilkanNilaiKuis();

        aturStatusKuis();

    }
);


/* =========================================
   AKHIR DASHBOARD PINTAR MEMILIH
========================================= */
