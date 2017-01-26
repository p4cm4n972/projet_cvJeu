var moveRight = function () {
    x -= 64;
    y = 0;
    document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(1)';

    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
    document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
    document.getElementsByClassName('masque').container.style.left = u + 'px';
    document.getElementsByClassName('masque').container.style.top = v + 'px';
    u += 2;
    if (x < -576) {
        x = 0;
        document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
        document.getElementsByClassName('masque').container.style.left = u + 'px';
        x -= 64;
        u += 2;
    }
    if (document.getElementsByClassName('masque').container.style.left >=  300 + "px") {
    skills01();
}
};

var moveLeft = function () {
y = 0;
                document.getElementsByClassName('sprite').contenu.style.transform = 'scaleX(-1)';
                document.getElementsByClassName('sprite').contenu.trans = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                document.getElementsByClassName('sprite').contenu.style.top = y + 'px';
                document.getElementsByClassName('masque').container.style.left = u + 'px';
                document.getElementsByClassName('masque').container.style.top = v + 'px';
                x -= 64;
                u -= 2;
                if (x < -576) {
                    x = -64;
                    document.getElementsByClassName('sprite').contenu.style.left = x + 'px';
                    document.getElementsByClassName('masque').container.style.left = u + 'px';
                    x -= 64;
                    u -= 2;
                }

};
