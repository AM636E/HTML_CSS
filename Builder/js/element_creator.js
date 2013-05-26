var choosenEl = 'div';
var elHolder = document.getElementById( "holder" );

var text = document.getElementById( "text" );
var attr_name = document.getElementById( "attr_name" );
var attr_value = document.getElementById( "attr_value" );

function addElement( )
{
	var el = document.createElement( choosenEl );
	console.log( "fsd" );	
	
	var txt = document.createTextNode( text.value );
	
	el.appendChild( txt );
	
	el.setAttribute( attr_name.value, attr_value.value );

	elHolder.insertBefore( el, el.holder.nextSibling );
}
