<template>
    <Header />
    <span id="return"><router-link to="/student-feed">< Ir al feed</router-link></span>
    <div class="page-container">
        <div v-if="loading" class="loading-container">
            <span id="logo">FPLink</span>
            <img src="@/assets/icons/plug.png" alt="Loading animation" class="loading-icon">
        </div>
        <div v-else id="profile-container">
            <div class="profile-left">
                <h2>Tu perfil de estudiante</h2>
                <div>
                    <img :src="student.profile_pic ? 'http://localhost:3000/routes/sProfile/uploads/' + student.profile_pic : require('@/assets/icons/default-profile-pic.png')"
                        alt="Profile Picture" class="user-pic">
                </div>

                <div>
                    <span>{{ student.name }}</span>
                </div>
                <div>
                    <span>{{ student.email }}</span>
                </div>

                <div>
                    <span>{{ student.studies_center }}</span>
                </div>

                <div>
                    <span id="presentation">{{ truncatepresentation(student.presentation) }}</span>
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
                    <input type="text" v-model="student.name" />
                </div>
                <div class="field">
                    <label>Email:</label>
                    <input type="email" v-model="student.email" />
                </div>
                <div class="field">
                    <label>Centro de estudios:</label>
                    <input type="text" v-model="student.studies_center" />
                </div>
                <div class="field">
                    <label>Presentacion:</label>
                    <textarea v-model="student.presentation"></textarea>
                </div>
                <div class="field">
                    <label>Foto de perfil:</label>
                    <input type="file" @change="handleProfilePicChange">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

#return{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 60px;
    a{
        font-family: Montserrat;
        font-weight: 600;
        font-size: large;
        margin-left: 40px;
        text-decoration: none;
        color: var(--black);
        transition: all 0.3s ease-in-out;
        &:hover{
            color: var(--strongGreen);
            text-decoration: underline;
        }
    }
}
.page-container {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
}

#profile-container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    width: 90%;
}

#logo {
    font-family: Syne;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: larger;
}

.user-pic {
    width: 150px;
    height: auto;
    border-radius: 50%;
}

.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.loading-icon {
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    animation: spin 2s ease-in-out infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.profile-left {
    width: 30%;
    padding: 40px;
    border: solid 2px var(--miscGreen);
    box-shadow: var(--boxShadow);
    border-radius: 15px;
    min-height: 750px;
    height: 80%;

    * {
        font-family: Poppins;
    }

    h2 {}

    hr {
        @include hr();
    }

    div {
        margin: 10px;

        label {
            display: inline-block;
        }

        span {
            #presentation {
                font-size: smaller;
            }
        }
    }
}

.profile-right {
    width: 65%;
    padding: 40px;
    border: solid 2px var(--miscGreen);
    box-shadow: var(--boxShadow);
    border-radius: 15px;
    min-height: 750px;
    height: 80%;

    #edit-title {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        gap: 30px;

        button {
            @include button();
            cursor: pointer;
            transition: all 0.25s ease-in-out;

            &:hover {
                padding: 10px 24px 10px 24px;
                margin: -2px;
            }
        }
    }

    * {
        font-family: Poppins;
    }

    .field {
        margin: 10px;
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-content: center;

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

        textarea {
            min-width: 320px;
            min-height: 130px;
        }

        input[type="file"] {
            display: flex;
            flex-direction: column;
        }
    }
}

@media screen and (max-width: 850px) {
    #profile-container {
        flex-direction: column !important;

        .profile-left,
        .profile-right {
            min-height: none !important;
            height: auto !important;
            width: 90% !important;
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
            student: {
                name: '',
                email: '',
                presentation: '',
                studies_center: '',
                // Add more fields as needed
                profile_pic: null, // New property for student logo
            },
            loading: true,
        };
    },
    components: {
        Header
    },
    mounted() {
        this.fetchstudentData();
    },
    methods: {
        logout() {
            localStorage.removeItem("token");
            this.$router.push("/estudiantes");
        },
        async fetchstudentData() {
            try {
                const response = await axiosInstance.get('/routes/sProfile');
                this.student = response.data.studentData;
            } catch (error) {
                console.error('Error fetching student data:', error);
                // Handle error (e.g., display error message)
            } finally {
                this.loading = false;
            }
        },
        async saveProfile() {
            try {
                // Create FormData object to send form data including profile picture
                const formData = new FormData();
                formData.append('name', this.student.name);
                formData.append('email', this.student.email);
                formData.append('studies_center', this.student.studies_center);
                formData.append('presentation', this.student.presentation);
                // Append profile picture file to FormData if it exists
                if (this.student.logo) {
                    formData.append('profile_pic', this.student.profile_pic);
                }
                // Send POST request to save student profile
                const response = await axiosInstance.put('/routes/sProfile', formData);
                // Optionally, update UI or display success message
            } catch (error) {
                console.error('Error saving student profile:', error);
                // Handle error (e.g., display error message)
            }
        },
        handleProfilePicChange(event) {
            // Handle profile picture selection
            this.student.profile_pic = event.target.files[0];
        },
        truncatepresentation(presentation) {
            if (!presentation) return '';
            const maxLength = 300;
            if (presentation.length > maxLength) {
                return presentation.substring(0, maxLength) + '...';
            }
            return presentation;
        }
    }
};
</script>