document.onkeyup = KeyCheck;









if (window.addEventListener) {
    // create the keys and konami variables
    var keys = [],
        konami = "38,38,40,40,37,39,37,39,66,65";
    
    // bind the keydown event to the Konami function
    window.addEventListener("keydown", function(e){
        // push the keycode to the 'keys' array
        keys.push(e.keyCode);
        
        // and check to see if the user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {
            // do something such as:

            	document.getElementById('tardis').play();
	
            // and finally clean up the keys array
            keys = [];
        };
    }, true);
};






function toggleDisable(){    

//Toggles the disbled flag.
    if(document.infoForm.dsbl.value == '1'){
    document.infoForm.dsbl.value = '0';
	}else{
	document.infoForm.dsbl.value = '1';
	}


//sets the inputs to disabled/enabled
    var tot = 0;
    var inputs = document.getElementsByTagName("INPUT");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text') {
            inputs[i].disabled = !inputs[i].disabled;
			if(inputs[i].form ==='cellForm'){
				tot += inputs[i].value;
			}
        }
    }









}

function KeyCheck(){
    var KeyID = event.keyCode;
    document.infoForm.KeyName.value = KeyID;
    var cell = '';

//Ends function here if the cells are enabled. 	
	if(document.infoForm.dsbl.value == '1'){ 
	return;
	}


//Picks the Key
    switch (KeyID) {
        case 98:
        case 50:
            cell = 'neut';
            //toggleDisable();
            break;
        case 97:
        case 49:
            cell = 'band';
            break;
        case 99:
            cell = 'lymph';
            break;
        case 102:
            cell = 'mono';
            break;
        case 101:
            cell = 'eos';
            break;
        case 100:
            cell = 'baso';
            break;
        case 103:
            cell = 'meta';
            break;
        case 104:
            cell = 'myelo';
            break;
        case 105:
            cell = 'pro';
            break;
        case 110:
            cell = 'blast';
            break;
        case 96:
            cell = 'nrbc';
            break;
        case 65:
            cell = 'other';
            break;
        case 106:
            cell = 'mega';
            break;
        case 111:
            cell = 'plasma';
            break;
        case 189:
        case 109:
            document.infoForm.addsub.value = '-';
            return;
        case 187:
        case 107:
            document.infoForm.addsub.value = '+';
            return;
        default:
            return;    }

//Adds or subtracts.  
    var tot = parseInt(document.getElementById('total').value);
    document.infoForm.debug.value = tot;
    var temp = Number(document.getElementById(cell).value);
    if (document.infoForm.addsub.value === '+') {
        ++temp;
        ++tot;
    }else{ 
        if (document.infoForm.addsub.value === '-' && temp > 0) {
            --temp;
            --tot;
   		}
    }
    document.getElementById(cell).value = temp;
	document.getElementById('total').value = tot;

}


function reset(){

    //Returns counter to addition mode. 
    document.infoForm.addsub.value = '+';
    //Returns max counter to 100
    document.optionsForm.maxNum.value = "100";
   
    // Loops through inputs and reselts all inputs in cellForm
    var inputs = document.getElementsByTagName("INPUT");
    var tot=0;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'text' && inputs[i].form ==='cellForm') 
		{
            inputs[i].value = "";
        }
    }

}
