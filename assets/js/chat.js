document.addEventListener("DOMContentLoaded", function() {
    var messageContainer = document.getElementById("message-container");
    var messageInput = document.getElementById("message-input");
    var sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function() {
      var message = messageInput.value.trim();
      if (message !== "") {
        appendMessage("You", message, "sent");
        messageInput.value = "";
      }
    });
  
    function appendMessage(sender, message, messageType) {
      var messageElement = document.createElement("div");
      messageElement.classList.add("message", messageType);
      messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
      messageContainer.appendChild(messageElement);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  });
  