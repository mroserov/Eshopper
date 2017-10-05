

var root = 'https://my-json-server.typicode.com/mroserov/Eshopper';

$.ajax({
  url: root + '/category',
  method: 'GET',jsonp: "callback",dataType: "jsonp",
}).then(function(data) {
  console.log(data);
  for (var i =  0; i < data.length; i++) {
  	var category = data[i];
  	var accordian = document.getElementById("accordian");
	var cateHTML = '<div class="panel panel-default">'+
								'<div class="panel-heading">'+
									'<h4 class="panel-title"><a href="#" onclick="showProductsByCategory('+category.id+')">'+category.name+'</a></h4></div></div>';

  	accordian.insertAdjacentHTML("beforeEnd",cateHTML);
  }

});

function showProductsByCategory(pCategoriId) {
	alert("categoria"+pCategoriId);
}



