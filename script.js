const emailConfig = {
    publicKey: '7NhVuB5A2LoE5hsvi',
    serviceId: 'web-design',
    templateId: 'template_d3iqmz4',
    toEmail: 'nikitahill099@gmail.com'
};

function toggleMobileMenu(open) {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    if (!burger || !menu || !overlay) return;

    menu.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
}

function setupMobileMenu() {
    const burger = document.querySelector('.burger');
    const overlay = document.querySelector('.mobile-overlay');
    const links = document.querySelectorAll('.mobile-menu a');
    if (!burger || !overlay) return;

    burger.addEventListener('click', () => {
        const isOpen = burger.classList.contains('is-open');
        toggleMobileMenu(!isOpen);
    });

    overlay.addEventListener('click', () => toggleMobileMenu(false));
    links.forEach((link) => link.addEventListener('click', () => toggleMobileMenu(false)));
}

function setupRevealAnimation() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach((el) => observer.observe(el));
}

function setupFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
        const button = item.querySelector('.faq-question');
        if (!button) return;

        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            faqItems.forEach((other) => {
                other.classList.remove('open');
                const otherBtn = other.querySelector('.faq-question');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                item.classList.add('open');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

function highlightActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');
    if (sections.length === 0 || navLinks.length === 0) return;

    const y = window.scrollY + 120;
    let activeId = sections[0].id;
    sections.forEach((section) => {
        if (section.offsetTop <= y) activeId = section.id;
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
    });
}

function initEmailJsSafe() {
    if (typeof emailjs === 'undefined') return false;
    if (!emailConfig.publicKey || !emailConfig.serviceId || !emailConfig.templateId) return false;

    try {
        emailjs.init(emailConfig.publicKey);
        return true;
    } catch {
        return false;
    }
}

function fallbackToMailClient(name, email, message) {
    const subject = encodeURIComponent(`Заявка с портфолио от ${name}`);
    const body = encodeURIComponent(`Имя: ${name}\nEmail: ${email}\n\nСообщение:\n${message}`);
    window.location.href = `mailto:${emailConfig.toEmail}?subject=${subject}&body=${body}`;
}

function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');
    const emailJsReady = initEmailJsSafe();

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!button || !status) return;

        const formData = new FormData(form);
        const botValue = String(formData.get('company') || '').trim();
        if (botValue) {
            status.textContent = 'Ошибка валидации формы.';
            status.className = 'form-status error';
            return;
        }

        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const message = String(formData.get('message') || '').trim();

        if (!name || !email || !message) {
            status.textContent = 'Заполни все поля формы.';
            status.className = 'form-status error';
            return;
        }

        const originalText = button.textContent;
        button.textContent = 'Отправка...';
        button.disabled = true;
        status.textContent = '';
        status.className = 'form-status';

        try {
            if (!emailJsReady) {
                fallbackToMailClient(name, email, message);
                status.textContent = 'EmailJS не инициализирован. Открылось письмо в вашем почтовом клиенте.';
                status.className = 'form-status success';
            } else {
                await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
                    from_name: name,
                    from_email: email,
                    message,
                    to_email: emailConfig.toEmail
                });

                status.textContent = 'Заявка отправлена. Отвечу в ближайшее время.';
                status.className = 'form-status success';
                form.reset();
            }
        } catch (error) {
            console.error('Email send error:', error);
            fallbackToMailClient(name, email, message);
            status.textContent = 'Не удалось отправить через EmailJS. Открылось письмо через почтовый клиент.';
            status.className = 'form-status error';
        } finally {
            button.textContent = originalText;
            button.disabled = false;
        }
    });
}

function setCurrentYear() {
    const year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupRevealAnimation();
    setupFaq();
    setupContactForm();
    setCurrentYear();
    highlightActiveNav();
});

window.addEventListener('scroll', highlightActiveNav, { passive: true });
