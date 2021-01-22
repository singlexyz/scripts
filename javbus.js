// ==UserScript==
// @name         显示单体/字幕作品
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.javbus.com/star/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const name = document.querySelector('#waterfall > div.item.masonry-brick > div > div.photo-info > span').textContent.trim()
    const list = Array.from(document.querySelectorAll('#waterfall #waterfall .item .photo-info')).filter(el => el.textContent.indexOf(name) > -1)
    const wheat = 'wheat';
    const skyblue = 'Thistle'

    list.forEach(el => {
        el.style.backgroundColor = wheat
        el.parentNode.style.backgroundColor = wheat
        el.style.borderTopColor = wheat
    })

    list.filter(el => (el.querySelector('[title="包含字幕的磁力連結"]'))).forEach(el => {
        el.style.backgroundColor = skyblue
        el.parentNode.style.backgroundColor = skyblue
        el.style.borderTopColor = skyblue
    })

})();
