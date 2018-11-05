console.log('hey, I am working');
let appContainer = document.getElementById('insert');
let appFile = 'http://localhost/map/promises/images.json';
console.log(appFile);

function addImage(image_url, image_title) {
	var image = new Image;
	image.src = image_url;
	image.alt = image_title;
	appContainer.appendChild(image);
}

function start() {
	fetch(appFile)
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(myJson) {
	  	console.log(myJson.images);
	    myJson.images.forEach(json => {
	    	console.log(json);
	    	addImage(json.url, json.title);
	    });
	  });
}


start();