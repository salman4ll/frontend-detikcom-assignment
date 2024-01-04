class HeroSection extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <section id="hero" class="hero">
                <img src="assets/images/hero-img.png" alt="" data-aos="fade-in" />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 data-aos="fade-up" data-aos-delay="100">
                                Instant collaboration for remote teams
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="200">
                                All-in-one place for your remote team to chat, collaborate and
                                track project progress.
                            </p>
                        </div>
                        <div class="row mt-5">
                            <div class="col-md-7 col-lg-3">
                                <form action="#" class="get-early-access d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <div class="form-group d-flex align-items-center" style="width: 95%;">
                                        <input type="text" class="form-control" placeholder="Email">
                                        <i class="bi bi-arrow-right" style="color: #7676B2;"></i>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-5 col-lg-3">
                                <div id="component" class="container-fluid py-3">
                                    <button class="btn btn-get-access text-center text-light" data-aos="fade-up"
                                        data-aos-delay="300">
                                        Get Early Access
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`;
    }
}

customElements.define('hero-section', HeroSection)