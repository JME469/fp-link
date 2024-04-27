<template>
    <div>
        <Header />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Header from '@/components/headerComponent.vue'
export default {
  name: 'Feed',
  components: {
    Header
  },
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
};
</script>