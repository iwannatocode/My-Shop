<template>
  <div v-if="showCarousel" class="inicio">
    <q-carousel
      class="inicio-carousel"
      v-model:fullscreen="isFullscreen"
      animated
      swipeable
      :autoplay="time || 8000"
      v-model="slide"
      navigation
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide
        name="1"
        class="column no-wrap flex-center slide bg-blue-2"
      >
        <q-icon name="store" size="56px" />
        <div class="q-mt-md text-center text">
          Esta es la primera version de prueba de nuestra tienda online
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="2"
        class="column no-wrap flex-center slide bg-red-2"
      >
        <div>
          <q-icon name="import_export" size="56px" />
          <q-icon name="whatsapp" size="56px" />
        </div>
        <div class="q-mt-md text-center text">
          Para que funcione correctamente debes tener datos moviles y WhatsApp
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="3"
        class="column no-wrap flex-center slide bg-purple-3"
      >
        <q-icon name="two_wheeler" size="80px" />
        <div class="q-mt-md text-center text">
          Contamos con un sistema de Domicilio libre de costo
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="4"
        class="column no-wrap flex-center slide bg-green-13"
      >
        <q-icon name="paid" size="56px" />
        <div class="q-mt-md text-center text">
          En caso de devolucion del producto se aplicara una pequeña tarifa
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="5"
        class="column no-wrap flex-center slide bg-blue-grey-4"
      >
        <div class="flex">
          <img class="img" src="Info.webp" alt="" />
        </div>
        <div class="q-mt-lg text-center text">
          El icono de Informacion mostrara las nuevas actualizaciones
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        name="6"
        class="column no-wrap flex-center slide bg-deep-orange-2"
      >
        <div class="flex q-mb-md">
          <img class="img" src="Instalar_1.webp" alt="" />
        </div>
        <div class="flex">
          <img class="img" src="Instalar_2.webp" alt="" />
        </div>

        <div class="q-mt-md text-center text">Para instalar la aplicacion</div>
      </q-carousel-slide>

      <q-carousel-slide
        name="7"
        class="column no-wrap flex-center slide bg-brown-4"
      >
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center text">
          Puedes acceder a la tienda dandole click al siguiente boton
        </div>
        <div class="btn-cont flex justify-end q-pa-md">
          <q-btn
            @click="goShop"
            class="go-out-btn q-px-md"
            size="17px"
            color="black"
            no-caps
            align="left"
            icon-right="map"
            label="Ir A Tienda"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  data() {
    return {
      isFullscreen: true,
      time: null,
      slide: '1',

      autoplay: true,
    };
  },
  methods: {
    goShop() {
      this.showCarousel = false;
    },
  },
  setup() {
    const $q = useQuasar();
    let showCarousel = ref(true);
    const show: string | null = $q.localStorage.getItem('carouselIsShow');

    if (show === null) {
      $q.localStorage.set('carouselIsShow', 'yes');
    } else if (show === 'yes') {
      showCarousel.value = false;
    }

    return { showCarousel };
  },
});
</script>

<style lang="scss">
.inicio-carousel {
  /*  .slide {
  } */
  .text {
    color: black;
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 2rem;
  }
  .btn-cont {
    .go-out-btn {
      position: absolute;
      z-index: 99999;
      bottom: 5rem;
      right: 1.5rem;
    }
  }
  .img {
    max-width: 100%;
  }
}
</style>
