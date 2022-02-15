
//VARIABLES 

let ahorro=5000;
let gasto=1500;
let meses;
let sueldo=1800;
let MesesRendodeados;

        
function updateTextInput(val) {
          document.getElementById('textInput').textContent=val+ " \u20ac"; 
          ahorro=val;
          Calcmeses (ahorro,gasto);
        
          
        }

function updateTextInput2(val) {
          document.getElementById('textInput2').textContent=val+ " \u20ac"; 
          gasto= val;
          Calcmeses (ahorro,gasto);
          
          
        }
function updateTextInput3(val) {
          document.getElementById('textInput3').textContent= val+ " \u20ac"; 
          sueldo= val;
          Calcmeses (ahorro,gasto);
          
          
          
        }

function Calcmeses (ahorro,gasto){
            var meses = (ahorro) / (gasto - sueldo);
            MesesRendodeados = Math.trunc(meses)

            if(gasto===sueldo){
                document.getElementById('resultado').innerHTML = "Result: You earn exactly enough to cover your expenses";
            }else if(MesesRendodeados>0){
                document.getElementById('resultado').innerHTML = "Result: "+ MesesRendodeados +" months left";
            }
            else{
                document.getElementById('resultado').innerHTML = "Result: You earn enough to cover your expenses";
            }
         }         

            
            

