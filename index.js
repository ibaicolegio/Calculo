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
        elementos+=`<li class="list-group-item bg-secondary bg-gradient bg-opacity-75">Total: `+total.toFixed(2)+`€</li>`;
        document.getElementById("materialesTotal").value = total;
        document.getElementById("materialTotal").innerHTML = total.toFixed(2)+"€";
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
    reiniciar();
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
        resultado();
        document.getElementById("operar").style.display = "block";
    } else {
        document.getElementById("operar").style.display = "none";
    }
}

function ocultar(){
    document.getElementById("operar").style.display = "none";
}

function resultado(){
    let materialesTotal=document.getElementById("materialesTotal").value;

    let programacion=document.getElementById("programacion").value;
    let programacionM=document.getElementById("programacionM").value;
    let proT=0;
    if(programacion!="" && programacionM!=""){
        proT=(parseFloat(programacion)*parseFloat(programacionM));
        document.getElementById("proT").innerHTML = proT.toFixed(2)+"€";
    }

    let corT=0;
    let corte=document.getElementById("corte").value;
    let corteM=document.getElementById("corteM").value;
    if(corte!="" && corteM!=""){
        corT=parseFloat(corte)*parseFloat(corteM);
        document.getElementById("corT").innerHTML = corT.toFixed(2)+"€";
    }

    let pleT=0;
    let plegar=document.getElementById("plegar").value;
    let plegarM=document.getElementById("plegarM").value;
    if(plegar!="" && plegarM!=""){
        pleT=(parseFloat(plegar)*parseFloat(plegarM));
        document.getElementById("pleT").innerHTML = pleT.toFixed(2)+"€";
    }

    let opAuxT=0;
    let operacionesAuxiliares=document.getElementById("operacionesAuxiliares").value;
    let operacionesAuxiliaresM=document.getElementById("operacionesAuxiliaresM").value;
    if(operacionesAuxiliares!="" && operacionesAuxiliaresM!=""){
        opAuxT=(parseFloat(operacionesAuxiliares)*parseFloat(operacionesAuxiliaresM));
        document.getElementById("opAuxT").innerHTML = opAuxT.toFixed(2)+"€";
    }

    let mecT=0;
    let mecanizar=document.getElementById("mecanizar").value;
    let mecanizarM=document.getElementById("mecanizarM").value;
    if(mecanizar!="" && mecanizarM!=""){
        mecT=(parseFloat(mecanizar)*parseFloat(mecanizarM));
        document.getElementById("mecT").innerHTML = mecT.toFixed(2)+"€";
    }

    let solT=0;
    let soldar=document.getElementById("soldar").value;
    let soldarM=document.getElementById("soldarM").value;
    if(soldar!="" && soldarM!=""){
        solT=(parseFloat(soldar)*parseFloat(soldarM));
        document.getElementById("solT").innerHTML = solT.toFixed(2)+"€";
    }

    let pinT=0;
    let pintura=document.getElementById("pintura").value;
    if(pintura!=""){
        pinT=parseFloat(pintura);
        document.getElementById("pinT").innerHTML = pinT.toFixed(2)+"€";
    }

    let subT=0;
    let subcontratacion=document.getElementById("subcontratacion").value;
    if(subcontratacion!=""){
        subT=parseFloat(subcontratacion);
        document.getElementById("subT").innerHTML = subT.toFixed(2)+"€";
    }

    let monT=0;
    let montar=document.getElementById("montar").value;
    let montarM=document.getElementById("montarM").value;
    if(montar!="" && montarM!=""){
        monT=(parseFloat(montar)*parseFloat(montarM));
        document.getElementById("monT").innerHTML = monT.toFixed(2)+"€";
    }

    let embT=0;
    let embalar=document.getElementById("embalar").value;
    let embalarM=document.getElementById("embalarM").value;
    if(embalar!="" && embalarM!=""){
        embT=(parseFloat(embalar)*parseFloat(embalarM));
        document.getElementById("embT").innerHTML = embT.toFixed(2)+"€";
    }
    
    let tranT=0;
    let transporte=document.getElementById("transporte").value;
    if(transporte!=""){
        tranT=parseFloat(transporte);
        document.getElementById("tranT").innerHTML = tranT.toFixed(2)+"€";
    }

    let otrT=0;
    let otros=document.getElementById("otros").value;
    if(otros!=""){
        otrT=parseFloat(otros);
        document.getElementById("otrT").innerHTML = otrT.toFixed(2)+"€";
    }

    let tot=proT+corT+pleT+opAuxT+mecT+solT+pinT+subT+monT+embT+tranT+otrT;
    document.getElementById("tot").innerHTML=tot.toFixed(2)+"€";
    document.getElementById("tot2").innerHTML=tot.toFixed(2)+"€";

    let mar=0;
    let totalConMarg=0;
    let margen=document.getElementById("margen").value;
    if(margen!=""){
        mar=parseFloat(margen);
        totalConMarg=(parseFloat(materialesTotal)+tot)*mar;
        document.getElementById("totalConMarg").innerHTML = totalConMarg.toFixed(2)+"€";
    }

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