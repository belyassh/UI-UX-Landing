// Translation system
const translations = {
    ru: {
        navHome: 'Главная',
        navBenefits: 'Преимущества',
        navFaq: 'FAQ',
        navCta: 'Заявка',
        heroTitle1: 'Чистый',
        heroTitle2: 'Веб-дизайн',
        heroSubtitle: 'Проектирую визуально точные интерфейсы: современный стиль, логичная структура и аккуратные анимации.',
        heroBtnCta: 'Оставить заявку',
        heroBtnLearnMore: 'Узнать больше',
        benefitsTitle: 'Почему выбирают мою работу',
        benefit1Title: 'UI/UX Дизайн',
        benefit1Desc: 'Интерфейсы, ориентированные на пользователя, с фокусом на удобство и эстетику',
        benefit2Title: 'Чистая верстка',
        benefit2Desc: 'Современная HTML/CSS/JS реализация, оптимизированная под все браузеры',
        benefit3Title: 'Гладкие анимации',
        benefit3Desc: 'Плавные и уместные микровзаимодействия, которые улучшают UX',
        benefit4Title: 'Адаптивный дизайн',
        benefit4Desc: 'Корректная работа на всех экранах — от мобильных до десктопов',
        faqTitle: 'Часто задаваемые вопросы',
        faq1Q: 'Как долго обычно занимает проект?',
        faq1A: 'Сроки зависят от сложности задачи. Простой сайт — 2-3 недели, сложный проект — 4-8 недель. На первой встрече мы обсудим детали и согласуем точные сроки.',
        faq2Q: 'Какие технологии вы используете?',
        faq2A: 'Я работаю с современным стеком: HTML5, CSS3, JavaScript, Vue.js/React. Для дизайна использую Figma. Все проекты оптимизированы под производительность и SEO.',
        faq3Q: 'Предоставляете ли вы поддержку после запуска?',
        faq3A: 'Да, я предлагаю пакеты поддержки. После запуска даю 2 недели бесплатной правки. Затем возможна поддержка на условиях, которые мы обсудим заранее.',
        faq4Q: 'Во сколько обойдется проект?',
        faq4A: 'Стоимость зависит от объема работы. Минимальная цена за проект — $1500. Для точной оценки нужно обсудить требования. Предлагаю бесплатную консультацию.',
        faq5Q: 'Как организован процесс работы?',
        faq5A: 'Процесс: 1. Консультация — обсуждение целей. 2. Дизайн — прототипы в Figma. 3. Разработка — верстка и программирование. 4. Тестирование и правки. 5. Запуск и поддержка.',
        faq6Q: 'Жду ответа. Как быстро вы отвечаете?',
        faq6A: 'Я отвечаю на письма в течение 24 часов в рабочие дни. Сложные вопросы обсуждаю на первой встрече. Прошу быть терпеливым — качество работы для меня важнее скорости ответа.',
        ctaTitle: 'Готовы начать проект?',
        ctaSubtitle: 'Заполните простую форму, и я свяжусь с вами в течение 24 часов',
        inputName: 'Ваше имя',
        inputEmail: 'Ваш email',
        inputMessage: 'Коротко опишите вашу идею проекта',
        submitBtn: 'Отправить заявку',
        footerText: '© 2026 Портфолио веб-дизайнера. Все права защищены.'
    },
    en: {
        navHome: 'Home',
        navBenefits: 'Benefits',
        navFaq: 'FAQ',
        navCta: 'Request',
        heroTitle1: 'Creative',
        heroTitle2: 'Web Designer',
        heroSubtitle: 'Crafting beautiful digital experiences with modern design & smooth animations',
        heroBtnCta: 'Get Started',
        heroBtnLearnMore: 'Learn More',
        benefitsTitle: 'Why Choose My Work',
        benefit1Title: 'UI/UX Design',
        benefit1Desc: 'User-centered interfaces focused on usability and aesthetics',
        benefit2Title: 'Clean Code',
        benefit2Desc: 'Modern HTML/CSS/JS implementation optimized for all browsers',
        benefit3Title: 'Smooth Animations',
        benefit3Desc: 'Fluid, purposeful interactions that enhance the user experience',
        benefit4Title: 'Responsive Design',
        benefit4Desc: 'Perfect rendering from mobile devices to desktop screens',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'How long does a project usually take?',
        faq1A: 'Timeline depends on complexity. A simple website takes 2-3 weeks, complex projects take 4-8 weeks. We\'ll discuss details and agree on exact timing during our first meeting.',
        faq2Q: 'What technologies do you use?',
        faq2A: 'I work with modern stack: HTML5, CSS3, JavaScript, Vue.js/React. For design, I use Figma. All projects are optimized for performance and SEO.',
        faq3Q: 'Do you offer support after launch?',
        faq3A: 'Yes, I offer support packages. After launch, I provide 2 weeks of free revisions. Further support is available on terms we discuss beforehand.',
        faq4Q: 'How much does a project cost?',
        faq4A: 'Pricing depends on the scope of work. Starting price is $1500 per project. For accurate estimate, let\'s discuss your requirements. I offer a free consultation.',
        faq5Q: 'How is the work process organized?',
        faq5A: 'Process: 1. Consultation — discuss goals. 2. Design — create Figma prototypes. 3. Development — code and program. 4. Testing and revisions. 5. Launch and support.',
        faq6Q: 'Waiting for your reply. How quickly do you respond?',
        faq6A: 'I respond to emails within 24 hours on business days. Complex questions are discussed at our first meeting. I prioritize quality over speed.',
        ctaTitle: 'Ready to Start a Project?',
        ctaSubtitle: 'Fill out a simple form, and I\'ll get back to you within 24 hours',
        inputName: 'Your Name',
        inputEmail: 'Your Email',
        inputMessage: 'Describe your project idea',
        submitBtn: 'Submit Request',
        footerText: '© 2024 Web Designer Portfolio. All rights reserved.'
    }
};

// Function to update page language
function switchLanguage(lang) {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = translations[lang].navHome;
    navLinks[1].textContent = translations[lang].navBenefits;
    navLinks[2].textContent = translations[lang].navFaq;
    navLinks[3].textContent = translations[lang].navCta;

    // Hero Section
    const titleLines = document.querySelectorAll('.title-line');
    titleLines[0].textContent = translations[lang].heroTitle1;
    titleLines[1].textContent = translations[lang].heroTitle2;
    document.querySelector('.hero-subtitle').textContent = translations[lang].heroSubtitle;
    document.querySelectorAll('.hero-buttons .btn')[0].textContent = translations[lang].heroBtnCta;
    document.querySelectorAll('.hero-buttons .btn')[1].textContent = translations[lang].heroBtnLearnMore;

    // Benefits Section
    document.querySelector('.benefits-title').textContent = translations[lang].benefitsTitle;
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards[0].querySelector('h3').textContent = translations[lang].benefit1Title;
    benefitCards[0].querySelector('p').textContent = translations[lang].benefit1Desc;
    benefitCards[1].querySelector('h3').textContent = translations[lang].benefit2Title;
    benefitCards[1].querySelector('p').textContent = translations[lang].benefit2Desc;
    benefitCards[2].querySelector('h3').textContent = translations[lang].benefit3Title;
    benefitCards[2].querySelector('p').textContent = translations[lang].benefit3Desc;
    benefitCards[3].querySelector('h3').textContent = translations[lang].benefit4Title;
    benefitCards[3].querySelector('p').textContent = translations[lang].benefit4Desc;

    // FAQ Section
    const faqTitle = document.querySelector('.faq .section-title');
    if (faqTitle) faqTitle.textContent = translations[lang].faqTitle;

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems[0].querySelector('h3').textContent = translations[lang].faq1Q;
        faqItems[0].querySelector('.faq-content p').textContent = translations[lang].faq1A;
    }
    if (faqItems.length > 1) {
        faqItems[1].querySelector('h3').textContent = translations[lang].faq2Q;
        faqItems[1].querySelector('.faq-content p').textContent = translations[lang].faq2A;
    }
    if (faqItems.length > 2) {
        faqItems[2].querySelector('h3').textContent = translations[lang].faq3Q;
        faqItems[2].querySelector('.faq-content p').textContent = translations[lang].faq3A;
    }
    if (faqItems.length > 3) {
        faqItems[3].querySelector('h3').textContent = translations[lang].faq4Q;
        faqItems[3].querySelector('.faq-content p').textContent = translations[lang].faq4A;
    }
    if (faqItems.length > 4) {
        faqItems[4].querySelector('h3').textContent = translations[lang].faq5Q;
        faqItems[4].querySelector('.faq-content p').textContent = translations[lang].faq5A;
    }
    if (faqItems.length > 5) {
        faqItems[5].querySelector('h3').textContent = translations[lang].faq6Q;
        faqItems[5].querySelector('.faq-content p').textContent = translations[lang].faq6A;
    }

    // CTA Section
    const ctaCard = document.querySelector('.cta-card');
    if (ctaCard) {
        ctaCard.querySelector('.section-title').textContent = translations[lang].ctaTitle;
        ctaCard.querySelector('.cta-subtitle').textContent = translations[lang].ctaSubtitle;
    }

    // Form inputs
    const formInputs = document.querySelectorAll('.glass-input');
    if (formInputs.length > 0) formInputs[0].placeholder = translations[lang].inputName;
    if (formInputs.length > 1) formInputs[1].placeholder = translations[lang].inputEmail;
    if (formInputs.length > 2) formInputs[2].placeholder = translations[lang].inputMessage;

    // Submit buttons
    const submitButtons = document.querySelectorAll('.contact-form .btn');
    submitButtons.forEach(btn => {
        btn.textContent = translations[lang].submitBtn;
    });

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

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        const toggle = item.querySelector('.faq-toggle');

        header.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
                const otherToggle = otherItem.querySelector('.faq-toggle');
                if (otherToggle) otherToggle.textContent = '+';
            });

            // Toggle current item
            if (!isOpen) {
                item.classList.add('open');
                if (toggle) toggle.textContent = '−';
            }
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
