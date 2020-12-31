// document.getElementById("increaseItem").addEventListener("click", function(){
//     updateCartTotal(true);
// });
// document.getElementById("decreaseItem").addEventListener("click", function(){
//     updateCartTotal(false);
// });


function updateCartTotal (product, isIncrease){
    let countItem = document.getElementById(product+"Count");
    const realNumCount = parseInt(countItem.value);
    let newCount = realNumCount;

    if (isIncrease == true ){
        newCount = realNumCount +1;
    }
    if (isIncrease == false  && newCount> 0){
        newCount = realNumCount -1;
    }
    countItem.value = newCount;
    let total = 0;
    if (product =="phone"){
        total = newCount *1219;
    }
    if(product == "case"){
        total = newCount *59;
    }
    document.getElementById(product +"-price").innerText = "$" + total;
    totalCount ();
};
function totalCount (){
    const phonePrice = document.getElementById("phoneCount");
    const phoneTotal = parseInt(phonePrice.value);

    const casePrice = document.getElementById("caseCount");
    const caseTotal = parseInt(casePrice.value);

    const subTotal = phoneTotal * 1219 + caseTotal * 59;
     document.getElementById("sub-total").innerText = "$" + subTotal;

     const tax =Math.round(subTotal * 0.1);
     document.getElementById("tax").innerText = "$" + tax;
     
     const grandTotal = subTotal + tax;
     document.getElementById("grand-total").innerText = "$" + grandTotal;

    
}







// document.getElementById("increaseItem").addEventListener("click", function(){
//     let countItem = document.getElementById("itemCount");
//     const realNumCount = parseInt(countItem.value);
//     const newCount = realNumCount + 1;
//     countItem.value = newCount;
//     const total = newCount *1219;
//     document.getElementById("single-price").innerText = "$" + total;
// });
// document.getElementById("decreaseItem").addEventListener("click", function(){
//     let countItem = document.getElementById("itemCount");
//     const realNumCount = parseInt(countItem.value);
//     const newCount = realNumCount - 1;
//     countItem.value = newCount;
//     const total = newCount *1219;
//     document.getElementById("single-price").innerText = "$" + total;
// })

