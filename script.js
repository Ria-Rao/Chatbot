
const userInput = document.querySelector(".user-input");
const botBody = document.querySelector(".bot-body");
const sendButton = document.querySelector("#send-button");

const data = {
    message: null,
};

// Create message element
const createInput = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add(classes); // Add only the necessary class
    div.innerHTML = content;
    return div;
};

// Handle user input and create bot response
const handleInput = (e) => {
    e.preventDefault();

    data.message = userInput.value.trim(); // Store user input


    // Create user message element
    const inputContent = `<div class="user-message">${data.message}</div>`;
    const outgoingMessage = createInput(inputContent, "user-message");
    botBody.appendChild(outgoingMessage);
    botBody.scrollTop = botBody.scrollHeight; // Auto-scroll to latest message

    userInput.value = ""; // Clear input field after sending
};

// Event handler for pressing "Enter" in input field
userInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value.trim();
    if (e.key === "Enter" && inputValue) {
        handleInput(e);
    }
});

// Event handler for clicking the send button
sendButton.addEventListener("click", (e) => {
    handleInput(e);
});
