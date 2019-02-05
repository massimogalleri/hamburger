{

    const _body = document.querySelector('body');
    const _window = document.documentElement;
    const _hero = document.getElementById('hero');
    const _hamburger = document.getElementById('hamburger');

    let _is_nav_open = false;

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
        if (window.pageYOffset < _hero.getBoundingClientRect().height - _hamburger.getBoundingClientRect().height - _hamburger.getBoundingClientRect().top) {
            _hamburger.classList.add('on-hero');
        } else {
            _hamburger.classList.remove('on-hero');
        }
    }

    _window_scroll();

    window.addEventListener('scroll', _window_scroll);
    
}
