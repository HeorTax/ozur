const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const gifElement = document.querySelector('.gif'); // GIF elementini seçtik

// Başlangıç "Evet" butonunun CSS değerlerini alalım
// Bu değerler style.css dosyasından gelmeli veya burada sabit tanımlanmalı
let initialYesFontSize = 1.2; // rem
let initialYesPaddingX = 30;  // px
let initialYesPaddingY = 15;  // px

// Büyüme faktörleri
const growthFactorFontSize = 0.4; // Her tıklamada yazı tipi ne kadar büyüsün (rem)
const growthFactorPaddingX = 20;  // Her tıklamada yatay dolgu ne kadar büyüsün (px)
const growthFactorPaddingY = 10;  // Her tıklamada dikey dolgu ne kadar büyüsün (px)

// "Hayır" butonuna basıldığında gösterilecek mesajlar
const noMessages = [
    "Emin misin?",
    "Gerçekten mi?",
    "Lütfen :(",
    "Son kararın mı?",
    "Bak çok üzülürüm...",
    "Hayır demeee",
    "EVET'TEN BAŞKA ÇIKIŞIN YOK!" // Bu son mesaj olacak, Hayır butonu kaybolmadan hemen önce
];

let noClickCount = 0; // "Hayır" butonu tıklama sayacı

noButton.addEventListener('click', () => {
    // "Hayır" butonunun yazısını değiştir
    if (noClickCount < noMessages.length - 1) {
        noButton.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        // Son mesaja geldiysek, butonu gizle ve son metni göster
        noButton.textContent = noMessages[noMessages.length - 1];
        setTimeout(() => {
            noButton.style.display = 'none';
        }, 300); // 0.3 saniye sonra gizle ki son mesaj okunsun
        question.textContent = "Barışmak zorundasın! 😉"; // Son aşamada soruyu değiştir
        gifElement.src = "https://media.tenor.com/IfwLAk3N0CgAAAAi/quby-pentol.gif"; // Yine aynı tatlış gif olsun
    }

    // "Evet" butonunun boyutlarını artır
    initialYesFontSize += growthFactorFontSize;
    initialYesPaddingX += growthFactorPaddingX;
    initialYesPaddingY += growthFactorPaddingY;

    yesButton.style.fontSize = `${initialYesFontSize}rem`;
    yesButton.style.padding = `${initialYesPaddingY}px ${initialYesPaddingX}px`;

    // Butonun ekrandan taşmaması için marginleri azaltabiliriz veya belirli bir büyüklükten sonra tam ekran yapabiliriz
    // Şu anki mantık, son tıklamada "Hayır" butonu kaybolduktan sonra "Evet" butonunun son halini alması
    // Bu, önceki isteğine göre son aşamada tam ekran olma durumunu biraz daha yumuşak yapıyor.
});

yesButton.addEventListener('click', () => {
    question.textContent = "Barıştık! ❤️";
    gifElement.src = "https://media.tenor.com/gK9s2UWFFjMAAAAi/peach-goma-kiss.gif"; // Öpüşen GIF
    
    // Butonları gizle
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    
    // Konteyneri ortala ve sadece gif ile mesajı göster
    document.querySelector('.container').style.justifyContent = 'center';
    document.querySelector('.container').style.alignItems = 'center';
});
