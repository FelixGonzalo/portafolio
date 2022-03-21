emailjs.init("user_d0QaZJfrDumq8GV0iCYhL");

const form_contact = document.getElementById("form_contact");

form_contact.addEventListener('submit', (e) => {
  e.preventDefault();

  const from_name = e.target.user_name.value;
  const message = e.target.message.value;
  const reply_to = e.target.user_email.value;
  const messageRestriction = 10

  if (!from_name.trim() || !message.trim() || !reply_to.trim()) {
    alert("Es necesario que complete todos los datos")
    return;
  }
  if (message.length < messageRestriction) {
    alert(
      `Intente explicar mejor el motivo (${message.length} / ${messageRestriction} caracteres mínimo)`
    );
    return;
  }
  sendEmail(from_name, message, reply_to);
})

const sendEmail = (from_name, message, reply_to) => {
  emailjs
    .send(
      "service_k8kpfcn",
      "template_lnzdkeh",
      {
        from_name: from_name,
        message: message,
        reply_to: reply_to,
      },
      "user_d0QaZJfrDumq8GV0iCYhL"
    )
    .then(
      function (response) {
        alert("Mensaje enviado !!");
        window.form_contact.reset();
      },
      function (error) {
        alert("Error en el envió !!.");
      }
    );
};