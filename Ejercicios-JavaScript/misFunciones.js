/**
 * Conversor de unidades
 * @method cambioUnidades
 * @param {string} ID
 * @param {number} Value
 * @return
 */

function cambioUnidades(ID, Value){
    if(isNaN(Value)){
        alert("Se ingreso un valor invàlido en" + ID);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(ID === "metro"){
        document.lasUnidades.unid_pulgada.value = Value * 39.3701;
        document.lasUnidades.unid_pie.value = Value * 3.28084;
        document.lasUnidades.unid_yarda.value = Value * 1.09361;
    }else if(ID === "pulgada"){
        document.lasUnidades.unid_metro.value = Value * 0.0254;
        document.lasUnidades.unid_pie.value = Value * 0.0833333;
        document.lasUnidades.unid_yarda.value = Value * 0.0277778;
    }else if(ID === "pie"){
        document.lasUnidades.unid_metro.value = Value * 0.3048;
        document.lasUnidades.unid_pulgada.value = Value * 12;
        document.lasUnidades.unid_yarda.value = Value * 0.3333333;
    }else{
        document.lasUnidades.unid_metro.value = Value *0.9144;
        document.lasUnidades.unid_pulgada.value = Value * 36;
        document.lasUnidades.unid_pie.value = Value * 3;
    }
}


function convertirGR(ID){
    var grados, radianes;
    if(ID === "grados"){
        grados = document.getElementById("grados").value;
        radianes = (grados*Math.PI/180);
    }else if(ID === "radianes"){
        radianes = document.getElementById("grados").value;
        grados = ();
    }
}