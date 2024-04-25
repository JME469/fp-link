<template>
    <div id="footer-container">
        <div id="logo-container">
            <p id="logo">FPLink</p>
            <p id="copyright">&copy; 2024 FPLink</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/vars.css';

#footer-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    min-height: 180px;

    background-color: var(--lightGreen);

    #logo-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;

        #logo {
            font-family: Syne;
            font-weight: 800;
            letter-spacing: 2px;
            font-size: 24px;
        }
        #copyright{
            font-family: Montserrat;
            font-size: 14px;
        }
    }
}
</style>

<script>
export default {
    name: "Footer",
};
</script>