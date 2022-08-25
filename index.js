let total=0;

function material(){
    let material=document.getElementById("Material").value;
    const materialArray = material.split(" ");
    let precio = materialArray[materialArray.length - 1];
    document.getElementById("densidad").value=precio;
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
        for (const iterator of materialesArray) {
            elementos+=`<li class="list-group-item">`+iterator+`</li>`;
        }
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
    let materiales=localStorage.materiales;
    const materialesArray = materiales.split(";");
    let tamanyo=materialesArray.length;
    localStorage.materiales += ["Material "+tamanyo+":"+total+";"];
    lista();
}

function borrar(){
    localStorage.materiales="";
    lista();
}