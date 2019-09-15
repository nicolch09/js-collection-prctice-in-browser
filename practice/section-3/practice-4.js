'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var lists = [];
    var key = '';
    var count;
    var hasNumber;
    for(var x = 0; x < collectionA.length; x++){
        count = 0;
        hasNumber = stringNumberChecker(collectionA[x]);
    	if(hasNumber != null){
    		key = retainLetterOnly(collectionA[x]);
    	} else{
    		key = collectionA[x];
    	}
        var y = x;
        while(y < collectionA.length){
            var key2 = collectionA[y];
    		var hasNumberBoolean = false;
    		hasNumber = stringNumberChecker(key2);
    		if(hasNumber != null){
    			key2 = retainLetterOnly(collectionA[y]);
    			hasNumberBoolean = true;
    		}
            if(key.indexOf(key2) > -1) {
                if(hasNumberBoolean){
    				count += parseInt(hasNumber.join(""));
    			} else{
    				count += 1;
    			}
            } else{
            	if(objectB.value.indexOf(key) > -1){
            		if(objectB.value.indexOf(key) == 0){
            			count -= 1;
            		} else{
            			count -= objectB.value.indexOf(key);
            		}
            	}
                lists.push({key, count});
            	break;  
            }
            y++;
        }
        x = y - 1;
        if(x + 1 == collectionA.length){
        	if(objectB.value.indexOf(key) > -1){
	    		if(objectB.value.indexOf(key) == 0){
	    			count -= 1;
	    		} else{
	    			count -= objectB.value.indexOf(key);
	    		}
        	}
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