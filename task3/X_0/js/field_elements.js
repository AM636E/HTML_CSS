var isX = true;
var field = 0;
var count = 0;

function createField( )
{
	document.write( "<table border=\"1\">" );
	var result = new Array( 3 );
	for( var i = 0; i < 3; i ++ )
	{
		document.write( "<tr>" );
		result[ i ] = new Array( 3 );
		for( var j = 0; j < 3; j ++ )
		{
			result[ i ][ j ] = 0;
			document.write( "<td class=\"tabled\" onClick=\"fill(this);\" id=\"" + i + j + "\"></td>" );
		}
		document.write( "</tr>" );
	}
	document.write( "</table>" );
	
	return result;
}
field = createField( );

function fill( el )
{
	var i = parseInt( el.id / 10 );
	var	j = parseInt( el.id % 10 );
	if( el.innerText == "" )
	{
		if( isX )
		{
			el.innerText = 'x';
			field[ i ][ j ] = 'x';
		}
		else
		{
			el.innerText = 'o';
			field[ i ][ j ] = 'o';
		}
		var status = getGameStatus( field, el.innerText );
		if( status  != "continue"  )
		{
			alert( status );
			createField ();
		}
		count ++;
		isX = !isX;
	}
}

function getGameStatus( array, letter )
{
	for( var i = 0; i < 3; i ++ )
	{
		if( array[ i ][ 0 ] == letter && array[ i ][ 1 ] == letter && array[ i ][ 2 ] == letter )
			return "win";
		if( array[ 0 ][ i ] == letter && array[ 1 ][ i ] == letter && array[ 2 ][ i ] == letter )
			return "win";
	}
	
	if( array[ 0 ][ 0 ] == letter && array[ 1 ][ 1 ] == letter && array[ 2 ][ 2 ] == letter )
		return "win";
	if( array[ 2 ][ 0 ] == letter && array[ 1 ][ 1 ] == letter && array[ 0 ][ 2 ] == letter )
		return "win";
		
	if( count == 9 )
		return "draw";
		
	return "continue";
}