'use strict';

function collectSameElements(collectionA, objectB) {
  var lists = [];
  for(var x = 0; x < collectionA.length; x++){
	for(var y = 0; y < objectB.value.length; y++){
		if(objectB.value[y].indexOf(collectionA[x].key[0]) > -1){
			lists.push(collectionA[x].key[0]);
		}
	}
  }
  return lists;
}
