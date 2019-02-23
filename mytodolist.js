var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("dotext").value;
 alert(array[x] + " was added to your To-do List");
 x++;
 document.getElementById("dotext").value = "";
}

function erase_from_list()
{
	
	//array = document.getElementById("Result");
	console.log(array)
	var index = document.getElementById("someid").value;
	if (index > -1) 
	{
		array.splice(index-1, 1);
	}
	console.log(array)
	//document.getElementById("Result").innerHTML
}

function edit_from_list()
{
	
	console.log(array)
	var index = document.getElementById("editnum").value;
	array[index-1] = document.getElementById("editact").value;
	console.log(array)
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += y+1 + ". " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}