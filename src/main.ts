import './assets/main.css'
import './assets/css/reponsive.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router'

// import Echo from "laravel-echo"

// import { io } from 'socket.io-client'

// window.io = io


// socket.on("connect", function () {
//     console.log("CONNECTED");
// });

// socket.on("reconnecting", function () {
//     console.log("CONNECTING");
// });

// socket.on("disconnect", function () {
//     console.log("DISCONNECTED");
// });

const app = createApp(App)

// const socket = io('http://localhost:6001'); 

// window.Echo = new Echo({
//     broadcaster: 'socket.io',
//     host: 'http://giakhanh.local:6001',
//     // client: socket,
// });

app.use(createPinia())
app.use(router)

app.mount('#app')