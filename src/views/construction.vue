<template>
    <div class="content-wrapper">
        <img id="logo" src="@/assets/logo.png" alt="Logo FPLink">
        <span id="text">Página en construcción</span>
    </div>
  </template>
  
  <style scoped lang="scss">
  @import "@/styles/vars.css";
  @import "@/styles/_mixins.scss";
  
  @mixin font() {
    font-family: Poppins;
  }
  
  .content-wrapper{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    #logo{
        width: 200px;
        height: auto;

    }
    #text{
        @include font();
        font-weight: 700;
        font-size: larger;
    }
  }
  </style>

  <script>
  export default {
  name: "construction",
  data() {
    return {
        
    };
  },
};
</script>