function createSystem( center, elementsCount  )
{
	var el = 0;
	var planets = [];
	/*center.style.position = "absolute";
	center.style.top = "50%";
	center.style.left = "50%";*/
	for( var i = 0; i < elementsCount; i ++ )
	{
		el = document.createElement( "div" );
		el.className = "planet";
		el.id = center.id + "_" + i;
		center.appendChild( el );
		planets[ i ] = new Planet( el, center.offsetWidth * ( i + 1 ), Math.sin( i ) / 10 );
	}
	
	return planets;
}

var el = document.getElementById( "sun" );
var s = [];
s = createSystem( el, 9 );
var s1 = createSystem( document.getElementById( "sun" ), 1 );
setInterval( "s[ 0 ].MoveByCircle( )", 100 );
(function()
{
	for( var i = 0; i < s.length; i ++ )
	{
		setInterval( "s[ " + i + " ].MoveByCircle( )", 100 );
	}
})();
(function(){
	for( var i = 0; i < s1.length; i ++ )
	{
		setInterval( "s1[ " + i + " ].MoveByCircle( )", 100 );
	}
})();



