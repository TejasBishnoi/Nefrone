function getVal() {
    let inputval = document.querySelector('input').value;
    replacethechar(inputval);
  }
function replacethechar(inputval){
     console.log(inputval);

     console.log(inputval.length)
      for (var i = -1; i < inputval.length; i++) {
          
        if (inputval.charAt(i)=="a" || inputval.charAt(i)=="A") {
            inputval = inputval.replaceAt(i,"s")
            
         // console.log(inputval.charAt(i));
        }else if(inputval.charAt(i)=="b" || inputval.charAt(i)=="B"){
            inputval = inputval.replaceAt(i,"r")
        }else if(inputval.charAt(i)=="c" || inputval.charAt(i)=="C"){
            inputval = inputval.replaceAt(i,"@")
        }else if(inputval.charAt(i)=="d" || inputval.charAt(i)=="D"){
            inputval = inputval.replaceAt(i,"j")
        }else if(inputval.charAt(i)=="e" || inputval.charAt(i)=="E"){
            inputval = inputval.replaceAt(i,"m")
        }else if(inputval.charAt(i)=="f" || inputval.charAt(i)=="F"){
            inputval = inputval.replaceAt(i,"=")
        }else if(inputval.charAt(i)=="g" || inputval.charAt(i)=="G"){
            inputval = inputval.replaceAt(i,"o")
        }else if(inputval.charAt(i)=="h" || inputval.charAt(i)=="H"){
            inputval = inputval.replaceAt(i,"z")
        }else if(inputval.charAt(i)=="i" || inputval.charAt(i)=="I"){
            inputval = inputval.replaceAt(i,"q")
        }else if(inputval.charAt(i)=="j" || inputval.charAt(i)=="J"){
            inputval = inputval.replaceAt(i,"#")
        }else if(inputval.charAt(i)=="k" || inputval.charAt(i)=="K"){
            inputval = inputval.replaceAt(i,"g")
        }else if(inputval.charAt(i)=="l" || inputval.charAt(i)=="L"){
            inputval = inputval.replaceAt(i,"x")
        }else if(inputval.charAt(i)=="m" || inputval.charAt(i)=="M"){
            inputval = inputval.replaceAt(i,"w")
        }else if(inputval.charAt(i)=="n" || inputval.charAt(i)=="N"){
            inputval = inputval.replaceAt(i,"*")
        }else if(inputval.charAt(i)=="o" || inputval.charAt(i)=="O"){
            inputval = inputval.replaceAt(i,"v")
        }else if(inputval.charAt(i)=="p" || inputval.charAt(i)=="P"){
            inputval = inputval.replaceAt(i,"<")
        }else if(inputval.charAt(i)=="q" || inputval.charAt(i)=="Q"){
            inputval = inputval.replaceAt(i,"a")
        }else if(inputval.charAt(i)=="r" || inputval.charAt(i)=="R"){
            inputval = inputval.replaceAt(i,"+")
        }else if(inputval.charAt(i)=="s" || inputval.charAt(i)=="S"){
            inputval = inputval.replaceAt(i,"l")
        }else if(inputval.charAt(i)=="t" || inputval.charAt(i)=="T"){
            inputval = inputval.replaceAt(i,"y")
        }else if(inputval.charAt(i)=="u" || inputval.charAt(i)=="U"){
            inputval = inputval.replaceAt(i,"()")
        }else if(inputval.charAt(i)=="v" || inputval.charAt(i)=="V"){
            inputval = inputval.replaceAt(i,"d")
        }else if(inputval.charAt(i)=="w" || inputval.charAt(i)=="W"){
            inputval = inputval.replaceAt(i,">")
        }else if(inputval.charAt(i)=="x" || inputval.charAt(i)=="X"){
            inputval = inputval.replaceAt(i,"f")
        }else if(inputval.charAt(i)=="y" || inputval.charAt(i)=="Y"){
            inputval = inputval.replaceAt(i,"t")
        }else if(inputval.charAt(i)=="z" || inputval.charAt(i)=="Z"){
            inputval = inputval.replaceAt(i,"Ω")
        }
    
    }
    console.log(inputval);
    alert("the encrypted langauge is :"+ " "+inputval);
}
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    function redirecttodecode(){
        window.location = "decode/decode.html";
    }