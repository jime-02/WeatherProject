app.component('weather-ubication',{
    props: {

        title:{
            type: String,
            default: "Default title"
        },
       
        city:{
            type: String,
            default: "Default city"
        },

    },
    
    template:
        /*html*/
        `
         <div>
            <h1 class="title-weather">{{ title }}</h1>
            <h2 class="title-country">{{ city }}</h2>
         </div>
        `
})