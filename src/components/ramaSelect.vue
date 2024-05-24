<template>
    <div id="rama-filter" class="filters-item">
        <label for="rama">Filtra por rama</label>
        <select v-model="ramaFilter">
          <option value="">Mostrar todas las empresas</option>
          <option v-for="rama in ramaOptions" :key="rama" :value="rama">
            {{ rama }}
          </option>
        </select>
      </div>
</template>

<style lang="scss" scoped>
#rama-filter{
    display: flex;
    flex-direction: column;
    gap: 5px;

    label{
      width: 100%;
      text-align: left;
    }
    select{
      padding: 5px;
      background-color: white;
      border-radius: 5px;
      border: solid 1px var(--miscGreen);
    }
  }
</style>

<script>
export default {
  name: "RamaSelect",
  data() {
    return {
      ramaOptions: [],
    };
  },
  mounted() {
    this.fetchRamaOptions();
  },
  methods: {
    async fetchRamaOptions() {
      try {
        const response = await axios.get("http://localhost:3000/routes/ramas");
        this.ramaOptions = response.data;
      } catch (error) {
        console.error("Error fetching rama options:", error);
      }
    },
  },
};
</script>