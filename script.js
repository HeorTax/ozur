const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');
const gifElement = document.querySelector('.gif');

// Başlangıç boyutları (CSS'ten geliyor)
let currentYesWidth = 100; // Başlangıç genişliği (tahmini px veya vw olarak düşün)
let currentYesHeight = 50; // Başlangıç yüksekliği (tahmini px veya vh olarak düşün)
let currentYesFontSize = 1.2; // rem

// Büyüme oranları (her tıklamada ne kadar büyüsün)
const widthGrowthPercent = 15;  // Genişlik her seferinde %15 artsın
const heightGrowthPercent = 10; // Yükseklik her seferinde %10 artsın
const fontSizeGrowthRem = 0.5;  // Yazı tipi her seferinde 0.5rem artsın

// "Hayır" butonuna her basıldığında gösterilecek mesajlar
const noMessages = [
    "Emin misin?",
    "Gerçekten mi?",
    "Lütfen :(",
    "Son kararın mı?",
    "Bak çok üzülürüm...",
    "Hayır demeee",
    "Buna basmak zorunda kalacaksın! 😏" // Son mesaj, "Hayır" kaybolmadan önce
];

let noClickCount = 0; // "Hayır" butonu tıklama sayacı

noButton.addEventListener('click', () => {
    // "Hayır" butonunun yazısını değiştir
    if (noClickCount < noMessages.length - 1) {
        noButton.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        // Son mesaja geldiysek, "Hayır" butonunu tamamen gizle ve "Evet"i tüm ekran yap
        noButton.style.display = 'none';
        question.textContent = "EVET'TEN BAŞKA SEÇENEĞİN YOKTU! ❤️";
        
        // "Evet" butonunu tüm ekranı kaplayacak hale getir
        yesButton.style.position = 'fixed';
        yesButton.style.top = '0';
        yesButton.style.left = '0';
        yesButton.style.width = '100vw'; // Tüm ekran genişliği
        yesButton.style.height = '100vh'; // Tüm ekran yüksekliği
        yesButton.style.fontSize = '8rem'; // Yazı tipini daha da büyüt
        yesButton.style.borderRadius = '0'; // Köşeleri düzelt
        yesButton.style.zIndex = '999'; // En öne getir
        
        return; // İşlemi bitir, daha fazla büyüme olmasın
    }

    // "Evet" butonunun boyutlarını oransal olarak artır
    currentYesWidth *= (1 + widthGrowthPercent / 100);
    currentYesHeight *= (1 + heightGrowthPercent / 100);
    currentYesFontSize += fontSizeGrowthRem;

    yesButton.style.width = `${currentYesWidth}px`; // Genişliği artır
    yesButton.style.height = `${currentYesHeight}px`; // Yüksekliği artır
    yesButton.style.fontSize = `${currentYesFontSize}rem`; // Yazı tipini artır

    // Butonun bulunduğu konumun ortadan kaymasını engellemek için
    // Bu, CSS'teki display: flex; justify-content: center; align-items: center; ile zaten sağlanıyor.
    // Ancak buton çok büyüdüğünde ekrandan taşmasını engellemek için max-width/height ekleyebiliriz veya direkt tam ekran moduna geçişi hızlandırabiliriz.
    // Şimdilik sadece boyutu büyütüyoruz, tam ekran geçişi son adımda olacak.
});


yesButton.addEventListener('click', () => {
    question.textContent = "Barıştık! Çok Seviyorum! ❤️";
    gifElement.src = "https://media.tenor.com/gK9s2UWFFjMAAAAi/peach-goma-kiss.gif";
    
    // Butonları gizle
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    
    // Konteyneri ortala ve sadece gif ile mesajı göster
    document.querySelector('.container').style.justifyContent = 'center';
    document.querySelector('.container').style.alignItems = 'center';
});
