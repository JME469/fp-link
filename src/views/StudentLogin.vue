<template>
    <div class="login-container">
        <form @submit.prevent="login" class="login-form">
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
        </form>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/vars.css';
@import '@/styles/_mixins.scss';
@mixin font(){
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
    border-radius: 15px;
    background-color: var(--lightGreen);
    box-shadow: var(--boxShadow);
    h2{
        @include font;
        margin-bottom: 30px;
    }
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    @include font;
}

input[type="email"],
input[type="password"] {
    width: 85%;
    padding: 8px;
    border: 1px solid var(--miscGreen);
    border-radius: 10px;
    font-family: Montserrat;
}

button {
    @include button;
    cursor: pointer;
}

.error {
    color: #910c19;
    margin-top: 10px;
}
</style>


<script>
export default {
    name: 'StudentLogin',
    data() {
        return {
            username: '',
            password: '',
            error: ''
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
        }
    }
}
</script>