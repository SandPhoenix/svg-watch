var hours = 0;
var minutes = 0;
var seconds = 0;
var face = 0;

var s = Snap.select('#svg');
Snap.load("/svg-watch/assets/watch-red.svg", function (f) {
	face = f.select('#face');
	s.append(face);
	hours = f.select('#hours');
	s.append(hours);
	minutes = f.select('#minutes');
	s.append(minutes);
	seconds = f.select('#seconds');
	s.append(seconds);
});

document.getElementById('svg').setAttribute('viewBox','0 0 500 500');
document.getElementById('svg').setAttribute('preserveAspectRatio','xMaxYMax');

window.setInterval(function(){

	var w = face.getBBox()["width"] / 2;
	d = new Date();
	var ms  = (d.getMilliseconds() * 6 / 999);
	var h = (d.getHours() % 12) * 360 / 12;
	var m = (d.getMinutes() * 360 / 60);
	var s = (d.getSeconds() * 360 / 60);

	hours.transform( 'r'+ (h+(m * 30 / 360)) +',' + w + ',' + w );
	minutes.transform( 'r'+ (m+(s * 6 / 360)) +',' + w + ',' + w );
	seconds.transform( 'r'+ (s+ms) +',' + w + ',' + w );

}, 1);