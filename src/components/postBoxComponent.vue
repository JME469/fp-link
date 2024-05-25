<template>
    <div class="post-box">
        <div class="post-content-wrapper">
            <div class="post-info">
                <div class="post-form">
                    <input type="text" v-model="title" placeholder="Title" />
                    <textarea v-model="content" placeholder="Content"></textarea>
                    <div id="rama-filter" class="filters-item">
                        <label for="rama">Filtra por rama</label>
                        <select v-model="ramaFilter">
                            <option value="">Mostrar todas las empresas</option>
                            <option v-for="rama in ramaOptions" :key="rama" :value="rama">
                                {{ rama }}
                            </option>
                        </select>
                    </div>
                    <button @click="submitPost">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

#rama-filter {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
        width: 100%;
        text-align: left;
    }

    select {
        padding: 5px;
        background-color: white;
        border-radius: 5px;
        border: solid 1px var(--miscGreen);
    }
}

.post-box {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 350px;
    max-width: 85%;

    padding: 35px;
    border-radius: 15px;
    background-color: var(--lightGreen);
    box-shadow: var(--boxShadow);
    border: solid 2px var(--miscGreen);

    .post-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .post-info {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;

            .post-form {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;

                input,
                textarea {
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid var(--darkGray);
                    outline: none;
                }

                button {
                    @include button();
                    cursor: pointer;
                    transition: background-color 0.3s;

                    &:hover {
                        background-color: var(--strongGreen);
                    }
                }
            }
        }
    }
}
</style>

<script>
import axios from 'axios';
import RamaSelect from './ramaSelect.vue';

export default {
    name: 'PostBox',
    data() {
        return {
            title: '',
            content: '',
            ramaFilter: "",
            ramaOptions: [],
        };
    },
    components: {
        RamaSelect,
    },
    mounted(){
        this.fetchRamaOptions();
    },
    methods: {
        async submitPost() {
            try {
                const postData = {
                    title: this.title,
                    content: this.content,
                    rama: this.ramaFilter,
                };

                const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

                const response = await axios.post('http://localhost:3000/routes/posts', postData, {
                    headers: {
                        Authorization: `Bearer ${token}` // Include Bearer scheme
                    }
                });

                if (response.status === 201) {
                    // Post created successfully
                    console.log('Post created:', response.data);
                    // Reset form fields after submission
                    this.title = '';
                    this.content = '';
                    // Optionally, emit an event or update the parent component to refresh the post list
                    this.$emit('postCreated', response.data);
                } else {
                    console.error('Error creating post:', response.status);
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
        },
        async fetchRamaOptions() {
            try {
                const response = await axios.get("http://localhost:3000/routes/ramas");
                this.ramaOptions = response.data;
            } catch (error) {
                console.error("Error fetching rama options:", error);
            }
        },
    }
};
</script>
