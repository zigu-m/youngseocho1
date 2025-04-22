document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('#image-gallery img');
    
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 애니메이션 후 관찰 중지
            }
        });
    }, {
        threshold: 0.02 // 5% 보일 때 발동
    });

    // 모든 이미지 관찰 시작
    images.forEach(img => {
        observer.observe(img);
    });
});
