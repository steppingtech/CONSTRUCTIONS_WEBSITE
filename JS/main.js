/* ============================================================
   SHREE BALAJI CONSTRUCTIONS — Global Behaviour
   ============================================================ */
(function () {
  "use strict";

  const CONFIG = {
    whatsapp: "919527463000", // Country code + Number for WhatsApp
    phone: "+91 95274 63000",
    phoneLink: "+919527463000",
    email: "shreebalajiconstructionjl@gmail.com",
    address: "Building No. 01, Near Pooja Transport, Chandni Chowk, Gondia, Maharashtra - 441601",
    hours: "Mon–Sat: 9:00 AM – 6:30 PM"
  };

  function active(page) {
    return document.body.dataset.page === page ? " active" : "";
  }
  
  function buildNavbar() {
    return `
    <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
      <div class="container">
        <!-- Logo aur Text -->
        <a class="navbar-brand" href="index.html">
          <img src="../images/logo.jpeg" alt="Shree Balaji Logo">
          <span>SHREE BALAJI<br><small>CONSTRUCTIONS</small></span>
        </a>
        
        <!-- Hamburger Menu Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Menu Links -->
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            <li class="nav-item"><a class="nav-link${active('home')}" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link${active('about')}" href="about.html">About Us</a></li>
            <li class="nav-item"><a class="nav-link${active('services')}" href="services.html">Services</a></li>
            <li class="nav-item"><a class="nav-link${active('projects')}" href="projects.html">Projects</a></li>
            <li class="nav-item"><a class="nav-link${active('insights')}" href="insights.html">Insights</a></li>
            <li class="nav-item"><a class="nav-link${active('contact')}" href="contact.html">Contact</a></li>
            <li class="nav-item ms-lg-3 mt-3 mt-lg-0"><a class="btn btn-accent w-100" href="contact.html">Get a Quote</a></li>
          </ul>
        </div>
      </div>
    </nav>`;
  }
  
  function buildFooter() {
    const year = new Date().getFullYear();
    return `
    <footer class="footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <img src="../images/logo.jpeg" alt="Shree Balaji Logo" style="height: 60px; margin-bottom: 1rem; background: white; padding: 5px; border-radius: 8px;">
            <p class="mb-3">Shree Balaji Construction is a professionally managed construction firm engaged in government infrastructure development and civil engineering projects.</p>
                       <div class="social">
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <!-- WhatsApp Direct Chat Link -->
              <a href="https://wa.me/919527463000" target="_blank" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
            </div>
          </div>
          <div class="col-6 col-lg-2">
            <h6>Quick Links</h6>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Projects</a></li>
            </ul>
          </div>
          <div class="col-6 col-lg-3">
            <h6>Our Expertise</h6>
            <ul>
              <li><a href="services.html">PWD Projects</a></li>
              <li><a href="services.html">Nagar Parishad</a></li>
              <li><a href="services.html">Irrigation Department</a></li>
              <li><a href="services.html">Road Construction</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h6>Contact</h6>
            <ul>
              <li><i class="bi bi-geo-alt me-2"></i>${CONFIG.address}</li>
              <li><i class="bi bi-telephone me-2"></i><a href="tel:${CONFIG.phoneLink}">${CONFIG.phone}</a></li>
              <li><i class="bi bi-envelope me-2"></i><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
            </ul>
          </div>
        </div>
        
        <!-- FIXED FOOTER BOTTOM WITH STEPPINGTECH CREDIT -->
        <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-5 pt-3 border-top" style="border-color: rgba(255,255,255,0.1) !important;">
          <span class="text-center text-md-start">&copy; ${year} SHREE BALAJI CONSTRUCTIONS. All rights reserved.</span>
          
          <div class="d-flex align-items-center gap-3">
            <!-- Admin Login Link (Subtle) -->
            <a href="admin.html" style="color: rgba(255,255,255,0.2); font-size: 0.8rem; text-decoration: none;" title="Admin Login">
              <i class="bi bi-lock-fill"></i>
            </a>
            
            <!-- SteppingTech Credit Link -->
            <a href="https://steppingtech.vercel.app/" target="_blank" style="color: rgba(255,255,255,0.6); font-size: 0.8rem; text-decoration: none; transition: 0.3s;" onmouseover="this.style.color='var(--bc-accent)'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">
              <i class="bi bi-code-slash"></i> Created by <strong>SteppingTech</strong>
            </a>
          </div>
        </div>
        
      </div>
    </footer>

    <a class="float-wa" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <i class="bi bi-whatsapp"></i>
    </a>
    <button class="back-top" id="backTop" aria-label="Back to top"><i class="bi bi-arrow-up"></i></button>
    `;
  }

  // --- Scroll Reveal Logic ---
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.05 });

    els.forEach(e => {
      io.observe(e);
      const rect = e.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        e.classList.add("in-view");
      }
    });
  }

  window.revealDynamicElements = function() {
    const els = document.querySelectorAll("[data-reveal]:not(.in-view)");
    els.forEach(e => e.classList.add("in-view"));
  };

  document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Navbar and Footer
    if (document.getElementById("navbar-slot")) document.getElementById("navbar-slot").innerHTML = buildNavbar();
    if (document.getElementById("footer-slot")) document.getElementById("footer-slot").innerHTML = buildFooter();
    
    // 2. Sticky Nav on Scroll
    const nav = document.getElementById("mainNav");
    if (nav) {
      window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });
    }

    // 3. Back to Top Button
    const backTop = document.getElementById("backTop");
    if (backTop) {
      window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 400), { passive: true });
      backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
    
    // 4. Initialize Animations
    initReveal();

    // 5. HIDE PRELOADER
    const preloader = document.getElementById("preloader");
    if (preloader) {
      // Show loader for 1.5 seconds, then fade it out smoothly
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 1500); 
    }

    // 6. AUTO-SCROLLING PROCESS TIMELINE (MOBILE INFINITE LOOP)
    const processTrack = document.querySelector('.process-track');
    if (processTrack && !processTrack.dataset.cloned) {
      const steps = processTrack.innerHTML;
      processTrack.innerHTML = steps + steps; 
      processTrack.dataset.cloned = "true"; 
    }
  });
})();