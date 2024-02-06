const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const buttonImage = document.getElementById('buttonImage')
let resultYear = document.getElementById('resultYear')
let resultMonth= document.getElementById('resultMonth')
let resultDay= document.getElementById('resultDay')

const labelDay = document.getElementById('labelDay')


buttonImage.addEventListener('click',()=>{
    let yearBorn = inputYear.value
    let monthBorn = (inputMonth.value)-1
    let dayBorn = inputDay.value

 

   if(dayBorn ===''){
    inputDay.style.border = "1px solid red"
    labelDay.style.color = "red"
  
   }else{
    inputDay.style.border = "1px solid hsl(0, 1%, 44%)"
    labelDay.style.color = "hsl(0, 1%, 44%)"
   }

   if(monthBorn<0){
    inputMonth.style.border = "1px solid red"
    labelMonth.style.color = "red"
   }else{
    inputMonth.style.border = "1px solid hsl(0, 1%, 44%)"
    labelMonth.style.color = "hsl(0, 1%, 44%)"
   }

   if(yearBorn===''){
    inputYear.style.border = "1px solid red"
    labelYear.style.color = "red"
   }else{
    inputYear.style.border = "1px solid hsl(0, 1%, 44%)"
    labelYear.style.color = "hsl(0, 1%, 44%)"
   }


   let dataBorn = new Date(yearBorn,monthBorn,dayBorn)
   let now = new Date()
   let diffMilSec = now.getTime() - dataBorn.getTime() 
   let msPDay =  24 * 60 * 60 * 1000
   let diffDay = Math.floor( diffMilSec/msPDay)
   let Year = Math.floor(diffDay/365.25)
   let month = Math.floor((diffDay%365.25)/30.5)
   let day = Math.floor((diffDay%365.25)%30.5)
   console.log(yearBorn,dayBorn)
   
   resultYear.innerText = Year
   resultMonth.innerText = month
   resultDay.innerText = day


})



