/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    val = $(this).val();
    $(".articles h1").text(val);// Your code goes here!
});

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!

var articleItems;

articleItems = $(".article-item");
unorderedList = articleItems.children("ul").remove();

var navList;
navList = $(".nav-list a");
navList.attr("href", "#1");

// neue DOM elemente

//als letztes Kind einfügen = .append()
//als erstes Kind einfügen = .prepend()
//davor einfügen (als Geschwister) = .insertBefore()
//danach einfügen (als Geschwister) = .insertAfter()

/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
var mount;
$("p").each(function() {
    mount = ' ' + $(this).text().length;
    $(this).append(mount);
});
