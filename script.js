
var typed = new Typed('.typed-text', {
    strings: [" وايت مياه صالحة للشرب", "معنا ستشعر بالفرق"],
    typeSpeed: 50, // سرعة الكتابة بالمللي ثانية
    startDelay: 500, // تأخير قبل بدء الكتابة
    backSpeed: 30, // سرعة المسح بالمللي ثانية
    backDelay: 1000, // تأخير قبل بدء المسح والانتقال للنص التالي
    loop: true, // تكرار الكتابة
    showCursor: false,
    smartBackspace: true // يمسح فقط الأحرف غير المتطابقة مع النص التالي
});
gsap.registerPlugin(ScrollTrigger);

// // Animation for #woman element

var loading  = document.querySelector(".loading")
window.onload = function(){
    loading.style.display = 'none';
}



