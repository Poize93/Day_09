var request=new XMLHttpRequest() // creating a new object of XMLHttpRequest()
request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// address of the API is given
request.send()

request.onload=function(){
    var data = JSON.parse(request.response) //to convert input String into JSON Obejct.
    console.log(data)

console.log("1. Printing Countries of Asia Region")    
var res=data.filter((ele)=>ele.region=="Asia")
console.log(res)


console.log("...........................................////////...................///........")
console.log("2. Countries with Population less than 2 Lakh")
var pop=data.filter((ele)=> ele.population<200000).map((ele)=>ele.name)
console.log(pop)



console.log("...........................................////////...................///........")
console.log("3. Countries details name, capital, flag using forEach function")
data.forEach(ele=>{console.log(`Country:${ele.name},
                                Capital:${ele.capital},
                                Flag:${ele.flag}`)})

console.log("...........................................////////...................///........")
console.log("4. total population of countries using reduce function")
var rdc=data.map((ele)=>ele.population).reduce((acc,cv)=>acc+cv)
console.log(rdc)



console.log("...........................................////////...................///........")
console.log("5. Print the country which uses US Dollars as currency.")
var crncy=data.filter((ele)=>ele.currencies[0].code==="USD").map((ele)=>ele.name)
console.log(crncy)                           

}