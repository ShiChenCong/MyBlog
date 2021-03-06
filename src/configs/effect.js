export default function canvas(t) {
 function a() {
	 var e, a;
	 e = document.createElement("div"),
		 t.appendChild(e),
		 u = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e4),
		 u.position.z = 300,
		 p = new THREE.Scene,
		 d = new THREE.Clock,
		 m = new THREE.CanvasRenderer({
			 alpha: !0
		 }),
		 m.setPixelRatio(window.devicePixelRatio),
		 m.setSize(window.innerWidth, window.innerHeight),
		 e.appendChild(m.domElement);
	 var i = 2 * Math.PI
		 , o = new THREE.SpriteCanvasMaterial({
		 color: 16777215,
		 opacity: .5,
		 program: function (e) {
			 e.beginPath(),
				 e.arc(0, 0, .5, 0, i, !0),
				 e.fill()
		 }
	 })
		 , r = 0
		 , v = 300
		 , g = function (e) {
		 setTimeout(function () {
				 e.scale.x = e.scale.y = 10
			 }
			 , 1e3)
	 }
		 , f = function (e) {
		 r + e >= v && (e = v - r,
		 0 > e && (e = 0));
		 for (var t = 0; e > t; t++)
			 a = new THREE.Sprite(o),
				 a.position.x = 2 * Math.random() - 1,
				 a.position.y = 2 * Math.random() - 1,
				 a.position.z = 2 * Math.random() - 1,
				 a.position.normalize(),
				 a.position.multiplyScalar(10 * Math.random() + 450),
				 a.scale.x = a.scale.y = 2,
				 p.add(a),
				 b.vertices.push(a.position),
				 g(a);
		 r += e
	 }
		 , b = new THREE.Geometry;
	 f(10);
	 var w = new THREE.Line(b, new THREE.LineBasicMaterial({
		 color: 16777215,
		 opacity: .2
	 }));
	 p.add(w),
		 document.addEventListener("mousemove", l, !1),
		 document.addEventListener("touchstart", n, !1),
		 document.addEventListener("touchmove", c, !1),
		 h = setInterval(function () {
				 f(1)
			 }
			 , 100),
		 window.addEventListener("resize", s, !1)
 }

 function s() {
	 f = window.innerWidth / 2,
		 b = window.innerHeight / 2,
		 u.aspect = window.innerWidth / window.innerHeight,
		 u.updateProjectionMatrix(),
		 m.setSize(window.innerWidth, window.innerHeight)
 }

 function l(e) {
	 v = e.clientX - f,
		 g = e.clientY - b
 }

 function n(e) {
	 e.touches.length > 1 && (v = e.touches[0].pageX - f,
		 g = e.touches[0].pageY - b,
		 particle.opacity = .5 * Math.random(i) - 1)
 }

 function c(e) {
	 1 == e.touches.length && (v = e.touches[0].pageX - f,
		 g = e.touches[0].pageY - b)
 }

 function o() {
	 w = requestAnimationFrame(o),
		 r()
 }

 function r() {
	 u.position.x += .05 * (v - u.position.x),
		 u.position.y += .05 * (-g + 200 - u.position.y),
		 u.lookAt(p.position),
		 m.sortElements = !0,
		 m.render(p, u)
 }

 var d, h, u, p, m, v = 0, g = 0, f = window.innerWidth / 2, b = window.innerHeight / 2;
 a(),
	 o()
 {
	 var w = null
		 , y = new Date;
	 y.getTime()
 }
}
