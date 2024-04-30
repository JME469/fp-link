<template>
    <div class="login-container">
        <form @submit.prevent="login" class="login-form" v-show="showLogin">
            <h1>FPLink</h1>
            <h4>- Empresas -</h4>
            <h2>Inicia sesión</h2>
            <div class="form-group">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
            <p v-if="error" class="error">{{ error }}</p>
            <hr>
            <p id="noAcc-text">¿Todavía no tienes una cuenta?<br> Crea una nueva <a @click="toggleDisplay">aquí</a></p>
        </form>
        <form @submit.prevent="create" class="login-form" v-show="showCreate">
            <h1>FPLink</h1>
            <h4>- Empresas -</h4>
            <h2>Crea una cuenta</h2>
            <div class="form-group">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="username">Nombre de usuario:</label>
                <input type="username" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Crear</button>
            <p v-if="error" class="error">{{ error }}</p>
            <hr>
            <p id="noAcc-text">¿Ya tienes una cuenta?<br> Inicia sesión <a @click="toggleDisplay">aquí</a></p>
        </form>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/vars.css';
@import '@/styles/_mixins.scss';

@mixin font() {
    font-family: Poppins;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-form {
    width: 350px;
    padding: 80px;
    padding-top: 30px;
    border-radius: 15px;
    background-color: var(--lightGreen);
    box-shadow: var(--boxShadow);

    h1 {
        font-family: Syne;
        font-weight: 800;
    }

    h4{
        @include font();
        margin-bottom: 40px;
        font-weight: 400;
    }

    h2 {
        @include font;
        margin-bottom: 30px;
    }

    .form-group {
        margin-bottom: 15px;

        label {
            display: block;
            @include font;
        }

        input[type="email"],
        input[type="username"],
        input[type="password"] {
            width: 85%;
            padding: 8px;
            border: 1px solid var(--miscGreen);
            border-radius: 10px;
            font-family: Montserrat;
        }
    }
    button {
        @include button;
        cursor: pointer;
    }
    .error {
        color: #910c19;
        margin-top: 10px;
    }
    hr{
        position: relative;
        height: 1px;
        width: 100%;
        background-color: var(--miscGreen);
        border: none;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    p{
        @include font();
        a{
            color: var(--miscGreen);
            font-weight: 500;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>


<script>
export default {
    name: 'CompanyLogin',
    data() {
        return {
            email: '',
            username: '',
            password: '',
            error: '',

            showLogin: true,
            showCreate: false,
        };
    },
    methods: {
        login() {
            if (this.username && this.password) {
                // Clear any previous errors
                this.error = '';
                // Redirect user to dashboard or home page upon successful login
                this.$router.push('/dashboard');
            } else {
                this.error = 'Correo electrónico o contraseña incorrectos';
            }
        },
        create() {
            if (this.username && this.password) {
                // Clear any previous errors
                this.error = '';
                // Redirect user to dashboard or home page upon successful login
                this.$router.push('/dashboard');
            } else {
                this.error = 'Correo electrónico o contraseña incorrectos';
            }
        },
        toggleDisplay(){
            if (this.showLogin) {
                this.showLogin = false;
                this.showCreate = true;
            } else{
                this.showCreate = false;
                this.showLogin = true;
            }
        }
    }
}
</script>