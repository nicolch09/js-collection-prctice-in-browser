'use strict';

function countSameElements(collection) {
    var lists = [];
    var name = '';
    var summary;
    var hasNumber;
    for(var x = 0; x < collection.length; x++){
    	summary = 0;
    	hasNumber = stringNumberChecker(collection[x]);
    	if(hasNumber != null){
    		name = retainLetterOnly(collection[x]);
    	} else{
    		name = collection[x];
    	}
    	var y = x;
    	while(y < collection.length){
    		var name2 = collection[y];
    		var hasNumberBoolean = false;
    		hasNumber = stringNumberChecker(name2);
    		if(hasNumber != null){
    			name2 = retainLetterOnly(collection[y]);
    			hasNumberBoolean = true;
    		}
    		if(name.indexOf(name2) > -1) {
    			if(hasNumberBoolean){
    				summary += parseInt(hasNumber.join(""));
    			} else{
    				summary += 1;
    			}
    			
    		} else{
 				lists.push({name, summary});
    			break;	
    		}
    		y++;
    	}
    	x = y - 1;
	    if(x + 1 == collection.length){
			lists.push({name, summary});
	    }
	}

	return lists;
}
function stringNumberChecker(value){
    return value.match(/\d/g);
}
function retainLetterOnly(value){
    return value.replace(/[^A-Za-z]/g, "");
}
