<template>
  <div class="draft">
    <MainLayout menuId="3">
      <v-sheet>test body draft</v-sheet>
    </MainLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import MainLayout from "@/components/MainLayout.vue";

export default {
  name: "DraftView",
  components: {
    MainLayout,
  },
};
</script>
