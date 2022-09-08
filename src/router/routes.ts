import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    props: (path) =>
      path.fullPath === '/' ? { isShopPage: true } : { isShopPage: false },
    children: [
      {
        path: '',
        component: () => import('src/pages/MyShop.vue'),
      },
      {
        path: '/ShopCart',
        component: () => import('pages/MyCart.vue'),
      },
      {
        name: 'Details',
        path: '/ShowItemDetails/:id',
        component: () => import('pages/ShowItemDetails.vue'),
        props: (path) =>
          path.params.id ? { id: parseInt(path.params.id.toString()) } : '',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
