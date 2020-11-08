const Observer = require('./observer.js');

const observer = new Observer();

const callback = (msg) => {
    console.log(`callback:${msg}!`);
}

observer.trigger('click', '1:点击');
observer.trigger('send', '2:发送');
observer.listen('click', callback);
observer.listen('send', callback);

