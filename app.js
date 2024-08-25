let diccionario = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

function validar(texto){
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
        console.log(arregloTexto(arregloTextoEncriptado));
    }
}


//pendiente de modificación
function desencriptar(){
    let texto = document.getElementById("valorTexto").value;
    let arregloTextoEncriptado = [];
    if(validar(texto)){
        let cont = 0;
        while(cont<texto.length){
            for(let i = 0; i<diccionario.length; i++){
                console.log(`${diccionario[i][1]} == ${texto.substring(cont,diccionario[i][1].length)}`)
                if(diccionario[i][1]==(texto.substring(cont,diccionario[i][1].length))){
                    arregloTextoEncriptado.push(diccionario[i][0]);
                    cont = cont+diccionario[i][0].length;
                    break;
                }
            }
            if(cont<texto.length){
                arregloTextoEncriptado.push(texto[cont+1]);
            }
        }
    }
}

function arregloTexto(arreglo){
    let texto ="";
    for(let i =0; arreglo.length>i;i++){
        texto = texto + arreglo[i];
    }
    return texto;
}


