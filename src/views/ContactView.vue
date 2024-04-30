<template>
  <Header />
  <div class="contact-container">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/vars.css';
@import '@/styles/_mixins.scss';

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .contact-form {
    width: 350px;

    .form-group {
      margin-bottom: 15px;

      label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ffffff;
        border-radius: 5px;
      }

      textarea {
        height: 150px;
      }
    }

    button {
      @include button;
      cursor: pointer;
    }
  }
}
</style>

<script>
import Header from '@/components/headerComponent.vue'
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  components: {
    Header
  },
  methods: {
    submitForm() {
      // Here you can submit the form data to your backend or handle it as needed
      console.log('Form submitted:', this.formData);
      // Clear form fields after submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }
  }
};
</script>