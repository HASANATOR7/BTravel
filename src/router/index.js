import { createRouter, createWebHistory } from 'vue-router'
import Partner from "../views/Partner.vue"
import Home from "../views/Home.vue"
import Tour from "../views/Tour.vue"
import Money from "../views/Money.vue"
import Ticket from "../views/Ticket.vue"
import Transfer from "../views/Transfer.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: "/partner",
    name: "partner",
    component: Partner
  },
  {
    path: "/tour",
    name: "tour",
    component: Tour
  },
  {
    path: "/money",
    name: "money",
    component: Money
  },
  {
    path: "/ticket",
    name: "ticket",
    component: Ticket

  },
  {
    path: "/transfer",
    name: "transfer",
    component: Transfer
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
