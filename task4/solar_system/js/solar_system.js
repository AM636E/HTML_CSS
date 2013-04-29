var planets = document.getElementsByClassName( "planet" );


var angle = 0;
var deltaAngle = Math.PI / 180;
function show( params )
{
	var show = 0;
	for( var i = 0; i < params.len; i ++ )
	{
		show += params[ i ] + " ";
	}
	alert( show );
}
function moveElement( element, radius )
{
	var parentX = element.parentNode.offsetLeft;
	var parentY = element.parentNode.offsetTop;
	var a = document.getElementById( "sun" );
	
	var x = element.parentNode.offsetWidth / 2 - 20+ radius * Math.cos( angle );
	var y = element.parentNode.offsetHeight / 2 - 120 + radius * Math.sin( angle );
	
	element.style.left = x + 'px';
	element.style.top = y + 'px';
	
	angle -= deltaAngle;	
}

setInterval( "moveElement( planets[ 0 ], 75 )", 100 );
setInterval( "moveElement( planets[ 1 ], 150 )", 100 );
setInterval( "moveElement( planets[ 2 ], 30 )", 100 );
setInterval( "moveElement( planets[ 3 ], 300 )", 100 );