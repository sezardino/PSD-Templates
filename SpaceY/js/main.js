var instance = new vidbg('.video__block', {
	mp4: './video/world.mp4',
	webm: './video/world.webm',
	poster: './video/world.jpg',
	overlay: false,
});

var rellax = new Rellax('.rocket');
if (document.body.clientWidth < 576) {
	rellax.destroy();
}
