<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>Beautiful Art</h1>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { artService } from '../services/ArtService';
import Pop from '../utils/Pop';





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

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
