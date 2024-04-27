<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="Logo">
      </router-link>
      <nav :class="{ 'nav-open': isNavOpen }">
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/estudiantes">Estudiantes</router-link></li>
          <li><router-link to="/empresas">Empresas</router-link></li>
          <li><router-link to="/about">Acerca de</router-link></li>
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
.header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo img {
      width: 100px; /* Adjust the width as needed */
    }
  }

  nav {
    display: flex;
    align-items: center;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 20px;

        &:last-child {
          margin-right: 0;
        }

        a {
          color: #fff;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .menu-toggle {
      display: none; /* Hide by default */

      span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #fff;
        margin-bottom: 5px;
      }
    }
  }

  /* Media query for mobile */
  @media (max-width: 768px) {
    nav {
      display: none; /* Hide nav by default */
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding-top: 10px;
      background-color: #333;

      &.nav-open {
        display: flex; /* Show nav when isNavOpen is true */
      }

      .menu-toggle {
        display: block; /* Show menu toggle button */
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