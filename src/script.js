const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const buttonImage = document.getElementById('buttonImage')



buttonImage.addEventListener('click',()=>{
    let yearBorn = inputYear.value
    let monthBorn = (inputMonth.value)-1
    let dayBorn = inputDay.value

   if(yearBorn ==" " || monthBorn < 0 || dayBorn==" " ){
    alert('Digite uma data válida')
   }

    let dataBorn = new Date(yearBorn,monthBorn,dayBorn)
    let now = new Date()
    let diffMilSec = now.getTime() - dataBorn.getTime() 
    let msPDay =  24 * 60 * 60 * 1000
    let diffDay = Math.floor( diffMilSec/msPDay)
    let Year = Math.floor(diffDay/365.25)
    let month = Math.floor((diffDay%365.25)/30.5)
    let day = Math.floor((diffDay%365.25)%30.5)
    console.log(diffDay,Year,month,day)

})




// buttonImage.addEventListener('click',()=>{
//     let dayBorn = inputDay.value
//     let monthBorn = inputMonth.value
//     let yearBorn = inputYear.value

 

//     let dateCurrent = new Date();
//     let yearCurrent = dateCurrent.getFullYear()
//     let dayCurrent = dateCurrent.getDay()
//     let monthCurrent = dateCurrent.getMonth();
//     let monthAge
//     let yearAge
//     let dayAge

//     if(yearCurrent>yearBorn){
//         yearAge = yearCurrent-yearBorn
//     }else if(yearCurrent<yearBorn || yearBorn==="" || yearBorn===0){
//         alert('Digite valor do ano menor ou igual ao ano atual')
//     }else if(yearCurrent=yearBorn){
//         yearAge = 0
//     }


//     if(monthCurrent>monthBorn){
//         monthAge = monthCurrent-monthBorn
//     }else if(monthCurrent<monthBorn){
//         monthAge = monthBorn-monthCurrent
//     }else if(monthCurrent=monthBorn){
//         monthAge = monthCurrent
//     }


//     if(dayCurrent>dayBorn){
//         dayAge = dayCurrent-dayBorn
//     }else if(dayCurrent<dayBorn){
//         dayAge = dayCurrent
//     }else if(dayCurrent<dayBorn){
//         dayAge = dayBorn-dayCurrent
//     }

    
    

 
   

// })





// // console.log(date.getHours())

