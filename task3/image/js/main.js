var startX = 10;

var isButtonDown = false;

document.body.onmousedown = function() { isButtonDown = true; }
document.body.onmouseup	  = function() { isButtonDown = false; }

function getStartCoordinate( elem, event ){ startX = event.screenX; }
var el = document.getElementById( "slider" );
el.style.left = "10px";
el.style.top = "10px";
function moveElem( elem, event )
{
	var newX = event.screenX;
	
	if( isButtonDown )	
	{
		moveElement( elem, newX - startX - elem.offsetLeft );
	}
}