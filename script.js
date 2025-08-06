function sendToFlask() {
  const input = document.getElementById("userInput").value;

  fetch("http://localhost:5000/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question: input })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").textContent = data.reply;
  });
}
