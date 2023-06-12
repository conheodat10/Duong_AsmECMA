
const Header = () => {
  return `
      
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <link rel="stylesheet" href="src/style.css">
  </head>
  
  <body>
    <div id="app">
      <div class="container">
        <header>
          <div class="logo">
            <img src="src/img/Logo.png" alt="">
          </div>
          <div class="header_menu">
            <ul class="menu_main">
              <li><a href="/About" class="menu_main_link">About</a></li>
              <li><a href="/Project" class="menu_main_link">Project</a></li>
              <li><a href="" class="menu_main_link">Contact</a></li>
            </ul>
          </div>
          <banner class="banner">
            <div class="banner_left">
              <h1 class="h1_banner">Designing <img src="./src/img/&.png" alt=""> Deploying Things</h1>
              <button class="button_banner"><a href="">Get in Touch</a></button>
              <button class="btn"><a href="">Available for Hire</a></button>
            </div>
            <div class="banner_right"><img src="src/img/banner-right.jpg" alt=""></div>
          </banner>
      </header>
      </div>
    </div>
    <script type="module" src="./src/main.js"></script>
    <div class="container"></div>
  </body>
  
  </html>
    `;
};

export default Header;