const app = document.getElementById('main');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container row');

// app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=12', true);
request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);
  console.log('Le resultat de la requete:',data);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(cat => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card col-md-3 col-sm-12 border-0 my-2');

      const img = document.createElement('img');
      img.setAttribute('class','img-fluid w-100 h-100')
      img.src= cat.url;
      container.appendChild(card);
      card.appendChild(img);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();