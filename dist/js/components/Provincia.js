app.component('provinces',{

    props:{
        province:{
            type: String,
            default: "Default province"
        },

        condition:{
            type: String,
            default: "Default condition"
        },

        temperature:{
            type: Number,
            default: "Default temperature"
        },

        humidity:{
            type: Number,
            default: "Default humidity"
        },

        velocity:{
            type: Number,
            default: "Default velocity"
        },

        image:{
            type: String,
            default: "Default image"
        },

        feelslike:{
            type: Number,
            default: "Default feelslike"
        },
       
        radiation:{
            type: Number,
            default: "Default radiation"
        },

        ultraviolet:{
            type: String,
            default: "Default ultraviolet"
        }

    },

    mounted() {
     
    },

    computed: {
        backgroundcolor(){
            temperatureRounded = Math.round(this.temperature);
            if (temperatureRounded >= 10 && temperatureRounded <= 15) {
                    return "backgorund-blue";
                } else if (temperatureRounded >= 16 && temperatureRounded <= 20) {
                    return "backgorund-yellow";
                } else if (temperatureRounded >= 21 && temperatureRounded <= 26) {
                    return "backgorund-orange";
                } else if (temperatureRounded >= 27 && temperatureRounded <= 31) {
                    return "backgorund-red";
                 } else if (temperatureRounded >= 32 && temperatureRounded <= 37){
                    return "backgorund-red-dark";
                } else if (temperatureRounded >= 38) {
                    return "backgorund-wine";
                }
        }
    },
  
    template: 

    /*html*/
     ` 
        <div v-bind:class="backgroundcolor" class="card-style">
            <div class="card-body ms-4">
                
                    <div class="d-flex flex-row-reverse">
                        <img class="position-absolute px-4 mt-3" v-bind:src="image" alt="{{ name }}">
                    </div>
                    
                    <p class="text-province mt-4 mb-1">{{ province }}</p>
                    <p class="text-condition mb-0">{{ condition }}</p>
                
                
                    <div class="row mt-2 mb-0">
                        <p class="text-temperature col-3">{{ temperature }}°C</p>
                    
                        <img class="humidity-size mt-2 ms-4" src="./images/humidity.png" alt="humidity"><p class="text-info col-1 px-0 mt-2">{{ humidity }}</p>
                        
                        <img class="humidity-size ms-3 mt-2" src="./images/velocity.png" alt="velocity"><p class="text-info col px-0 mt-2">{{ velocity }}</p>
                    </div>      
                    
                    <p class="text-uv-fl mt-0 mb-1">Feels like {{ feelslike }}°C</p>
                    <p class="text-uv-fl">UV Index: {{ ultraviolet }}</p> 
            </div>
        </div>
    `
})