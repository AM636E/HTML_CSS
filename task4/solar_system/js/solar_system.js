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
			result[ i ] = new Planet( elements[ i ], radius, - Math.sin( radius ) * 10);
			//result[ i ] = new Planet( elements[ i ], radius, 5);
			radius += center.offsetWidth;
		}
		else
		{		
			result[ i ] = new Planet( elements[ i ], elements[ i ].parentNode.offsetWidth + 10, Math.sin( radius ) * 10 - i );
			//result[ i ] = new Planet( elements[ i ], elements[ i ].parentNode.offsetWidth + 10, 6 );
		}
		
	//	result[ i ].CalculateSpeed( );
	}
	
	return result;
}

planetsObj = setPlanets( planets );

setInterval( "planetsObj[ 0 ].MoveByCircle( ) ", 25 );
(function ()
{
	for( var i = 0; i < planets.length; i ++ )
	{
		setInterval( "planetsObj[ " + i + " ].MoveByCircle( )", 100 );
	}
})();
