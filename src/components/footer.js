class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer" class="footer">
                <div class="container footer-top">
                    <div class="row gy-4 d-flex">
                        <div class="col-lg-4 col-md-12 footer-about">
                            <a href="index.html" class="logo d-flex align-items-center">
                                <span>team</span>
                            </a>
                            <p>
                                Collaboration platform for modern team
                            </p>                    
                        </div>

                        <div class="col-lg-2 col-4 footer-links">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-4 footer-links">
                            <h4>sections</h4>
                            <ul>
                                <li><a href="#">Screen Sharing</a></li>
                                <li><a href="#">iOs & Android Apps</a></li>
                                <li><a href="#">File Sharing</a></li>
                                <li><a href="#">User Management</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-4 footer-contact">
                            <h4>Contact Us</h4>
                            <p>info@teamapp.com</p>
                            <p>1-800-200-300</p>
                            <p>1010 Sunset Blv.
                                Palo Alto, California</p>
                        </div>

                        <div class="col-lg-2 col-md-6 footer-contact">
                            <h4>Stay up to date</h4>
                            <p>Subscribe to our newseller</p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define("main-footer", Footer);