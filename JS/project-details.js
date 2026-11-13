import { fetchProjects } from './google-sheet-api.js';

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(location.search);
    const slug = params.get("project");
    
    // Fetch all projects and find the matching one
    const projects = await fetchProjects();
    const project = projects.find(p => p.Slug === slug) || projects[0];

    if (!project) {
        document.getElementById("pdContent").innerHTML = `<div class="alert alert-warning">Project not found.</div>`;
        return;
    }

    const setText = (id, t) => { const el = document.getElementById(id); if (el) el.textContent = t; };
    
    // Set Hero Background
    const hero = document.getElementById("pdHero");
    if (hero) hero.style.backgroundImage = `linear-gradient(120deg,rgba(13,27,42,.88),rgba(13,27,42,.65)),url('${project.Cover}')`;

    // Set Texts
    setText("pdTitle", project.Title);
    setText("pdCrumb", project.Title);
    setText("pdMeta", `${project.Category} · ${project.Location} · ${project.Status}`);
    
    // Set Page Title dynamically
    document.title = `${project.Title} | SHREE BALAJI CONSTRUCTIONS`;

    // Render the detail content
    document.getElementById("pdContent").innerHTML = `
        <div class="row g-5">
            <div class="col-lg-8">
                <h2>Project Overview</h2>
                <p>${project.Description}</p>
            </div>
            <div class="col-lg-4">
                <h3>Specifications</h3>
                <table class="spec-table">
                    <tr><th>Category</th><td>${project.Category}</td></tr>
                    <tr><th>Location</th><td>${project.Location}</td></tr>
                    <tr><th>Status</th><td>${project.Status}</td></tr>
                </table>
                <a class="btn btn-accent w-100 mt-4" href="contact.html">Enquire About This Project</a>
            </div>
        </div>`;

    // Render Related Projects
    const related = projects.filter(p => p.Slug !== project.Slug).slice(0,3);
    
    if (related.length > 0) {
        document.getElementById("pdRelated").innerHTML = related.map(p => `
            <div class="col-md-4">
                <a class="project-card" href="project-details.html?project=${encodeURIComponent(p.Slug)}">
                    <img src="${p.Cover}" alt="${p.Title}" loading="lazy">
                    <span class="badge-status ${p.Status==='Completed'?'badge-completed':'badge-ongoing'}">${p.Status}</span>
                    <div class="overlay">
                        <h5>${p.Title}</h5>
                        <div class="meta"><span>${p.Category}</span></div>
                    </div>
                </a>
            </div>`).join("");
    } else {
        document.getElementById("pdRelated").innerHTML = `<div class="col-12"><p class="text-muted">No other projects found.</p></div>`;
    }
});