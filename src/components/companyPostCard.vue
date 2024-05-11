<template>
    <div class="company-post-card">
        <img :src="company.logo" alt="Company Logo" />
        <div class="company-info">
            <h3>{{ company.name }}</h3>
            <p>{{ company.catchphrase }}</p>
            <p>{{ truncateDescription(company.description) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        company: {
            type: Object,
            required: true
        }
    },
    methods: {
        truncateDescription(description) {
            // Truncate the description if it's too long
            const maxLength = 100;
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + '...';
            }
            return description;
        }
    }
};
</script>

<style scoped lang="scss">
.company-post-card {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
    }
}

.company-info{
    h3 {
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
    p {
        margin-bottom: 5px;
    }
}
</style>