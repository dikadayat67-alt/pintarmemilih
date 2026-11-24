
/* =========================================
   PINTAR MEMILIH
   TAHAP 13 - SISTEM PROGRES PEMBELAJARAN
========================================= */


/* =========================================
   1. PENGATURAN SISTEM
========================================= */

// Jumlah seluruh materi pembelajaran

const totalMateri = 6;

// Nama penyimpanan progres

const kunciProgres = "pintarMemilihProgres";

// Mengambil data progres dari browser

function ambilProgres() {

    const data = localStorage.getItem(kunciProgres);

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
                nomor <= totalMateri
        );

    } catch (error) {

        return [];

    }

}


// Menyimpan progres ke browser

function simpanProgres(data) {

    localStorage.setItem(
        kunciProgres,
        JSON.stringify([...new Set(data)])
    );

}


/* =========================================
   2. MENGECEK MATERI YANG SUDAH SELESAI
========================================= */

function materiSelesai(nomor) {

    const progres = ambilProgres();

    return progres.includes(nomor);

}


// Memeriksa apakah materi dapat dibuka

function materiTerbuka(nomor) {

    if (nomor === 1) {
        return true;
    }

    return materiSelesai(nomor - 1);

}


// Menghitung jumlah materi yang selesai

function jumlahMateriSelesai() {

    return ambilProgres().length;

}


// Memeriksa seluruh materi

function semuaMateriSelesai() {

    return jumlahMateriSelesai() === totalMateri;

}


/* =========================================
   3. MENENTUKAN HALAMAN YANG SEDANG DIBUKA
========================================= */

function nomorHalamanMateri() {

    const halaman = window.location.pathname;

    const hasil = halaman.match(/materi-(\d+)\.html$/);

    if (hasil) {

        return Number(hasil[1]);

    }

    return null;

}


/* =========================================
   4. MEMBATASI AKSES MATERI
========================================= */

function periksaAksesMateri() {

    const nomor = nomorHalamanMateri();

    if (nomor === null) {
        return;
    }

    if (!materiTerbuka(nomor)) {

        alert(
            "Materi ini masih terkunci. Selesaikan materi sebelumnya terlebih dahulu."
        );

        window.location.replace("pembelajaran.html");

    }

}


/* =========================================
   5. MEMBUAT TOMBOL SELESAI MATERI
========================================= */

function buatTombolSelesai() {

    const nomor = nomorHalamanMateri();

    if (nomor === null) {
        return;
    }

    const navigasi = document.querySelector(
        ".material-navigation"
    );

    if (!navigasi) {
        return;
    }


    // Membuat tombol selesai

    const tombol = document.createElement("button");

    tombol.type = "button";

    tombol.id = "btnMateriSelesai";

    tombol.className = "learning-button";


    // Memeriksa status materi

    if (materiSelesai(nomor)) {

        tombol.textContent = "✓ Materi Sudah Selesai";

        tombol.disabled = true;

    } else {

        tombol.textContent = "Tandai Materi Selesai";

    }


    // Mengatur tampilan tombol

    tombol.style.border = "none";

    tombol.style.cursor = "pointer";

    tombol.style.margin = "10px 0";


    // Menambahkan tombol ke halaman

    navigasi.appendChild(tombol);


    // Proses ketika tombol diklik

    tombol.addEventListener("click", function () {

        if (materiSelesai(nomor)) {
            return;
        }

        const konfirmasi = confirm(
            "Apakah kamu sudah selesai mempelajari materi ini?"
        );

        if (!konfirmasi) {
            return;
        }


        // Mengambil progres sebelumnya

        const progres = ambilProgres();


        // Menambahkan materi yang selesai

        progres.push(nomor);


        // Menyimpan progres

        simpanProgres(progres);


        // Memberikan informasi

        alert(
            `Materi ${nomor} berhasil diselesaikan! Materi berikutnya sekarang terbuka.`
        );


        // Kembali ke daftar pembelajaran

        window.location.href = "pembelajaran.html";

    });

}


/* =========================================
   6. MENAMPILKAN PROGRES DI DAFTAR MATERI
========================================= */

function tampilkanProgres() {

    const container = document.querySelector(
        ".learning-container"
    );

    const daftarKartu = document.querySelectorAll(
        ".learning-card"
    );

    if (!container || daftarKartu.length === 0) {
        return;
    }


    // Menghitung progres

    const selesai = jumlahMateriSelesai();

    const persentase = Math.round(
        (selesai / totalMateri) * 100
    );


    // Membuat area informasi progres

    const areaProgres = document.createElement("div");

    areaProgres.className = "progress-information";


    areaProgres.innerHTML = `

        <h3>Progres Pembelajaran</h3>

        <p>
            Kamu telah menyelesaikan
            <strong>${selesai} dari ${totalMateri} materi</strong>.
        </p>

        <div class="learning-progress-bar">

            <div
                class="learning-progress-fill"
                style="width: ${persentase}%">
            </div>

        </div>

        <p class="progress-percentage">
            ${persentase}% selesai
        </p>

    `;


    // Memasukkan progres ke halaman

    const heading = container.querySelector(
        ".learning-heading"
    );

    if (heading) {

        heading.after(areaProgres);

    }


    // Mengatur setiap kartu materi

    daftarKartu.forEach((kartu, index) => {

        const nomor = index + 1;

        const tombol = kartu.querySelector("a");


        // Menentukan status materi

        const sudahSelesai = materiSelesai(nomor);

        const sudahTerbuka = materiTerbuka(nomor);


        // Membuat informasi status

        const status = document.createElement("p");

        status.className = "material-status";


        if (sudahSelesai) {

            status.textContent = "✓ Sudah Selesai";

            status.classList.add("status-complete");

        } else if (sudahTerbuka) {

            status.textContent = "● Sedang Terbuka";

            status.classList.add("status-open");

        } else {

            status.textContent = "🔒 Terkunci";

            status.classList.add("status-locked");

        }


        // Memasukkan status ke kartu

        const judul = kartu.querySelector("h3");

        if (judul) {

            judul.after(status);

        }


        // Mengatur tombol materi

        if (tombol) {

            if (sudahTerbuka) {

                tombol.textContent = sudahSelesai
                    ? "Pelajari Kembali"
                    : "Pelajari Materi";

                tombol.href = `materi-${nomor}.html`;

            } else {

                tombol.textContent = "Materi Terkunci";

                tombol.href = "#";

                tombol.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        alert(
                            "Selesaikan materi sebelumnya terlebih dahulu."
                        );

                    }
                );

            }

        }

    });


    // Memeriksa tombol kuis di navigasi

    document.querySelectorAll(
        'a[href="kuis.html"]'
    ).forEach(tombol => {

        if (!semuaMateriSelesai()) {

            tombol.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    alert(
                        "Selesaikan keenam materi sebelum mengikuti kuis akhir."
                    );

                    window.location.href = "pembelajaran.html";

                }
            );

        }

    });


    // Membuat tombol reset progres

    const tombolReset = document.createElement("button");

    tombolReset.type = "button";

    tombolReset.className = "reset-progress-button";

    tombolReset.textContent = "Reset Progres Pembelajaran";


    tombolReset.addEventListener("click", function () {

        const konfirmasi = confirm(
            "Apakah kamu yakin ingin menghapus seluruh progres pembelajaran?"
        );

        if (konfirmasi) {

            localStorage.removeItem(kunciProgres);

            alert("Progres pembelajaran berhasil direset.");

            window.location.reload();

        }

    });


    container.appendChild(tombolReset);

}


/* =========================================
   7. MEMBATASI AKSES HALAMAN KUIS
========================================= */

function periksaAksesKuis() {

    const halaman = window.location.pathname;

    if (halaman.endsWith("/kuis.html")) {

        if (!semuaMateriSelesai()) {

            alert(
                "Kuis akhir masih terkunci. Selesaikan keenam materi pembelajaran terlebih dahulu."
            );

            window.location.replace("pembelajaran.html");

        }

    }

}


/* =========================================
   8. MENJALANKAN SISTEM PROGRES
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Memeriksa akses materi

    periksaAksesMateri();


    // Memeriksa akses kuis

    periksaAksesKuis();


    // Membuat tombol selesai pada halaman materi

    buatTombolSelesai();


    // Menampilkan progres pada daftar pembelajaran

    tampilkanProgres();

});


/* =========================================
   AKHIR SISTEM PROGRES
========================================= */
