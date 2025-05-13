/*--------------------------------- Открывание меню -----------------------------------------*/
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


/*--------------------------------- Работа Форм -----------------------------------------*/


  document.querySelectorAll('.lead-form').forEach(form => {
	form.addEventListener('submit', function (e) {
	  e.preventDefault();
  
	  const name = form.querySelector('[name="name"]').value.trim();
	  const phone = form.querySelector('[name="phone"]').value.trim();
	  const question = form.querySelector('[name="textarea"]').value.trim();
	  let inputs = form.querySelectorAll('input');
	  let allFilled = true;

		// проверка все ли поля заполнены
	  inputs.forEach(function(input) {
		if (!input.value.trim()) {
			allFilled = false;
			input.style.border = '2px solid red';
		} else {
			input.style.border = '';
		}
	  })

	  const messageBlock = form.nextElementSibling;
	  const messageBlockq = messageBlock.nextElementSibling;

	  // если заполнены - отправить форму, иначе - сообщение с просьбой заполнить все поля
	  if (!allFilled) {
		if (messageBlockq) {
		  messageBlockq.style.display = 'block';
		  setTimeout(() => {
				messageBlockq.style.display = 'none';
		  }, 4000); // задержка сообщения на 4 секунды
		}
  		} else {
	  	let message = `Здравствуйте! Меня зовут ${name}, мой телефон: ${phone}. Хочу записаться на стрижку.`;
		if (question) {
		  message += `\nМой вопрос: ${question}`;
		}

		// WhatsApp (если передумаете отправлять через ватсап, то закоментируйте код с это строчки до 77-й)
		const whatsappNumber = '7XXXXXXXXXX'; // замени на нужный номер
		const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappLink, '_blank');

		// Email (через Formspree)
		fetch("https://formspree.io/f/mvgavpny", { //замените ссылку полученную после регистрации на formspree.io (туда будут отправляться заявки по почте)
	  		method: "POST",
	  		headers: { 'Content-Type': 'application/json' },
	  		body: JSON.stringify({ name, phone, question, message })
		})

		.then(response => {
	  		if (response.ok) {
				form.reset();
				if (messageBlock) {
			  		messageBlock.style.display = 'block';
		  			setTimeout(() => {
						messageBlock.style.display = 'none';
		  			}, 4000); // задержка сообщения на 4 секунды
				}
  			}
		})
		.catch(error => {
  			console.error("Ошибка:", error);
		});
  		}
	});
  });