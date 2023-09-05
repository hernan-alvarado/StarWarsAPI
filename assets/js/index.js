function createCardElement(data, containerId) {
	for (let i = 0; i < data.length; i++) {
		const person = data[i];
		//  datos del arreglo = person

// Creo los elementos del DOM

		let div = document.createElement("div");

		let card = document.createElement("p");
		card.className = "col col-lg-4 col-md-6";
		

		let cardBody = document.createElement("div");
		cardBody.className = "single-timeline-content d-flex wow fadeInLeft data-wow-delay='0.3s'";
		cardBody.style = "background-color: white";


		let circleDiv = document.createElement("p");
		circleDiv.style.height = "20px";
		circleDiv.style.width = "20px";
	
		let image = document.createElement("img");
		image.src =
			"https://i.pinimg.com/1200x/a2/a2/27/a2a227afa5d96e329085b989357b1129.jpg";
		image.alt = "Logo Star Wars iluminado";
		image.style.height = "30px"; 
		image.style.width = "30px"; 

		let textDiv = document.createElement("div");
		textDiv.className = "time-line mx-4";

		let nameElement = document.createElement("h5");
		nameElement.innerText = person.name;

		let subtitleElement = document.createElement("h8");
		subtitleElement.className = "card-subtitle mb-1";
		subtitleElement.innerHTML = `<span><b>Estatura:</b> ${person.height} <b>Peso:</b> ${person.mass}</span>`;

		circleDiv.appendChild(image);
		textDiv.appendChild(nameElement);
		textDiv.appendChild(subtitleElement);
		cardBody.appendChild(circleDiv);
		cardBody.appendChild(textDiv);
		card.appendChild(cardBody);
		div.appendChild(card);

		document.getElementById(containerId).appendChild(card);
	}
}

// CONSUMO DE API.

// Recorrido hasta la posicion 5.


function fetchprimerGrupo() {
	setTimeout(3000)
	const promises = [];
	for (let i = 1; i <= 5; i++) {
		const promise = fetch(`https://swapi.dev/api/people/${i}/`)
			.then((response) => response.json())
			.then((data) => {
				console.log("Data obtenida:", data);

				document.getElementById("informacioncantidadUno").innerHTML = `1 - ${
					Object.keys(data).length - 11
				}`;

				return data;
			})
			.catch((error) => console.error("Error:", error));

		promises.push(promise);
	}

	return Promise.all(promises);
}

// Recorrido de la posicion 6 a la 11.

function fetchsegundoGrupo() {
	setTimeout(3000);
	const promises = [];
	for (let i = 6; i <= 11; i++) {
		const promise = fetch(`https://swapi.dev/api/people/${i}/`)
			.then((response) => response.json())
			.then((data) => {
				console.log("Data obtenida:", data);
				document.getElementById("informacioncantidadDos").innerText = `6 - ${
					Object.keys(data).length - 5
				}`;

				return data;
			})
			.catch((error) => console.error("Error:", error));

		promises.push(promise);
	}

	return Promise.all(promises);
}

// Recorrido de la posicion 12 a la 16.

function fetchtercerGrupo() {
	setTimeout(3000);
	const promises = [];
	for (let i = 12; i <= 16; i++) {
		const promise = fetch(`https://swapi.dev/api/people/${i}/`)
			.then((response) => response.json())
			.then((data) => {
				console.log("Data obtenida:", data);
				document.getElementById("informacioncantidadTres").innerText = `12 - ${
					Object.keys(data).length 
				}`;

				return data;
			})
			.catch((error) => console.error("Error:", error));

		promises.push(promise);
	}

	return Promise.all(promises);
}



$("#despliegaCartasUno").one("mousemove", function () {
	console.log("Entramos en el evento uno");
	fetchprimerGrupo()
		.then((data) => createCardElement(data, "informacioncardsUno"))
		.catch((error) => console.error("Error:", error));
});

$("#despliegaCartasDos").one("mousemove", function () {
	console.log("Entramos en el evento dos");
	fetchsegundoGrupo()
		.then((data) => createCardElement(data, "informacioncardsDos"))
		.catch((error) => console.error("Error:", error));
});

$("#despliegaCartasTres").one("mousemove", function () {
	console.log("Entramos en el evento tres");
	fetchtercerGrupo()
		.then((data) => createCardElement(data, "informacioncardsTres"))
		.catch((error) => console.error("Error:", error));
});
