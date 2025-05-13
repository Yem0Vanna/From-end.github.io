function processLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  fetch('login.php', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `username=${user}&password=${pass}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      alert("Login ជោគជ័យ!");
      closeLogin();
    } else {
      alert("ឈ្មោះអ្នកប្រើ ឬ ពាក្យសម្ងាត់ មិនត្រឹមត្រូវទេ!");
    }
  });
}
