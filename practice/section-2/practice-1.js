'use strict';

function countSameElements(collection) {
   var lists = [];
    var key = '';
    var count;
    for(var x = 0; x < collection.length; x++){
        count = 0;
        key = collection[x];
        var y = x;
        while(y < collection.length){
            var key2 = collection[y];
            if(key.indexOf(key2) > -1) {
                count += 1;   
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
