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
 This is my 
<input type="text" id="dotext"></input>
<input type="button" id="button1" value="Add" onclick="add_element_to_array();"></input>
<p>Insert the number of activity done: </p>
<input type="number" id="someid"></input>
<input type="button" id="button3" value="Activity Done" onclick="erase_from_list();"></input>
<br/>
<br/>
<input type="button" id="button2" value="Display" onclick="display_array();"></input>
<div id="Result"></div>
</body>
<style>
body {padding-top:50px}
</style>
</html>
