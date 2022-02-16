
//VARIABLES 

let ahorro=5000;
let gasto=1500;
let meses;
let sueldo=1800;
let MesesRendodeados;
let currencySelector_el =document.getElementById("currencySelector").value
let currencyInUse =currencySelector_el;

        
function updateTextInput(val) {
          document.getElementById('textInput').textContent=val+ currencyInUse; 
          ahorro=val;
          Calcmeses ();
        
          
        }

function updateTextInput2(val) {
          document.getElementById('textInput2').textContent=val+ currencyInUse; 
          gasto= val;
          Calcmeses ();
          
          
        }
function updateTextInput3(val) {
          document.getElementById('textInput3').textContent= val+ currencyInUse; 
          sueldo= val;
          Calcmeses ();
          
          
          
        }

function Calcmeses (){
            meses = (ahorro) / (gasto - sueldo);
            MesesRendodeados = Math.trunc(meses)

            if(gasto==sueldo){
              var meses = (ahorro) / (gasto - sueldo);
                   MesesRendodeados = Math.trunc(meses)
                document.getElementById('resultado').innerHTML = "Result: You earn exactly enough to cover your expenses";
            }else if(gasto>sueldo){
                document.getElementById('resultado').innerHTML = "Result: "+ MesesRendodeados +" months left";
            }
            else{
                document.getElementById('resultado').innerHTML = "Result: You earn enough to cover your expenses";
            }
         }    
         
function updateCurrency(){

  currencyInUse=document.getElementById("currencySelector").value
  updateTextInput(ahorro)
  updateTextInput2(gasto)
  updateTextInput3(sueldo)

}

            
            

