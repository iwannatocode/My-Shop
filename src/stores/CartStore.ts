import { defineStore } from 'pinia';
import { Cart } from '../models/models';

//const myShopStore = shopStore();

export const cartStore = defineStore('cartStore', {
  state: () => ({
    cart: [
      /*
          { id: number;
          productName: string;
          cant: number;
           price: number; }
           */
    ] as Cart[],
  }),
  actions: {
    addProduct(id: number, productName?: string, price?: number): void {
      //si el item esta se añade 1 a cant
      const searchItem = this.$state.cart.some((item, index) => {
        if (item.id === id) {
          // console.log(id);

          this.$state.cart[index].cant++;
          return true;
        }
        return false;
      });

      //si el item no esta se agrega al carro con cont 1
      if (!searchItem && productName && price) {
        this.$state.cart.push({
          id: id,
          productName: productName,
          cant: 1,
          price: price,
        });
      }
    },
    dismProduct(id: number): void {
      //si el item esta se añade 1 a cant
      this.$state.cart.some((item, index) => {
        if (item.id === id) {
          if (item.cant === 1) {
            this.$state.cart.splice(index, 1);
          } else {
            this.$state.cart[index].cant--;
          }

          return true;
        }
        return false;
      });
    },
  },
});
