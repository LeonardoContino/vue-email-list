// console.log("js ok");


/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Super Bonus
Riusciamo a gestire e mostrare un loader mentre le mail non sono ancora tutte pronte? :sorriso:

*/
const app = Vue.createApp({
    data(){
        return{
            emails: [],
            
        }
    },
    methods:{
        getRandomEmail() {
        this.isLoading = true;
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
        this.emails.push(response.data.response) ;
        })
        
    
        }
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            this.getRandomEmail()
        }
    
    }
})




app.mount('#root')