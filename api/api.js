
  
  function isMutant (dna)
  {
   
  if (dna) {
   for (i = 0; i < dna.length; i++) {
  // busco secuencia "CCCC"
  if(dna[i].includes("CCCC"))
  {
      var colC= dna[i].indexOf("CCCC") +4;
      console.log("columna C nro: "+colC)
      var filaC = i
      console.log("fila nro C: "+filaC)
      containC = new Boolean(true);
  }
  
     if(i<=dna.length-3) {
        
       //busco secuencia con "GGGG"
         
  for(e = 0; e <= dna[i].length-1; e++)
  {  
      var dna1 = dna[i+1].substring(e,e+1);
     var   dna2 = dna[i+2].substring(e,e+1); 
   
     if(typeof dna1 !== 'undefined' && typeof dna2 !== 'undefined' && i!=0){
   var  columna = dna[i-1].substring(e,e+1) + dna[i].substring(e,e+1) +dna1 + dna2;
   
    if(columna.includes("GGGG"))
  {
      var colG=e
      var filaG=i+3
      console.log("fila G nro: "+filaG)
      console.log("columna G nro: "+colG)
  }
   
      }
      
      
      
  };
  
  
  }
  //Busco secuencia con "AAAA"
  if(i<=dna.length-4) {
 for(d=0; d<=dna[i].length-4;d++)
        {
            var diagonal =dna[i].substring(d,d+1)+dna[i+1].substring(d+1,d+2)+dna[i+2].substring(d+2,d+3)+dna[i+3].substring(d+3,d+4);
            
        if(diagonal.includes("AAAA"))
        {
            var colA=d+4;
            var filaA=i+4;
            console.log("fila A : "+filaA)
            console.log("columna A: "+colA )
        }
            
        };
  }
 
   };
  
   
  }
if (colA==colC && colG == colA && colA!=null && filaA==filaC && filaA==filaG && filaA!=null)
{
 return {msj:"HTTP 200-OK"};

}
else
{
return{msj:"403-FORBBIDEN"}
}
  }
  
function main(params) {
    if(params.dna){
        var msj = isMutant(params.dna)
    return {msj}
    }
    else
    {
        return {msj:"set parameters"}
    }
}

exports.main = main;
