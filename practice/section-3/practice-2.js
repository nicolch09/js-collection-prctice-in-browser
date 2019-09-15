'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var lists = [];
    var key = '';
    var count;
    for(var x = 0; x < collectionA.length; x++){
        key = collectionA[x].key;
        count = collectionA[x].count;
        for(var y = 0; y < objectB.value.length; y++){
            if(objectB.value[y].indexOf(key) > -1){
            	if(objectB.value.indexOf(key) == 0){
            		count -= 1;
            	} else{
            		count -= objectB.value.indexOf(key);
            	}
                break;
            }
        }
        lists.push({key, count});
    }

    return lists;
}
