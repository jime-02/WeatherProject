const app = Vue.createApp({

    data() {
        return {

            provinces:[
              
            ]
            
        }
    },

 mounted:function() {

     //get information from api
     axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=San Jose, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            });    
        }
     )
     .catch(
        error => console.log(error)
     ); 
     
      //get information from api
      axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=Heredia, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            });
           /* if (items.current.uv >= 11) {
                uv= "Extreme";
                } else if (items.current.uv >=8 ) {
                uv= "Moderate";
                } else if (items.current.uv >= 6) {
                uv= "High";
                } else if (items.current.uv >= 3) {
                uv= "Moderate";
                } else if (items.current.uv >=1) {
                uv= "Low";
               }*/

        }
     )
     .catch(
        error => console.log(error)
     ); 

     //get information from api
     axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=Alajuela, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            });   

        }
     )
     .catch(
        error => console.log(error)
     ); 

      //get information from api
      axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=Cartago, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            });
        }
     )
     .catch(
        error => console.log(error)
     ); 

      //get information from api
      axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=Limon, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            });   

          }
     )
     .catch(
        error => console.log(error)
     ); 

      //get information from api
      axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=Guanacaste, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            });
        }
     )
     .catch(
        error => console.log(error)
     ); 

      //get information from api
      axios({
        method: 'get',
        url: 'https://api.weatherapi.com/v1/current.json?key=55b5b2c0262946e287865437231505&q=Puntarenas, Costa Rica&aqi=no'
     })
     .then(
        (response) => {

            console.log(response);
            let items = response.data;
           // console.log(items);

            this.provinces == [];

            let uvradiation = "";

            if (items.current.uv >= 1 && items.current.uv <= 2) {
               uvradiation= "Low";
               } else if (items.current.uv >= 3 && items.current.uv <= 5) {
               uvradiation= "Moderate";
               } else if (items.current.uv >= 6 && items.current.uv <= 7) {
               uvradiation= "High";
               } else if (items.current.uv >= 8 && items.current.uv <= 10) {
               uvradiation= "Very High";
               } else if (items.current.uv >= 11) {
               uvradiation= "Extreme";
             }

            this.provinces.ultraviolet = uvradiation;
            console.log(uvradiation);
 
            this.provinces.push({ 
                province: items.location.name,
                condition: items.current.condition.text,
                temperature: items.current.temp_c,
                humidity: items.current.humidity,
                velocity: items.current.wind_kph,
                image: items.current.condition.icon,
                feelslike: items.current.feelslike_c,
                radiation: items.current.uv,
                ultraviolet: uvradiation
              
            }); 
        }
     )
     .catch(
        error => console.log(error)
     ); 
 },
   
})