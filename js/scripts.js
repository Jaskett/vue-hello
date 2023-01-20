const { createApp } = Vue

createApp({
    data() {
        return {
            firstName: 'Brandon',
            lastName: 'Vasquez',
            image: 'img/avatar.png'
        }
    }
}).mount('#app')