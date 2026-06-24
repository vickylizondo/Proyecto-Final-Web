document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector(".contacto");

    if(formulario){

        formulario.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Consulta enviada correctamente.");

            formulario.reset();

        });

    }

});