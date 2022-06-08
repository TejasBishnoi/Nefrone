function getVal() {
    let inputval = document.querySelector('input').value;
    replacethechar(inputval);
  }
function replacethechar(inputval){
     console.log(inputval);

     console.log(inputval.length)
      for (var i = -1; i < inputval.length; i++) {
          
        if ( inputval.charAt(i)=="s") {
            inputval = inputval.replaceAt(i,"a")
            
         // console.log(inputval.charAt(i));
        }else if( inputval.charAt(i)=="r"){
            inputval = inputval.replaceAt(i,"b")
        }else if( inputval.charAt(i)=="@"){
            inputval = inputval.replaceAt(i,"c")
        }else if( inputval.charAt(i)=="j"){
            inputval = inputval.replaceAt(i,"d")
        }else if( inputval.charAt(i)=="m"){
            inputval = inputval.replaceAt(i,"e")
        }else if( inputval.charAt(i)=="="){
            inputval = inputval.replaceAt(i,"f")
        }else if( inputval.charAt(i)=="o"){
            inputval = inputval.replaceAt(i,"g")
        }else if( inputval.charAt(i)=="z"){
            inputval = inputval.replaceAt(i,"h")
        }else if( inputval.charAt(i)=="q"){
            inputval = inputval.replaceAt(i,"i")
        }else if( inputval.charAt(i)=="#"){
            inputval = inputval.replaceAt(i,"j")
        }else if( inputval.charAt(i)=="g"){
            inputval = inputval.replaceAt(i,"k")
        }else if( inputval.charAt(i)=="x"){
            inputval = inputval.replaceAt(i,"l")
        }else if( inputval.charAt(i)=="w"){
            inputval = inputval.replaceAt(i,"m")
        }else if( inputval.charAt(i)=="*"){
            inputval = inputval.replaceAt(i,"n")
        }else if( inputval.charAt(i)=="v"){
            inputval = inputval.replaceAt(i,"o")
        }else if( inputval.charAt(i)=="<"){
            inputval = inputval.replaceAt(i,"p")
        }else if( inputval.charAt(i)=="a"){
            inputval = inputval.replaceAt(i,"q")
        }else if( inputval.charAt(i)=="+"){
            inputval = inputval.replaceAt(i,"r")
        }else if( inputval.charAt(i)=="l"){
            inputval = inputval.replaceAt(i,"s")
        }else if( inputval.charAt(i)=="y"){
            inputval = inputval.replaceAt(i,"t")
        }else if( inputval.charAt(i)=="()"){
            inputval = inputval.replaceAt(i,"u")
        }else if( inputval.charAt(i)=="d"){
            inputval = inputval.replaceAt(i,"v")
        }else if( inputval.charAt(i)==">"){
            inputval = inputval.replaceAt(i,"w")
        }else if( inputval.charAt(i)=="f"){
            inputval = inputval.replaceAt(i,"x")
        }else if( inputval.charAt(i)=="t"){
            inputval = inputval.replaceAt(i,"y")
        }else if( inputval.charAt(i)=="Ω"){
            inputval = inputval.replaceAt(i,"z")
        }
    
    }
    console.log(inputval);
  //  alert("the encrypted langauge is :"+ " "+inputval);
    sessionStorage.setItem("translate", inputval)
    window.location="../result/result.html";
}
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    }
    function redirecttoencode(){
        window.location = "../index.html";
    }
  