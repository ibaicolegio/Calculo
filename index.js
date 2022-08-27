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
        document.getElementById("materialesTotal").value = total;
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
    reiniciar()
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
    document.getElementById("operar").style.display = "none";
}

function operar(){
    if( document.getElementById("elementosLista").innerHTML!=""){
        document.getElementById("operar").style.display = "block";
    } else {
        document.getElementById("operar").style.display = "none";
    }
}

function resultado(){



    let materialesTotal=document.getElementById("materialesTotal").value;

    let programacion=document.getElementById("programacion").value;
    let programacionM=document.getElementById("programacionM").value;
    if(programacion!="" && programacionM!=""){
        document.getElementById("programacionT").value=(parseFloat(programacion)*parseFloat(programacionM)).toFixed(2)+"€";
    }

    let corte=document.getElementById("corte").value;
    let corteM=document.getElementById("corteM").value;
    if(corte!="" && corteM!=""){
        document.getElementById("corteT").value=(parseFloat(corte)*parseFloat(corteM)).toFixed(2)+"€";
    }

    let plegar=document.getElementById("plegar").value;
    let plegarM=document.getElementById("plegarM").value;
    if(plegar!="" && plegarM!=""){
        document.getElementById("plegarT").value=(parseFloat(plegar)*parseFloat(plegarM)).toFixed(2)+"€";
    }

    let operacionesAuxiliares=document.getElementById("operacionesAuxiliares").value;
    let operacionesAuxiliaresM=document.getElementById("operacionesAuxiliaresM").value;
    if(operacionesAuxiliares!="" && operacionesAuxiliaresM!=""){
        document.getElementById("operacionesAuxiliaresT").value=(parseFloat(operacionesAuxiliares)*parseFloat(operacionesAuxiliaresM)).toFixed(2)+"€";
    }

    let mecanizar=document.getElementById("mecanizar").value;
    let mecanizarM=document.getElementById("mecanizarM").value;
    if(mecanizar!="" && mecanizarM!=""){
        document.getElementById("mecanizarT").value=(parseFloat(mecanizar)*parseFloat(mecanizarM)).toFixed(2)+"€";
    }

    let soldar=document.getElementById("soldar").value;
    let soldarM=document.getElementById("soldarM").value;
    if(soldar!="" && soldarM!=""){
        document.getElementById("soldarT").value=(parseFloat(soldar)*parseFloat(soldarM)).toFixed(2)+"€";
    }


    let pintura=document.getElementById("pintura").value;
    let subcontratacion=document.getElementById("subcontratacion").value;

    let montar=document.getElementById("montar").value;
    let montarM=document.getElementById("montarM").value;
    if(montar!="" && montarM!=""){
        document.getElementById("montarT").value=(parseFloat(montar)*parseFloat(montarM)).toFixed(2)+"€";
    }

    let embalar=document.getElementById("embalar").value;
    let embalarM=document.getElementById("embalarM").value;
    if(embalar!="" && embalarM!=""){
        document.getElementById("embalarT").value=(parseFloat(embalar)*parseFloat(embalarM)).toFixed(2)+"€";
    }
    
    let transporte=document.getElementById("transporte").value;
    let otros=document.getElementById("otros").value;

    let margen=document.getElementById("margen").value;

    if(materialesTotal!="" && programacion!="" && programacionM!="" && corte!="" && corteM!="" && plegar!="" && plegarM!="" && operacionesAuxiliares!="" && operacionesAuxiliaresM!="" && 
    mecanizar!="" && mecanizarM!="" && soldar!="" && soldarM!="" && pintura!="" && subcontratacion!="" && montar!="" && montarM!="" && 
    embalar!="" && embalarM!="" && transporte!="" && otros!="" && margen!=""){
        let resultado=(parseFloat(materialesTotal)+
            (parseFloat(programacion)*parseFloat(programacionM))+
            (parseFloat(corte)*parseFloat(corteM))+
            (parseFloat(plegar)*parseFloat(plegarM))+
            (parseFloat(operacionesAuxiliares)*parseFloat(operacionesAuxiliaresM))+
            (parseFloat(mecanizar)*parseFloat(mecanizarM))+
            (parseFloat(soldar)*parseFloat(soldarM))+
            parseFloat(pintura)+
            parseFloat(subcontratacion)+
            (parseFloat(montar)*parseFloat(montarM))+
            (parseFloat(embalar)*parseFloat(embalarM))+
            parseFloat(transporte)+
            parseFloat(otros))*
            parseFloat(margen);

        document.getElementById("resultadoFinal").value = resultado.toFixed(2)+`€`;
    } else {
        document.getElementById("resultadoFinal").value = "";
    }
    
}