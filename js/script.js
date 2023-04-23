let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
} else {
	body.classList.add('mouse');
}

function toggleContent(element_ID) {

	var block1 = document.getElementById('page1');
	var block2 = document.getElementById('page2');
	var block3 = document.getElementById('page3');
	var block4 = document.getElementById('page4');
	var block5 = document.getElementById('page5');
	var block6 = document.getElementById('page6');
	var block7 = document.getElementById('page7');
	var block8 = document.getElementById('page8');
	var block9 = document.getElementById('page9');
	var block10 = document.getElementById('page10');
	var block11 = document.getElementById('page11');
	var block12 = document.getElementById('page12');
	var block13 = document.getElementById('page13');
	var block14 = document.getElementById('page14');
	var block15 = document.getElementById('page15');
	var block16 = document.getElementById('page16');
	var block17 = document.getElementById('page17');
	var block18 = document.getElementById('page18');
	var block19 = document.getElementById('page19');
	var block20 = document.getElementById('page20');
	var block21 = document.getElementById('page21');
	var block22 = document.getElementById('page22');
	var block23 = document.getElementById('page23');
	var block24 = document.getElementById('page24');

	var display_block = document.getElementById(element_ID);

	block1.style.display = "none";
	block2.style.display = "none";
	block3.style.display = "none";
	block4.style.display = "none";
	block5.style.display = "none";
	block6.style.display = "none";
	block7.style.display = "none";
	block8.style.display = "none";
	block9.style.display = "none";
	block10.style.display = "none";
	block11.style.display = "none";
	block12.style.display = "none";
	block13.style.display = "none";
	block14.style.display = "none";
	block15.style.display = "none";
	block16.style.display = "none";
	block17.style.display = "none";
	block18.style.display = "none";
	block19.style.display = "none";
	block20.style.display = "none";
	block21.style.display = "none";
	block22.style.display = "none";
	block23.style.display = "none";
	block24.style.display = "none";

	display_block.style.display = "block";
}