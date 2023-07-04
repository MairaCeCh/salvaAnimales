const donaciones = document.getElementById("donaciones");
const somos = document.getElementById("somos");
const contacto = document.getElementById("contacto");

donaciones.onclick = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Tu donacion nos ayuda muchisimo",
    width: 500,
    color: "BLACK",
    background: "#3AA6B9",
    backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
    showCancelButton: true,
    confirmButtonText: "si quiero donar",
    cancelButtonText: "no quiero donar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        background: "#3AA6B9",
        color: "black",
        title: "¡GRACIAS! Tu donacion fue un exito",
      });
    }
  });
};

somos.onclick = (e) => {
  e.preventDefault();
  Swal.fire({
    title:
      "Patitas felices se creo en la proviencia de Buenos Aires en 1992. Hoy ya contamos con 4 refujios alrededor del pais",
    color: "BLACK",
    background: "#3AA6B9",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};

contacto.onclick = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Buscanos en todas las redes sociales como PATITAS FELICES",
    color: "BLACK",
    background: "#3AA6B9",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
