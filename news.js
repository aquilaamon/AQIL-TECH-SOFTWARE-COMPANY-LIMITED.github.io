// Display chat room when clicking on the comment button
'use strict'
var commentButtons = document.getElementsByClassName('comment-button_news');
var chatRoom = document.getElementById('chat-room_news');

for (var i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener('click', function() {
    document.getElementById('terms-conditions_news').style.display = 'block';
    chatRoom.style.display = 'block';
  });
}

// Listen to screen reader for terms and conditions reading
document.getElementById('terms-conditions_news').addEventListener('change', function() {
  var agreeTerms_news = document.getElementById('agree-terms_news').checked;
  var denyTerms_news = document.getElementById('deny-terms_news').checked;
  
  if (agreeTerms_news) {
    document.getElementById('message-form_news').style.display = 'block';
  } else if (denyTerms_news) {
    var commentMessage = document.getElementById('comment-message_news');
    commentMessage.innerHTML = 'How can we improve our system rights?';
    commentMessage.style.display = 'block';
  }
});

// Submit message form
document.getElementById('message').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Check if message length is within limit
  var messageTextarea = document.getElementById('message-textarea_news');
  
  if (messageTextarea.value.trim().split(' ').length > 51) {
    alert('Message must not exceed 51 words.');
    return;
  }
  
  // Process the message form data
  // You can send the form data to your server for further processing/storage
  
  // Reset the form
  document.getElementById('message').reset();
  
  alert('Message Sent Successfully! Welcome back again');
  alert("Nex time remember to log in")
});

// Submit rating form
document.getElementById('rate-button').addEventListener('click', function() {
  var ratingSelect = document.getElementById('rating-select');
  
  if (ratingSelect.value === "") {
    alert('Please rate us.');
    return;
  }
  
  // Process the rating form data
  // You can send the form data to your server for further processing/storage
  
  // Reset the form
  ratingSelect.selectedIndex = 0;
  
  alert('Thank you for rating!');
});

// Display comment form if there is a comment
document.getElementById('comment-button_news').addEventListener('click', function() {
  var commentTextarea = document.getElementById('comment-textarea_news');
  
  if (commentTextarea.value.trim() !== "") {
    document.getElementById('comment-form_news').style.display = 'block';
  } else {
    var commentMessage = document.getElementById('comment-message_news');
    commentMessage.innerHTML = 'We are so sorry that we did not favor you. Try next time dear applicant.';
    commentMessage.style.display = 'block';
  }
});

// Cloud storage usage limit
var maxStorageSize = 10 * 1024 * 1024 * 1024; // 10 GB in bytes

// Update file name based on related topic, username, and the current date/time
document.getElementById('file-upload_news').addEventListener('change', function() {
  var fileUpload = document.getElementById('file-upload_news');
  
  var relatedTopic = "Related Topic";
  var username = "Username";
  
  var date = new Date();
  var dateFormat = (
    date.getFullYear() + '-' +
    (date.getMonth() + 1) + '-' +
    date.getDate() + '_' +
    date.getHours() + '-' +
    date.getMinutes() + '-' +
    date.getSeconds()
  );
  
  var filename = relatedTopic + '_' + username + '_' + dateFormat + '.' + getFileExtension(fileUpload.value);
  
  // Display the updated file name or perform other actions
  console.log(filename);
  
  // Check file size before uploading
  if (fileUpload.files[0].size > maxStorageSize) {
    alert('File size exceeds storage limit.');
    alert("Please modify the file to upload to at most 10mbs");
  }
});

// Function to get the file extension from the file path
function getFileExtension(filePath) {
  return filePath.slice((filePath.lastIndexOf('.') - 1 >>> 0) + 2);
}

