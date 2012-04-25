//GLOBAL VARIABLES
var field = $("#field");
var plus = $("#plus");
var mainList = $("#mainList");
var newItem = $("#newItem");
var pic = $(".pic");
var tasks = $("#numTask").html();
var completed = $("#numCompleted").html();
var numTask = $("#numTask");
var numCompleted = $("#numCompleted");

//EVENT HANDLERS
$(document).ready(function(){
	field
		.focus()	//Automatically focuses on the input field
		.keyup(function(key){	//Submits the field value using the 'Enter' key
				   if(key.which === 13){
						addItem();
				   	}
				});
	plus
		.click(addItem)	//Adds new item to the list when pressing the 'Plus' button
		.hover(function(){	//Changing input border color when hovering over the 'Plus' button
			field.css("border-color","#ccc");
		}, function () {
			field.css("border-color","#eeeeee");
		});
	pic.live({	//Removes item when pressing the 'X' button
		click: removeItem
		});
	$(".checkbox>div").live({ //Toggles between the customized check-box states
		click: (toggleCheckBox)
	});
});

//FUNCTIONS
function addItem () {
	var item = field.val();
	if (item!="") {
		var code = newItem.html();
		code = code.replace("temp_item",item);
		mainList.append("<li>"+code+"</li>");
		field
			.val("")
			.focus();
		tasks++;
		numTask.html(tasks);
	} else {
		field.focus();
	}
};

function removeItem () {
	$(this).parent().parent().remove();
	tasks--;
	numTask.html(tasks);
	if ($(this).parent().siblings(".checkbox").children().hasClass("innerChecked")) { //FIX THIS!!!
		completed--;
		numCompleted.html(completed);
	}
};

function toggleCheckBox () {
	if ($(this).hasClass("innerUnChecked")){
		$(this)
			.removeClass("innerUnChecked")
	   		.addClass("innerChecked")
			.parent().siblings().css("text-decoration","line-through");
		completed++;
		numCompleted.html(completed);
		}
	else {
		$(this)
			.removeClass("innerChecked")
			.addClass("innerUnChecked")
			.parent().siblings().css("text-decoration","none");
		completed--;
		numCompleted.html(completed);
		}
};