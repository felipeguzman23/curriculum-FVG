var tonalidadesFondo = ['#153448','#3A4E48', '#6A7B76',];

function cambiarColorFondo() {
    var body = document.body;
    var indice = 0;

    function cambiarColor() {
        
        body.style.transition = "background-color 1s ease"; 
        body.style.backgroundColor = tonalidadesFondo[indice];
        
        
        indice = (indice + 1) % tonalidadesFondo.length;

        
        setTimeout(cambiarColor, 1000); 
    }

    
    cambiarColor();
}

cambiarColorFondo();