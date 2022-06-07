function getVal() {
    var inputval = document.querySelector('input').value;
    replacethechar(inputval)
  }
  function replacethechar(inputval){
     console.log(inputval)
     var inputval = inputval.replace("a", "s");
     var inputval = inputval.replace("b","r");
     var inputval = inputval.replace("c","@");
     var inputval = inputval.replace("d","j");
     var inputval = inputval.replace("e","m");
     var inputval = inputval.replace("f","=");
     var inputval = inputval.replace("g","o");
     var inputval = inputval.replace("h","z");
     var inputval = inputval.replace("i","q");
     var inputval = inputval.replace("j","#");
     var inputval = inputval.replace("k","g");
     var inputval = inputval.replace("l","x");
     var inputval = inputval.replace("m","w");
     var inputval = inputval.replace("n","*");
     var inputval = inputval.replace("o","v");
     var inputval = inputval.replace("p","<");
     var inputval = inputval.replace("q","a");
     var inputval = inputval.replace("r","+");
     var inputval = inputval.replace("s","l");
     var inputval = inputval.replace("t","y");
     var inputval = inputval.replace("u","()");
     var inputval = inputval.replace("v","d");
     var inputval = inputval.replace("w",">");
     var inputval = inputval.replace("x","f");
     var inputval = inputval.replace("y","t");
     var inputval = inputval.replace("z","");
     
  }