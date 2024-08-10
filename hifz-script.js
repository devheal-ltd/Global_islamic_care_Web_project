function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'হিফজ বিভাগ',
            text: 'হিফজ বিভাগে আমাদের বিভিন্ন সুযোগ সুবিধা সম্পর্কে জানুন!',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        alert('Sorry, your browser does not support the Web Share API.');
    }
}
