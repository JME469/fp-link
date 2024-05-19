<template>
    <div class="post-box">
        <div class="post-content-wrapper">
            <div class="post-info">
                <div class="post-form">
                    <input type="text" v-model="title" placeholder="Title" />
                    <textarea v-model="content" placeholder="Content"></textarea>
                    <button @click="submitPost">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.post-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    max-width: 420px;

    padding: 35px;
    border-radius: 15px;
    background-color: var(--lightGreen);
    box-shadow: var(--boxShadow);
    border: solid 2px var(--miscGreen);

    .post-content-wrapper{
        display: flex;
        flex-direction: column;
        gap: 25px;

        .post-info{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            .post-form {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                input, textarea {
                    width: 100%;
                    padding: 10px;
                    border-radius: 5px;
                    border: 1px solid var(--darkGray);
                    outline: none;
                }
                button {
                    padding: 10px 20px;
                    background-color: var(--miscGreen);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                    &:hover {
                        background-color: var(--darkGreen);
                    }
                }
            }
        }
    }
}
</style>

<script>
import axios from 'axios';

export default {
    name: 'PostBox',
    data() {
        return {
            title: '',
            content: '',
        };
    },
    methods: {
        async submitPost() {
            try {
                const postData = {
                    title: this.title,
                    content: this.content,
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
        }
    }
};
</script>
