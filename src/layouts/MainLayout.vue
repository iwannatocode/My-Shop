<template>
  <q-layout view="lHh Lpr lFf" class="my-layout">
    <q-header class="head-bar bg-primary text-white">
      <q-toolbar class="my-toolbar q-pa-sm">
        <!-- boton de menu disable -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex center justify-center">
          <!-- mya vatar buscar -->
          <!-- <q-avatar>
            <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="Logo"
            />
          </q-avatar> -->
          Title
        </q-toolbar-title>

        <!-- agreagar icono de lupa para mejorar visibilidad en la tienda -->

        <!-- info component arreglar detalles tecnocos -->
        <info-component></info-component>
      </q-toolbar>

      <q-tabs align="left" class="my-tabs">
        <q-route-tab to="/" label="Tienda" />
        <q-route-tab to="/ShopCart" label="Mi Compra">
          <q-badge v-if="myShopStore.badgeCount" color="red" rounded floating>{{
            myShopStore.badgeCount
          }}</q-badge></q-route-tab
        >
      </q-tabs>

      <!-- My search componet se le pasa propiedad para saber cuando esta activo y
    retrona una array con los items que hacen match -->
      <search-items
        :isShopPage="isShopPage"
        v-on:toSearch="(data: Array<object>) => searchData = data "
      ></search-items>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
      <q-item @click="install" exact clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="download" size="2.2rem" />
        </q-item-section>
        <q-item-section>
          <div class="drawer-option">Descargar</div>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container class="view-container">
      <router-view :searchData="searchData" />
    </q-page-container>
    <inicio-component></inicio-component>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import { shopStore } from '../stores/ShopStore';
import SearchItems from '../components/SearchItems.vue';
import InicioComponent from '../components/InicioComponent.vue';
import InfoComponent from '../components/InfoComponent.vue';

let deferredPromptApp: any;
let canIntallApp = false;

export default defineComponent({
  components: { SearchItems, InicioComponent, InfoComponent },
  props: {
    /* muestra el componente search */
    isShopPage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      /* guarda los match de search */
      searchData: [] as Array<object>,
    };
  },
  methods: {
    install() {
      if (canIntallApp) {
        deferredPromptApp.prompt();
      } else {
        alert(
          'Por favor cierre la aplicacion y vuelva a abrirla. Sino cambie el navegador(preferentemente Chrome) o espere nuevas actualizaciones'
        );
      }
    },
  },
  mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('es un movil');

      canIntallApp = true;
      deferredPromptApp = e;
    });
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const myShopStore = shopStore();
    return {
      leftDrawerOpen,
      myShopStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
// position: relative !important;
.my-layout {
  .head-bar {
    background: transparent !important;
    & > * {
      background-color: $primary;
    }
  }
  .view-container {
    display: grid;
  }
  .my-tabs {
    border-top: 2px solid rgba(15, 14, 14, 0.353) !important;
  }
  .drawer-option {
    font-size: 22px;
  }
}
</style>
