let diccionario = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

function validar(texto){
    if(texto!=""){
        document.getElementById("presentacion__encriptado__sin__texto").style.display = 'none';
        document.getElementById("presentacion__encriptado__con__texto").style.display = 'block';
        
    }else{
        document.getElementById("presentacion__encriptado__sin__texto").style.display = 'block';
        document.getElementById("presentacion__encriptado__con__texto").style.display = 'none';
    }
    return true;
}

function encriptar(){
    let texto = document.getElementById("valorTexto").value;
    let arregloTextoEncriptado = [];
    let textoEncriptado ="";
    if(validar(texto)){
        for(let i = 0;texto.length>i;i++){
            for(let j = 0;diccionario.length>j;j++){
                if(texto[i]==diccionario[j][0]){
                    arregloTextoEncriptado.push(diccionario[j][1]);
                }
            }
            if((arregloTextoEncriptado.length-1)<i){
                arregloTextoEncriptado.push(texto[i]);
            }
        }
        //modificar recuadro
        arregloTexto(arregloTextoEncriptado);
    }
}


function desencriptar(){
    let texto = document.getElementById("valorTexto").value;
    let arregloTextoEncriptado = [];
    let encontrar = false;
    if(validar(texto)){
        let cont = 0;
        while(cont<texto.length){
            encontrar = false;
            for(let i = 0; i<diccionario.length; i++){
                if(diccionario[i][1] == (texto.substring(cont,diccionario[i][1].length+cont))){
                    arregloTextoEncriptado.push(diccionario[i][0]);
                    cont = cont+diccionario[i][1].length;
                    encontrar = true;
                    break;
                }
            }
            if(!encontrar){
                arregloTextoEncriptado.push(texto[cont]);
                cont++;
                encontrar = false;
            }
        }
        //Modificar recuadro
        arregloTexto(arregloTextoEncriptado);
    }
}


function arregloTexto(arreglo){
    let texto ="";
    for(let i =0; arreglo.length>i;i++){
        texto = texto + arreglo[i];
    }
    document.getElementById("textoProcesado").innerHTML = texto;
}

function copiar(){
    let texto = document.getElementById("textoProcesado").innerHTML;
    navigator.clipboard.writeText(texto)
}



