<template>
  <div class="my-card">
    <q-card class="q-my-md q-py-lg">
      <q-img :src="`${imgSrc}`" />

      <q-card-section>
        <q-btn
          @click="addToCart"
          fab
          color="primary"
          icon="shopping_cart"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
        <!--  <q-rating v-model="stars" :max="5" size="32px" /> -->
        <div class="item-price">
          Precio: <span> {{ price }}$</span>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="item-name text-center">
          {{ productName }}
        </div>
      </q-card-section>

      <q-card-actions class="q-px-md">
        <q-btn
          class="item-details btn"
          @click="addToCart"
          outline
          color="primary"
        >
          Añadir al carro
        </q-btn>
        <q-space></q-space>
        <q-btn
          class="item-details btn"
          @click="ShowItemDetails(id)"
          outline
          color="primary"
        >
          Detalles
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { shopStore } from 'stores/ShopStore';
import { cartStore } from 'stores/CartStore';

export default defineComponent({
  setup() {
    const myShopStore = shopStore();
    const myCartStore = cartStore();
    return { myShopStore, myCartStore };
  },
  /// NOTA: arreglar el tipo en porps de id dependiendo como se relize la asignacion
  props: {
    id: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stars: this.rating,
    };
  },
  methods: {
    /*  */
    ShowItemDetails(id: number) {
      this.$router.push({ name: 'Details', params: { id: id } });
    },
    addToCart() {
      //incrementamos badges en cart view
      this.myShopStore.incrementBadge();

      //añadimos a cartStore el item
      this.myCartStore.addProduct(this.id, this.productName, this.price);
    },
  },
});
</script>

<style lang="scss">
.my-card {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.512) !important;
  .q-img {
    .q-img__container {
      max-height: 270px !important;
    }
    .q-img__content {
      max-height: 270px !important;
    }
    div:first-child {
      padding-bottom: 270px !important;
    }
  }
  .item-name {
    font-size: 1.7rem;
    font-weight: 600;
  }
  .item-price {
    font-size: 1.4rem;
    span {
      font-weight: bold;
    }
  }
  .item-details {
    font-size: 1rem;
  }
  .card-item-notify {
    padding: 0;
    z-index: 2 !important;
  }
  .btn {
    color: black !important;
  }
}
</style>
