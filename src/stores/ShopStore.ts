import { defineStore } from 'pinia';
import { ShopState } from 'src/models/models';

export const shopStore = defineStore('ShopStore', {
  state: () =>
    ({
      badgeCount: 0,
      itemsData: [
        /*{
          id: 1,
          cant: 4,
          productName: 'Pop 4 LTE',
          imgSrc: 'images/phone_Pop4LTE_1.webp',
          description: 'Esta es una imagen muy bonita',
          price: 20000,
          guarantee: { text: 'Valida por 1 mes' },
          rating: 1,
          allImgSrc: [
            { src: 'images/phone_Pop4LTE_1.webp' },
            { src: 'images/phone_Pop4LTE_2.webp' },
            { src: 'images/phone_Pop4LTE_3.webp' },
          ],
          table: {
            column: [
              {
                name: 'caracteristic',
                label: 'Características',
                field: 'caracteristic',
                align: 'left',
              },
              {
                name: 'value',
                label: 'Valor',
                field: 'caracteristicValue',
              },
            ],
            row: [
              {
                caracteristic: 'Pantalla',
                caracteristicValue: 'super amoled',
              },
              {
                caracteristic: 'memoria interna',
                caracteristicValue: '64Gbit',
              },
              {
                caracteristic: 'ram',
                caracteristicValue: '4Gbit',
              },
              {
                caracteristic: 'carga',
                caracteristicValue: 'rapida',
              },
              {
                caracteristic: 'android',
                caracteristicValue: '12',
              },
              {
                caracteristic: 'performance',
                caracteristicValue: 'good',
              },
              {
                caracteristic: 'suportt',
                caracteristicValue: 'no',
              },
              {
                caracteristic: 'over clocking',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'gama',
                caracteristicValue: 'baja',
              },
              {
                caracteristic: 'memoria interna',
                caracteristicValue: '64Gbit',
              },
              {
                caracteristic: 'memoria interna',
                caracteristicValue: '64Gbit',
              },
              {
                caracteristic: 'memoria interna',
                caracteristicValue: '64Gbit',
              },
            ],
          },
          notifications: [
            {
              notification: 'rebaja',
              cant: 10,
            },
          ],
          filterScan: [
            'cell',
            'phone',
            'telefono',
            'pop4lte',
            'pop 4 lte',
            'rebaja',
          ],
        },*/
        {
          id: 2,
          cant: 5,
          productName: 'Zapatillas New Balance',
          imgSrc: 'images/Shoe_NewBalance_Pink_1.webp',
          price: 3000,
          guarantee: null,
          allImgSrc: [
            { src: 'images/Shoe_NewBalance_Pink_1.webp' },
            { src: 'images/Shoe_NewBalance_Pink_2.webp' },
            { src: 'images/Shoe_NewBalance_Pink_3.webp' },
            { src: 'images/Shoe_NewBalance_Pink_4.webp' },
          ],

          filterScan: ['zapatos', 'zapatillas'],
        },
        {
          id: 3,
          cant: 2,
          productName: 'Zapatillas Max Field',
          imgSrc: 'images/Shoe_MaxField_Blue_1.webp',
          price: 4000,
          guarantee: null,
          allImgSrc: [
            { src: 'images/Shoe_MaxField_Blue_1.webp' },
            { src: 'images/Shoe_MaxField_Blue_2.webp' },
            { src: 'images/Shoe_MaxField_Blue_3.webp' },
            { src: 'images/Shoe_MaxField_Blue_4.webp' },
          ],

          filterScan: ['zapatos', 'zapatillas'],
        },
        {
          id: 4,
          cant: 1,
          productName: 'Chancletas de Goma',
          imgSrc: 'images/Slipper_Purpure_1.webp',
          price: 1100,
          guarantee: null,
          allImgSrc: [
            { src: 'images/Slipper_Purpure_1.webp' },
            { src: 'images/Slipper_Purpure_2.webp' },
            { src: 'images/Slipper_Purpure_3.webp' },
          ],
          notifications: [],
          filterScan: ['chancletas'],
        },
        {
          id: 5,
          cant: 2,
          productName: 'Licras para Mujeres',
          imgSrc: 'images/Women_Licra_1.webp',
          price: 1200,
          guarantee: null,
          allImgSrc: [
            { src: 'images/Women_Licra_1.webp' },
            { src: 'images/Women_Licra_2.webp' },
          ],
          filterScan: ['Licras, mujer'],
        },
        {
          id: 6,
          cant: 3,
          productName: 'Zapatos de vestir',
          imgSrc: 'images/Shoe_Dress_1.webp',
          price: 3500,
          guarantee: null,
          allImgSrc: [{ src: 'images/Shoe_Dress_1.webp' }],
          filterScan: ['zapatos', 'hombres', 'vestir'],
        },
        {
          id: 7,
          cant: 3,
          productName: 'Colonia Bonabel',
          imgSrc: 'images/Colonia_Bonabel_1.webp',
          price: 600,
          guarantee: null,
          allImgSrc: [{ src: 'images/Colonia_Bonabel_1.webp' }],
          filterScan: ['Colonia', 'Perfumes', 'Bonabel'],
        },
        {
          id: 8,
          cant: 4,
          productName: 'Mando universal para TV/Cajas',
          imgSrc: 'images/Controll_Tv_1.webp',
          price: 2500,
          guarantee: null,
          allImgSrc: [{ src: 'images/Controll_Tv_1.webp' }],
          filterScan: ['Tv', 'Control Remoto', 'mando', 'Remote', 'Control'],
          table: {
            column: [
              {
                name: 'caracteristic',
                label: 'Características',
                field: 'caracteristic',
                align: 'left',
              },
              {
                name: 'value',
                label: 'Valor',
                field: 'caracteristicValue',
              },
            ],
            row: [
              {
                caracteristic: 'TV',
                caracteristicValue: '|||||||||||||||||||||',
              },
              {
                caracteristic: "TV Haier 21' CRT",
                caracteristicValue: 'si',
              },
              {
                caracteristic: "TV Haier 29' CRT",
                caracteristicValue: 'si',
              },
              {
                caracteristic: "TV Panda 21' CRT",
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'TV Konka híbridos',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'TV Konka analógicos',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'TV ATEC híbridos',
                caracteristicValue: 'si',
              },
              {
                caracteristic: "TV Parker 14' TC14f5",
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'TV ATEC DTV',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'TV Soyea DTV',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'CAJAS DECODIFICADORAS',
                caracteristicValue: '|||||||||||||||||||||',
              },
              {
                caracteristic: 'Todas las cajas Konka',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Mico DT46-N03',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Mico DT25-2080',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Real TV HMA!',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Haier HDMB-2000T/M',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Soyea SDP160',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Gelet SD-HL-215G',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Gelet HD-hl 1209',
                caracteristicValue: 'si',
              },
              {
                caracteristic: 'Todas las cajas Runch',
                caracteristicValue: 'si',
              },
            ],
          },
        },
      ],
    } as ShopState),

  getters: {
    /*   doubleCount: (state) => state.counter * 2, */
  },
  actions: {
    incrementBadge() {
      this.badgeCount++;
    },
  },
});
