import { menuList } from '../dataFake.js'

const Header = () => {
    return `
    <header class="flex items-center justify-between py-16">


      <!-- logo -->

      <div class="logo"><img src="	http://porto-html-v1.surge.sh/assets/images/Frame%202.png" alt="">
      </div>
      <div class="header_right flex">
        <nav>
          <ul class="link-nav ">
            <li class="ml-9"><a href="">Home</a></li>
            <li class="ml-9"><a href="/about">About</a></li>
            <li class="ml-9"><a href="/project">Project</a></li>
          </ul>
        </nav>

      </div>
      <div><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></div>
    </header>
    <section class="banner grid grid-cols-2 gap-2 ">

      <div class="banner_left pt-10">
        <p class="my-name pt-10">
          H i, I am Quynhph29577
        </p>
        <h1 class="banner_left-title pt-8">
          Proffesional <br>
          product designer
          <br class="">
          based in USA
        </h1>
        <p class="banner_left-content ">
          Varius amet, integer tellus non eget viverra. Ultrices tellus
          donec gravida id sed senectus dolor cursus sed. Ullamcorper
          tellus ac cras nec, pretium laoreet duis.
        </p>
        <div class="flex items-center">
          <a href="/contact" class=" banner-btn bg-blue-700  text-white ">Contact
            Us</a>

          <div class="flex items-center">
            <a href="">
              <img class="h-10 w-10 mx-6" src="http://porto-html-v1.surge.sh/assets/images/Frame%20(5).png" alt="">
            </a>
            <a href="">
              <img class="h-10 w-10 mx-6" src="	http://porto-html-v1.surge.sh/assets/images/Frame%20(6).png" alt="">
            </a>
            <a href="">
              <img class="h-10 w-10 mx-6" src="http://porto-html-v1.surge.sh/assets/images/Frame%20(7).png" alt="">
            </a>
            <a href="">
              <img class="h-2" src="http://porto-html-v1.surge.sh/assets/images/Line%201.png" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="banner_right">
        <img src="./src/img/banner.png" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" alt="">
      </div>
    `
}

export default Header;