<template>
    <Header />
    <div class="profile-container">
        <div class="profile-left">
            <h2>Company Profile</h2>
            <div>
                <img :src="company.logo ? 'http://localhost:3000/routes/cProfile/uploads/' + company.logo : '/default-profile-pic.png'"
                    alt="Profile Picture">
            </div>
            <div>
                <span>{{ company.name }}</span>
            </div>
            <div>
                <span>{{ company.email }}</span>
            </div>
            <div>
                <span>{{ company.actividad }}</span>
            </div>
            <div>
                <span>{{ truncateDescription(company.description) }}</span>
            </div>
            <!-- Add more fields as needed -->
        </div>
        <div class="profile-right">
            <div id="edit-title">
                <h2>Editar perfil</h2>
                <button @click="saveProfile">Guardar</button>
            </div>
            <div class="field">
                <label>Nombre:</label>
                <input type="text" v-model="company.name" />
            </div>
            <div class="field">
                <label>Email:</label>
                <input type="email" v-model="company.email" />
            </div>
            <div class="field">
                <label>Actividad:</label>
                <input type="email" v-model="company.email" />
            </div>
            <div class="field">
                <label>Descripcion:</label>
                <textarea v-model="company.description"></textarea>
            </div>
            <div class="field">
                <label>Profile Picture:</label>
                <input type="file" @change="handleProfilePicChange">
            </div>
            <button @click="logout">Logout</button>
            <!-- Add more fields as needed -->
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

.profile-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
}

.profile-left {
    width: 30%;
    padding: 40px;
    border: solid 2px var(--miscGreen);
    box-shadow: var(--boxShadow);
    border-radius: 15px;

    * {
        font-family: Poppins;
    }

    h2 {}

    div {
        margin: 10px;

        label {
            display: inline-block;
        }

        span {}
    }
}

.profile-right {
    width: 65%;
    padding: 40px;
    border: solid 2px var(--miscGreen);
    box-shadow: var(--boxShadow);
    border-radius: 15px;

    #edit-title {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        gap: 30px;

        button {
            @include button();
        }
    }

    * {
        font-family: Poppins;
    }

    .field {
        margin: 10px;

        label {
            display: inline-block;
        }

        input,
        textarea {
            border-radius: 10px;
            border: solid 2px var(--miscGreen);
            padding: 5px;
            margin: 10px;
        }
    }
}
</style>

<script>
import Header from "@/components/headerComponent.vue";
import axiosInstance from '@/axiosInstance'; // Import axios instance

export default {
    data() {
        return {
            company: {
                name: '',
                email: '',
                description: '',
                actividad: '',
                // Add more fields as needed
                logo: null, // New property for company logo
            }
        };
    },
    components: {
        Header
    },
    mounted() {
        this.fetchCompanyData();
    },
    methods: {
        logout() {
            localStorage.removeItem("token");
            this.$router.push("/empresas");
        },
        async fetchCompanyData() {
            try {
                const response = await axiosInstance.get('/routes/cProfile');
                this.company = response.data;
            } catch (error) {
                console.error('Error fetching company data:', error);
                // Handle error (e.g., display error message)
            }
        },
        async saveProfile() {
            try {
                // Create FormData object to send form data including profile picture
                const formData = new FormData();
                formData.append('name', this.company.name);
                formData.append('email', this.company.email);
                formData.append('actividad', this.company.actividad);
                formData.append('description', this.company.description);
                // Append profile picture file to FormData if it exists
                if (this.company.logo) {
                    formData.append('logo', this.company.logo);
                }
                // Send POST request to save company profile
                const response = await axiosInstance.put('/routes/cProfile', formData);
                // Optionally, update UI or display success message
            } catch (error) {
                console.error('Error saving company profile:', error);
                // Handle error (e.g., display error message)
            }
        },
        handleProfilePicChange(event) {
            // Handle profile picture selection
            this.company.logo = event.target.files[0];
        },
        truncateDescription(description) {
            const maxLength = 300;
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + '...';
            }
            return description;
        }
    }
};
</script>