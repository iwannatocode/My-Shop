<template>
  <div class="my-cart">
    <h3 v-if="precioTotal" class="title text-center q-ma-md">
      Precio Total: {{ precioTotal }}$
    </h3>

    <!-- my tabla personalizada -->
    <q-table
      class="my-table"
      flat
      :rows="myCartStore.$state.cart"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="cantidad" :props="props">{{ props.row.cant }}</q-td>
          <q-td key="productos" :props="props">{{
            props.row.productName
          }}</q-td>
          <q-td key="precio" :props="props">{{
            parseInt(props.row.price) * parseInt(props.row.cant)
          }}</q-td>
          <q-td key="" :props="props"
            ><cart-table-buttons :id="props.row.id"></cart-table-buttons
          ></q-td>
        </q-tr>
      </template>
    </q-table>

    <br />
    <br />
    <!-- <cart-form @send="( payload:Payload ) => sendToAPi(payload)"></cart-form> -->
    <div class="flex flex-center">
      <q-btn
        :disable="precioTotal ? false : true"
        class="send-btn q-px-lg"
        :href="textToSend"
        target="_blank"
        size="19px"
        color="light-green-10"
        text-color="white"
        label="Comprar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { shopStore } from '../stores/ShopStore';
import { cartStore } from '../stores/CartStore';
/* import CartForm from 'src/components/CartForm.vue'; */
import CartTableButtons from 'src/components/Cart/CartTableButtons.vue';
import { columns as myColumns } from 'src/data/CartTableColumns';
import { Columns } from 'src/models/models';

export default defineComponent({
  components: { CartTableButtons },
  setup() {
    const myShopStore = shopStore();
    const myCartStore = cartStore();
    return { myShopStore, myCartStore };
  },
  data() {
    return {
      columns: myColumns as Columns[],
    };
  },
  mounted() {
    /* elimino bage cuando accedes a esta view (cart view) */
    this.myShopStore.badgeCount = 0;
  },
  computed: {
    precioTotal() {
      let total = 0;
      this.myCartStore.cart.map((item) => {
        total += item.price * item.cant;
      });
      return total;
    },
    rows() {
      return this.myCartStore.$state.cart;
    },
    /* creo el link to WS */
    textToSend() {
      let lead = `************************
      `;
      [...this.myCartStore.$state.cart].forEach((item) => {
        lead += `Producto: ${item.productName}          
        Cantidad: ${item.cant}          
        Precio x Unidad: ${item.price}                 `;
      });
      lead += `Precio Total: ${this.precioTotal}         
      ************************
      \n
     `;
      return `https://api.whatsapp.com/send?phone=5358259854&text=${lead}`;
    },
  },
});
</script>

<style lang="scss">
.my-cart {
  .title {
    font-size: 1.6rem;
  }
  .my-table {
    td {
      padding: 10px;
      width: auto !important;
    }
    th {
      padding: 10px;
      width: auto !important;
    }
    .q-table__bottom--nodata {
      font-size: 22px;
      padding: 10px;
    }
  }
}
</style>
