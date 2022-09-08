<template>
  <q-input
    v-if="isShopPage"
    class="search q-py-sm"
    rounded
    standout="bg-black text-white"
    v-model="text"
    placeholder="Escribe aqui"
    :v-on:input="updateSearch()"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { shopStore } from '../stores/ShopStore';

export default defineComponent({
  emits: ['toSearch'],
  props: {
    isShopPage: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const myShopStore = shopStore();
    return { myShopStore };
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    searchItem() {
      const search = this.myShopStore.itemsData.filter((item) => {
        return item.filterScan.some((itemText) => {
          return itemText.includes(this.text.toLowerCase());
        });
      });
      //console.log(search);
      return search;
    },
    updateSearch() {
      //  console.log(this.searchItem());

      if (this.text === '') {
        this.$emit('toSearch', []);
      } else {
        this.$emit('toSearch', this.searchItem());
      }
    },
  },
});
</script>

<style lang="scss">
.search {
  background: $white-1 !important;
  backdrop-filter: blur(5px);
}
input.q-field__native {
  color: inherit !important;
}
</style>
