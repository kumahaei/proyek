// === Pastikan semua elemen DOM sudah siap ===
document.addEventListener('DOMContentLoaded', () => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  // --- Animasi panel login / signup ---
  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  // --- Elemen untuk login ---
  const loginBtn = document.getElementById('loginBtn');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  // --- Elemen untuk register (opsional) ---
  const registerBtn = document.getElementById('registerBtn');
  const regUsername = document.getElementById('regUsername');
  const regPassword = document.getElementById('regPassword');

  // ===== LOGIN FUNCTIONALITY =====
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();

      // Cek data akun dari localStorage
      const savedUser = localStorage.getItem('username');
      const savedPass = localStorage.getItem('password');

      if (username === savedUser && password === savedPass) {
        // Simpan status login
        localStorage.setItem('loggedIn', 'true');
        alert('Login berhasil!');
        // Redirect ke halaman utama
        window.location.href = "https://imcoolfer-tech.github.io/main-pages/";
      } else {
        alert('Username atau password salah!');
      }
    });
  }

  // ===== REGISTER FUNCTIONALITY =====
  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      const newUser = regUsername.value.trim();
      const newPass = regPassword.value.trim();

      if (newUser === '' || newPass === '') {
        alert('Silakan isi username dan password terlebih dahulu!');
        return;
      }

      // Simpan akun ke localStorage
      localStorage.setItem('username', newUser);
      localStorage.setItem('password', newPass);
      alert('Akun berhasil dibuat! Silakan login.');
      container.classList.remove('right-panel-active');
    });
  }
});


