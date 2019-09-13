'use strict';

function collectSameElements(collectionA, collectionB) {
  var lists = [];
  for(var x = 0; x < collectionA.length; x++){
	for(var y = 0; y < collectionB.length; y++){
		if(collectionB[y].indexOf(collectionA[x]) > -1){
			lists.push(collectionA[x]);
		}
	}
  }
  return lists;
}
