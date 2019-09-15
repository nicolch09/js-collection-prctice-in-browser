'use strict';

function countSameElements(collection) {
    var lists = [];
    var key = '';
    var count = 0;
    for(var x = 0; x < collection.length; x++){
        if(key == ''){
            key = collection[x];
        }
        if(collection[x].indexOf(key) > -1){
            count += 1;
            if(x + 1 == collection.length){
            	lists.push({key, count});
            }
        } else{
            lists.push({key, count});
            key = collection[x];
            count = 1;
            if(x + 1 == collection.length){
            	lists.push({key, count});
            }
        }
    }
return lists;
}
