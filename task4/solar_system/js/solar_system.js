var center = document.getElementById( "sun" );
var planets = document.getElementsByClassName( "planet" );

var planetsObj = [];

function setPlanets( elements )
{
	var result = [];
	var radius = center.offsetWidth;
	for( var i = 0; i < planets.length; i ++ )
	{
		if( elements[ i ].parentNode == center )
		{
			result[ i ] = new Planet( elements[ i ], radius, 5 - i );
			radius += center.offsetWidth;
		}
		else
		{		
			result[ i ] = new Planet( elements[ i ], elements[ i ].parentNode.offsetWidth + 10, 10 - i );
		}
	}

	return result;
}

planetsObj = setPlanets( planets );

(function( )
{
	for( var i = 0; i < planetsObj.length; i ++ )
	{
		setInterval( "planetsObj[ " + i + " ].MoveByCircle( )", 100 );
	}
})( );
