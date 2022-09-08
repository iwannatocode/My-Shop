<template>
  <div class="">
    <q-icon
      @click="(showInfo = true), (newInfo = false)"
      :class="{ 'new-info': newInfo }"
      name="info"
      color="grey-4"
      size="2.2rem"
    />

    <div class="info-text" v-if="showInfo">
      <q-btn
        @click="showInfo = false"
        class="btn-close"
        round
        color="red"
        icon="close"
      />
      <h4 class="text-center">Actualizaciones</h4>
      <div class="v-0-0-1">
        <p class="text-center">v. 0.0.1</p>
        <hr />
        <p><span>---</span> Disponible compra x whatsApp</p>
        <p>
          <span>---</span> Disponible carrito para visualizar productos a
          comprar
        </p>
        <p><span>---</span> Disponible detalles del producto</p>
        <p><span>---</span> Se agrega boton para descarga de la aplicacion</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
  setup() {
    const currentVersion = 'v.0.0.1';
    let showInfo = ref(false),
      newInfo = ref(false);

    const $q = useQuasar();
    const myShopAppVersion: string | null =
      $q.localStorage.getItem('myShopAppVersion');
    if (myShopAppVersion === null) {
      $q.localStorage.set('myShopAppVersion', 'v.0.0.1');
      newInfo.value = true;
    } else if (myShopAppVersion !== currentVersion) {
      $q.localStorage.set('myShopAppVersion', currentVersion);
      newInfo.value = true;
    }
    return {
      showInfo,
      newInfo,
    };
  },
});
</script>

<style scoped lang="scss">
.new-info {
  color: rgba(129, 253, 46, 0.784) !important;
}
.info-text {
  position: fixed;
  background-color: white;
  color: black;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  .btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
