
/*
*	Cascading Asynchronous Function Execution (CAFÉ):
*		A design pattern for easily managing the execution sequence of asynchronous requests and callbacks.
*
*	Author: John Bonfardeci, john.bonfardeci@gmail.com
*	Created: June 2014
*	License: This article, along with any associated source code and files, is licensed under 
*	<a href="http://www.codeproject.com/info/cpol10.aspx">The Code Project Open License (CPOL)</a>
*	Original article: http://www.codeproject.com/Tips/805703/Cascading-Asynchronous-Function-Execution-CAF
*
*	Usage:
*	//include as many asynchronous functions as you need to execute in sequence
*	var cafe = new Cafe(function(cafe, args){ }, function(cafe, args){ }, function(cafe, args){ });
*	cafe.cascade();
*/

function Cafe(/*array:*/fns){
	this.fns = fns;
};

Cafe.prototype = {	
	/* handles execution of async functions in this.fns */
	cascade: function(){

		if(this.fns.length == 0){ return false; }
		
		/* execute the next function passing 'this' and any arguments from the previous function */
		this.fns.shift()(this, arguments);
	}	
};
