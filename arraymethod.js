var rqturl=new XMLHttpRequest();
rqturl.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true);
rqturl.send();
rqturl.onload=()=>{
    var data=JSON.parse(rqturl.response);
    console.log(data)
    //Get all the countries from Asia continent /region using Filter function
    var asiacountry=data.filter((x)=>x.region==="Asia");
    console.log(asiacountry);

    //Get all the countries with a population of less than 2 lakhs using Filter function
    var popl=data.filter((x)=>x.population<200000);
    console.log(popl);

    //Print the following details name, capital, flag using forEach function
    data.forEach(val=>{
        console.log("namecapitalflag",`${val.name} ,${val.capital} ,${val.flag}`)    
    })

    // Print the total population of countries using reduce function 
    console.log("reduce");
    console.log(data.reduce((sum,curr)=>sum+curr.population,0));

    // Print the country which use US Dollars as currency
    var us = data.filter((x)=> {
        for(var cur in x.currencies){
            if(x.currencies[cur].code == 'USD'){
                return true;
            }
        }
    })
    console.log(us);
}