
/* =========================================
   PINTAR MEMILIH
   TAHAP 12.3 - LOGIKA KUIS AKHIR
========================================= */


/* =========================================
   1. DATA SOAL KUIS
========================================= */

const daftarSoal = [

    // MATERI 1: PENGENALAN KPU

    {
        kategori: "Pengenalan KPU",
        pertanyaan: "Apa kepanjangan dari KPU?",
        pilihan: [
            "Komisi Pemilihan Umum",
            "Komite Pemungutan Umum",
            "Komisi Pengawasan Umum",
            "Komite Pemilihan Undang-Undang"
        ],
        jawaban: 0
    },

    {
        kategori: "Pengenalan KPU",
        pertanyaan: "Apa tugas utama KPU?",
        pilihan: [
            "Membuat undang-undang",
            "Menyelenggarakan pemilihan umum",
            "Mengadili pelanggaran hukum",
            "Mengawasi seluruh kegiatan pemerintahan"
        ],
        jawaban: 1
    },

    {
        kategori: "Pengenalan KPU",
        pertanyaan: "KPU merupakan lembaga penyelenggara pemilu yang bersifat...",
        pilihan: [
            "Sementara dan terbatas",
            "Independen dalam menjalankan tugasnya",
            "Berada di bawah partai politik",
            "Dikendalikan oleh peserta pemilu"
        ],
        jawaban: 1
    },


    // MATERI 2: PEMILU DAN DEMOKRASI

    {
        kategori: "Pemilu dan Demokrasi",
        pertanyaan: "Apa yang dimaksud dengan pemilihan umum?",
        pilihan: [
            "Kegiatan memilih pemimpin melalui mekanisme pemungutan suara",
            "Kegiatan kampanye partai politik",
            "Pertemuan seluruh anggota masyarakat",
            "Kegiatan penunjukan pemimpin secara langsung oleh pemerintah"
        ],
        jawaban: 0
    },

    {
        kategori: "Pemilu dan Demokrasi",
        pertanyaan: "Apa hubungan antara pemilu dan demokrasi?",
        pilihan: [
            "Pemilu menghambat demokrasi",
            "Pemilu merupakan salah satu sarana pelaksanaan demokrasi",
            "Pemilu hanya menguntungkan partai politik",
            "Pemilu tidak berhubungan dengan demokrasi"
        ],
        jawaban: 1
    },

    {
        kategori: "Pemilu dan Demokrasi",
        pertanyaan: "Apa asas pemilu di Indonesia?",
        pilihan: [
            "Cepat, mudah, dan murah",
            "Bebas, terbuka, dan terbatas",
            "Langsung, umum, bebas, rahasia, jujur, dan adil",
            "Terbuka, wajib, dan mengikat"
        ],
        jawaban: 2
    },

    {
        kategori: "Pemilu dan Demokrasi",
        pertanyaan: "Mengapa pemilu penting dalam negara demokrasi?",
        pilihan: [
            "Untuk membatasi hak masyarakat",
            "Untuk memberikan kesempatan kepada rakyat memilih wakil dan pemimpinnya",
            "Untuk menentukan kekayaan masyarakat",
            "Untuk menghapus perbedaan pendapat"
        ],
        jawaban: 1
    },


    // MATERI 3: PEMILIH PEMULA

    {
        kategori: "Pemilih Pemula",
        pertanyaan: "Siapa yang disebut sebagai pemilih pemula?",
        pilihan: [
            "Orang yang baru pertama kali menggunakan hak pilihnya",
            "Orang yang sudah pernah menjadi anggota DPR",
            "Orang yang menjadi anggota partai politik",
            "Orang yang bertugas di TPS"
        ],
        jawaban: 0
    },

    {
        kategori: "Pemilih Pemula",
        pertanyaan: "Apa yang perlu dilakukan pemilih pemula sebelum menggunakan hak pilih?",
        pilihan: [
            "Mengikuti pilihan teman",
            "Mempelajari informasi tentang calon dan peserta pemilu",
            "Memilih berdasarkan hadiah",
            "Menghindari informasi kepemiluan"
        ],
        jawaban: 1
    },

    {
        kategori: "Pemilih Pemula",
        pertanyaan: "Mengapa pemilih pemula perlu memahami pemilu?",
        pilihan: [
            "Agar dapat memengaruhi pilihan orang lain",
            "Agar dapat menggunakan hak pilih secara sadar dan bertanggung jawab",
            "Agar mendapatkan keuntungan pribadi",
            "Agar tidak perlu mengikuti pemilu berikutnya"
        ],
        jawaban: 1
    },


    // MATERI 4: JENIS-JENIS PEMILIHAN

    {
        kategori: "Jenis-Jenis Pemilihan",
        pertanyaan: "Pemilihan Presiden dan Wakil Presiden dilaksanakan untuk memilih...",
        pilihan: [
            "Kepala desa",
            "Presiden dan Wakil Presiden",
            "Anggota DPRD",
            "Gubernur dan Wakil Gubernur"
        ],
        jawaban: 1
    },

    {
        kategori: "Jenis-Jenis Pemilihan",
        pertanyaan: "Pemilihan kepala daerah atau Pilkada digunakan untuk memilih...",
        pilihan: [
            "Presiden dan Wakil Presiden",
            "Anggota DPR RI",
            "Gubernur, Bupati, dan Wali Kota",
            "Ketua partai politik"
        ],
        jawaban: 2
    },

    {
        kategori: "Jenis-Jenis Pemilihan",
        pertanyaan: "Lembaga perwakilan rakyat yang dipilih melalui pemilu antara lain...",
        pilihan: [
            "DPR, DPD, dan DPRD",
            "KPU, Bawaslu, dan DKPP",
            "Polri, TNI, dan Kejaksaan",
            "Kementerian dan lembaga negara"
        ],
        jawaban: 0
    },


    // MATERI 5: TATA CARA MENGGUNAKAN HAK PILIH

    {
        kategori: "Tata Cara Menggunakan Hak Pilih",
        pertanyaan: "Apa yang harus dilakukan pemilih sebelum datang ke TPS?",
        pilihan: [
            "Memastikan informasi lokasi TPS dan status pemilih",
            "Memilih calon berdasarkan ajakan orang lain",
            "Membawa surat suara sendiri",
            "Menentukan hasil penghitungan suara"
        ],
        jawaban: 0
    },

    {
        kategori: "Tata Cara Menggunakan Hak Pilih",
        pertanyaan: "Apa yang dilakukan pemilih setelah tiba di TPS?",
        pilihan: [
            "Langsung mengambil seluruh surat suara",
            "Melapor kepada petugas KPPS dan mengikuti prosedur pendaftaran",
            "Langsung menghitung suara",
            "Membagikan surat suara kepada orang lain"
        ],
        jawaban: 1
    },

    {
        kategori: "Tata Cara Menggunakan Hak Pilih",
        pertanyaan: "Di mana pemilih memberikan suara pada surat suara?",
        pilihan: [
            "Di tempat terbuka",
            "Di bilik suara",
            "Di luar area TPS",
            "Di depan peserta pemilu"
        ],
        jawaban: 1
    },

    {
        kategori: "Tata Cara Menggunakan Hak Pilih",
        pertanyaan: "Apa yang dilakukan setelah selesai mencoblos?",
        pilihan: [
            "Membawa surat suara pulang",
            "Memasukkan surat suara ke kotak suara sesuai petunjuk petugas",
            "Memberikan surat suara kepada saksi",
            "Mengubah pilihan orang lain"
        ],
        jawaban: 1
    },


    // MATERI 6: PEMILIH CERDAS DAN RASIONAL

    {
        kategori: "Pemilih Cerdas dan Rasional",
        pertanyaan: "Bagaimana cara menjadi pemilih yang cerdas?",
        pilihan: [
            "Memilih berdasarkan uang",
            "Memilih karena tekanan orang lain",
            "Mencari informasi dan menilai calon secara objektif",
            "Mengikuti berita tanpa memeriksa kebenarannya"
        ],
        jawaban: 2
    },

    {
        kategori: "Pemilih Cerdas dan Rasional",
        pertanyaan: "Apa yang dimaksud dengan politik uang?",
        pilihan: [
            "Pemberian uang atau materi untuk memengaruhi pilihan pemilih",
            "Kegiatan pendidikan politik",
            "Kegiatan kampanye yang sesuai aturan",
            "Penyampaian visi dan misi calon"
        ],
        jawaban: 0
    },

    {
        kategori: "Pemilih Cerdas dan Rasional",
        pertanyaan: "Apa yang sebaiknya dilakukan ketika menerima informasi pemilu yang belum jelas kebenarannya?",
        pilihan: [
            "Langsung menyebarkannya",
            "Memercayainya tanpa memeriksa",
            "Memeriksa sumber dan kebenaran informasi terlebih dahulu",
            "Mengubah informasi tersebut"
        ],
        jawaban: 2
    }

];


/* =========================================
   2. VARIABEL SISTEM KUIS
========================================= */

let nomorSekarang = 0;

let jawabanPengguna = new Array(daftarSoal.length).fill(null);

const totalSoal = daftarSoal.length;

const nilaiPerSoal = 100 / totalSoal;


/* =========================================
   3. MENGAMBIL ELEMEN HTML
========================================= */

const btnMulaiKuis = document.getElementById("btnMulaiKuis");

const quizContainer = document.getElementById("quizContainer");

const quizIntro = document.querySelector(".quiz-intro");

const hasilKuis = document.getElementById("hasilKuis");

const nomorSoal = document.getElementById("nomorSoal");

const jumlahTerjawab = document.getElementById("jumlahTerjawab");

const progressBar = document.getElementById("progressBar");

const kategoriSoal = document.getElementById("kategoriSoal");

const pertanyaanSoal = document.getElementById("pertanyaanSoal");

const pilihanJawaban = document.getElementById("pilihanJawaban");

const btnSebelumnya = document.getElementById("btnSebelumnya");

const btnSelanjutnya = document.getElementById("btnSelanjutnya");

const btnSelesai = document.getElementById("btnSelesai");

const nilaiAkhir = document.getElementById("nilaiAkhir");

const predikatNilai = document.getElementById("predikatNilai");

const jawabanBenar = document.getElementById("jawabanBenar");

const jawabanSalah = document.getElementById("jawabanSalah");

const totalSoalElement = document.getElementById("totalSoal");

const btnUlangiKuis = document.getElementById("btnUlangiKuis");


/* =========================================
   4. FUNGSI MEMULAI KUIS
========================================= */

function mulaiKuis() {

    nomorSekarang = 0;

    jawabanPengguna = new Array(totalSoal).fill(null);

    quizIntro.hidden = true;

    hasilKuis.hidden = true;

    quizContainer.hidden = false;

    tampilkanSoal();

}


/* =========================================
   5. FUNGSI MENAMPILKAN SOAL
========================================= */

function tampilkanSoal() {

    const soal = daftarSoal[nomorSekarang];

    // Menampilkan nomor soal

    nomorSoal.textContent =
        `Soal ${nomorSekarang + 1} dari ${totalSoal}`;


    // Menghitung jumlah soal yang dijawab

    const jumlahJawaban = jawabanPengguna.filter(
        jawaban => jawaban !== null
    ).length;

    jumlahTerjawab.textContent =
        `Terjawab: ${jumlahJawaban}/${totalSoal}`;


    // Mengatur progress bar

    progressBar.style.width =
        `${(jumlahJawaban / totalSoal) * 100}%`;


    // Menampilkan kategori materi

    kategoriSoal.textContent =
        `Materi: ${soal.kategori}`;


    // Menampilkan pertanyaan

    pertanyaanSoal.textContent = soal.pertanyaan;


    // Menghapus pilihan jawaban sebelumnya

    pilihanJawaban.innerHTML = "";


    // Menampilkan pilihan A, B, C, D

    const hurufPilihan = ["A", "B", "C", "D"];

    soal.pilihan.forEach((pilihan, index) => {

        const label = document.createElement("label");

        label.className = "quiz-option";


        // Membuat radio button

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = "jawaban";

        radio.value = index;


        // Memeriksa jawaban yang sudah dipilih

        if (jawabanPengguna[nomorSekarang] === index) {

            radio.checked = true;

            label.classList.add("selected");

        }


        // Ketika pengunjung memilih jawaban

        radio.addEventListener("change", function () {

            jawabanPengguna[nomorSekarang] = index;

            tampilkanSoal();

        });


        // Membuat teks pilihan

        const teksPilihan = document.createElement("span");

        teksPilihan.textContent =
            `${hurufPilihan[index]}. ${pilihan}`;


        // Memasukkan radio dan teks ke label

        label.appendChild(radio);

        label.appendChild(teksPilihan);

        pilihanJawaban.appendChild(label);

    });


    // Mengatur tombol sebelumnya

    btnSebelumnya.disabled = nomorSekarang === 0;


    // Mengatur tombol selanjutnya dan selesai

    if (nomorSekarang === totalSoal - 1) {

        btnSelanjutnya.hidden = true;

        btnSelesai.hidden = false;

    } else {

        btnSelanjutnya.hidden = false;

        btnSelesai.hidden = true;

    }

}


/* =========================================
   6. FUNGSI PINDAH SOAL BERIKUTNYA
========================================= */

function soalSelanjutnya() {

    if (nomorSekarang < totalSoal - 1) {

        nomorSekarang++;

        tampilkanSoal();

    }

}


/* =========================================
   7. FUNGSI KEMBALI KE SOAL SEBELUMNYA
========================================= */

function soalSebelumnya() {

    if (nomorSekarang > 0) {

        nomorSekarang--;

        tampilkanSoal();

    }

}


/* =========================================
   8. FUNGSI MENGHITUNG NILAI
========================================= */

function hitungNilai() {

    let benar = 0;

    let salah = 0;


    daftarSoal.forEach((soal, index) => {

        if (jawabanPengguna[index] === soal.jawaban) {

            benar++;

        } else {

            salah++;

        }

    });


    // Menghitung nilai akhir

    const nilai = Math.round(benar * nilaiPerSoal);


    return {

        benar: benar,

        salah: salah,

        nilai: nilai

    };

}


/* =========================================
   9. FUNGSI MENAMPILKAN HASIL KUIS
========================================= */

function tampilkanHasil() {

    // Memeriksa apakah semua soal sudah dijawab

    const belumDijawab = jawabanPengguna.filter(
        jawaban => jawaban === null
    ).length;


    if (belumDijawab > 0) {

        alert(
            `Masih ada ${belumDijawab} soal yang belum dijawab. Silakan lengkapi terlebih dahulu.`
        );

        return;

    }


    // Menghitung hasil

    const hasil = hitungNilai();

/* MENYIMPAN NILAI KUIS TERAKHIR */

const dataNilaiKuis = {

    nilai: hasil.nilai,

    benar: hasil.benar,

    salah: hasil.salah,

    tanggal: new Date().toLocaleDateString("id-ID")

};

localStorage.setItem(
    "pintarMemilihNilaiTerakhir",
    JSON.stringify(dataNilaiKuis)
);



    // Menampilkan nilai akhir

    nilaiAkhir.textContent = hasil.nilai;


    // Menampilkan jumlah jawaban benar

    jawabanBenar.textContent = hasil.benar;


    // Menampilkan jumlah jawaban salah

    jawabanSalah.textContent = hasil.salah;


    // Menampilkan jumlah soal

    totalSoalElement.textContent = totalSoal;


    // Menentukan predikat nilai

    if (hasil.nilai >= 90) {

        predikatNilai.textContent =
            "Sangat Baik! Pemahaman kepemiluanmu sangat bagus.";

    } else if (hasil.nilai >= 80) {

        predikatNilai.textContent =
            "Baik! Kamu sudah memahami materi kepemiluan.";

    } else if (hasil.nilai >= 70) {

        predikatNilai.textContent =
            "Cukup Baik! Terus tingkatkan pemahamanmu.";

    } else if (hasil.nilai >= 60) {

        predikatNilai.textContent =
            "Tetap semangat! Pelajari kembali materi kepemiluan.";

    } else {

        predikatNilai.textContent =
            "Jangan menyerah! Ayo pelajari kembali keenam materi.";

    }


    // Menyembunyikan halaman pengerjaan

    quizContainer.hidden = true;


    // Menampilkan halaman hasil

    hasilKuis.hidden = false;


    // Mengarahkan tampilan ke hasil kuis

    hasilKuis.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================
   10. FUNGSI MENGULANG KUIS
========================================= */

function ulangiKuis() {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin mengulang kuis dari awal?"
    );


    if (konfirmasi) {

        nomorSekarang = 0;

        jawabanPengguna =
            new Array(totalSoal).fill(null);


        hasilKuis.hidden = true;

        quizIntro.hidden = false;

        quizContainer.hidden = true;


        // Kembali ke bagian atas halaman

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   11. MENGHUBUNGKAN TOMBOL DENGAN FUNGSI
========================================= */

btnMulaiKuis.addEventListener(
    "click",
    mulaiKuis
);


btnSelanjutnya.addEventListener(
    "click",
    soalSelanjutnya
);


btnSebelumnya.addEventListener(
    "click",
    soalSebelumnya
);


btnSelesai.addEventListener(
    "click",
    tampilkanHasil
);


btnUlangiKuis.addEventListener(
    "click",
    ulangiKuis
);


/* =========================================
   12. MENAMPILKAN TAHUN OTOMATIS
========================================= */

const elemenTahun = document.getElementById("tahun");

if (elemenTahun) {

    elemenTahun.textContent = new Date().getFullYear();

}


/* =========================================
   AKHIR KODE KUIS PINTAR MEMILIH
========================================= */
