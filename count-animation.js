/*Html counting start*/
function animateHtmlProgress() {
    var progress = 0;
    var target = 90;
    var bar = document.getElementById('html-progress');
    var text = document.getElementById('html-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
    if (progress >= target) {
        clearInterval(interval);
    } else {
        progress++;
        bar.style.width = progress + '%';
        text.textContent = progress + '%';
    }
    }, 15);
    }

    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
    rect.top < window.innerHeight && rect.bottom > 0
    );
    }

    document.addEventListener("scroll", function() {
    var bar = document.getElementById('html-progress');
    if (bar && isElementInViewport(bar)) {
    animateHtmlProgress();
    }
});
/*html counting end*/

/*css counting start*/
function animateCssProgress() {
    var progress = 0;
    var target = 85;
    var bar = document.getElementById('css-progress');
    var text = document.getElementById('css-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
    }

    document.addEventListener("scroll", function() {
    var bar = document.getElementById('css-progress');
    if (bar && isElementInViewport(bar)) {
        animateCssProgress();
    }
});
/*css counting end*/

/*javascript counting start*/
function animateJsProgress() {
    var progress = 0;
    var target = 75;
    var bar = document.getElementById('js-progress');
    var text = document.getElementById('js-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
    }

    document.addEventListener("scroll", function() {
    var bar = document.getElementById('js-progress');
    if (bar && isElementInViewport(bar)) {
        animateJsProgress();
    }
});                     
/*javascript counting end*/

/*php counting start*/
function animatePhpProgress() {
    var progress = 0;
    var target = 80;
    var bar = document.getElementById('php-progress');
    var text = document.getElementById('php-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

document.addEventListener("scroll", function() {
    var bar = document.getElementById('sql-progress');
    if (bar && isElementInViewport(bar)) {
        animatesqlProgress();
    }
});
/*php counting end*/

/*java counting start*/
function animateJavaProgress() {
    var progress = 0;
    var target = 70;
    var bar = document.getElementById('java-progress');
    var text = document.getElementById('java-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
}

document.addEventListener("scroll", function() {
    var bar = document.getElementById('java-progress');
    if (bar && typeof isElementInViewport === "function" && isElementInViewport(bar)) {
        animateJavaProgress();
    }
});
/*java counting end*/

/*python counting start*/
function animatepyProgress() {
    var progress = 0;
    var target = 75;
    var bar = document.getElementById('python-progress');
    var text = document.getElementById('python-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
}

document.addEventListener("scroll", function() {
    var bar = document.getElementById('python-progress');
    if (bar && typeof isElementInViewport === "function" && isElementInViewport(bar)) {
        animatepyProgress();
    }
});
/*python counting end*/          

/*Sql counting start*/
function animatesqlProgress() {
    var progress = 0;
    var target = 95;
    var bar = document.getElementById('sql-progress');
    var text = document.getElementById('sql-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

document.addEventListener("scroll", function() {
    var bar = document.getElementById('php-progress');
    if (bar && isElementInViewport(bar)) {
        animatePhpProgress();
    }
});
/*sql counting end*/

/*pgsql counting start*/
function animatepsqlProgress() {
    var progress = 0;
    var target = 90;
    var bar = document.getElementById('psql-progress');
    var text = document.getElementById('psql-progress-text');
    if (bar.getAttribute('data-animated')) return;
    bar.setAttribute('data-animated', 'true');
    var interval = setInterval(function() {
        if (progress >= target) {
            clearInterval(interval);
        } else {
            progress++;
            bar.style.width = progress + '%';
            text.textContent = progress + '%';
        }
    }, 15);
}

document.addEventListener("scroll", function() {
    var bar = document.getElementById('psql-progress');
    if (bar && typeof isElementInViewport === "function" && isElementInViewport(bar)) {
        animatepsqlProgress();
    }
});
/*pgsql counting end*/