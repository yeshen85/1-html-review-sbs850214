const Offer = {
    data() {
      return {
        "person": {},
        }
    },
    computed: {
        prettyDate() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData(){
            console.log("A");
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
    } //end created
} // end Offer config
Vue.createApp(Offer).mount('#offerApp');
