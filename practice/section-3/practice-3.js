'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var lists = [];
    var key = '';
    var count;
    for(var x = 0; x < collectionA.length; x++){
        count = 0;
        key = collectionA[x];
        var y = x;
        while(y < collectionA.length){
            var key2 = collectionA[y];
            if(key.indexOf(key2) > -1) {
                count += 1;   
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
