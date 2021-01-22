// ==UserScript==
// @name         btsow get managet
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://btsow.com/search/*
// @match        https://btsow.cam/search/*
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    const first = document.querySelector('.data-list > .row.hidden-xs')
    const links = Array.from(document.querySelectorAll('.data-list > .row > a'))
    async function gm (url) {
        try {
           const res = await (await fetch(url)).text()
           let temp = document.createElement('div')
           temp.innerHTML = res
           const magnet = temp.querySelector('#magnetLink').value
           temp = null
           return magnet
        } catch {
          return ''
        }
    }

    // set first
    first.style.position = 'relative'
    const span = document.createElement('span')
    span.textContent = '获取所有'
    span.style.cssText = 'position: absolute; left: -55px; top: 10px; cursor: pointer;'
    first.insertAdjacentElement('afterbegin',span)
    span.addEventListener('click', async function () {
        const hrefs = links.map(el => el.href)
        let results = []
        for (let href of hrefs) {
            results.push(await gm(href))
        }
        navigator.clipboard.writeText(results.join('\n'))
        span.style.color = '#ff4136'
    })

    // set each
    links.forEach(link => {
        link.parentNode.style.position = 'relative'
        const href = link.href
        const span = document.createElement('span')
        span.textContent = '获取磁链'
        span.style.cssText = 'position: absolute; left: -55px; top: 10px; cursor: pointer;'
        link.insertAdjacentElement('beforebegin',span)
        span.addEventListener('click',async function () {
            const magnet = await gm(href)
            navigator.clipboard.writeText(magnet)
            span.style.color = '#ff4136'
        })
    })
})();
