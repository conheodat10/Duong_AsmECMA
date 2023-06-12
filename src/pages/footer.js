const footer = () => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <link rel="stylesheet" href="src/style.css">
  </head>cd my-v
  
  <body>
      <div class="container">
        <footer>
          <div class="container container-footer">
              <div class="footer-left">
                  <img srcset="image/logo.png 2x" alt="">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie nulla massa fringilla. </p>
                  <img srcset="image/icon.png 2x" alt="">
              </div>
              <div class="footer-center">
                  <div class="footer-center-colm">
                      <strong>Menu</strong>
                      <div>
                          <ul class="footer-menu">
                              <li><a href="">About</a></li>
                              <li><a href="">Project</a></li>
                              <li><a href="">Contact</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="footer-center-colm">
                      <strong>Utility Pages</strong>
                      <div>
                          <ul class="footer-center-menu">
                              <li><a href="">Twitter</a></li>
                              <li><a href="">Dribbble</a></li>
                              <li><a href="">Instagram</a></li>
                              <li><a href="">Linkedln</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="footer-right">
                  <strong>Subscribe to our newsletter</strong>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit am dolor sit. </p>
                  <form action="">
                      <input type="text" placeholder="Enter your email">
                  </form>
                  <div class="Subscribe">
                      <a href="" class="btn-primary">Subscribe</a>
                  </div>
              </div>
          </div>
      </footer>
      </div>

    <script type="module" src="./src/main.js"></script>
    <div class="container"></div>
  </body>
  
  </html>
        
      `;
};

export default footer;