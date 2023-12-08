import './assets/main.css'
import './assets/css/reponsive.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import registerGlobalComponents from './plugins/global-components'
import setAuthorizationToken from './plugins/set-authorization-token'
import { router } from './router'

import Echo from "laravel-echo"
import io from 'socket.io-client'

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    client: io,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

setAuthorizationToken()
registerGlobalComponents(app)

app.mount('#app')
