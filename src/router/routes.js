const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "main",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        meta: {
          requiresAuth: true,
        },
        name: "vue",
        path: "vue",
        component: () => import("pages/VueEx.vue"),
      },
      {
        meta: {
          requiresAuth: true,
        },
        name: "shop",
        path: "shop",
        component: () => import("pages/ShoppingList.vue"),
      },
      {
        meta: {
          requiresAuth: true,
        },
        name: "todo",
        path: "todo",
        component: () => import("pages/Todo.vue"),
      },
      {
        meta: { requiresAuth: false },
        name: "dbtodo",
        path: "dbtodo",
        component: () => import("pages/DbTodo.vue"),
      },
    ],
  },
  {
    name: "signin",
    path: "/signin",
    component: () => import("layouts/SignIn.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("layouts/Login.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it,
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
