// chat.js

// Select necessary DOM elements
const chatInput = document.getElementById("chatInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const chatMessages = document.getElementById("chatMessages");

// Function to add message to the chat
function addMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("assistant-message");
    }

    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle sending message
function sendMessage() {
    const message = chatInput.value.trim();

    if (message !== "") {
        // Display user message
        addMessage(message, "user");

        // Clear input field
        chatInput.value = "";

        // Simulate assistant response after a short delay
        setTimeout(() => {
            const assistantResponse = "This is a simulated response. Ask me more!";
            addMessage(assistantResponse, "assistant");
        }, 1000);
    }
}

// Event listener for the Send button
sendMessageBtn.addEventListener("click", sendMessage);

// Optional: Allow the user to press Enter to send a message
chatInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
