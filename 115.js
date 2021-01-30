// ==UserScript==
// @name         复制自动上传任务
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://115.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('paste', function (e) {
        const urls = e.clipboardData.getData('text/plain')
        const iframe = document.querySelector('iframe[name="wangpan"').contentDocument;
        iframe.querySelector('[data-dropdown-content="upload_btn_add_dir"] a').click()
        document.querySelector('#js_offline_new_add').value = urls
        document.querySelector('body > div.dialog-box.dialog-mini.offline-box.window-current > div:nth-child(3) > div.dialog-bottom > div.con > a').click()
    })
})();
