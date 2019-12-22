import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import sendWaste from '../views/sendWaste.vue'
import releaseWaste from '../views/releaseWaste.vue'
import acceptWaste from '../views/acceptWaste.vue'
import storageWaste from '../views/storageWaste.vue'
import outWaste from '../views/outWaste.vue'
import acceptanceWaste from '../views/acceptanceWaste.vue'
import inquiry from '../views/Inquiry/inquiry.vue'
import shipment from '../views/Inquiry/shipment.vue'
import stockIn from '../views/Inquiry/stockIn.vue'
import stockOut from '../views/Inquiry/stockOut.vue'
import receipt from '../views/Inquiry/receipt.vue'
import checkWaste from '../views/checkWaste.vue'
import certification from '../views/certification.vue'
import accountInfo from '../views/setting/accountInfo.vue'
import securitySettings from '../views/setting/securitySettings.vue'
import addAccount from '../views/setting/addAccount.vue'
import API from '../views/setting/API.vue'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: releaseWaste,
    children: []
  },
  {
    path: '/releaseWaste',
    name: 'releaseWaste',
    component: releaseWaste
  },
  {
    path: '/acceptWaste',
    name: 'acceptWaste',
    component: acceptWaste
  },
  {
    path: '/sendWaste',
    name: 'sendWaste',
    component: sendWaste
  },
  {
    path: '/storageWaste',
    name: 'storageWaste',
    component: storageWaste
  },
  {
    path: '/outWaste',
    name: 'outWaste',
    component: outWaste
  },
  {
    path: '/acceptanceWaste',
    name: 'acceptanceWaste',
    component: acceptanceWaste
  },
  {
    path: '/inquiry',
    name: 'inquiry',
    component: inquiry
  },
  {
    path: '/shipment',
    name: 'shipment',
    component: shipment
  },
  {
    path: '/stockIn',
    name: 'stockIn',
    component: stockIn
  },
  {
    path: '/stockOut',
    name: 'stockOut',
    component: stockOut
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: receipt
  },
  {
    path: '/checkWaste',
    name: 'checkWaste',
    component: checkWaste
  }, 
  {
    path: '/certification',
    name: 'certification',
    component: certification
  },
  {
    path: '/accountInfo',
    name: 'accountInfo',
    component: accountInfo
  }, 
  {
    path: '/securitySettings',
    name: 'securitySettings',
    component: securitySettings
  }, 
  {
    path: '/addAccount',
    name: 'addAccount',
    component: addAccount
  }, 
  {
    path: '/API',
    name: 'API',
    component: API
  },
] 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
