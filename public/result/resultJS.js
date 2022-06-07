changeans();


function changeans(){
    const dataanswer = sessionStorage.getItem('translate');
    console.log(dataanswer);
    const text = document.getElementById('answer').innerHTML = sessionStorage.getItem('translate');
    

}