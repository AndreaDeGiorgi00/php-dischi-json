


const app = Vue.createApp({


    data() {
        return {
            bigData: []

        }

    },
    created() {
        axios.get('http://localhost/php-dischi-json/index.php').then(res => this.bigData = res.data)
    }
})


app.mount('.main')