<template>
  <div class="q-pa-md">
    <q-form ref="myForm" @submit="onSubmit" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Escribe tu Nombre"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Por favor escribe tu nombre',
          (val) => isNaN(val) || 'Escribe un nombre valido',
        ]"
      />

      <q-input
        ref="num"
        filled
        type="number"
        v-model="phone"
        label="Escribe tu Telefono"
        lazy-rules
        :rules="[
          (val) =>
            (val !== null && val !== '') ||
            'Por favor escribe tu numero telefónico',
          (val) =>
            val.length === 8 ||
            val.length === 6 ||
            'Por favor escribe un numero telefonico válido',
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div class="flex-center flex">
        <q-btn label="Enviar" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Payload } from './models';

export default defineComponent({
  emits: ['send'],
  data() {
    return {
      name: null as null | string,
      phone: null as null | number,
      accept: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first',
        });
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
        if (this.phone !== null && this.name !== null) {
          let payload: Payload = { phone: this.phone, name: this.name };
          this.$emit('send', payload);
          this.name = '';
          this.phone = null;
          const myForm: any = this.$refs.myForm;
          myForm.reset();
        } else {
          throw Error('Las propiedades Phone y Name son Nulas');
        }
      }
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
