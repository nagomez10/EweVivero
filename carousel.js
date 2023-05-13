var imagenes = ["assets/imagenes/slider1.png",
                "assets/imagenes/slider2.png",
                "assets/imagenes/slider3.png",
                "assets/imagenes/slider1.png"
               ];

document.Imagen.src = imagenes[0];

var SliderIzquierdo = document.querySelector(".slider-izquierdo");
var SliderDerecho = document.querySelector(".slider-derecho");
var Contador = 0;

function MoverDerecha()
  {
     Contador++;
     if(Contador > imagenes.length - 1)
        {
           Contador = 0;
        }
     document.Imagen.src = imagenes[Contador];
  }
var Intervalo = setInterval(MoverDerecha, 2000);

SliderDerecho.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverDerecha();
     Intervalo = setInterval(MoverDerecha, 2000);
  });


function MoverIzquierda()
  {
     Contador--;
     if(Contador < 0)
       {
         Contador = imagenes.length - 1;
       }
     document.Imagen.src = imagenes[Contador];
  }
SliderIzquierdo.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverIzquierda();
     Intervalo = setInterval(MoverDerecha, 2000);
  });