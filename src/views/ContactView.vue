<template>
  <Header />
  <div id="body-container">
    <div id="titles">
      <h1>Contáctanos!</h1>
      <span></span>
      <h2>
        Si eres una empresa o institución educativa y buscas colaborar con
        nosotros, no dudes en contactarnos
      </h2>
    </div>
    <div id="container">
      <div class="contact-container">
        <h1>Contact Us</h1>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea
              id="message"
              v-model="formData.message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div id="content">
        <div id="content-container">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/vars.css";
@import "@/styles/_mixins.scss";

#body-container {
  margin-top: 70px;
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;

  #titles{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    
    h2{
      width: 35%;
      text-align: left;
    }

    span{
      height: 100%;
      width: 3px;
      background-color: var(--miscGreen);
      border: none;
    }
  }

  #container{
    display: flex;
    flex-direction: row;
    .contact-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--black);
      width: 100%;
      min-height: 450px;
      max-width: 600px;
      padding: 60px;
      color: var(--white);
  
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
            border: 1px solid var(--miscGreen);
            background-color: var(--lightGreen);
            border-radius: 10px;
          }
  
          textarea {
            height: 100px;
          }
        }
  
        button {
          @include button;
          cursor: pointer;
        }
      }
    }
    #content {
      background-color: var(--black);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px;
      min-height: 450px;
      width: 670px;
      background-image: url('@/assets/pexels-fauxels-3183197.jpeg');
      background-size: cover;
      background-repeat: no-repeat;
  
      #content-container {
        color: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }
    }
  }
}
</style>

<script>
import Header from "@/components/headerComponent.vue";
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  components: {
    Header,
  },
  methods: {
    submitForm() {
      // Here you can submit the form data to your backend or handle it as needed
      console.log("Form submitted:", this.formData);
      // Clear form fields after submission
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    },
  },
};
</script>
