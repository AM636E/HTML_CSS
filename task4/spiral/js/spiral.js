var left = 0;
var top = 0;
var radius = 1;
var deltaRadius = 1;
var angle = 0;
var deltaAngle = 5 * Math.PI / 180;
var beginX = 600;
var beginY = 500;
function moveBySpiral( el )
{
	var x = beginX + radius * Math.cos( angle );
	var y = beginY + radius * Math.sin( angle );
	
	el.style.left = x + 'px';
	el.style.top = y + 'px';
	
	if( x > screen.width || x < 0 || y > screen.height || y < 0 )
	{
		deltaRadius *= -1;
		deltaAngle *= -1;
	}
	
	radius -= deltaRadius;
	angle -= deltaAngle;
	////document.body.innerText = x + " " + y; 	 
}

var element = document.getElementById( "image" );

setInterval( "moveBySpiral( element )", 1 );
