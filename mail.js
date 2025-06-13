(function () {
  emailjs.init("-Wze4xD2NDF7lZdHF");
})();

function sendMail(event) {
  event.preventDefault();

  const now = new Date();
  const formattedTime = now.toLocaleString(); 
  const params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
    time: formattedTime 
  };

  const serviceID = "service_n098vbt";
  const templateID = "template_whvxzh4";

  emailjs.send(serviceID, templateID, params)
    .then(() => {
      alert("Your message has been sent successfully!");
      document.getElementById("contact_form").reset();
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again.");
    });
}
