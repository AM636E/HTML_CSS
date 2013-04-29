var radius = 1;
var deltaRadius = 0.063;
var angle = 0;
var deltaAngle = 2 * Math.PI / 360;
var maxRadius = screen.height / 2;
var beginX = screen.width / 2;
var beginY = screen.height / 2;
function moveBySpiral( el )
{
	var x = beginX + radius * Math.cos( angle );
	var y = beginY + radius * Math.sin( angle );
	
	// if( radius > maxRadius )
	// {
		// //alert( x + " " + y );
		// beginX = x;
		// beginY = y;
		// radius = 1;
		// angle = 0;
	// }
	if( y <= 0 )
	{
		
		maxRadius /= 2;
		beginX = screen.width / 2;
		beginY = 0;
		deltaRadius = -0.1;
	}
	
	
	el.style.left = x + 'px';
	el.style.top = y + 'px';
	
	radius += deltaRadius;
	angle += deltaAngle;
}

var element = document.getElementById( "image" );
setInterval( "moveBySpiral( element )", 0 );