<template>
    <div>
        <Header />
        <div id="feed-body">
            <div id="menu-container">
                <div id="content-wrapper">
                    <ul id="menu">
                        <li class="menu-item">
                            <router-link to="/">
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
                <PostBox @postCreated="refreshPosts"></PostBox>
                <div class="post-list">
                    <div v-for="post in posts" :key="post.id" class="post-item">
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.content }}</p>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#feed-body {
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
.feed-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .post-list {
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .post-item {
            padding: 20px;
            border-radius: 10px;
            background-color: var(--white);
            box-shadow: var(--boxShadow);
            border: solid 1px var(--lightGray);
            
            h3 {
                margin: 0 0 10px 0;
            }

            p {
                margin: 0;
            }
        }
    }
}
</style>

<script>
import Header from '@/components/headerComponent.vue';
import PostBox from '@/components/postBoxComponent.vue';
import axios from 'axios';

export default {
    name: 'CompanyFeed',
    data() {
        return {
            posts: [],
        };
    },
    components: {
        Header,
        PostBox,
    },
    methods: {
        async fetchPosts() {
            try {
                const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
                const response = await axios.get('http://localhost:3000/routes/posts', {
                    headers: {
                        Authorization: `Bearer ${token}` // Include Bearer scheme
                    }
                });
                this.posts = response.data;
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },
        refreshPosts() {
            this.fetchPosts();
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>
