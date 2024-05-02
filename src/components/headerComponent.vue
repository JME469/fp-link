<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo-container">
        <div id="logo">
          FPLink
        </div>
      </router-link>
      <nav id="nav-container">
        <ul class="nav">
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/estudiantes">Estudiantes</router-link></li>
          <li><router-link to="/empresas">Empresas</router-link></li>
          <!--<li><router-link to="/about">Acerca de</router-link></li>-->
          <li><router-link to="/contact">Contacto</router-link></li>
        </ul>
        <button class="menu-toggle" @click="toggleNav">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.css';
@import '@/styles/_mixins.scss';

.header {
  background-color: var(--lightGreen);
  color: var(--black);
  padding: 20px 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    #logo {
      font-family: Syne;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: larger;
      text-decoration: none;
      color: var(--black);
    }
  }

  #nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .nav {
      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {

        &:last-child {
          margin-right: 0;
        }

        a {
          @include navItem;

          &:hover {
            text-decoration: underline;
          }
        }
      }


      .menu-toggle {
        display: none;
        /* Hide by default */

        span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #fff;
          margin-bottom: 5px;
        }
      }
    }
  }

  /* Media query for mobile */
  @media (max-width: 768px) {
    nav {
      display: none;
      /* Hide nav by default */
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding-top: 10px;
      background-color: #333;

      &.nav-open {
        display: flex;
        /* Show nav when isNavOpen is true */
      }

      .menu-toggle {
        display: block;
        /* Show menu toggle button */
        cursor: pointer;
        padding: 10px;
        background-color: transparent;
        border: none;

        span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: #fff;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>