var essences = 0;

function fillEssences( )
{
	var result = new Array( );
	var countOfFilled = 0;
	var indexOfImage = 1;
	for( var i = 0; i < 4; i ++ )
	{
		result[ i ] = new Array( 4 );		
		for( var j = 0; j < 4; j ++ )
		{
			result[ i ][ j ] = 0;	
		}
	}
	
	while( countOfFilled < 16 )	
	{
		var assinges = 0;
		
		while( assinges < 2 )
		{
			var row = Math.floor( ( Math.random( ) * 4 ) ) ;
			var col = Math.floor( ( Math.random( ) * 4 ) ) ;
		//	alert( result[ 0 ] );
		//	alert( result[ row ][ col ] );
			if( result[ row ][ col ] == 0 )
			{
				result[ row ][ col ] = "images/" + indexOfImage + ".jpg";
				assinges ++;
			}
		}
		indexOfImage ++;
		countOfFilled += 2;
	}		
	
	return result;
}

essences = fillEssences( );
var count = 0;
var selectedEl = 0;
function showRealEssence( el )
{
	//alert( el.src );
	var row = parseInt( el.id / 10 );
	var col = parseInt( el.id % 10 );
	if( el.src.search( "question.jpg" ) != -1 )
	{
		el.src = essences[ row ][ col ];
		count ++;
	}
	else
	{                                 
		el.src = "images/question.jpg";
	}
	
	if( count >= 2 )
	{
		if( selectedEl.src == el.src )
		{
			selectedEl.src = "0.jpg";
			el.src = "0.jpg";
		}
		count = 0;
	}
	
	return el;
}
function createField( )
{
	document.write( "<table border=\"1\">" );
	
	for( var i = 0; i < 4; i ++ )
	{		
		document.write( "<tr>");
		for( var j = 0; j < 4; j ++ )
		{			
			document.write( "<td><img src=\"images/question.jpg\" onClick=\"selectedEl = showRealEssence( this );\" id=\""+ i + j +"\"/></td>");
		}
		document.write( "</tr>");
	}
		
	document.write( "</table>" );
}