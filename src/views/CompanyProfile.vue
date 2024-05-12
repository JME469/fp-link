<template>
    <Header />
    <div class="profile-container">
        <div class="profile-left">
            <h2>Company Profile</h2>
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
export default {
    data() {
        return {
            company: {
                name: '',
                email: '',
                description: '',
                actividad: '',
                // Add more fields as needed
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
        async fetchCompanyData() {
            try {
                const response = await fetch('http://localhost:3000/routes/cProfile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any necessary authorization headers here
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch company data');
                }
                const data = await response.json();
                this.company = data;
            } catch (error) {
                console.error('Error fetching company data:', error);
                // Handle error (e.g., display error message)
            }
        },
        async saveProfile() {
            try {
                const response = await fetch('http://localhost:3000/routes/cProfile', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add any necessary authorization headers here
                    },
                    body: JSON.stringify(this.company),
                });
                if (!response.ok) {
                    throw new Error('Failed to save company profile');
                }
                // Optionally, update UI or display success message
            } catch (error) {
                console.error('Error saving company profile:', error);
                // Handle error (e.g., display error message)
            }
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