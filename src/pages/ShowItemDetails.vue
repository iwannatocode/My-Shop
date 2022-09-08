<template>
  <div class="show-item-page">
    <div v-if="item" class="">
      <q-btn
        @click="$router.back()"
        class="q-ma-lg"
        color="primary"
        icon="arrow_back"
        label="Volver"
      />

      <div>
        <h5 class="text-center product-name">{{ item.productName }}</h5>
      </div>

      <!-- CAROUSEL -->
      <q-carousel
        v-if="id"
        swipeable
        animated
        transition-next="fade"
        transition-prev="fade"
        autoplay
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide
          v-for="(img, index) in item.allImgSrc"
          :key="index"
          :name="index + 1"
          :img-src="img.src"
        />
      </q-carousel>

      <!-- DETALLES -->
      <div class="info q-ma-lg">
        <div class="info-item price-item">
          Precio: <span>{{ item.price }}$</span>
        </div>
        <div class="info-item">Cantidad Restantes: {{ item.cant }}</div>
        <!--   <div class="info-item">
          Garantia: {{ item.guarantee ? item.guarantee.text : 'No' }}
        </div> -->
        <div class="info-item">{{ item.description }}</div>
        <div v-if="item.table" class="info-item table-item-description-cont">
          <q-table
            class="table-item-description"
            hide-bottom
            hide-header
            :pagination="pagination"
            title="Especificaciones"
            :columns="item.table.column"
            :rows="item.table.row"
            row-key="name"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Lo siento parece que tenemos algun problema ):</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { shopStore } from '../stores/ShopStore';

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pagination: { rowsPerPage: 100 },
    };
  },
  setup() {
    const myShopStore = shopStore();
    return {
      slide: ref(1),
      myShopStore,
    };
  },
  computed: {
    item() {
      return this.myShopStore.itemsData.find((item) => item.id == this.id);
    },
  },
});
</script>

<style lang="scss">
.show-item-page {
  .product-name {
    margin: 0 auto 20px;
  }
  .info {
    .info-item {
      margin-top: 10px;
      font-size: 20px;
    }
    .price-item {
      span {
        font-weight: bold;
      }
    }
    .table-item-description {
      margin-top: 50px;
      thead tr:first-child th:first-child {
        /* bg color is important for th; just specify one */
        background-color: #fff;
      }

      td:first-child {
        background-color: #f5f5dc;
      }
      .q-table__top {
        //background-color: red !important;
        //  display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
