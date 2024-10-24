function showMessage(choice) {
    const messageElement = document.getElementById("responseMessage");
  
    if (choice === 'yes') {
      messageElement.textContent = "Yay! I'm so happy you said YES! 💖";
    }
  }
  