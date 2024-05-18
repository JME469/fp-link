<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo-container">
        <div id="logo">
          FPLink
        </div>
      </router-link>
      <nav id="nav-container">
        <ul class="nav" :class="{ 'nav-open': isNavOpen }">
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
      <button v-if="isLoggedIn" @click="logoutUser" class="button">LogOut</button>
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
    gap: 20px;

    .logo-container {
      text-decoration: none;
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
        gap: 55px;
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
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .menu-toggle {
        display: none;
        border: none;

        span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: var(--black);
          margin-bottom: 5px;
        }
      }
    }
  }
}
.button {
  @include button();
}
@media screen and (max-width: 600px) {
  .nav {
    display: none !important;
    flex-direction: column !important;
    align-items: flex-start;
    width: 100%;
    padding-top: 10px;

    .nav-open {
      display: flex !important;
    }
  }
  .menu-toggle {
    display: block !important;
    cursor: pointer;
    padding: 10px;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: var(--black);
      margin-bottom: 5px;
    }
  }
}
</style>

<script>
import { logout } from '@/utils/auth';
export default {
  name: 'Header',
  data() {
    return {
      isNavOpen: false,
      isLoggedIn: !!localStorage.getItem('token'), // Initialize based on token existence
    };
  },
  mounted() {
    this.isLoggedIn = !!localStorage.getItem('token');
  },
  watch: {
    '$route'() {
      this.isLoggedIn = !!localStorage.getItem('token');
    }
  },
  methods: {
    logoutUser() {
      logout(this.$router);
      this.isLoggedIn = false; // Update local state
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>
