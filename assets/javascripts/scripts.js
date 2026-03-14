document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");
    const nav = document.querySelector(".nav");
    const burgerNav = document.getElementById("mobile-nav-header");
    const desktopHeader = document.getElementById("header-desktop");
    const desktopBreakpoint = window.matchMedia("(min-width: 769px)");
    let lastScrollTop = 0;
    let desktopHeaderTimer;
  
    document.addEventListener("click", (event) => {
      if ((event.target.closest(".burger") || event.target.closest(".menu-item")) && burger && overlay && nav) {
        // Toggle burger open state
        burger.classList.toggle("open");
  
        // Toggle overlay visibility
        if (overlay.style.display === "block") {
          overlay.style.display = "none";
          document.body.style.overflow = "auto"; // Re-enable scrolling
        } else {
          overlay.style.display = "block";
          document.body.style.overflow = "hidden"; // Disable scrolling
        }
  
        // Toggle navigation classes
        nav.classList.toggle("navactive");
        nav.classList.toggle("navhidden");
      }
  
      // If clicking on the back button
      if (event.target.closest(".back")) {
        window.location.href = "https://www.chadmdanford.com";
      }
    });

    if (desktopHeader) {
      desktopHeader.classList.add("is-visible");
      desktopHeader.classList.add("is-at-top");
    }
  
    // Scroll function, runs only if overlay is not active
    window.addEventListener("scroll", () => {
      if (overlay && overlay.style.display === "block") return; // Skip scroll handling if overlay is active
  
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      if (burgerNav && scrollTop > lastScrollTop) {
        // User scrolled down - hide navigation
        burgerNav.classList.add("hidden");
      } else if (burgerNav) {
        // User scrolled up - show navigation
        burgerNav.classList.remove("hidden");
      }

      if (desktopHeader && desktopBreakpoint.matches) {
        const isScrollingDown = scrollTop > lastScrollTop;
        const isPastHeader = scrollTop > desktopHeader.offsetHeight;
        const isAtTop = scrollTop <= 0;

        desktopHeader.classList.toggle("is-at-top", isAtTop);
        desktopHeader.classList.toggle("is-compact", !isAtTop);

        clearTimeout(desktopHeaderTimer);

        if (isAtTop) {
          desktopHeader.classList.remove("is-hidden");
          desktopHeader.classList.add("is-visible");
        } else if (isScrollingDown && isPastHeader) {
          desktopHeader.classList.add("is-hidden");
          desktopHeader.classList.remove("is-visible");
        } else {
          desktopHeader.classList.remove("is-hidden");
          desktopHeader.classList.add("is-visible");
        }

        desktopHeaderTimer = window.setTimeout(() => {
          const hasReturnedToTop = window.scrollY <= 0;
          desktopHeader.classList.toggle("is-at-top", hasReturnedToTop);
          desktopHeader.classList.toggle("is-compact", !hasReturnedToTop);
          desktopHeader.classList.remove("is-hidden");
          desktopHeader.classList.add("is-visible");
        }, 180);
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    });
  });
  
