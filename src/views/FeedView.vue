<template>
  <Header />
  <div id="feed-body">
    <div id="menu-container">
      <div id="content-wrapper">
        <ul id="menu">
          <li class="menu-item">
            <router-link to="/student-profile">
              <img src="@/assets/icons/user.png" alt="Profile icon" height="30px" />
              <span>Perfil</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/construction">
              <img src="@/assets/icons/notifications.png" alt="Notifications icon" height="30px" />
              <span>Notificaciones</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/construction">
              <img src="@/assets/icons/chat.png" alt="Chat icon" height="30px" />
              <span>Mensajes</span>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/construction">
              <img src="@/assets/icons/settings.png" alt="Settings icon" height="30px" />
              <span>Preferencias</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="feed-container">
      <div class="toggle-menu">
        <button @click="toggleView('posts')" :class="{ 'selected': currentFeed == 'posts' }">Ofertas</button>
        <button @click="toggleView('companies')" :class="{ 'selected': currentFeed == 'companies' }">Descubre
          empresas</button>
      </div>
      <div v-show="currentFeed === 'posts'">
        <div v-for="post in filteredPosts" :key="post._id" class="post-card">
          <div class="post-content-wrapper">
            <div class="post-title-container">
              <h3>{{ post.title }}</h3> | 
              <h4>{{ getCompanyName(post.empresa_id) }}</h4>
            </div>
            <p>{{ post.content }}</p>
          </div>
        </div>
      </div>
      <div v-show="currentFeed === 'companies'">
        <CompanyPostCard v-for="company in filteredCompanies" :key="company._id" :company="company" />
      </div>
    </div>
    <div id="filters-container">
      <h3>Filtros</h3><br>
      <hr><br>
      <div id="filters-wrapper">
        <div id="rama-filter" class="filters-item">
          <label for="rama">Filtra por rama</label>
          <select v-model="ramaFilter">
            <option value="">Mostrar todas las empresas</option>
            <option v-for="rama in ramaOptions" :key="rama" :value="rama">
              {{ rama }}
            </option>
          </select>
        </div>
                
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#feed-body {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.7fr;
  height: 100vh;
  margin-top: 30px;
}

hr {
  background-color: #71caba;
  height: 2px;
  width: 55%;
  border: none;
  align-self: center;
}

.post-card {
  border: 2px solid var(--miscGreen);
  padding: 35px;
  margin-bottom: 15px;
  box-shadow: var(--boxShadow);
  border-radius: 15px;
  max-width: 420px;
  background-color: var(--white);
}

.post-title-container{
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h4{
    font-size: smaller;
  }
}

#filters-container {
  background-color: var(--lightGreen);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--boxShadow);

  h3 {
    font-family: Poppins;
    font-weight: 600;
  }

  .selected {
    background-color: var(--strongGreen) !important;
  }

  #filters-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    .filters-item {
      padding: 5px;
      margin-top: 15px;
    }

    #rama-filter {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        width: 100%;
        text-align: left;
      }

      select {
        padding: 5px;
        background-color: white;
        border-radius: 5px;
        border: solid 1px var(--miscGreen);
      }
    }
  }
}

#menu-container {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 30px;
  padding: 30px;
  min-height: 290px;
  max-height: 320px;
  max-width: 250px;
  background-color: var(--lightGreen);
  box-shadow: var(--boxShadow);

  #content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    #menu {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 25px;
      align-items: start;

      .menu-item {
        cursor: pointer;

        a {
          text-decoration: none;
          color: var(--black);

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;

          span {
            font-family: Montserrat;
            font-weight: 600;
          }
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.toggle-menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  .selected {
    background-color: var(--strongGreen) !important;
    color: var(--white);
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: var(--lightGreen);
    color: var(--black);
    cursor: pointer;
    font-family: Montserrat;
    font-weight: 600;
    box-shadow: var(--boxShadow);
    border-radius: 5px;

    &:hover {
      background-color: var(--strongGreen);
      color: white;
    }
  }
}

.feed-container {
  overflow-y: auto;
  padding: 20px;
}

@media only screen and (max-width: 890px){
  #menu-container{
    display: none;
  }

  #feed-body {
    grid-template-columns: 1fr 0.5fr;
    margin-top: 30px;
  }
}

@media only screen and (max-width: 650px){
  #menu-container{
    display: none;
  }

  #feed-body {
    grid-template-columns: 1fr 0.5fr;
    margin-top: 30px;
  }

  #filters-container {
    display: none;
  }
}
</style>

<script>
import Header from "@/components/headerComponent.vue";
import CompanyPostCard from "@/components/companyPostCard.vue";
import axios from "axios";

export default {
  name: "FeedView",
  data() {
    return {
      companies: [],
      posts: [],
      currentFeed: "companies",
      ramaOptions: [],
      ramaFilter: "",
    };
  },
  components: {
    Header,
    CompanyPostCard,
  },
  mounted() {
    this.fetchCompanies();
    this.fetchPosts();
    this.fetchRamaOptions();
  },
  computed: {
    filteredCompanies() {
      if (this.ramaFilter) {
        return this.companies.filter(company => company.rama == this.ramaFilter);
      }
      return this.companies;
    },
    filteredPosts(){
      if (this.ramaFilter) {
        return this.posts.filter(post => post.rama == this.ramaFilter);
      }
      return this.posts;
    }
  },
  methods: {
    async fetchCompanies() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3000/routes/empresas",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.companies = response.data;
        console.log("Companies: ", this.companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    },
    async fetchPosts() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/routes/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async fetchRamaOptions() {
      try {
        const response = await axios.get("http://localhost:3000/routes/ramas");
        this.ramaOptions = response.data;
      } catch (error) {
        console.error("Error fetching rama options:", error);
      }
    },
    getCompanyName(companyId){
      const company = this.companies.find((company) => company.id === companyId);
      return company.name;
    },
    toggleView(view) {
      this.currentFeed = view;
    },
  },
};
</script>
