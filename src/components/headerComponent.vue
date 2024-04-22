<template>
  <div id="header-container">
    <div>
      <a href="" id="logo">FPLink</a>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/vars.css';
#header-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  min-height: 450px;

  background-color: var(--lightGreen);
}

nav {
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 10px;
}

a {
  color: var(--black);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

#logo{
  font-family: Syne;
  font-weight: 800;
  letter-spacing: 2px;
}
</style>

<script>
export default {
  name: "Header",
};
</script>