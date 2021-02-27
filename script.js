var map = L.map('map').setView([61.787220,-147.783660], 7);

L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

$.getJSON("https://raw.githubusercontent.com/emwolfslu/GeoJson/main/rdf2019-3-snow-depth.geojson" 
,function(data){
  var snowIcon = L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/picons-weather/57/23_snow_blizzard-512.png',
    iconSize: [25,25]
  }); 
  L.geoJson(data  ,{
  pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: snowIcon});
    }, 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>Site: '+feature.properties.Site+'</h1><p>Snow Depth in mm: '+feature.properties.SnowDepth_mm+'</p>'+'</h1><p>Month: '+feature.properties.Month+'</p>'+'</h1><p>Month: '+feature.properties.Year+'</p>');
  }
  }  ).addTo(map);

});

$.getJSON("https://raw.githubusercontent.com/emwolfslu/GeoJson/main/rdf2019-3-station-locations.geojson" 
,function(data){
  var outpostIcon = L.icon({
    iconUrl: 'https://cdn2.iconfinder.com/data/icons/camping-outline-set/144/Outpost-512.png',
    iconSize: [25,25]
  }); 
  L.geoJson(data  ,{
  pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: outpostIcon});
    }, 
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<h1>Station Type: '+feature.properties.Station+'</h1><p>Coordinates: '+feature.properties.Type+'</p>');
  }
  }  ).addTo(map);

});
