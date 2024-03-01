<template>
  <div class="container">
    <div class="section row">
      <div class="col-12">
        <h1>Beautiful Art</h1>
      </div>
    </div>
    <section class="row">

      <div v-for="artwork in artworks" :key="artwork.id" class="col-md-4">
        Test
        <img :src="artwork.imgUrls.length" :alt="artwork.slug" :title="artwork.description" class="img-fluid rounded">
      </div>



      <div>

        <!-- <ArtworkCard v-for="art in artworks" :key="art.id" :artwork="art" /> -->

      </div>

    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { artworkService } from '../services/ArtworkService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';




export default {
  setup() {


    async function getArtwork() {
      try {
        await artworkService.getArtwork()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getArtwork()
    })

    return {

      artworks: computed(() => AppState.artworks)
    }
  }
}
</script>

<style scoped lang="scss"></style>
