var image_hold 	= $( "#photo_holder" );
var left 		= $( "#left" );
var right 		= $( "#right" );
var to_begin 	= $( "#to_begin" );
var to_end 		= $( "#to_end" );
var play_pause 	= $( "#play_pause" );

var numImages = 3;//actually 4, but count starts with zero
var currImage = 0;
var isSlideStarted = false;
var slideProcesID = 0;

function changePhoto ( way )
{	
	currImage += way;	
	var newAngle = currAngle + (way) * Math.PI / 2;
	if( currImage > numImages )
	{
		currImage = 0;
		newAngle = 6 * Math.PI / 2;
	}
	if( currImage < 0 )
	{
		currImage = numImages;
		newAngle = 5 * Math.PI / 2;
	}
	
	currAngle = newAngle;
	
	$( image_hold ).attr( "style", "background: url( 'images/" + currImage + ".jpg' ) no-repeat center" );
	$( image_hold ).fadeIn ();
	
	drawLittleCircle( hdc, currAngle, lcRadius, width / 2, height / 2, radius );	
}

function startSlideShow( interval )
{
	return setInterval( "changePhoto( 1 )", interval );
}

function stopSlideShow( slideShowID )
{
	clearInterval( slideShowID );
}

$( image_hold )	.on( "click", function() { $( image_hold ).fadeOut(); changePhoto( 1  ) ;} );
$( left       )	.on( "click", function( ){ $( image_hold ).fadeOut(); changePhoto( -1 ) ;} );
$( right      )	.on( "click", function( ){ $( image_hold ).fadeOut(); changePhoto( 1  ) ;} );
$( play_pause )	.on( "click", function( )
							 {
									
								if( !isSlideStarted )
								{
									slideProcesID = startSlideShow( 1000 );
									$( play_pause ).text( "| |" );
								}
								else if( isSlideStarted )
								{									
									stopSlideShow( slideProcesID );
									$( play_pause ).text( ">" );
								}
								isSlideStarted = !isSlideStarted;
							});
							
$( to_begin   )	.on( "click", function( ){ currImage = numImages + 100; changePhoto( 1 ); } );
$( to_end     )	.on( "click", function( ){ currImage = - 100; changePhoto	( 1 );} );

$( document ).on ( "dragstart", function() { return false }   );
$( "body" )	 .on ( "selectstart", function() { return false } );


