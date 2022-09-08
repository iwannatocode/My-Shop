<template>
  <div class="my-shop">
    <card-item
      v-for="item in itemsData"
      :key="item.id"
      :id="item.id"
      :productName="item.productName"
      :imgSrc="item.imgSrc"
      :price="item.price"
    ></card-item>
  </div>
</template>

<script lang="ts">
import { Item } from 'src/models/models';
import CardItem from 'components/Shop/CardItem.vue';
import { defineComponent, PropType } from 'vue';
import { shopStore } from '../stores/ShopStore';

export default defineComponent({
  props: {
    searchData: {
      type: Array as PropType<Item[]>,
      default: () => [],
    },
  },
  setup() {
    const myShopStore = shopStore();
    return { myShopStore };
  },
  components: { CardItem },
  data() {
    return {};
  },
  computed: {
    itemsData() {
      if (this.searchData.length) {
        return this.searchData;
      }
      return this.myShopStore.itemsData;
    },
  },
});
</script>
<style lang="scss">
.my-shop {
  background-color: $dark-1 !important;
}
.butifarra {
  height: 200px;
  width: 200px;
  background-color: $warning !important;
}
</style>
