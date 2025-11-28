  // Sticky Header
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Pledge Counter
        const pledgeBtn = document.getElementById('pledgeBtn');
        const pledgeCounter = document.getElementById('pledgeCounter');
        let count = 0;
        pledgeBtn.addEventListener('click', () => {
            count++;
            pledgeCounter.textContent = count;
        });

        // Scroll Animation for Sections
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    