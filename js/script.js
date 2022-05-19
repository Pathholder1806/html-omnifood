const btn = document.querySelector(".btn-mobile-nav");
function toggler() {
    const header = document.querySelector(".header");
    if (header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
        document.getElementsByTagName("html")[0].style.overflow = "scroll";
    } else {
        header.classList.add("nav-open");
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
    }
}
btn.addEventListener("click", toggler);

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const href = link.getAttribute("href");

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        if (href !== "#" && href.startsWith("#")) {
            const ele = document.querySelector(href);
            ele.scrollIntoView({
                behavior: "smooth",
            });
        }

        if (link.classList.contains("main-nav-link")) {
            const header = document.querySelector(".header");
            header.classList.remove("nav-open");
            document.getElementsByTagName("html")[0].style.overflow = "visible";
        }
    });
});

// Sticky header
const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];

        if (!ent.isIntersecting) {
            document.body.classList.add("sticky");
        }
        if (ent.isIntersecting) {
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
observer.observe(sectionHero);
