document.getElementById('sign-in-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if the user has an existing account
    // You can replace this condition with your server-side logic
    var hasExistingAccount = false;
    
    if (hasExistingAccount) {
      document.getElementById('login-alert').style.display = 'block';
    } else {
      // Process the sign-in/application form data
      // You can send the form data to your server for further processing/storage
      
      // Reset the form
      document.getElementById('sign-in-form').reset();
      
      alert('Sign In / Application Successful!');
    }
  });
  
  document.getElementById('google-login').addEventListener('click', function() {
    // Handle login with Google
  });
  
  document.getElementById('samsung-login').addEventListener('click', function() {
    // Handle login with Samsung
  });
  
  document.getElementById('apple-login').addEventListener('click', function() {
    // Handle login with Apple
  });