<template>
    <div class="company-post-card">
        <div class="card-content-wrapper">
            <div class="company-info">
                <img :src="company.logo" alt="Company Logo" />
                <div class="name-email">
                    <h3>{{ company.name }}</h3>
                    <h5>{{ company.email }}</h5>
                </div>
            </div>
            <div class="company-desc">
                <p>{{ truncateDescription(company.description) }}</p>
            </div>
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
            const maxLength = 300;
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
    justify-content: center;
    margin-bottom: 20px;
    max-width: 420px;

    padding: 35px;
    border-radius: 15px;
    background-color: var(--white);
    box-shadow: var(--boxShadow);
    border: solid 2px var(--miscGreen);

    .card-content-wrapper{
        display: flex;
        flex-direction: column;
        gap: 25px;

        .company-info{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
            .name-email{
                display: flex;
                flex-direction: column;
                justify-content: left;

                h3 {
                    font-size: 1.2rem;
                    text-align: left;
                }
            }
        }
        .company-desc{
            p{
                text-align: left;
            }
        }
    }
}
</style>