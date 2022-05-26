var author = 'Reaver';
var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '.';
var dateTime = date;
var swals = Swal


async function mulai() {
    var {
        value: nama
    } = await swals.fire({
        title: 'Tuliskan Nama <u>kamu</u>?',
        input: 'text',
        confirmButtonText: 'Lanjut',
        imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979417086822608907/6.gif',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        showCancelButton: false,
        showCloseButton: false,
        focusConfirm: false
    });
    if (nama) {
        play();
        window.nama = nama;
        third_text = "Dari: " + author + ", Untuk: " + window.nama + ".";
        fifth_text = "Ciluk BAA, " + window.nama + "!";
        await swals.fire({
            title: `Hai Kamu, ${nama}! `,
            confirmButtonText: 'Lanjut',
            imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979418010588684308/bunga.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: `Jangan Lupa Semangat Jalani Harinya Yaa `,
            imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979418010349629460/cartoons.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: `Jangan Lupa Makan Dan Istirahat `,
            imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979418011184267284/peach-goma.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
    await swals.fire({
        title: `Jangan Sampai Sakit Loh `,
        imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979417087657263116/9.gif',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        focusConfirm: false
    });
    await swals.fire({
        title: `Kalo Sakit Marah Nih `,
        imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979418010081169418/tinju.gif',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        focusConfirm: false
    });
    await swals.fire({
        title: `Jangan Suka Begadang Juga Nanti Item Bawah Matanya `,
        imageUrl: 'https://cdn.discordapp.com/attachments/705726227276627968/979438269647441960/mochi-mochimochi.gif',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        focusConfirm: false
    });
        typing_first();
        showDiv();
        showFt();
        document.getElementById("namamu").innerHTML = "Halo, " + nama + "!";
    } else {
        await swals.fire({
            title: 'Isi namanya dudul',
            imageUrl: 'https://muhamadramdani.com/bucin/namanya.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: 'Gak boleh kosong',
            imageUrl: 'https://cdn.discordapp.com/attachments/504481286979846145/979322975880900628/mochi_2.gif',
            imageWidth: 250,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        iloveu();
    siap();
    whs();
        mulai();
    }
}

mulai();

function WhatsApp() {
    window.location = " " + "*" + nama + "*" + " udah bacain semuanya" + "%0A%0A" + "*" + nama + "*" + "%20" + window.sayang + " sama kamu " + "*" + window.persen + "*" + "%0A%0A" + dateTime;
}