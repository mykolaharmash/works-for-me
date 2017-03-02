function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');


  return `
    <!doctype html>
    
    <html lang="en">
      <head>
        <title>Setups List</title>
        <meta charset="utf-8">
        <meta name="description" content="Collection of people's software setups">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./statics/main-list.css">
        <link rel="stylesheet" href="./statics/main-list.mobile.css"> 
      </head>
      <body>
        <header class="header">
          <h1 class="title">Works for me</h1>
          <p class="subtitle">Collection of cozy setups</p>
        </header>
        
        <main class="main">
          <p class="list-caption">Latest updates</p>
          
          ${ contentString }
         </main>
         
         <div class="external-links">
           <p class="external-links-caption">See also</p>
           <ul class="external-links-list">
             <li class="external-link-item">
               <a href="">How To: Add your setup</a>
             </li>

             <li class="external-link-item">
               <a href="https://github.com/nik-garmash/works-for-me">
                 Project on GitHub
               </a>
             </li>
           </ul>
         </div>
      </body>
    </html>
  `;
}

module.exports = {
  render
};
