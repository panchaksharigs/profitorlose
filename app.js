const intialPrice = document.querySelector("#intial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputEl = document.querySelector("#output");


function calculateProfitOrLoss(intial,quantity,current){
	if(intial > current){
		// loss logic here
		var loss = (intial - current) * quantity;
		var lossPercentage = (loss / intial) * 100;
		showOutput(`hey the loss is '+ ${loss} ' and the percent is ' + ${lossPercentage}%`);

	}else if( current > intial){
      // profit logic here
      var profit =  (current - intial) * quantity;
      var profitPercentage = (profit / intial)*100;
      showOutput(`hey the profit is  ${profit} and the percent is	${profitPercentage}%`);

	}else{
		// rest of logic
		showOutput ('no pain no gain and no gain no pain');
	}
}
submitBtn.addEventListener("click",submitHandler);
 function submitHandler(){
 	var ip = Number(intialPrice.value);
 	var qty = Number(stockQuantity.value);
 	var curr = Number(currentPrice.value);

 	calculateProfitOrLoss(ip,qty,curr);
 }
 function showOutput(message){
 	outputEl.innerHTML = message;
 }