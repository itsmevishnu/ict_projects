var width = 600;
var height = 400;
var projection = d3.geoMercator()
   .center([78, 22])
   .scale(680)
   .translate([width / 2, height / 2]);

var svg = d3.select("#chart").append("svg")
.attr("width", width)
.attr("height", height);