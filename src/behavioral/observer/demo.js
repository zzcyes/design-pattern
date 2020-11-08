const Observer = require('./observer.js');

const observer = new Observer();

const say = (key, msg) => {
    console.log(`${(key + '--------').slice(0, 5)}${msg}`);
};

const sayYes = (msg) => {
    say('yes', msg)
}

const sayNo = (msg) => {
    say('no', msg)
};

observer.listen('click', sayYes);
observer.listen('click', sayNo);
observer.listen('send', sayNo);
observer.listen('send', sayYes);

observer.trigger('click', '1:点击');
observer.trigger('send', '2:发送');

observer.remove('click', sayYes);
observer.remove('send', sayNo);

observer.trigger('click', '3:点击');
observer.trigger('send', '4:发送');

// yes--1:点击
// no---1:点击
// no---2:发送
// yes--2:发送
// no---3:点击
// yes--4:发送
