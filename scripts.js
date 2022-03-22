class Pizza{
    constructor(size,crust,toppings,noofpizzas,delivery){
        this.size =size;
        this.crust = crust;
        this.toppings= toppings;
        this.noofpizzas=noofpizzas;
        this.delivery=delivery;
       
    }
    

    totalAmount(){
        const total=((parseInt(this.size)+parseInt(this.crust)+parseInt(this.toppings))*parseInt(this.noofpizzas))+parseInt(this.delivery);
        return total
    }
};






let form = document.getElementById("userInput");
let form1 = document.getElementById("deliveryForm");
let form2 = document.getElementById("deliveryOption");
let size = document.getElementById("size");
let crust = document.getElementById("crust");
let toppings = document.getElementById("toppings");
let noOfPizza = document.getElementById("noOfPizza");
let delivery = document.getElementById("inputState");
let output = document.querySelector(".output");
let summary = document.querySelector("#summary");
let summary1 = document.querySelector("#summary1");
let summary2 = document.querySelector("#summary2");

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let userOrder = new Pizza(size.value,crust.value,toppings.value,noOfPizza.value,delivery.value)
    


    summary1.append("your size price; "+userOrder.size+ " Ksh");
    summary2.append("your crust price; "+userOrder.crust+ " Ksh");
    summary.append('Your toppings price: '+userOrder.toppings+' Ksh');
    
  
  });
  form1.addEventListener('submit',(event)=>{
    event.preventDefault();
    let userOrder = new Pizza(size.value,crust.value,toppings.value,noOfPizza.value,delivery.value)
    const amount = userOrder.totalAmount();

    output.append( 'Your TOTAL IS:'+ amount+ " KSh");
  
  });
//   form2.addEventListener('click',()=>{
//     // event.preventDefault();
//     document.getElementById("flexRadioDefault1").click(function(){
//         $(".form-group").hide();
//       });
      
//       document.getElementById("flexRadioDefault2").click(function(){
//         $(".form-group").show();
//       });
  
//   });