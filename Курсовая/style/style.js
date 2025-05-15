document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer-wrap');
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');
    let lastScrollPosition = window.pageYOffset;
    
    burgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        burgerMenu.classList.toggle('active');
        navigation.classList.toggle('active');
        
        if (navigation.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    navigation.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            burgerMenu.classList.remove('active');
            navigation.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('click', function(e) {
        if (!navigation.contains(e.target) && 
            !burgerMenu.contains(e.target) && 
            navigation.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navigation.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    function isElementVisible(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const elementTotalHeight = rect.bottom - rect.top;
        
        return visibleHeight >= (elementTotalHeight * 0.7);
    }
    
    function handleScroll() {
        const currentScrollPosition = window.pageYOffset;
        
        if (isElementVisible(footer)) {
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease-in-out';
            
            if (navigation.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                navigation.classList.remove('active');
                document.body.style.overflow = '';
            }
        } else {
            if (currentScrollPosition < lastScrollPosition) {
                header.style.transform = 'translateY(0)';
                header.style.transition = 'transform 0.3s ease-in-out';
            }
        }
        
        lastScrollPosition = currentScrollPosition;
    }
    
    window.addEventListener('scroll', handleScroll);

    window.addEventListener('resize', function() {
        if (window.innerWidth > 728 && navigation.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navigation.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
