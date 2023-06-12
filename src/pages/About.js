import Header from "../components/Header"

const AboutPage = () => {
    return `
        ${Header()}
        <div>
        <section class="portfolio">
        <h1 class="content">Portfolio & Project</h1>
        <div class="img">
          <img src="src/img/Portfolio 1.png" alt="" class="portfolio_img">
          <img src="src/img/Portfolio 2.png" alt="" class="portfolio_img">
          <img src="src/img/Portfolio 3.png" alt="" class="portfolio_img">
        </div>
        <div>
          <h1 class="portfoliocontent">Clients & Companies i’ve work with</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi ad dicta eius vel! Quis atque
            corporis iusto accusamus beatae! Ad culpa odio beatae recusandae provident! Molestias dicta eos
            minus.</p>
        </div>
        <div class="portfolio_logo">
          <img src="src/img/image 1.png" alt="" class="img_logo">
          <img src="src/img/image 2.png" alt="" class="img_logo">
          <img src="src/img/image 3.png" alt="" class="img_logo">
          <img src="src/img/image 4.png" alt="" class="img_logo">
        </div>
        <h1>Good design is a language, not a style</h1>
      </section>
        </div>
        <footer></footer>
    `;
};

export default AboutPage