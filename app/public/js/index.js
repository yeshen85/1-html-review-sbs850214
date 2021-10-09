const SomeApp = {
    data() {
      return {
        books: [],
      }
    },
    computed: {
        prettyDate() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
    
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.book = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        fetchUserData(){
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                this.person = responseJson.results[0];
            })
            .catch( (err) => {
                console.error(err);
            })


        }
    },
    created() {
        this.fetchUserData();
        this.fetchBookData();
    } 
}
Vue.createApp(SomeApp).mount('#offerApp');
