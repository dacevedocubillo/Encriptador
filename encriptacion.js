const textArea=document.querySelector(".textarea");
const mensaje=document.querySelector(".mensaje");


function encriptar(stringEncriptado){
    let textoCifrado =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado= stringEncriptado.toLowerCase()

    for(let i=0; i< textoCifrado.length; i++){
        if(stringEncriptado.includes(textoCifrado[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(textoCifrado[i][0],textoCifrado[i][1])
        }
    }

	return stringEncriptado
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
}