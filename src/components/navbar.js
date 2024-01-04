class Navbar extends HTMLElement {
  connectedCallback() {
    // Mendapatkan nama halaman dari URL
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const baseDir = "/src"; // Sesuaikan dengan struktur direktori proyek Anda

    this.innerHTML = `
    <header id="header" class="header fixed-top d-flex align-items-center p-4">
    <div class="container-fluid d-flex align-items-center justify-content-between">
        <a href="landing-page.html" class="logo d-flex align-items-center me-auto me-xl-0">
            <h1>team</h1>
            <span>.</span>
        </a>
        <nav id="navmenu" class="navmenu">
            <ul>
                <li><a href="${baseDir}/product.html"${currentPage === 'product' ? ' class="active"' : ''}>Product</a></li>
                <li><a href="${baseDir}/blog.html"${currentPage === 'blog' ? ' class="active"' : ''}>Blog</a></li>
                <li><a href="${baseDir}/support.html"${currentPage === 'support' ? ' class="active"' : ''}>Support</a></li>
                <li><a href="${baseDir}/login.html"${currentPage === 'login' ? ' class="active"' : ''}>Login</a></li>
                <a class="btn-getstarted" href="#" style="text-decoration: none">Get Access</a>
            </ul>
  
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>            
    </div>
</header>`
  }
}

customElements.define('main-navbar', Navbar);
