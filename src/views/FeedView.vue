<template>
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
            <CompanyPostCard v-for="company in companies" :key="company._id" :company="company" />
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
</style>

<script>
import Header from '@/components/headerComponent.vue';
import CompanyPostCard from '@/components/companyPostCard.vue';

export default {
    name: 'FeedView',
    data() {
        return {
            companies: [],
        };
    },
    components: {
        Header,
        CompanyPostCard,
    },
    mounted() {
        this.fetchCompanies();
    },
    methods: {
        async fetchCompanies() {
            try {
                const response = await fetch('http://localhost:3000/routes/empresas');
                if (!response.ok) {
                    throw new Error('Failed to fetch companies');
                }
                const data = await response.json();
                this.companies = data;
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        },
    }
}
</script>