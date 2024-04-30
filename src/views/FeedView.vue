<template>
    <div>

    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from '@/components/headerComponent.vue';
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
    components: {
        Header
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