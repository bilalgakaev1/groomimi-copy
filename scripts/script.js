const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

/*
$(function() {
	$(".selectlink-control").click(function(){
		var $menu_popup = $(this).next();
		$menu_popup.slideToggle(200, function(){
			$('.selectlink ul').not($menu_popup).slideUp(200);
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
 
	$(document).on('click', function(e){
		if (!$(e.target).closest('.selectlink').length){
			$('body').removeClass('body_pointer');
			$('.selectlink ul').slideUp(200);
		}
	});
});
*/