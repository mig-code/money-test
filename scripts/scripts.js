
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
          Printmeses();
        
          
        }

function updateTextInput2(val) {
          document.getElementById('textInput2').textContent=val+ currencyInUse; 
          gasto= val;
          Calcmeses ();
          Printmeses()
          
        }
function updateTextInput3(val) {
          document.getElementById('textInput3').textContent= val+ currencyInUse; 
          sueldo= val;
          Calcmeses ();
          Printmeses()
          
        }

function Printmeses (){
            if(meses>0 && meses<1){
              document.getElementById('resultado').innerHTML = "Result: You are almost broke";
            }
            else if(meses===0){
              document.getElementById('resultado').innerHTML = "Result: You earn exactly enough to cover your expenses";
                
              }else if(meses>0 ){
                document.getElementById('resultado').innerHTML = "Result: "+ MesesRendodeados +" months left";
              }
                else if(meses<0 ){
                    document.getElementById('resultado').innerHTML = "Result: You earn enough to cover your expenses";
                }
              }   
           
         
function updateCurrency(){

  currencyInUse=document.getElementById("currencySelector").value
  updateTextInput(ahorro)
  updateTextInput2(gasto)
  updateTextInput3(sueldo)

}

function Calcmeses(){
  if(gasto===sueldo){
   // Use to debug errors in html document.getElementById("printMeses").textContent="IGUALITO"
    MesesRendodeados=0

  }else {
  meses = (ahorro) / (gasto - sueldo)
  MesesRendodeados = Math.trunc(meses)

 // Use to debug errors in html document.getElementById("printMeses").textContent=meses
  }
  


}

            
            

