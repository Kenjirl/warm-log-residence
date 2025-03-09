$(document).ready(function () {
    const tipeRumah = [
        {
            "judul": "Everwood Chalet",
            "tanggal": "09 Maret 2025, 09:12 AM",
            "deskripsi": "Nikmati ketenangan dan kenyamanan dalam Everwood Chalet, sebuah rumah log mewah yang terletak di tengah keindahan alam bersalju. Dengan desain klasik berbahan kayu solid dan sentuhan modern, rumah ...",
        },
        {
            "judul": "Nordic Haven",
            "tanggal": "09 Maret 2025, 09:12 AM",
            "deskripsi": "Terletak di tengah hutan bersalju yang tenang, Nordic Haven menghadirkan kombinasi sempurna antara desain modern dan kehangatan alami rumah kayu. Dengan dinding kaca besar yang memungkinkan cahaya ...",
        },
        {
            "judul": "Barn Lodge",
            "tanggal": "09 Maret 2025, 09:12 AM",
            "deskripsi": "Rustic Barn Lodge adalah rumah unik dengan desain gudang klasik yang memancarkan kehangatan di tengah suasana pegunungan bersalju. Dinding bata merah yang kokoh memberikan tampilan autentik, ...",
        },
        {
            "judul": "Mountain Retreat",
            "tanggal": "09 Maret 2025, 09:12 AM",
            "deskripsi": "Rasakan kehangatan rumah kayu bergaya rustic ini yang dikelilingi oleh alam. Dengan desain klasik yang menampilkan struktur kayu terbuka, langit-langit tinggi, dan perapian batu, rumah ini ...",
        },
        {
            "judul": "Rustic Elegance",
            "tanggal": "09 Maret 2025, 09:12 AM",
            "deskripsi": "Nikmati kehangatan dan kemewahan dalam hunian bergaya rustic modern ini. Dilengkapi dengan dinding batu alam, kayu ekspos, serta pencahayaan alami yang melimpah, rumah ini menghadirkan suasana ...",
        },
        {
            "judul": "Alpine Rustic Retreat",
            "tanggal": "09 Maret 2025, 09:12 AM",
            "deskripsi": "Nikmati kehangatan dan kenyamanan di Alpine Rustic Retreat, kabin kayu eksklusif yang menawarkan pengalaman tinggal di tengah alam pegunungan bersalju. Dengan desain interior kayu yang autentik, ...",
        },
    ];

    tipeRumah.forEach((rumah, index) => {
        $('#daftarBlogContainer')
            .append(`
            <div class="w-full mb-4 flex items-start justify-center rounded-md border border-slate-300/50 shadow-sm">
                <div class="hidden md:block w-[350px] lg:w-[400px]">
                    <img class="w-[350px] lg:w-[400px] aspect-square object-cover object-center rounded-l-md"
                        src="./img/${index+1}.jpg" alt="${rumah.judul}">
                </div>
                <div class="w-full px-4 lg:px-8 py-4 flex flex-col items-start justify-start gap-2">
                    <h3 class="text-[1.5em] font-medium line-clamp-1">
                        ${rumah.judul}
                    </h3>
                    <span class="font-light">
                        <i class="fa-regular fa-calendar-days"></i>
                        ${rumah.tanggal}
                    </span>
                    <p class="text-justify line-clamp-3 my-2 font-light text-sm">
                        ${rumah.deskripsi}
                    </p>
                    <a class="w-fit block px-4 py-2 rounded-sm text-sm bg-light-green text-fur-white font-medium
                        hover:bg-dark-green focus:bg-dark-green transition-colors duration-[400ms]"
                        href="./detail-blog.html?id=${index}">
                        <i class="fa-solid fa-book-open"></i>
                        baca selengkapnya
                    </a>
                </div>
            </div>
        `);
    });

    tipeRumah.slice(-3).reverse().forEach((rumah, index) => {
        $("#blogTerbaruContainer")
            .append(`
                <a class="block w-full pt-4 pb-8 mb-1 border-b border-brown font-light text-sm"
                    href="./detail-blog.html?id=${tipeRumah.length - (index + 1)}">
                    <h4 class="w-full mb-4 text-justify line-clamp-2">
                        <b>${rumah.judul}</b>. ${rumah.deskripsi}
                    </h4>

                    <span class="font-light">
                        <i class="fa-regular fa-calendar-days"></i>
                        ${rumah.tanggal}
                    </span>
                </a>
            `);
    });

    $("#cari").on("keyup", function () {
        let searchValue = $(this).val().toLowerCase();
        $("#daftarBlogContainer > div").each(function () {
            let title = $(this).find("h3").text().toLowerCase();
            if (title.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // DETAIL BLOG
    const params = new URLSearchParams(window.location.search);
    let id = parseInt(params.get("id"));

    if (isNaN(id) || id < 0 || id >= tipeRumah.length) {
        id = 0;
    }

    const rumah = tipeRumah[id];

    $("#judulBlog").text(rumah.judul);

    $("#blogContainer").html(`
        <div class="w-full px-4 lg:px-0">
            <a class="cursor-zoom-in hover:brightness-75 focus-within:brightness-75 transition-all"
                href="./img/${id+1}.jpg" data-fancybox="galeri-blog" data-caption="${rumah.judul}">
                <img class="w-[600px] aspect-video mx-auto object-cover object-center rounded-lg"
                    src="./img/${id+1}.jpg" alt="${rumah.judul}">
            </a>
            <p class="w-full mt-4 text-center font-light">
                <i class="fa-regular fa-calendar-days"></i>
                ${rumah.tanggal}
            </p>
        </div>

        <div class="w-full min-h-screen px-4 lg:px-0 text-justify" id="detailBlog"></div>
    `);

    $.get(`./blog/${id + 1}.html`, function (data) {
        $("#detailBlog").html(data);
    }).fail(function () {
        $("#detailBlog").html("<p class='text-center text-red-500'>Konten tidak ditemukan.</p>");
    });
});