// =====================================================
// Enterprise Solution Architect Portfolio
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Navigation Highlight
    // -------------------------------

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    updateActiveNav();

    window.addEventListener("scroll", updateActiveNav);

    // -------------------------------
    // Navbar Shadow
    // -------------------------------

    const navbar = document.querySelector(".navbar");

    function navbarEffect() {

        if (window.scrollY > 40) {

            navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.35)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }

    navbarEffect();

    window.addEventListener("scroll", navbarEffect);

    // -------------------------------
    // Scroll Reveal
    // -------------------------------

    const revealElements = document.querySelectorAll(

        ".section-title, \
         .about-card, \
         .capability-card, \
         .module-card, \
         .case-card, \
         .lead-card, \
         .tech-card, \
         .hero-card, \
         .architecture-wrapper"

    );

    revealElements.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition =
            "opacity .8s ease, transform .8s ease";

    });

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.12

        }

    );

    revealElements.forEach(item => {

        observer.observe(item);

    });

    // -------------------------------
    // Hover Lift
    // -------------------------------

    const cards = document.querySelectorAll(

        ".about-card,\
         .capability-card,\
         .module-card,\
         .case-card,\
         .lead-card,\
         .tech-card,\
         .arch-box"

    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = "all .25s ease";

        });

    });

    // -------------------------------
    // Current Year
    // -------------------------------

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});