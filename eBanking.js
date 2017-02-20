console.log('ebanking');

var openingBalance = 1000;

//saving account variables
var displaySavBal = document.querySelector('.displaySav');
var savBalanceAmt = openingBalance;
displaySavBal.innerHTML = savBalanceAmt.toFixed(2);

// Checking Account variables
var displayChkBal = document.querySelector('.displayChk');
var chkBalanceAmt = openingBalance;
displayChkBal.innerHTML = chkBalanceAmt.toFixed(2);

var totalBalance = savBalanceAmt + chkBalanceAmt;

var positiveGetAmtValue = function(){
    var getAmt = document.querySelector('.getAmt');

		if(+getAmt.value >= 0){
			return (+getAmt.value);

		}else{
			return 0;
		}
}

// changes to different background color when balance
//  in saving account is zero or more than zero
var changeBackgroundColor = function(color0 , color1){

	if(savBalanceAmt === 0){

		document.querySelector('.saving').style.
		backgroundColor = color0;

	}else {

        document.querySelector('.saving').style.
        backgroundColor = color1;
    }

    if(chkBalanceAmt === 0){

		document.querySelector('.checking').style.
		backgroundColor = color0;

    }else {

		document.querySelector('.checking').style.
		backgroundColor = color1;
    }
}

// deposit in saving account
var depositeSaving = function(){

    savBalanceAmt += positiveGetAmtValue();
    displaySavBal.innerHTML = savBalanceAmt.toFixed(2);

    changeBackgroundColor("red" , "gray");
}

var depositeBtn = document.querySelector('.sDepo-btn');
depositeBtn.addEventListener('click',depositeSaving);

// Saving Withdraw
var withdrawSaving = function(){

    	if(positiveGetAmtValue() <= savBalanceAmt){

    		savBalanceAmt -= positiveGetAmtValue();
    		displaySavBal.innerHTML = savBalanceAmt.toFixed(2);

        changeBackgroundColor("red" , "grey");


       }else if((positiveGetAmtValue() > savBalanceAmt) &&
       	        (positiveGetAmtValue() <= totalBalance)){

           	var shortAmt = positiveGetAmtValue() - savBalanceAmt;

           	savBalanceAmt -= (positiveGetAmtValue() - shortAmt);
           	displaySavBal.innerHTML = savBalanceAmt.toFixed(2);

                if(shortAmt <= chkBalanceAmt) {

             	  chkBalanceAmt -= shortAmt;
             	  displayChkBal.innerHTML = chkBalanceAmt.toFixed(2);

             	  changeBackgroundColor("red" , "grey");
                }
       }
}

var withdrawBtn = document.querySelector('.sWith-btn');
withdrawBtn.addEventListener('click',withdrawSaving);


// Checking Account

// deposit in saving account
var depositeChecking = function(){

    chkBalanceAmt += positiveGetAmtValue();
    displayChkBal.innerHTML = chkBalanceAmt.toFixed(2);

    changeBackgroundColor("red" , "grey");
}

var depositeBtnChk = document.querySelector('.cDepo-btn');
depositeBtnChk.addEventListener('click',depositeChecking);


// // Saving Withdraw
var withdrawChecking = function(){

        if(+positiveGetAmtValue() <= chkBalanceAmt){

            chkBalanceAmt -= positiveGetAmtValue();
            displayChkBal.innerHTML = chkBalanceAmt.toFixed(2);

            changeBackgroundColor("red" , "grey");

       }else if((+positiveGetAmtValue() > chkBalanceAmt) &&
                (+positiveGetAmtValue() <= totalBalance)){

            var shortAmt = positiveGetAmtValue() - chkBalanceAmt;

            chkBalanceAmt -= (positiveGetAmtValue() - shortAmt);
            displayChkBal.innerHTML = chkBalanceAmt.toFixed(2);

            if(shortAmt <= savBalanceAmt) {

                savBalanceAmt -= shortAmt;
                displaySavBal.innerHTML = savBalanceAmt.toFixed(2);

                changeBackgroundColor("red" , "grey");
            }
       }
}

var withdrawBtnChk = document.querySelector('.cWith-btn');
withdrawBtnChk.addEventListener('click',withdrawChecking);
