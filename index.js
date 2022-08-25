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
        let total=largo*ancho*espesor*densidad*merma*precio;
        document.getElementById("cantTotal").value = total;
    }
}