const LinkedIn = document.querySelector('#LinkedIn');

const changeWallpaper = (e) => {
	switch (e) {
		case 1:
			main_page.style.background = 'url(../images/wallpapers/1.jpg)';
			break;
		case 2:
			main_page.style.background = 'url(../images/wallpapers/2.jpg)';
			break;
		case 3:
			main_page.style.background = 'url(../images/wallpapers/3.png)';
			break;
		case 4:
			main_page.style.background = 'url(../images/wallpapers/4.jpg)';
			break;
		case 5:
			main_page.style.background = 'url(../images/wallpapers/5.jpg)';
			break;
		case 6:
			main_page.style.background = 'url(../images/wallpapers/6.jpg)';
			break;
		default:
			return;
	}
};
