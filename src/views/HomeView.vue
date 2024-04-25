<template>
  <div id="page-container">
    <div id="banner-container">
      <div id="header">
        <div id="logo-container">
          <a href="" id="logo">FPLink</a>
        </div>
        <nav>
          <ul id="nav">
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/estudiantes">Estudiantes</router-link></li>
            <li><router-link to="/empresas">Empresas</router-link></li>
            <li><router-link to="/about">Acerca de</router-link></li>
            <li><router-link to="/contact">Contacto</router-link></li>
          </ul>
        </nav>
      </div>
      <div id="block1">
        <div id="b1-content">
          <h1>Conecta con tu futura FCT</h1>
          <p>Encuentra la empresa ideal para realizar tus prácticas profesionales. Crea tu perfil y destaca tus
            habilidades para conseguir tu Formación en Centros de Trabajo.</p>
          <button>Comienza ya</button>
        </div>
        <div id="img-container">
          <img src="@/assets/pexels-fauxels-3183150.jpeg" alt="">
        </div>
      </div>
    </div>
    <div id="block2">
      <div id="block2-header">
        <h2>¿Qué es FPLink?</h2>
        <p>Descubre cómo podemos ayudarte a encontrar la mejor oportunidad de prácticas para tu formación profesional.
        </p>
      </div>
      <hr>
      <div id="block2-content">
        <div class="subBlock">
          <h3>Perfiles personalizados</h3>
          <p>Estudiante: Crea tu perfil, muestra tus intereses y habilidades, y demuestra porqué mereces esa oportunidad
            de prácticas deseada!

            Empresa: Presenta como trabaja tu compañía, a que se dedica y que es lo que buscas en tus trabajadores</p>
        </div>
        <div class="subBlock">
          <h3>Contacta fácilmente</h3>
          <p>Los alumnos y empresas serán capaces de contactar fácilmente los unos con los otros, permitiendo así una
            mayor fluidez en el proceso!</p>
        </div>
        <div class="subBlock">
          <h3>Búsqueda simplificada</h3>
          <p>Haz uso del sistema de filtrado de búsqueda para encontrar las opciones que mejor se adaptan a tí.

            Busca por localización, intereses, actividad, y mucho más</p>
        </div>
      </div>
    </div>
    <div id="block3">
      <div id="b3-container">
        <div id="b3-images">
          <img id="img2" src="@/assets/pexels-mart-production-7550298.jpeg" alt="" width="215px">
          <img id="img1" src="@/assets/pexels-fauxels-3184423.jpeg" alt="" width="215px">
        </div>
        <div id="b3-content">
          <h2>Sobre nosotros</h2>
          <p>FPLink une a estudiantes de Formación Profesional en España con empresas que ofrecen oportunidades de
            prácticas. Los estudiantes pueden crear perfiles, mostrar sus habilidades y encontrar la colocación ideal
            para su requisito de FCT.</p>
        </div>
      </div>
    </div>
    <div id="block4">
      <div id="b4-img">
        <img src="@/assets/pexels-fauxels-3183197.jpeg" alt="">
      </div>
      <div id="b4-content">
        <div id="b4-heading">
          <h2>Nuestra propuesta única</h2>
          <p>Descubre por qué somos la mejor opción para conectar estudiantes y empresas en el ámbito de la Formación
            Profesional.</p>
        </div>
        <hr>
        <div id="b4-subblocks">
          <div class="b4-subblock">
            <h3>Colaboraciones exclusivas</h3>
            <p>Acceso a empresas comprometidas con la formación de futuros profesionales, garantizando aprendizaje de
              calidad.</p>
          </div>
          <div class="b4-subblock">
            <h3>Facilidad de uso</h3>
            <p>Interfaz intuitiva para una experiencia de búsqueda simple y eficaz, asegurando una conexión rápida con
              tu empresa ideal.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="block5">
      <div id="b5-content">
        <h3>Maximiza tu Formación Profesional</h3>
        <p>No pierdas la oportunidad de potenciar tu aprendizaje. Regístrate ahora y encuentra tu lugar en el mundo
          laboral.</p>
        <button>Comienza ya</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import '@/styles/vars.css';

#page-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

#banner-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
  min-height: 450px;
  background-color: var(--lightGreen);

  #header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    margin-top: 30px;

    #logo-container {
      margin-top: 20px;

      #logo {
        font-family: Syne;
        font-weight: 800;
        letter-spacing: 2px;
        font-size: larger;
      }
    }

    nav {
      padding: 10px;
      margin-top: 10px;

      #nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 30px;

        li {
          display: inline;

        }
      }
    }
  }

  #block1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 70px;
    margin-top: 50px;
    margin-bottom: -130px;

    #b1-content {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: left;

      h1,
      p {
        text-align: left;
        font-family: Poppins;
      }

      h1 {
        font-weight: 700;
        max-width: 250px;
      }

      p {
        font-size: 13px;
      }

      button {
        font-family: Poppins;
        font-weight: 600;
        text-align: center;
        background-color: var(--miscGreen);
        color: var(--white);
        border-radius: 10px;
        border: none;
        width: fit-content;
        padding: 8px 22px 8px 22px;
      }
    }

    #img-container {
      border-radius: 20px;
      width: 280px;
      height: 360px;
      overflow: hidden;
      box-shadow: var(--imgShadow);

      img {
        height: 100%;
        width: auto;
        object-fit: cover;
      }
    }
  }
}

#block2 {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 80px;

  hr {
    background-color: #71caba;
    height: 2px;
    width: 55%;
    border: none;
  }

  #block2-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 80px;
    max-width: 75%;

    h2,
    p {
      font-family: Poppins;
    }

    h2 {
      font-weight: 700;
    }

    p {
      max-width: 50%;
      text-align: left;
    }
  }

  #block2-content {
    display: flex;
    flex-direction: row;
    max-width: 70%;
    gap: 30px;

    .subBlock {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 33%;

      h3,
      p {
        font-family: Poppins;
      }

      p {
        font-size: 14px;
      }
    }
  }
}

#block3 {
  background-color: var(--black);
  padding: 90px;
  padding-top: 105px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  #b3-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    width: 85%;
    gap: 80px;

    #b3-images {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      img {
        border-radius: 10px;
        box-shadow: var(--imgShadow);
        max-height: 300px;
      }

      #img2 {
        transform: translate(125px, -30px);
      }

      #img1 {
        z-index: 500;
      }
    }

    #b3-content {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;

      h2,
      p {
        font-family: Poppins;
        color: var(--white);
      }

      h2 {
        font-weight: 600;
      }

      p {
        text-align: left;
        max-width: 80%;
      }
    }
  }
}

#block4 {
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  width: 80%;

  #b4-img {
    max-height: 450px;

    img {
      transform: rotate(-90deg);
      border-radius: 15px;
      height: auto;
      height: 390px;
      width: 550px;
      box-shadow: var(--imgShadow);
    }
  }

  #b4-content {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    justify-content: center;
    width: 40%;

    #b4-heading {
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: start;

      h2,
      p {
        font-family: Poppins;
      }

      p {
        text-align: left;
      }
    }

    hr {
      background-color: #71caba;
      height: 1px;
      width: 110%;
      border: none;
    }

    #b4-subblocks {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .b4-subblock {
        display: flex;
        flex-direction: column;
        gap: 12px;
        justify-content: left;
        align-items: start;

        h3,
        p {
          font-family: Poppins;
        }

        p {
          text-align: left;
        }
      }
    }
  }
}

#block5 {
  background-color: var(--black);
  background-image: url("@/assets/pexels-fauxels-3182781.jpeg");
  background-size: 750px;
  background-repeat: no-repeat;
  background-position: 90%;
  min-height: 300px;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  #b5-content {
    position: absolute;
    left: 10%;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 15px;

    h3,
    p {
      font-family: Poppins;
      color: var(--white);
      text-align: left;
    }

    button {
      font-family: Poppins;
      font-weight: 600;
      text-align: center;
      background-color: var(--miscGreen);
      color: var(--white);
      border-radius: 10px;
      border: none;
      width: fit-content;
      padding: 8px 22px 8px 22px;
    }
  }
}

a {
  color: var(--black);
  text-decoration: none;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 15px;
}

a:hover {
  text-decoration: underline;
}
</style>

<script>
import Footer from "@/components/footerComponent.vue";

export default {
  name: "HomeView",
  components: {
    Footer
  }
};
</script>
