// Exercise6
function validate() {
	let error = 0;

	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	const onlyLetters = /^[A-Za-zÀ-ÿ\s]+$/;
	const onlyNumbers = /^[0-9]+$/;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{4,8}$/;

	if (fName.value.trim().length < 3 || !onlyLetters.test(fName.value.trim())) {
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
	}

	if (fLastN.value.trim().length < 3 || !onlyLetters.test(fLastN.value.trim())) {
		fLastN.classList.add("is-invalid");
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
	}

	if (fEmail.value.trim().length < 3 || !emailPattern.test(fEmail.value.trim())) {
		fEmail.classList.add("is-invalid");
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
	}

	if (fAddress.value.trim().length < 3) {
		fAddress.classList.add("is-invalid");
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
	}

	if (!passwordPattern.test(fPassword.value.trim())) {
		fPassword.classList.add("is-invalid");
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
	}

	if (!onlyNumbers.test(fPhone.value.trim()) || fPhone.value.trim().length < 9) {
		fPhone.classList.add("is-invalid");
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
	}

	if (error > 0) {
		alert("Please review the fields marked in red.");
	} else {
		alert("Valid form. Thank you for your purchase.");
	}
}