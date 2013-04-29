var planets = document.getElementsByClassName( "planet" );
document.getElementById( "sun" ).style.left = screen.width / 2 + 'px';
document.getElementById( "sun" ).style.top = screen.height / 2 + 'px';
/*(function( els )
{
	
})( planets );*/
/*(function ( elements )
{
	var x = 10;
	var parentX = 0;
	var parentY = 0;
	for( var i = 0; i < elements.lenght; i ++ )
	{
		parentX = elements[ i ].parentNode.offsetLeft;
		elements[ i ].style.marginLeft = 100 + 'px';
		
		x *= 2;
	}
})( planets );*/

var angle = 0;
var deltaAngle = 2 * Math.PI / 180;
function show( params )
{
	var show = 0;
	for( var i = 0; i < params.len; i ++ )
	{
		show += params[ i ] + " ";
	}
	alert( show );
}
function moveElement( element )
{
	var parentX = element.parentNode.offsetLeft;
	var parentY = element.parentNode.offsetTop;
	var a = document.getElementById( "sun" );
	//alert( a.offsetLeft + " " + a.offsetTop );
	
	var radius = element.offsetTop;//Math.abs( parentY - element.offfsetTop );
	
	var x = ( element.offsetLeft ) + radius * Math.cos( angle );
	var y = ( element.offsetTop ) + radius * Math.sin( angle );
	
	element.style.left = x + 'px';
	element.style.top = y + 'px';
	
	angle -= deltaAngle;
	
}

setInterval( "moveElement( planets[ 0 ] )", 100 );