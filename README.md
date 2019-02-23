# ceciaili
<html>
 <!--here's the root of a html document-->
<head>
 <!--here I'm calling all the elements that you can find in head-->
<title>My To-do List</title>
 <!--here I created the title of my website-->
<style>
body {padding-top:50px}
<!--I'm using css to tell how many pixels I want for my body-->
</style>
</head>
<body>
 <!--Here I start the body of my website-->
<script type="text/javascript" src="mytodolist.js"></script>
 <!--since I'm using my js in another file, I need to give the direction to my doc for the script, I could've just to put my codes inside the script as well-->
<h1>My To-do List</h1>
 <!--This is my main title for my program-->
<input type="text" id="dotext"></input>
 <!--Here you write the activity you have to do-->
<input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
<!--This button add the activity to the array in js that we created for the program-->
<p>Insert the number of activity done: </p>
<input type="number" id="someid"></input>
<!--Since the activities are ordered by number, when the person has done the activity they choose the number that represents the activity-->
<input type="button" id="button3" value="Activity Done" onclick="erase_from_list();"></input>
<!--Here the activity is erased and the array has a new order of numbers-->
<p>Choose activity that needs to be edit: </p>
<input type="number" id="editnum"></input>
<!--Here the person choose the number that they want to add-->
<p>Edit: </p>
<input type="text" id="editact"></input>
<input type="button" id="button4" value="Edit" onclick="edit_from_list();"></input>
<br/>
<br/>
<input type="button" id="button2" value="Display" onclick="display_array();"></input>
<!--Here you can check your list-->
<div id="Result"></div>
<!--Here is where you list is positioned-->
</body>
<style>
body {padding-top:50px}
</style>
</html>






var x = 0;
var array = Array();
<!--Here I created my array

function add_element_to_array()
<!--this is function is used in the add button, in here I add the item the person wrote in the text-->
{
 array[x] = document.getElementById("dotext").value;
 alert(array[x] + " was added to your To-do List");
 x++;
 document.getElementById("dotext").value = "";
}

function erase_from_list()
<!--this function is used in the activity done button, where the program reads the array and get number from the number box the person chose and erase the item accordingly-->
{
	
	//array = document.getElementById("Result");
	console.log(array)
	var index = document.getElementById("someid").value;
	if (index > -1) 
	{
		array.splice(index-1, 1);
	}
	//document.getElementById("Result").innerHTML
}

function display_array()
<!--Here is where the program creates a readable list and it keeps adding information to it with the use of the for, right at the end the result is connected to the button of display so the user can see the list printed-->
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += y+1 + ". " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
