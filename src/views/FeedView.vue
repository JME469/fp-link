<template>
    <Header />
    <div id="feed-body">
        <div id="menu-container">
            <div id="content-wrapper">
                <ul id="menu">
                    <li class="menu-item">
                        <router-link to="/student-profile">
                            <img src="@/assets/icons/user.png" alt="Profile icon" height="30px">
                            <span>Perfil</span>
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/">
                            <img src="@/assets/icons/notifications.png" alt="Notifications icon" height="30px">
                            <span>Notificaciones</span>
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/">
                            <img src="@/assets/icons/chat.png" alt="Chat icon" height="30px">
                            <span>Mensajes</span>
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/">
                            <img src="@/assets/icons/settings.png" alt="Settings icon" height="30px">
                            <span>Preferencias</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="feed-container">
            <div class="toggle-menu">
                <button @click="toggleView('posts')">Posts</button>
                <button @click="toggleView('companies')">Descubre empresas</button>
            </div>
            <div v-show="currentFeed === 'posts'">
                <div v-for="post in posts" :key="post._id" class="post-card">
                  <!-- Render post content here -->
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.content }}</p>
                </div>
              </div>
              <div v-show="currentFeed === 'companies'">
                <CompanyPostCard v-for="company in companies" :key="company._id" :company="company" />
              </div>
        </div>
        <div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
#feed-body{
    display: grid;
    grid-template-columns: 0.7fr 1fr 0.7fr;
    height: 100vh;
    margin-top: 30px;
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
  
  .post-card {
    border: 2px solid var(--miscGreen);
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: var(--boxShadow);
    border-radius: 5px;
  }
</style>

<script>
import Header from '@/components/headerComponent.vue';
import CompanyPostCard from '@/components/companyPostCard.vue';
import axios from 'axios';

export default {
  name: 'FeedView',
  data() {
    return {
      companies: [],
      posts: [],
      currentFeed: 'companies',
      ramaOptions: [],
    };
  },
  components: {
    Header,
    CompanyPostCard,
  },
  mounted() {
    this.fetchCompanies();
    this.fetchPosts();
  },
  methods: {
    async fetchCompanies() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/routes/empresas', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        this.companies = response.data;
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    },
    async fetchPosts() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/routes/posts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        this.posts = response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async fetchRamaOptions() {
      try {
        const response = await axios.get('http://localhost:3000/routes/ramas');
        this.ramaOptions = response.data;
      } catch (error) {
        console.error('Error fetching rama options:', error);
      }
    },
    toggleView(view) {
      this.currentFeed = view;
    },
  },
};
</script>