var hist = [];
var lvalue, rvalue, operation;
var operations = [];

operations["+"] =
			function ( a, b )
			{
				return a + b;
			}

operations["-"] =
			function ( a, b )
			{
			    return a - b;
			}

operations["*"] =
			function ( a, b )
			{
			    return a * b;
			}

operations["/"] =
			function ( a, b ) 
			{
			    if ( b != 0 )
				{
			        return a / b;
			    }

			    return "Dividing by zero";
			}			

function getValue( elID )
{
	var el = document.getElementById( elID );
	var result = el.value;
		
	return result;
}

function setValue( elID, value )
{
	var el = document.getElementById( elID );
	el.value = value;
}
           
function getLValue( operat )
{
	lvalue = parseInt( getValue( "number" ) );
	
	var el = document.getElementById( "number" );	
	
	el.value = '\0';
	el.focus( );
	
	operation = operat;
}	

function result()
{
	rvalue = parseInt( getValue( "number" ) );	
	
	var result = operations[ operation ]( lvalue, rvalue );
	
	var opr = lvalue + operation + rvalue + "=" + result;
	
	hist.push( opr );
	
	addValueToTextarea( "history", opr );
	addValueToSelect( "operations", opr );
	
	
    setValue( "number", result );
}

function addValueToTextarea( textareaID, value )
{
	var el = document.getElementById( textareaID );
	
	el.value += value + '\n';
}

function addValueToSelect( selectID, value )
{
	var el = document.getElementById( selectID );		
}