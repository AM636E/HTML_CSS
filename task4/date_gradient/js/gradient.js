var RGB = function ( r, g ,b )
{
	this.red 	= r;
	this.green 	= g;
	this.blue 	= b;
}

function writeGradient( startColor )
{
//	var startColor = 255;
	
	for( var i = 0; i < screen.height; i ++ )
	{
		document.write( "<div class=\"one\" style=\"background:rgb( "+( startColor.red - i ) + "," + ( startColor.green - i )  + "," + startColor.blue +")\"></div>" );
	}
}


function setGradient( )
{
	var date = new Date( );
	
	var check = date.getSeconds( );
	
	var startColor = new RGB( 0, 0, 0 );
	
	if( check > 12 )
	{
		startColor.red = 255;
		startColor.green = 128;
		startColor.blue = 64;
	}
	if( check > 15 )
	{
		startColor.red = 0;
		startColor.blue = 255;
		startColor.green = 255;
	}
	if( check > 18 )
	{
		startColor.red = 255;
		startColor.green = 0;
		startColor.blue = 255;		
	}
	
	writeGradient( startColor );
}

setGradient ();