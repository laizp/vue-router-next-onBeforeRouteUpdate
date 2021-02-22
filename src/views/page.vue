<template>
  <div class="page">
    page {{ id }}
  </div>
</template>

<script>
import { ref } from 'vue';

import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export default {
  name: 'Page',
  async setup() {
    const route = useRoute();
    const id = ref(route.params.id);

    onBeforeRouteUpdate((to) => {
      id.value = to.params.id;
      console.log(id.value);
    });

    return {
      id
    }
  }
}
</script>

<style>

</style>