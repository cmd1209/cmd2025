var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
};

TxtType.prototype.tick = function() {
    var i = this.loopNum;
    var fullTxt = this.toRotate[i];

    // Only typing, no deleting
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 100 - Math.random() * 50; // Speed up typing

    // If full text is reached, move to the next one after a pause
    if (this.txt === fullTxt) {
        delta = this.period;
        this.loopNum++;
        
        // Stop if we’ve reached the end of all texts
        if (this.loopNum >= this.toRotate.length) {
            return;
        }
        
        // Reset txt for the next text in array
        this.txt = '';
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

document.addEventListener('click', function(event) {
    if (event.target.closest('.burger') || event.target.closest('.menu-item')) {
        document.querySelector('.burger').classList.toggle('open');
        
        const overlay = document.querySelector('.overlay');
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }

        const nav = document.querySelector('.nav');
        nav.classList.toggle('navactive');
        nav.classList.toggle('navhidden');
    }

    if (event.target.closest('.back')) {
        window.location.href = 'https://www.chadmdanford.com';
    }
});
