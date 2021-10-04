/*Abrir y cerrar menú hamburguesa*/

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
/*---------------------*/


let buttons = document.querySelectorAll(".button");
    
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e)=>{
          e.preventDefault(); // preventing form submitting
    
          let overlay = document.createElement('span'); //creating a tag(span)
          overlay.classList.add("overlay"); //adding a class inside the span
          e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML
    
          let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
          let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click
    
           overlay.style.left = xValue + "px"; //changing the position of the overlay according to our clicks on the button
           overlay.style.top = yValue + "px"; //changing the position of the overlay according to our clicks on the button
      });
      }


/*Contador proyectos-experiencia*/

addEventListener('DOMContentLoaded', () =>{
  const contadores = document.querySelectorAll('.contador_cantidad')
  const velocidad = 1000

  const animarContadores = () =>{
    for (const contador of contadores) {
        const actualizar_contador = () =>{
          let cantidad_maxima = +contador.dataset.cantidadTotal,
          valor_actual = +contador.innerText,
          incremento = cantidad_maxima / velocidad

          if(valor_actual < cantidad_maxima){
              contador.innerText = Math.ceil(valor_actual + incremento)
              setTimeout(actualizar_contador, 5)
          } else{
              contador.innerText = cantidad_maxima
          }
        }
        actualizar_contador()
    }
  }

  //IntersectionObserver

  const mostrarContadores = elementos => {
      elementos.forEach(elemento =>{
          if(elemento.isIntersecting){
              elemento.target.classList.add('animar')
              elemento.target.classList.remove('ocultar')
              setTimeout(animarContadores, 300)
          }
      });
  }

  const observer = new IntersectionObserver(mostrarContadores, {
      threshold: 0.75 // 0 - 1
  })

  const elementosHTML = document.querySelectorAll('.contador')
  elementosHTML.forEach(elementosHTML =>{
      observer.observe(elementosHTML)
  })

})

/*---------------------*/


/*Testimonios sliders*/

let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 2000;

window.addEventListener("resize",function(){
  tamañoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
  slides();
}, intervalo);


function slides(){
  slider.style.transform = 'translate('+ (- tamañoWidth * contador) + 'px)';
  slider.style.transition = 'transform 1s';
  contador++;

  if(contador == sliderInd.length){
    contador=0;
    setTimeout(function(){
      slider.style.transform = 'translate(0px)';
      slider.style.transition = 'transform 0s';
    },intervalo)
  }

}