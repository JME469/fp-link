<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo-container">
        <div id="logo">
          FPLink
        </div>
      </router-link>
      <nav id="nav-container">
        <ul :class="{'nav': !isNavOpen, 'nav-open': isNavOpen}">
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
      <button v-if="isLoggedIn" @click="logoutUser" class="button">Log out</button>
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
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover{
    padding: 10px 24px 10px 24px;
    margin: -2px;
  }
}
@media screen and (max-width: 800px) {
    ::-webkit-scrollbar{
      display: none !important;
    }

  .container{
    justify-content: space-between !important;
  }

  .logo-container{
    order: 2;
    align-self: center;
  }

  #nav-container{
    order: 1;
    padding: 0;
    margin-left: 15px;
  }

  .button{
    order: 3;
  }

  .nav {
    display: none !important;
    flex-direction: column !important;
    align-items: flex-start;
    width: 100%;
    padding-top: 10px;
  }

  .nav-open {
    display: flex !important;
    flex-direction: column !important;
    gap: 15px;
    align-items: flex-start;
    justify-content: center;
    width: 20%;
    padding-top: 10px;
    margin: 10px;
    padding: 20px;
    list-style-type: none;

    position: absolute;
    top: 45px;
    left: 15px;
    background-color: var(--lightGreen);
    border-radius: 10px;
    border: solid 2px var(--miscGreen);
    li{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
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
    // toggleNav() {
    //   if (document.getElementsByClassName('nav')[0].style.display=='none') {
    //     document.getElementsByClassName('nav')[0].style.display = 'flex'
    //   } else{
    //     document.getElementsByClassName('nav')[0].style.display = 'none'
    //   }
    // },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>
