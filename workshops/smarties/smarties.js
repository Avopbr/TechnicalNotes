var findSmartiesByColor = function(smarties, color){
	
	 for (var smartyIndex in smarties) {
		smarty = smarties[smartyIndex].color

		if(smarty == color){
			results = smarties[smartyIndex];

		}
	}
	return 	results;

};


var findMostAbundantSmartie = function(smarties){
	var max_smarty = {color:'', qty:0 }

	for(var x in smarties) {
		var currentSmarty = smarties[x];
		if (currentSmarty.qty > max_smarty.qty) {
			max_smarty = currentSmarty;
				
		}
	}
	return  max_smarty;
};


var findSmartiesLessThan = function(smarties, num){
	var smartieList = [];

	for(var x in smarties) {
		var smarty = smarties[x];
		if (smarty.qty < num){
			smartieList.push(smarty.qty)
		}
	}
	return smartieList
};
/*
var findSmarties = function(){

};

var groupSmarties = function(){

};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
*/
