// Butonları ve soruyu seçiyoruz
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');

// "Evet" butonunun mevcut boyutlarını takip etmek için değişkenler
let yesButtonSize = 1.2; // Yazı tipi boyutu (rem)
let yesPaddingX = 30; // Yatay padding (px)
let yesPaddingY = 15; // Dikey padding (px)

// "Hayır" butonuna her basıldığında gösterilecek mesajlar
const noMessages = [
    "Emin misin?",
    "Gerçekten mi?",
    "Lütfen :(",
    "Son kararın mı?",
    "Bak çok üzülürüm...",
    "Hayır demeee",
    "Peki, buna bas?" // Bu son mesaj olacak
];

// "Hayır" butonuna kaç kez tıklandığını sayar
let noClickCount = 0;

// "Hayır" butonuna tıklandığında bu fonksiyon çalışacak
noButton.addEventListener('click', () => {
    // "Hayır" butonunun yazısını değiştir
    // (Dizideki mesaj sayısı biterse son mesajda kalır)
    noButton.textContent = noMessages[noClickCount];
    
    // Mesaj dizisinin sonuna gelmediysek sayacı artır
    if (noClickCount < noMessages.length - 1) {
        noClickCount++;
    }

    // "Evet" butonunun boyutlarını büyüt
    yesButtonSize += 0.5; // Yazı tipini büyüt
    yesPaddingX += 20;    // Genişliği artır
    yesPaddingY += 10;    // Yüksekliği artır

    yesButton.style.fontSize = `${yesButtonSize}rem`;
    yesButton.style.padding = `${yesPaddingY}px ${yesPaddingX}px`;

    // "Evet" butonu devasa olduğunda (6. tıklamadan sonra)
    if (noClickCount === noMessages.length - 1) {
        // "Hayır" butonunu gizle
        noButton.style.display = 'none';
        
        // Soruyu değiştir ve "Evet" butonunu tüm ekranı kaplayacak hale getir
        question.textContent = "EVET'TEN BAŞKA ŞANSIN YOK!";
        
        yesButton.style.position = 'fixed'; // Ekranı kaplaması için
        yesButton.style.top = '0';
        yesButton.style.left = '0';
        yesButton.style.width = '100vw'; // Tüm ekran genişliği
        yesButton.style.height = '100vh'; // Tüm ekran yüksekliği
        yesButton.style.borderRadius = '0'; // Köşeleri düzelt
    }
});

// "Evet" butonuna tıklandığında
yesButton.addEventListener('click', () => {
    // Soruyu ve gif'i değiştir
    question.textContent = "Barıştık! ❤️";
    document.querySelector('.gif').src = "https://media.tenor.com/gK9s2UWFFjMAAAAi/peach-goma-kiss.gif";
    
    // Butonları gizle
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});
