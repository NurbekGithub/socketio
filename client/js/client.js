const sock = io();

sock.on('msg', onMessage)

function onMessage(text) {
    const list = document.getElementById('chat');
    const el = document.createElement('li');

    el.textContent = text;

    list.appendChild(el);
}
