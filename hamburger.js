// vars

var _is_nav_open = false,
    _body = document.querySelector('body'),
    _window = document.documentElement,
    _hero = document.getElementById('hero'),
    _hamburger = document.getElementById('hamburger');


// hamburger function

function _hamburger_click() {

    if (!_is_nav_open) {
        _hamburger.classList.add('active');
        _body.classList.add('no-scroll');
        _is_nav_open = true;
    } else {
        _hamburger.classList.remove('active');
        _body.classList.remove('no-scroll');
        _is_nav_open = false;
    }

}

_hamburger.addEventListener('click', function () {
    _hamburger_click();
});


// scroll function

function _window_scroll() {
    if (_window.scrollTop < _hero.clientHeight - _hamburger.clientHeight - _hamburger.offsetTop) {
        _hamburger.classList.add('on-hero');
    } else {
        _hamburger.classList.remove('on-hero');
    }
}

_window_scroll();

window.addEventListener('scroll', _window_scroll);