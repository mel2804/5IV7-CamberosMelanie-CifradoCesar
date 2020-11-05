//vamos a crear una funcion que se encargue del cifrado de cesar
//let == var
var cesar = cesar || (function(){
    //funcion anonima :3 
    //callback

    var doStaff = function(txt, desp, action){
        var replace = (function(){
            //mi abecedario
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                        'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 
                    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var l = abc.length;

            //funcion que se encarga de cifrar
            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                //vamos a verificar que no este vacio
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        // forward
                        pos += desp;
                        pos -= (pos >= l)?l:0;
                    } else {
                        // backward
                        pos -= desp;
                        pos += (pos < 0)?l:0;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();

        //aqui es donde tenemos que hacer el match
        var re = (/([a-z ñ])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    //ahora solo falta saber si quiero cifrar o descifrar
    return{
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },

        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };
})();

//realizar una funcion que se encargue de codificar y decodificar
function codificar(){
    var num = (/([0-9])/ig);
    var texto=document.getElementById("cadena").value;
    var seed=document.getElementById("modulo").value;
    if (seed>0 && !(texto.match(num))){
        var mod=seed%27;
    
    //obtener el texto del textarea
        document.getElementById("resultado").innerHTML = cesar.encode(
        texto, mod);
    }else{
       document.getElementById("resultado").innerHTML = "La cadena de texto no debe contener números y el desplazamiento debe ser mayor a 0"; 
    }
      
}

function decodificar(){
    var num = (/([0-9])/ig);
    var texto=document.getElementById("cadena").value;
    var seed=document.getElementById("modulo").value;
    if (seed>0 && !(texto.match(num))){
        var mod=seed%27;
    
        //obtener el texto del textarea
        document.getElementById("descifrado").innerHTML = cesar.decode(
        texto, mod);
    }else{
       document.getElementById("descifrado").innerHTML = "La cadena de texto no debe contener números y el desplazamiento debe ser mayor a 0"; 
    }
       
      
}

