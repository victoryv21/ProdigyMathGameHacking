// Thank you for using my cheat menu :) ~ In The works
var style = document.createElement('style');
style.innerHTML = '.hide { display: none; }';
document.head.appendChild(style);

var div = document.createElement('div');
var id = document.createAttribute("id");
id.value = 'menu';
div.setAttributeNode(id);

id = document.createAttribute("style");
id.value = 'display: none; position: absolute; left: 12.7%; z-index: 10; background-color: blue;';
div.setAttributeNode(id);
id = document.createAttribute("class");
id.value = 'hide';
div.setAttributeNode(id);
document.body.insertBefore(div,document.getElementById('game-wrapper'));

var div1 = document.createElement('div');
var id = document.createAttribute("id");
id.value = 'submenu';
div1.setAttributeNode(id);

id = document.createAttribute("style");
id.value = 'display: none; position: absolute; left: 12.7%; z-index: 10; background-color: blue;';
div1.setAttributeNode(id);
document.body.insertBefore(div1,document.getElementById('game-wrapper'));

id = document.createElement("p");
id.innerHTML = 'Avoid Monsters';
var idea = document.createAttribute('id');
idea.value = 'tele';
id.setAttributeNode(idea);
div.appendChild(document.createElement('br'));
