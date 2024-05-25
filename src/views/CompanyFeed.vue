<template>
    <div>
        <Header />
        <div id="feed-body">
            <div id="menu-container">
                <div id="content-wrapper">
                    <ul id="menu">
                        <li class="menu-item">
                            <router-link to="/company-profile">
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
                <div id="feed-title">Publica una oferta</div>
                <PostBox @postCreated="refreshPosts"></PostBox>
            </div>
            <div>
                <div class="post-list">
                    <div id="posts-title">Tus ofertas</div>
                    <div v-for="post in posts" :key="post.id" class="post-item">
                        <div class="borrar">
                            <div class="boton" @click="confirmDeletePost(post.id)">Borrar</div>
                        </div>
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.content }}</p>
                    </div>
                </div>
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
    justify-content: start;

    #feed-title {
        margin: 10px;
        font-family: Poppins;
        font-weight: 600;
        font-size: large;
    }
}

.post-list {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 700px;
    overflow-y: scroll;

    #posts-title {
        margin: 10px;
        font-family: Poppins;
        font-weight: 600;
        font-size: large;
    }

    .post-item {
        padding: 20px;
        border-radius: 10px;
        background-color: var(--lightGreen);
        box-shadow: var(--boxShadow);

        .borrar {
            width: 100%;
            display: flex;
            justify-content: right;

            .boton {
                cursor: pointer;
                font-size: smaller;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        h3 {
            margin: 0 0 10px 0;
        }

        p {
            margin: 0;
        }
    }
}
</style>

<script>
import RamaSelect from "@/components/ramaSelect.vue";
import Header from "@/components/headerComponent.vue";
import PostBox from "@/components/postBoxComponent.vue";
import axios from "axios";

export default {
    name: "CompanyFeed",
    data() {
        return {
            posts: [],
        };
    },
    components: {
        Header,
        PostBox,
        RamaSelect,
    },
    methods: {
        async fetchPosts() {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/routes/posts", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.posts = response.data;
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        },
        confirmDeletePost(postId) {
            if (confirm('¿Estás seguro de que deseas borrar este post?')) {
                this.borrarPost(postId);
            }
        },
        async borrarPost(postId) {
            try {
                const token = localStorage.getItem("token");
                await axios.delete(`http://localhost:3000/routes/posts/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                this.refreshPosts();
            } catch (error) {
                console.error("Error deleting post:", error);
            }
        },
        refreshPosts() {
            this.fetchPosts();
        },
    },
    mounted() {
        this.fetchPosts();
    },
};
</script>
