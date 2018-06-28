const sock = io();

sock.on('msg', onMessage)

function onMessage(text) {
    const list = document.getElementById('chat');
    const el = document.createElement('li');

    el.textContent = text;

    list.appendChild(el);
}

const chatForm = document.getElementById('chat-form');
chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = chatForm.querySelector('#chat-input');
    sock.emit('msg', input.value);
    chatForm.reset();
});