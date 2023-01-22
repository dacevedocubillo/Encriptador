    const mensaje=document.querySelector(".mensaje");
    const textArea=document.querySelector(".textarea");
  


    function encriptar(){
        let textArea=document.querySelector(".textarea").value;
        let textoCifrado=textArea.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
        document.querySelector(".mensaje").value=textoCifrado;
        document.querySelector(".textarea").value;
    
        mensaje.style.backgroundImage="none";
        
    }



    function desencriptar(){
        const textArea=document.querySelector(".textarea").value;
        let textoCifrado=textArea.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
        document.querySelector(".mensaje").value=textoCifrado;
        document.querySelector(".textarea").value;

        mensaje.style.backgroundImage="none";
    }





