$(document).ready(function () {
    const tipeRumah = [
        {
            "nama": "Everwood Chalet",
            "deskripsi": "Nikmati ketenangan dan kenyamanan dalam Everwood Chalet, sebuah rumah log mewah yang terletak di tengah keindahan alam bersalju. Dengan desain klasik berbahan kayu solid dan sentuhan modern, rumah ini menawarkan kehangatan dan suasana alami yang sempurna untuk liburan atau hunian tetap. Dilengkapi dengan balkon luas untuk menikmati pemandangan hutan pinus yang menakjubkan, rumah ini memberikan pengalaman tinggal yang eksklusif dan menenangkan.",
            "harga":"4,5M",
            "luas_bangunan": 180,
            "luas_tanah": 300,
            "kamar_tidur": 3,
            "kamar_mandi": 2,
            "carport":"2",
        },
        {
            "nama": "Nordic Haven",
            "deskripsi": "Terletak di tengah hutan bersalju yang tenang, Nordic Haven menghadirkan kombinasi sempurna antara desain modern dan kehangatan alami rumah kayu. Dengan dinding kaca besar yang memungkinkan cahaya alami masuk, rumah ini menciptakan suasana nyaman dan luas. Balkon yang menghadap langsung ke alam sekitar menjadi tempat ideal untuk bersantai sambil menikmati pemandangan musim dingin yang memukau. Rumah ini sangat cocok untuk Anda yang mencari hunian bergaya kontemporer dengan nuansa rustic yang elegan.",
            "harga":"5M",
            "luas_bangunan": 200,
            "luas_tanah": 450,
            "kamar_tidur": 4,
            "kamar_mandi": 3,
            "carport":"2",
        },
        {
            "nama": "Barn Lodge",
            "deskripsi": "Rustic Barn Lodge adalah rumah unik dengan desain gudang klasik yang memancarkan kehangatan di tengah suasana pegunungan bersalju. Dinding bata merah yang kokoh memberikan tampilan autentik, sementara atap melengkungnya memastikan ketahanan terhadap cuaca ekstrem. Rumah ini cocok bagi mereka yang mencari kedamaian di alam terbuka tanpa mengorbankan kenyamanan modern.",
            "harga":"2,5M",
            "luas_bangunan": 180,
            "luas_tanah": 300,
            "kamar_tidur": 2,
            "kamar_mandi": 2,
            "carport":"1",
        },
        {
            "nama": "Mountain Retreat",
            "deskripsi": "Rasakan kehangatan rumah kayu bergaya rustic ini yang dikelilingi oleh alam. Dengan desain klasik yang menampilkan struktur kayu terbuka, langit-langit tinggi, dan perapian batu, rumah ini menawarkan kenyamanan sempurna untuk hunian atau vila liburan. Pencahayaan alami dari jendela besar semakin mempercantik suasana, memberikan pengalaman hidup yang menyatu dengan alam.",
            "harga":"1,5M",
            "luas_bangunan": 140,
            "luas_tanah": 300,
            "kamar_tidur": 2,
            "kamar_mandi": 2,
            "carport":"1",
        },
        {
            "nama": "Rustic Elegance",
            "deskripsi": "Nikmati kehangatan dan kemewahan dalam hunian bergaya rustic modern ini. Dilengkapi dengan dinding batu alam, kayu ekspos, serta pencahayaan alami yang melimpah, rumah ini menghadirkan suasana hangat dan nyaman di tengah alam. Interior yang elegan dengan langit-langit kayu dan perapian batu memberikan sentuhan klasik yang menawan, menjadikannya tempat tinggal sempurna bagi Anda yang menginginkan keseimbangan antara kemewahan dan ketenangan.",
            "harga":"4M-an",
            "luas_bangunan": 250,
            "luas_tanah": 400,
            "kamar_tidur": 4,
            "kamar_mandi": 3,
            "carport":"2",
        },
        {
            "nama": "Alpine Rustic Retreat",
            "deskripsi": "Nikmati kehangatan dan kenyamanan di Alpine Rustic Retreat, kabin kayu eksklusif yang menawarkan pengalaman tinggal di tengah alam pegunungan bersalju. Dengan desain interior kayu yang autentik, perapian sentral yang hangat, dan jendela besar yang menyajikan panorama indah, kabin ini adalah tempat sempurna untuk beristirahat dari hiruk-pikuk perkotaan. Ideal untuk tempat tinggal pribadi maupun investasi sebagai penginapan eksklusif.",
            "harga":"4,5M",
            "luas_bangunan": 180,
            "luas_tanah": 500,
            "kamar_tidur": 3,
            "kamar_mandi": 2,
            "carport":"2",
        },
    ];

    let container = $('#tipeRumahContainer');
    container.empty();

    tipeRumah.forEach((rumah, index) => {
        let isReverse = index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row';
        let imagePath = `./img/${index + 1}.jpg`;

        let rumahHTML = `
            <div class="w-full mb-8 md:mb-0 flex items-start justify-center flex-col-reverse ${isReverse}">
                <div class="w-full">
                    <div class="px-4 md:px-10 flex flex-col items-center text-center ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} justify-start">
                        <h3 class="my-4 lg:my-4 text-[1.5rem] lg:text-[2rem] text-brown">${rumah.nama}</h3>
                        <p class="line-clamp-2 md:line-clamp-3">${rumah.deskripsi}</p>
                        <div class="w-full lg:w-4/5 my-4 grid grid-cols-2 gap-4">
                            <div class="w-full p-4 flex flex-col items-start justify-start gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                <i class="text-[1.2rem] md:text-[1.5em] fa-solid fa-house text-brown"></i>
                                <span class="text-[1.3rem] md:text-[1.8em] text-brown">${rumah.luas_bangunan} m²</span>
                                <span class="mb-2">Luas Bangunan</span>
                            </div>
                            <div class="w-full p-4 flex flex-col items-start justify-start gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                <i class="text-[1.2rem] md:text-[1.5em] fa-solid fa-map text-brown"></i>
                                <span class="text-[1.3rem] md:text-[1.8em] text-brown">${rumah.luas_tanah} m²</span>
                                <span class="mb-2">Luas Tanah</span>
                            </div>
                            <div class="hidden w-full p-4 lg:flex flex-col items-start justify-start gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                <i class="text-[1.2rem] md:text-[1.5em] fa-solid fa-bed text-brown"></i>
                                <span class="text-[1.3rem] md:text-[1.8em] text-brown">${rumah.kamar_tidur}</span>
                                <span class="mb-2">Kamar Tidur</span>
                            </div>
                            <div class="hidden w-full p-4 lg:flex flex-col items-start justify-start gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                <i class="text-[1.2rem] md:text-[1.5em] fa-solid fa-shower text-brown"></i>
                                <span class="text-[1.3rem] md:text-[1.8em] text-brown">${rumah.kamar_mandi}</span>
                                <span class="mb-2">Kamar Mandi</span>
                            </div>
                        </div>
                        <a class="block w-full md:w-fit px-8 py-4 text-sm md:text-base rounded-lg bg-dark-green text-fur-white hover:-translate-y-1 focus:-translate-y-1 transition-all duration-[400ms]" 
                            href="./detail-rumah.html?id=${index}">
                            Selengkapnya
                        </a>
                    </div>
                </div>
                <div class="w-full px-8 md:px-0 flex items-center justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}">
                    <img class="w-full max-w-[600px] aspect-video md:aspect-square object-cover object-center rounded-xl shadow-md md:shadow-xl" src="${imagePath}" alt="${rumah.nama}" />
                </div>
            </div>
        `;
        container.append(rumahHTML);
    });

    const params = new URLSearchParams(window.location.search);
    let id = parseInt(params.get("id"));

    if (isNaN(id) || id < 0 || id >= tipeRumah.length) {
        id = 0;
    }

    const rumah = tipeRumah[id];

    $("#detailTipeRumah").html(`
        <h2 class="text-[1.8rem] lg:text-[3rem] text-center my-10">
            ${rumah.nama}
        </h2>

        <div class="w-full max-w-[1600px] min-h-screen mx-auto">
            <div class="w-full px-8 flex flex-col lg:flex-row items-start justify-center gap-8">
                <div class="w-full flex items-center justify-end">
                    <a class="cursor-zoom-in hover:brightness-75 focus-within:brightness-75 transition-all"
                        href="./img/${id+1}.jpg" data-fancybox="galeri-detail-rumah" data-caption="${rumah.nama}">
                        <img class="w-full aspect-video lg:aspect-square object-cover object-center rounded-xl shadow-xl" 
                            src="./img/${id+1}.jpg" alt="${rumah.nama}"/>
                    </a>
                </div>

                <div class="w-full">
                    <div class="w-full flex flex-col items-center justify-start">
                        <p class="text-justify indent-8 text-sm md:text-base lg:text-[1.12em]">
                            ${rumah.deskripsi}
                        </p>
                        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="w-full py-4 grid grid-cols-2 gap-4">
                                <div class="w-full p-4 flex flex-col items-start justify-center gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                    <i class="text-[1.2em] fa-solid fa-house text-brown"></i>
                                    <span class="text-[1.5em] text-brown">${rumah.luas_bangunan} m²</span>
                                    <span class="text-[.8em]">Luas Bangunan</span>
                                </div>
                                <div class="w-full p-4 flex flex-col items-start justify-center gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                    <i class="text-[1.2em] fa-solid fa-map text-brown"></i>
                                    <span class="text-[1.5em] text-brown">${rumah.luas_tanah} m²</span>
                                    <span class="text-[.8em]">Luas Tanah</span>
                                </div>
                                <div class="w-full p-4 flex flex-col items-start justify-center gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                    <i class="text-[1.2em] fa-solid fa-rupiah-sign text-brown"></i>
                                    <span class="text-[1.5em] text-brown">${rumah.harga}-an</span>
                                    <span class="text-[.8em]">Harga</span>
                                </div>
                                <div class="w-full p-4 flex flex-col items-start justify-center gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                    <i class="text-[1.2em] fa-solid fa-bed text-brown"></i>
                                    <span class="text-[1.5em] text-brown">${rumah.kamar_tidur}</span>
                                    <span class="text-[.8em]">Kamar Tidur</span>
                                </div>
                                <div class="w-full p-4 flex flex-col items-start justify-center gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                    <i class="text-[1.2em] fa-solid fa-shower text-brown"></i>
                                    <span class="text-[1.5em] text-brown">${rumah.kamar_mandi}</span>
                                    <span class="text-[.8em]">Kamar Mandi</span>
                                </div>
                                <div class="w-full p-4 flex flex-col items-start justify-center gap-2 border border-slate-300/50 bg-fur-white shadow-lg rounded-lg">
                                    <i class="text-[1.2em] fa-solid fa-car text-brown"></i>
                                    <span class="text-[1.5em] text-brown">${rumah.carport} mobil</span>
                                    <span class="text-[.8em]">Carport</span>
                                </div>
                            </div>
                            <div class="w-full md:py-4 flex flex-col gap-4">
                                <a class="cursor-zoom-in hover:brightness-75 focus-within:brightness-75 transition-all"
                                    href="./img/denah/${id+1}.jpg" data-fancybox="galeri-detail-rumah" data-caption="Denah ${rumah.nama}">
                                    <img class="w-full aspect-square rounded-lg shadow-lg"
                                        src="./img/denah/${id+1}.jpg" alt="Denah ${rumah.nama}">
                                </a>
                                <a class="px-6 py-4 flex items-center justify-center gap-2 text-[16px] bg-light-green text-fur-white rounded-lg 
                                    hover:bg-dark-green focus:bg-dark-green transition-colors duration-[400ms]"
                                    href="./kontak.html">
                                    Kontak Kami <i class="fa-solid fa-square-phone-flip"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);

    // Masukkan data ke dalam elemen HTML
    $("#textLuasBangunan").text(`${rumah.luas_bangunan} m²`);
    $("#textLuasTanah").text(`${rumah.luas_tanah} m²`);
    $("#textHarga").text(rumah.harga);
    $("#textKamarTidur").text(rumah.kamar_tidur);
    $("#textKamarMandi").text(rumah.kamar_mandi);
    $("#textCarport").text(rumah.carport);
    $("#gambarRumah").attr("src", `./img/${id}.jpg`).attr("alt", rumah.nama);
    $("#gambarDenah").attr("src", `./img/denah/${id}.jpg`).attr("alt", `Denah ${rumah.nama}`);
    $("#judulRumah").text(rumah.nama);

    // Menampilkan daftar rumah lain
    let daftarHTML = "";
    tipeRumah.forEach((item, index) => {
        if (index !== id) {
            daftarHTML += `
                <div class="w-full rounded-lg border border-slate-300/50 shadow-md">
                    <div class="w-full flex items-center justify-start gap-2">
                        <img class="size-[75px] object-center object-cover rounded-tl-lg rounded-br-lg" src="./img/${index+1}.jpg" alt="${item.nama}">
                        <a class="text-[1.2em] font-semibold" href="detail-rumah.html?id=${index}">
                            ${item.nama}
                        </a>
                    </div>
                    <div class="w-full p-2 flex items-center justify-center gap-2">
                        <div class="w-full">
                            <p class="text-[1.2em] border-r border-brown">
                                ${item.luas_bangunan} 
                                <br> 
                                <span class="text-[.8em]">Luas Bangunan</span>
                            </p>
                        </div>
                        <div class="w-full">
                            <p class="text-[1.2em] lg:border-r border-brown">
                                ${item.luas_tanah} 
                                <br> 
                                <span class="text-[.8em]">Luas Tanah</span>
                            </p>
                        </div>
                        <div class="hidden lg:block w-full">
                            <p class="text-[1.2em]">
                                ${item.kamar_tidur} 
                                <br> 
                                <span class="text-[.8em]">Kamar Tidur</span>
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
    });
    $("#daftarTipeRumahLain").html(daftarHTML);
});
