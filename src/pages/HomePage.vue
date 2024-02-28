<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <h1>Beautiful Art</h1>
      </div>
    </div>
    <section class="row">

      {{ artworks }}

      <div v-for="art in artworks" :key="art.id" class="col-md-4">
        <img src="" alt="">
      </div>

    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { artService } from '../services/ArtService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';




export default {
  setup() {
    async function getArt() {
      try {
        await artService.getArt()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getArt()
    })

    return {

      artworks: computed(() => AppState.artworks)
    }
  }
}
</script>

<style scoped lang="scss"></style>
