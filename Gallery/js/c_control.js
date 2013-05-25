//canvas
var canvas			= document.getElementById( "checker" );
var hdc 			= canvas.getContext( "2d" );
var width 			= canvas.width ;
var height 			= canvas.height;

var x 				= height / 2;
var y 				= width / 2 ;		//center coordinates of canvas
///////////////////////////////////

////Big Circle///
var radius 			= 50;	//radius of big circle
var clX 			= 0;	//clicked coordinate X
var clY 			= 0;	//clicked coordinate Y
var isMouseDown 	= false;//obvious
///////////////////////////////////

////Little Circle///
var currAngle	 	= 6 * Math.PI / 2; 	//startPosition of radius / little circle
var lcRadius		= 20;
var lcX				= 0;//
var lcY				= 0;//coordinates of center of little circle
var isClPntInCircle = false;//is clicked point in circle
var deltaAngle		= ( Math.PI * 2 ) / ( numImages + 1 );
///////////////////////////////////
//drawRadius( hdc, 6 * Math.PI / 4, width / 2, height / 2, radius );

function drawArrow( hDC, x, y )
{
	// var cx = x + 10;
	// var cy = y - 10;
	
	// hDC.moveTo( x, y );
	// hDC.lineTo( cx, cy );
}

////
// \param pX , pY - coordinate of point to check
// \param cX , cY - circle center
// \param cRadius - circle radius
////
// \return true is ( pX; pY ) in circle( ( cX; cY ); cRadius ) : false if not
////
function isInCircle( pX, pY, cX, cY, cRadius )
{
	return (( ( pX - cX ) * ( pX - cX ) + ( pY - cY ) * ( pY - cY ) <= cRadius * cRadius ) ?
			( true )
			:
			( false ));			
}
///////////////////////////////////

////
function drawCircle( hDC, cX, cY, radius )
{
	hDC.arc( cX, cY, radius, 0, 2 * Math.PI );
}
///////////////////////////////////

////
//draw little circle on a big circle with angle 
////
// \param hDC - context to draw
// \param lcAngle - angle to draw( start angle is ( 90 ) )
// \param lcRadius - Little Circle Radius
////
// \param cX , cY - center of big circle
// \param cRadius - big circle radius
////
function drawLittleCircle( hDC, lcAngle, lcRadius, cX, cY, cRadius )
{
	hDC.clearRect( 0, 0, width, height );
	hDC.closePath( );
	
	hDC.beginPath( );
	
	drawCircle( hDC, cX, cY, radius );//restore deleted big circle
	
	var x = lcX = cX + Math.cos( lcAngle ) * cRadius;
	var y = lcY = cY + Math.sin( lcAngle ) * cRadius;
	
	drawCircle( hDC, x, y, lcRadius );
	console.log( "little circle"  );
	hDC.stroke( );
}
///////////////////////////////////

drawLittleCircle( hdc, currAngle, lcRadius, width / 2, height / 2, radius );

canvas.onmousemove = function( event )
{
	var x = event.clientX;
	var y = event.clientY;
	if( isMouseDown && isClPntInCircle )
	{				
		console.log( "yes" );
		if( x < clX || y < clX )
		{
			currAngle += deltaAngle;//Math.PI / 2;			
			changePhoto( 1 );
			console.log( 'plus' );
		}
		else
		{
			console.log( 'minus' );
			currAngle -= deltaAngle;//Math.PI / 2;
			changePhoto( -1 );
		}
		
		drawLittleCircle( hdc, currAngle, lcRadius, width / 2, height / 2, radius );		
	}
}
canvas.onmousedown = function( event )
{
	clX = event.clientX;
	clY = event.clientY;
	
	isClPntInCircle = isInCircle( clX, clY, lcX, lcY, lcRadius );
	
	console.log( isClPntInCircle );
	
	isMouseDown = true;
}
document.body.onmouseup = function () { isMouseDown = false; isClPntInCircle = false; }