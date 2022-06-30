const inputs = document.querySelectorAll('.input');

function focusFunc(){
	let parent = this.parentNode.parentNode;
	parent.classList.add('focus');
}

function blurFunc(){
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove('focus');
	}
}

inputs.forEach(input => {
	input.addEventListener('focus', focusFunc);
	input.addEventListener('blur', blurFunc);
});

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

function alertFunc(){
	alert("Belum ada halaman berita, stay tune!");
}

function confirmFunc(){
	confirm("Pastikan data sudah benar, anda yakin?");
}

function confirmPass() {
    var password = document.getElementById("pass1").value,
    	confirmPassword = document.getElementById("pass2").value;
    input = document.getElementById("input").value;
    if (input == "") {
    	alert("Isi data terlebih dahulu.")
    	return false;
    }

    if (password != confirmPassword) {
        alert("Password Tidak Sama!");
        return false;
    }
    alert("Registrasi Berhasil!");
    location.replace("login.html");
}

function confirmLogin() {
    var email = document.getElementById("email").value,
     	pass = document.getElementById("pass").value;
     	

    if (email == "" && pass == "") {
        alert("Harap isi email dan password!");
        return false;
    }
    alert("Selamat Datang!");
    location.replace("index.html");
}
