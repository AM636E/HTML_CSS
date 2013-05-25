var thumbSize = 100;//px

//to be initialized by makeSlider():

//////////////////////////////


(function () 
{
	for( var i = 0 ; i < numImages + 1; i ++ )
	{
		$( document.createElement( 'div' ) )
		.css({
			"border": "solid",
			"width" : "100px",
			"height": "100px",
			"opacity": "0.5",
			"float"  : "left",			
			"margin": "10px",
			"background": "url( images/" + i + ".jpg)"
		})
		.attr( "index", i )
		.on( "click", function( ){
			currImage = parseInt ( $( this ).attr( "index" ) );
			$( image_hold ).attr( "style", "background: url( 'images/" + currImage + ".jpg' ) no-repeat center" );	
		})
		.on( "mouseover", function( ){
			$( this ).css( "opacity", "1" );
		})
		.on( "mouseout", function( ){
			$( this ).css( "opacity", "0.5" );
		})
		.appendTo( $( "#gallery" ) );	
	}
})();