// Translation system
const translations = {
    ru: {
        navHome: 'Главная',
        navAbout: 'Обо мне',
        navPortfolio: 'Проекты',
        navContact: 'Контакты',
        heroTitle1: 'Чистый',
        heroTitle2: 'Веб-дизайн',
        heroSubtitle: 'Проектирую визуально точные интерфейсы: современный стиль, логичная структура и аккуратные анимации.',
        heroBtnWork: 'Смотреть проекты',
        heroBtnTouch: 'Обсудить задачу',
        aboutTitle: 'Обо мне',
        aboutText1: 'Я веб-дизайнер, который фокусируется на чистом визуальном языке, удобстве и понятной структуре интерфейсов. Для меня важны детали: типографика, ритм отступов, читаемость и последовательность компонентов.',
        aboutText2: 'В работе совмещаю дизайн и фронтенд-реализацию, чтобы итоговый сайт выглядел целостно, работал быстро и одинаково хорошо на мобильных устройствах и десктопе.',
        designSkill: 'UI/UX Дизайн',
        designDesc: 'Интерфейсы, ориентированные на пользователя',
        codeSkill: 'Frontend',
        codeDesc: 'Современная HTML/CSS/JS верстка',
        animSkill: 'Анимации',
        animDesc: 'Плавные и уместные микровзаимодействия',
        respSkill: 'Адаптивность',
        respDesc: 'Корректная работа на всех экранах',
        portfolioTitle: 'Избранные проекты',
        project1: 'Платформа e-commerce',
        project1Desc: 'Система управления товарами и заказами',
        project2: 'Веб-студия',
        project2Desc: 'Сайт с портфолио и услугами',
        project3: 'Маркетинговая платформа',
        project3Desc: 'Управление кампаниями и аналитика',
        project4: 'Приложение для управления',
        project4Desc: 'Система отслеживания проектов и задач',
        viewProject: 'Смотреть проект →',
        contactTitle: 'Давайте работать вместе',
        contactSubtitle: 'Есть идея проекта? Напишите, обсудим формат и сроки.',
        inputName: 'Ваше имя',
        inputEmail: 'Ваш email',
        inputMessage: 'Коротко опишите задачу',
        submitBtn: 'Отправить сообщение',
        footerText: '© 2026 Портфолио веб-дизайнера. Все права защищены.'
    },
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navPortfolio: 'Portfolio',
        navContact: 'Contact',
        heroTitle1: 'Creative',
        heroTitle2: 'Web Designer',
        heroSubtitle: 'Crafting beautiful digital experiences with modern design & smooth animations',
        heroBtnWork: 'View Work',
        heroBtnTouch: 'Get In Touch',
        aboutTitle: 'About Me',
        aboutText1: 'I\'m a passionate web designer specializing in creating stunning, user-friendly interfaces that blend aesthetics with functionality. With a keen eye for detail and a love for modern design trends, I transform ideas into beautiful digital experiences.',
        aboutText2: 'My approach combines clean design principles, smooth animations, and cutting-edge web technologies to deliver websites that not only look great but perform exceptionally.',
        designSkill: 'UI/UX Design',
        designDesc: 'User-centered design thinking',
        codeSkill: 'Frontend Dev',
        codeDesc: 'Modern web technologies',
        animSkill: 'Animations',
        animDesc: 'Smooth, engaging interactions',
        respSkill: 'Responsive',
        respDesc: 'Mobile-first approach',
        portfolioTitle: 'Featured Work',
        project1: 'E-Commerce Platform',
        project1Desc: 'Modern shopping experience',
        project2: 'Creative Agency',
        project2Desc: 'Bold & innovative design',
        project3: 'Tech Startup',
        project3Desc: 'Clean & professional',
        project4: 'Portfolio Website',
        project4Desc: 'Elegant showcase',
        viewProject: 'View Project →',
        contactTitle: 'Let\'s Work Together',
        contactSubtitle: 'Have a project in mind? I\'d love to hear about it.',
        inputName: 'Your Name',
        inputEmail: 'Your Email',
        inputMessage: 'Your Message',
        submitBtn: 'Send Message',
        footerText: '© 2024 Web Designer Portfolio. All rights reserved.'
    }
};

// Function to update page language
function switchLanguage(lang) {
    // Navigation
    document.querySelectorAll('.nav-links a')[0].textContent = translations[lang].navHome;
    document.querySelectorAll('.nav-links a')[1].textContent = translations[lang].navAbout;
    document.querySelectorAll('.nav-links a')[2].textContent = translations[lang].navPortfolio;
    document.querySelectorAll('.nav-links a')[3].textContent = translations[lang].navContact;

    // Hero Section
    const titleLines = document.querySelectorAll('.title-line');
    titleLines[0].textContent = translations[lang].heroTitle1;
    titleLines[1].textContent = translations[lang].heroTitle2;
    document.querySelector('.hero-subtitle').textContent = translations[lang].heroSubtitle;
    document.querySelectorAll('.hero-buttons .btn')[0].textContent = translations[lang].heroBtnWork;
    document.querySelectorAll('.hero-buttons .btn')[1].textContent = translations[lang].heroBtnTouch;

    // About Section
    document.querySelector('.about-card .section-title').textContent = translations[lang].aboutTitle;
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts[0].textContent = translations[lang].aboutText1;
    aboutTexts[1].textContent = translations[lang].aboutText2;

    // Skills
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems[0].querySelector('h3').textContent = translations[lang].designSkill;
    skillItems[0].querySelector('p').textContent = translations[lang].designDesc;
    skillItems[1].querySelector('h3').textContent = translations[lang].codeSkill;
    skillItems[1].querySelector('p').textContent = translations[lang].codeDesc;
    skillItems[2].querySelector('h3').textContent = translations[lang].animSkill;
    skillItems[2].querySelector('p').textContent = translations[lang].animDesc;
    skillItems[3].querySelector('h3').textContent = translations[lang].respSkill;
    skillItems[3].querySelector('p').textContent = translations[lang].respDesc;

    // Portfolio Section
    document.querySelector('.portfolio .section-title').textContent = translations[lang].portfolioTitle;
    const portfolioItems = document.querySelectorAll('.portfolio-overlay');
    portfolioItems[0].querySelector('h3').textContent = translations[lang].project1;
    portfolioItems[0].querySelector('p').textContent = translations[lang].project1Desc;
    portfolioItems[0].querySelector('a').textContent = translations[lang].viewProject;
    portfolioItems[1].querySelector('h3').textContent = translations[lang].project2;
    portfolioItems[1].querySelector('p').textContent = translations[lang].project2Desc;
    portfolioItems[1].querySelector('a').textContent = translations[lang].viewProject;
    portfolioItems[2].querySelector('h3').textContent = translations[lang].project3;
    portfolioItems[2].querySelector('p').textContent = translations[lang].project3Desc;
    portfolioItems[2].querySelector('a').textContent = translations[lang].viewProject;
    portfolioItems[3].querySelector('h3').textContent = translations[lang].project4;
    portfolioItems[3].querySelector('p').textContent = translations[lang].project4Desc;
    portfolioItems[3].querySelector('a').textContent = translations[lang].viewProject;

    // Contact Section
    document.querySelector('.contact-card .section-title').textContent = translations[lang].contactTitle;
    document.querySelector('.contact-subtitle').textContent = translations[lang].contactSubtitle;
    document.querySelectorAll('.glass-input')[0].placeholder = translations[lang].inputName;
    document.querySelectorAll('.glass-input')[1].placeholder = translations[lang].inputEmail;
    document.querySelectorAll('.glass-input')[2].placeholder = translations[lang].inputMessage;
    document.querySelector('.contact-form .btn').textContent = translations[lang].submitBtn;

    // Footer
    document.querySelector('.footer p').textContent = translations[lang].footerText;

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language to Russian
    switchLanguage('ru');

    // Drawer menu logic
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.querySelector('.drawer-menu');
    const overlay = document.querySelector('#drawerOverlay');
    const drawerClose = document.querySelector('.drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-links a');

    function closeDrawer() {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function openDrawer() {
        drawer.classList.add('active');
        overlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Open drawer on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (drawer.classList.contains('active')) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
    }

    // Close drawer on overlay click
    if (overlay) {
        overlay.addEventListener('click', closeDrawer);
    }

    // Close drawer on close button click
    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    // Close drawer when clicking on a link
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.about-card, .skill-item, .portfolio-item, .contact-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (navbar) {
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

});

// Initialize EmailJS
// Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key
// Get it from: https://dashboard.emailjs.com/admin/integration
if (typeof emailjs !== 'undefined') {
    emailjs.init('7NhVuB5A2LoE5hsvi'); // Replace with your EmailJS public key
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Get submit button for feedback
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        const originalBackground = submitButton.style.background;
        
        // Show loading state
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        try {
            // Check if EmailJS is configured
            if (typeof emailjs === 'undefined' || emailjs.init.toString().includes('YOUR_PUBLIC_KEY')) {
                // Fallback: Show demo message if EmailJS not configured
                throw new Error('EmailJS не настроен. Добавьте корректные ключи сервиса.');
            }
            
            // Send email using EmailJS
            // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' with your actual IDs
            const response = await emailjs.send(
                'web-design',    // Replace with your EmailJS Service ID
                'template_d3iqmz4',   // Replace with your EmailJS Template ID
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'nikitahill099@gmail.com' // Your email address
                }
            );
            
            // Success feedback
            submitButton.textContent = 'Отправлено! ✓';
            submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            submitButton.style.opacity = '1';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = originalBackground;
            }, 3000);
            
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Error feedback
            submitButton.textContent = 'Ошибка - попробуйте снова';
            submitButton.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            submitButton.style.opacity = '1';
            submitButton.disabled = false;
            
            // Show error message to user
            let errorMsg = document.querySelector('.form-error');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'form-error';
                errorMsg.style.cssText = 'color: #ef4444; text-align: center; margin-top: 15px; padding: 10px; background: rgba(239, 68, 68, 0.1); border-radius: 10px;';
                contactForm.appendChild(errorMsg);
            }
            
            if (error.message.toLowerCase().includes('не настроен') || error.message.toLowerCase().includes('not configured')) {
                errorMsg.textContent = 'Сервис отправки не настроен. Свяжитесь со мной напрямую или завершите настройку EmailJS.';
            } else {
                errorMsg.textContent = 'Не удалось отправить сообщение. Попробуйте еще раз или свяжитесь со мной напрямую.';
            }
            
            // Remove error message after 5 seconds
            setTimeout(() => {
                if (errorMsg) {
                    errorMsg.remove();
                }
                submitButton.textContent = originalText;
                submitButton.style.background = originalBackground;
            }, 5000);
        }
    });
}

// Parallax effect for background orbs
window.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Add hover effect to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Smooth reveal animation for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const titleLines = heroTitle.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            line.style.transition = 'all 0.8s ease-out';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--text-primary);
    }
    .nav-links a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Add cursor trail effect (optional enhancement)
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        cursorTrail.push({
            x: e.clientX,
            y: e.clientY,
            time: Date.now()
        });
        
        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
    // Scroll-based animations can be added here
}, 100);

window.addEventListener('scroll', throttledScroll);
