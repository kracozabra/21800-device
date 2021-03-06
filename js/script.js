var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-close");
var inputFocus = feedbackPopup.querySelector("input");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackName = feedbackPopup.querySelector("[name=feedback-name]");
var feedbackEmail = feedbackPopup.querySelector("[name=feedback-email]");
var feedbackMessage = feedbackPopup.querySelector("[name=feedback-message]");

var isStorageSupport = true;
var storageName = "";

try {
	storageName = localStorage.getItem("feedbackName");
} catch (err) {
	isStorageSupport = false;
}

document.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			feedbackPopup.classList.remove("modal-show");
			feedbackPopup.classList.remove("modal-error");
		}
	}
});

feedbackLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");
	if (storageName) {
		feedbackName.value = storageName;
		feedbackEmail.focus();
	} else {
		feedbackName.focus();
	}
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");
	feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
	if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal-error");
		feedbackName.classList.remove("field-error");
		feedbackEmail.classList.remove("field-error");
		feedbackMessage.classList.remove("field-error");
	  if (!feedbackName.value) {
	  	feedbackName.classList.add("field-error");
	  }
	  if (!feedbackEmail.value) {
	  	feedbackEmail.classList.add("field-error");
	  }
	  if (!feedbackMessage.value) {
	  	feedbackMessage.classList.add("field-error");
	  }
	} else {
		if (isStorageSupport)  {
			localStorage.setItem("storageName", "feedbackName.value");
		}
	}
	
});

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});