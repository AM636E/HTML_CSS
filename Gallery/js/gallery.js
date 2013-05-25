var image_hold 	= $( "#image_holder" );
var left 		= $( "#left" 		 );
var right 		= $( "#right" 		 );
var to_begin 	= $( "#to_begin" 	 );
var to_end 		= $( "#to_end" 		 );
var play_pause 	= $( "#play_pause" 	 );

var numImages = 3;//actually 4, but count starts with zero
var currImage = 0;
var isSlideStarted = false;
var slideProcesID = 0;

var big_number = numImages + 100;

function changePhoto ( way )
{	
	currImage += way;	
	var newAngle = currAngle + (way) * deltaAngle;// Math.PI / 2;
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


///////////Event Attaching/////////////////
//change image by click on it
$( image_hold )	.on( "click", function() { changePhoto( 1  ) ;} );

//left & right
$( left       )	.on( "click", function( ){ changePhoto( -1 ) ;} );
$( right      )	.on( "click", function( ){ changePhoto( 1  ) ;} );

//start slide show
$( play_pause )	.on( "click", function( )
							 {									
								if( !isSlideStarted )
								{
									slideProcesID = startSlideShow( 1000 );
									$( play_pause ).text( "| |" );
								}
								else// if( isSlideStarted )
								{									
									stopSlideShow( slideProcesID );
									$( play_pause ).text( ">" );
								}
								isSlideStarted = !isSlideStarted;
							});

//
$( to_begin   )	.on( "click", function( ){  changePhoto( big_number ); } );
$( to_end     )	.on( "click", function( ){  changePhoto( -big_number );} );


//disable hightlighting text 
$( document ).on ( "dragstart", function() { return false }   );
$( "body" )	 .on ( "selectstart", function() { return false } );