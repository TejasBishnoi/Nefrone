function getVal() {
    let inputval = document.querySelector('input').value;
    replacethechar(inputval)
  }
  function replacethechar(inputval){
     console.log(inputval);
     let l = inputval.length;
     console.log(l);
     for(let i = 0; i < l ; ){
            if(inputval.charAt(i)=="a"){
                inputval.replaceAt(i,"s");
                i++;
            }else if (inputval.charAt(i)=="b"){
                inputval.replaceAt(i,"r");
                i++;
            }else if(inputval.charAt(i)=="c"){
                inputval.replaceAt(i,"@");
                i++;
            }else if(inputval.charAt(i)=="d"){
                inputval.replaceAt(i,"j");
                i++;
            }else if(inputval.charAt(i)=="e"){
                inputval.replaceAt(i,"m");
                i++;
            }else if(inputval.charAt(i)=="f"){
                inputval.replaceAt(i,"=")
                i++;
            }else if(inputval.charAt(i)=="g"){
                inputval.replaceAt(i,"o");
                i++;
            }else if(inputval.charAt(i)=="h"){
                inputval.replaceAt(i,"z");
                i++;
            }else if(inputval.charAt(i)=="i"){
                inputval.replaceAt(i,"q");
                i++;
            }else if(inputval.charAt(i)=="j"){
                inputval.replaceAt(i,"#");
                i++;
            }else if(inputval.charAt(i)=="k"){
                inputval.replaceAt(i,"g");
                i++;
            }else if(inputval.charAt(i)=="l"){
                inputval.replaceAt(i,"x");
                i++;
            }else if(inputval.charAt(i)=="m"){
                inputval.replaceAt(i,"w");
                i++;
            }else if(inputval.charAt(i)=="n"){
                inputval.replaceAt(i,"*");
                i++;
            }else if(inputval.charAt(i)=="o"){
                inputval.replaceAt(i,"v");
                i++;
            }else if(inputval.charAt(i)=="p"){
                inputval.replaceAt(i,"<");
                i++;
            }else if(inputval.charAt(i)=="q"){
                inputval.replaceAt(i,"a");
                i++;
            }else if(inputval.charAt(i)=="r"){
                inputval.replaceAt(i,"+");
                i++;
            }else if(inputval.charAt(i)=="s"){
                inputval.replaceAt(i,"l");
                i++;
            }else if(inputval.charAt(i)=="t"){
                inputval.replaceAt(i,"y");
                
                i++;
            }else if(inputval.charAt(i)=="u"){
                inputval.replaceAt(i,"()");
                i++;
            }else if(inputval.charAt(i)=="v"){
                inputval.replaceAt(i,"d");
                i++;
            }else if(inputval.charAt(i)=="w"){
                inputval.replaceAt(i,">");
                i++;
            }else if(inputval.charAt(i)=="x"){
                inputval.replaceAt(i,"f");
                i++;
            }else if(inputval.charAt(i)=="y"){
                inputval.replaceAt(i,"t");
                i++;
            }else if(inputval.charAt(i)=="z"){
                inputval.replaceAt(i,"Ω");
                i++;    
            }
     }

     
     console.log(inputval);
  }
  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }