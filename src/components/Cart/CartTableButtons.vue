<template>
  <q-btn-group push>
    <q-btn
      @click.stop="myCartStore.addProduct(id)"
      color="blue"
      push
      dense
      label=""
      icon="add"
    />
    <q-btn
      @click.stop="myCartStore.dismProduct(id)"
      color="red"
      push
      dense
      label=""
      icon="remove"
    />
  </q-btn-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { cartStore } from 'src/stores/CartStore';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {},
  setup() {
    const myCartStore = cartStore();
    return { myCartStore };
  },
});
</script>

<style scoped></style>
