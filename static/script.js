const chatbotButton = document.getElementById('chatbot-button');
const chatbotFrame = document.getElementById('chatbot-frame');

chatbotButton.addEventListener('click', () => {
    chatbotFrame.classList.toggle('open');
});
