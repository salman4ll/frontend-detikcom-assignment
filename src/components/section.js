class SectionHomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section id="sections" class="sections">
                <div class="container">
                    <div class="row gy-4 align-items-center sections-item">
                        <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1 class="title">Choose how you want to work</h1>
                            <p class="isi">
                                In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You
                                can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
                            </p>
                            <a href="#" class="btn-get-started align-items-center">Learn More <i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                        <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center justify-content-center"
                            data-aos="zoom-out" data-aos-delay="100">
                            <div class="image-stack">
                                <img src="assets/images/mockup.png" alt="" class="stack-1" />                            
                            </div>
                        </div>
                    </div>
                    <div class="row gy-4 align-items-stretch justify-content-between sections-item">
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out">

                            <div class="image-stack2">
                                <img src="assets/images/image1.png" alt="" class="stack-1" />
                                <img src="assets/images/image1-1.png" alt="" class="stack-4" />
                            </div>
                        </div>
                        <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                            <h1 class="title">Chats for your distributed teams</h1>
                            <p class="isi">
                                Team combines the immediacy of real-time chat with an email threading model. With Team, you
                                can catch up on important conversations while ignoring irrelevant ones.
                            </p>
                            <a href="#" class="btn-get-started align-items-center">Learn More <i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="row gy-4 align-items-center sections-item">
                        <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1 class="title">Choose how you want to work</h1>
                            <p class="isi">
                                In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You
                                can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
                            </p>
                            <a href="#" class="btn-get-started align-items-center">Learn More <i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                        <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center justify-content-center"
                            data-aos="zoom-out" data-aos-delay="100">
                            <div class="image-stack">
                                <img src="assets/images/image2.png" alt="" class="stack-1" />
                                <img src="assets/images/image2-1.png" alt="" class="stack-2" />
                                <img src="assets/images/image2-2.png" alt="" class="stack-3" />
                            </div>
                        </div>
                    </div>                

                    <div class="row gy-4 align-items-stretch justify-content-between sections-item">
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out">

                            <div class="image-stack2">
                                <img src="assets/images/image3.png" alt="" class="stack-1" />
                                <img src="assets/images/image3-1.png" alt="" class="stack-2" />
                                <img src="assets/images/image3-2.png" alt="" class="stack-3" />
                            </div>
                        </div>
                        <div class="col-lg-5 d-flex justify-content-center flex-column" data-aos="fade-up">
                            <h1 class="title">Move faster with your Team tools</h1>
                            <p class="isi">
                                With your other work apps connected to Team, you can work faster by switching tabs less. And
                                with powerful tools like Workflow Builder, you can automate away routine tasks.
                            </p>
                            <a href="#" class="btn-get-started align-items-center">Learn More <i
                                    class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('section-homepage', SectionHomePage);