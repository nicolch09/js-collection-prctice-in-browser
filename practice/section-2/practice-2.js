'use strict';

function countSameElements(collection) {
    var lists = [];
    var key = '';
    var count;
    var hasNumber;
    for(var x = 0; x < collection.length; x++){
    	count = 0;
    	hasNumber = stringNumberChecker(collection[x]);
    	if(hasNumber != null){
    		key = retainLetterOnly(collection[x]);
    	} else{
    		key = collection[x];
    	}
    	var y = x;
    	while(y < collection.length){
    		var key2 = collection[y];
    		var hasNumberBoolean = false;
    		hasNumber = stringNumberChecker(key2);
    		if(hasNumber != null){
    			key2 = retainLetterOnly(collection[y]);
    			hasNumberBoolean = true;
    		}
    		if(key.indexOf(key2) > -1) {
    			if(hasNumberBoolean){
    				count += parseInt(hasNumber.join(""));
    			} else{
    				count += 1;
    			}
    			
    		} else{
 				lists.push({key, count});
    			break;	
    		}
    		y++;
    	}
    	x = y - 1;
	    if(x + 1 == collection.length){
			lists.push({key, count});
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
