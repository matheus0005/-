document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card-main");
    const profilePhoto = document.querySelector(".profil-photo img");
    const socialLinks = document.querySelectorAll(".social-media a, .social-media button");
    const spotifyCard = document.querySelector(".main-spotify");
    const copyAlert = document.getElementById("copyAlert");

    // Sayfa açıldığında kart ve profil fotoğrafı animasyonu
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    profilePhoto.style.opacity = "0";
    profilePhoto.style.transform = "scale(0.8)";

    setTimeout(() => {
        card.style.transition = "0.8s ease-out";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        
        profilePhoto.style.transition = "0.8s ease-out";
        profilePhoto.style.opacity = "1";
        profilePhoto.style.transform = "scale(1)";
    }, 200);

    // Profil fotoğrafına hover efekti
    profilePhoto.addEventListener("mouseover", function () {
        profilePhoto.style.transform = "scale(1.1)";
        profilePhoto.style.boxShadow = "0px 4px 10px rgba(255, 255, 255, 0.5)";
    });

    profilePhoto.addEventListener("mouseleave", function () {
        profilePhoto.style.transform = "scale(1)";
        profilePhoto.style.boxShadow = "none";
    });

    // Spotify kart hover efekti
    spotifyCard.addEventListener("mouseover", function () {
        spotifyCard.style.transform = "translateY(-5px)";
        spotifyCard.style.transition = "0.3s ease";
    });

    spotifyCard.addEventListener("mouseleave", function () {
        spotifyCard.style.transform = "translateY(0)";
    });

    // Discord kopyalama bildirimi animasyonu
    document.getElementById("copydiscord").addEventListener("click", function () {
        copyAlert.style.visibility = "visible";
        copyAlert.style.opacity = "1";
        copyAlert.style.transform = "scale(1)";

        setTimeout(() => {
            copyAlert.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            copyAlert.style.opacity = "0";
            copyAlert.style.transform = "scale(0.8)";
        }, 2000);
    });
});
