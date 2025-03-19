document.addEventListener("DOMContentLoaded", function () {
  const messageForm = document.getElementById("messageForm");
  const responseMessage = document.getElementById("responseMessage");

  // Event handling for form submission
  messageForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // DOM manipulation to show loading state
    const button = this.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Sending...";
    button.disabled = true;

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate server communication (in real app, use fetch or axios)
    setTimeout(() => {
      // Simulate successful server response
      showResponse(true, "Message sent successfully! We will respond shortly.");

      // Reset form
      messageForm.reset();

      // Restore button state
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });

  // Function to show response message
  function showResponse(success, message) {
    responseMessage.textContent = message;
    responseMessage.className = "response-message";

    if (success) {
      responseMessage.classList.add("success");
    } else {
      responseMessage.classList.add("error");
    }

    // Remove animation class if it exists
    responseMessage.classList.remove("fade-out");

    // Add fade-in animation
    setTimeout(() => {
      responseMessage.classList.add("fade-in");
    }, 10);

    // Remove message after 5 seconds
    setTimeout(() => {
      responseMessage.classList.remove("fade-in");
      responseMessage.classList.add("fade-out");
      setTimeout(() => {
        responseMessage.textContent = "";
        responseMessage.className = "response-message";
      }, 500);
    }, 5000);
  }
});
