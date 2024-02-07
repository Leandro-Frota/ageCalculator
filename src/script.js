const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')
const buttonImage = document.getElementById('buttonImage')
let resultYear = document.getElementById('resultYear')
let resultMonth= document.getElementById('resultMonth')
let resultDay= document.getElementById('resultDay')
let errorMensageDay = document.getElementById('errorMensageDay')
let errorMensageMonth = document.getElementById('errorMensageMonth')
let errorMensageYear = document.getElementById('errorMensageYear')

const labelDay = document.getElementById('labelDay')


buttonImage.addEventListener('click',()=>{
    let yearBorn = inputYear.value
    let monthBorn = (inputMonth.value)-1
    let dayBorn = inputDay.value

 
    let dataBorn = new Date(yearBorn,monthBorn,dayBorn)
    let now = new Date()
    let yearNow = now.getFullYear()

   console.log(yearNow)

   if(dayBorn ===''){
    inputDay.style.border = "1px solid red"
    labelDay.style.color = "red"
    errorMensageDay.style.color = "red"

    errorMensageDay.classList.remove('close')
    errorMensageDay.classList.add('open')

  
   }else{
    inputDay.style.border = "1px solid hsl(0, 1%, 44%)"
    labelDay.style.color = "hsl(0, 1%, 44%)"

    errorMensageDay.classList.remove('open')
    errorMensageDay.classList.add('close')
   }



   if(monthBorn<0){
    inputMonth.style.border = "1px solid red"
    labelMonth.style.color = "red"

    errorMensageMonth.style.color = "red"

    errorMensageMonth.classList.remove('close')
    errorMensageMonth.classList.add('open')

   }else{
    inputMonth.style.border = "1px solid hsl(0, 1%, 44%)"
    labelMonth.style.color = "hsl(0, 1%, 44%)"

    errorMensageMonth.classList.remove('open')
    errorMensageMonth.classList.add('close')

   }


   if(yearBorn==='' || yearBorn > yearNow){
    inputYear.style.border = "1px solid red"
    labelYear.style.color = "red"

    errorMensageYear.style.color = "red"

    errorMensageYear.classList.remove('close')
    errorMensageYear.classList.add('open')

   }else{
    inputYear.style.border = "1px solid hsl(0, 1%, 44%)"
    labelYear.style.color = "hsl(0, 1%, 44%)"

    
    errorMensageYear.classList.remove('open')
    errorMensageYear.classList.add('close')
   }


   if(dayBorn ==='' || monthBorn<0 || yearBorn==='' || yearBorn > yearNow){
    
    return

   }else{

   let diffMilSec = now.getTime() - dataBorn.getTime() 
   let msPDay =  24 * 60 * 60 * 1000
   let diffDay = Math.floor( diffMilSec/msPDay)
   let Year = Math.floor(diffDay/365.25)
   let month = Math.floor((diffDay%365.25)/30.5)
   let day = Math.floor((diffDay%365.25)%30.5)
   
   
   resultYear.innerText = Year
   resultMonth.innerText = month
   resultDay.innerText = day

   }
})



