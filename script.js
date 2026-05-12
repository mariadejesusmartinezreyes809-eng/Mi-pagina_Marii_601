function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "Cuida y protege a los animales";
    mensaje.style.display = "block";


    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 70);
}


const boton = document.getElementById("modoBtn");

    boton.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });


function mostrarnota() {
    let mensaje = document.getElementById("mensaje2");

    mensaje.innerHTML = "Hola, que tal, me gusta que me digan Mariii";
    mensaje.style.display = "block";


    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform = "translateY(0)";
    }, 70);
}

const btn = document.getElementById("btnArriba");

    // Mostrar botón al bajar
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    // Volver arriba al hacer clic
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    
    function volverArriba() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  

