let total=0;

function material(){
    let material=document.getElementById("material").value;
    let densidad = "";
    switch (material)
    {
    case 'Aluminio':
        densidad=2.7;
        break;
    case 'Hierro':
        densidad=8;
        break;
    case 'Acero Inoxidable':
        densidad=8;
        break;
    }
    document.getElementById("densidad").value=densidad;
    console.log(material);
    document.getElementById("calculo").style.display = "block";
}

function calcular(){
    let largo=document.getElementById("largo").value;
    let ancho=document.getElementById("ancho").value;
    let espesor=document.getElementById("espesor").value;
    let densidad=document.getElementById("densidad").value;
    let merma=document.getElementById("merma").value;
    let precio=document.getElementById("precio").value;
    if(largo!="" & ancho!="" & espesor!="" & densidad!="" & merma!="" & precio!=""){
        document.getElementById("total").style.display = "block";
        total=Number.parseFloat(largo*ancho*espesor*densidad*merma*precio).toFixed(2);
        document.getElementById("cantTotal").value = total;
    }
}

function lista(){
    if(localStorage.materiales==undefined){
        localStorage.materiales="";
    } else if(localStorage.materiales!=""){
        let materiales=localStorage.materiales;
        const materialesArray = materiales.split(";");
        let elementos="";
        let total=0;
        for (const iterator of materialesArray) {
            elementos+=`<li class="list-group-item bg-secondary bg-gradient bg-opacity-25">`+iterator+`</li>`;
            total+=parseFloat(iterator.substring(iterator.lastIndexOf(" "),iterator.length-1));
        }
        elementos+=`<li class="list-group-item bg-secondary bg-gradient bg-opacity-75">Total: `+total+`€</li>`;
        document.getElementById("elementosLista").innerHTML = elementos;
        document.getElementById("lista").style.display = "block";
    } else {
        let elementos="";
        document.getElementById("elementosLista").innerHTML = elementos;
        document.getElementById("lista").style.display = "none";
    }
}

function anyadir(){
    let total=document.getElementById("cantTotal").value;
    let espesor=document.getElementById("espesor").value;
    let material=document.getElementById("material").value;
    let materiales=localStorage.materiales;
    const materialesArray = materiales.split(";");
    if(localStorage.materiales==""){
        localStorage.materiales += material+" "+espesor+" : "+total+"€";
    } else {
        localStorage.materiales += ";"+material+" "+espesor+" : "+total+"€";
    }
    reiniciar();
    lista();
}

function borrar(){
    localStorage.materiales="";
    lista();
}

function reiniciar(){
    document.getElementById("material").value="";
    document.getElementById("largo").value="";
    document.getElementById("ancho").value="";
    document.getElementById("espesor").value="";
    document.getElementById("densidad").value="";
    document.getElementById("precio").value="";
    document.getElementById("calculo").style.display = "none";
    document.getElementById("total").style.display = "none";
}