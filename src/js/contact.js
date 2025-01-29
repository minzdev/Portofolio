(function(){
    emailjs.init("IF_7xCx6ZgdVpJiQI"); // Initialize emailjs with your user ID
})();

document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();
    // ambil data dari form contact
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_x4np1cn', 'template_j997n3u',{
        from_name: name,
        from_email: email,
        message: message

    }).then(function (response) {
        Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Pesan Anda telah dikirim.",
            confirmButtonText: "OK",
            confirmButtonColor: "#4caf50",
        }).then(() => {
            contactForm.reset();
            setTimeout(() => {
                location.reload();
            }, 2000); // Tunggu 2 detik sebelum reload
            
        });
    })
    .catch(function (error) {
        Swal.fire({
            icon: "error",
            title: "Terjadi Kesalahan",
            text: "Gagal mengirim pesan. Coba lagi nanti.",
        });
        console.log("Error: ", error);
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = "Kirim";
    });
    
});