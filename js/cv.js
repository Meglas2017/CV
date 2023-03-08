
function mireloj(){
    var mifecha = new Date();
    var hora = mifecha.getHours();
    var minutos = mifecha.getMinutes();

    if (hora < 10){
        hora = '0' + hora;
    }
    if (minutos < 10){
        minutos = "0" + minutos;
    }
        
    document.getElementById("reloj").innerHTML = hora+':'+minutos;
}
var tempo;
window.onload = function() {
    setInterval(mireloj, 1000);
    tempo = setTimeout(encuesta,120000);
  }

function encuesta(){
    alert("Llevas 2 minutos mirando mi página. ¿Te gusta?");
}

function obtenerdatos(){
    let url = 'https://randomuser.me/api/?gender=male';
    fetch(url)
        .then(response => response.json())
        .then((data) => mifuncion(data.results))
        .catch((error)=>console.log(error));

    const mifuncion = (data) =>{
    
    document.getElementById("name").innerHTML=data[0].name.first + " " + data[0].name.last;
    document.getElementById("imgrandom").src = data[0].picture.large;
    document.getElementById("date").innerHTML=data[0].dob.date;
    }
}
obtenerdatos();

function minumero(){
    var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
}
    console.log(color);
    return color;
}

function cambiafondo(){
    var colornuevo = minumero();
    document.body.style.background = colornuevo;
}

function cambiadatos(){
    obtenerdatos();
}

function fondooriginal(){
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.backgroundImage = "url('js/fondo.jpg')";
    document.body.style.backgroundAttachment = "fixed";
}

function encuesto(){
    micaja = document.getElementById("cajatexto").value;
    console.log(micaja);

}

