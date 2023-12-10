document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector('[name="name"]').value;
      const email = document.querySelector('[name="email"]').value;
      const message = document.querySelector('[name="message"]').value;
      var body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> </br> Message: ' + message;


      // Replace these values with your own SMTP server details
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sike102938@gmail.com",
        Password: "A186EC6BBBCB804772E36FD0B61F7852859D",
        To: 'sike102938@gmail.com',
        From: "sike102938@gmail.com",
        Subject: "Contact message",
        Body: body
      }).then(
        function (message) {
          alert("Email sent successfully");
        },
        function (error) {
          console.error("Error sending email:", error);
          alert("Error sending email. Please try again later.");
        }
      );
    });
});
