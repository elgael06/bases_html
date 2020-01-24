

function alerta (){
    alert('listo...');
}

function cambioColorTitulo(){
    const colorTitulo = document.querySelector('#titulo').style.color;

    if(colorTitulo == 'red'){
        document.querySelector('#titulo').style.color = "blue";
    }else{
        document.querySelector('#titulo').style.color = "red";
    }
}

