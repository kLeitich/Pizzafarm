class Pizza{
    constructor(size,crust,toppings,noofpizzas,option){
        this.size =size;
        this.crust = crust;
        this.toppings= toppings;
        this.noofpizzas=noofpizzas;
        this.option= option;
       
    }
    

    totalAmount(){
        const total=((parseInt(this.size)+parseInt(this.crust)+parseInt(this.toppings))*parseInt(this.noofpizzas))+parseInt(this.option);
        return total
    }
};






let form = document.getElementById("userInput");
let form1 = document.getElementById("deliveryForm");
let option = document.getElementById("option");
let size = document.getElementById("size");
let crust = document.getElementById("crust");
let toppings = document.getElementById("toppings");
let noOfPizza = document.getElementById("noOfPizza");
let output = document.querySelector(".output");
let summary = document.querySelector("#summary");
let summary1 = document.querySelector("#summary1");
let summary2 = document.querySelector("#summary2");
let summary3 = document.querySelector("#summary3");


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let userOrder = new Pizza(size.value,crust.value,toppings.value,noOfPizza.value,option.value)


    summary1.append("your size price; "+userOrder.size+ " Ksh");
    summary2.append("your crust price; "+userOrder.crust+ " Ksh");
    summary.append('Your toppings price: '+userOrder.toppings+' Ksh');
    summary3.append('Your delivery fee is: '+userOrder.option+' Ksh');
    
  
  });
  form1.addEventListener('submit',(event)=>{
    event.preventDefault();
    let userOrder = new Pizza(size.value,crust.value,toppings.value,noOfPizza.value,option.value);
    const amount = userOrder.totalAmount();
    output.append( 'Your TOTAL IS:'+ amount+ " KSh");
    alert("Your order has been recieved,Thank you for ordering with us.");
    
  
  });

