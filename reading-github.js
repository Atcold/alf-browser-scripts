// ==UserScript==
// @name         GitHub E-Ink Reading Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides distracting GitHub headers for better reading on E-Ink displays.
// @author       Assistant
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    const selectors = ['.react-blob-sticky-header', 'header.GlobalNav', '.BlobViewHeader-module__Box__yhm9u', '#repos-sticky-header', '.AppHeader'];
    const btn = document.createElement('button');
    btn.innerText = '📖';
    Object.assign(btn.style, {
        position: 'fixed', bottom: '5px', right: '5px', zIndex: '10000',
        width: '30px', height: '30px', backgroundColor: '#fff', color: '#000',
        border: '1px solid #ccc', borderRadius: '50%', fontSize: '16px',
        cursor: 'pointer', opacity: '0.3', display: 'flex', alignItems: 'center', justifyContent: 'center'
    });

    let isHidden = true;
    const update = () => {
        selectors.forEach(s => {
            const el = document.querySelector(s);
            if (el) isHidden ? el.style.setProperty('display', 'none', 'important') : el.style.removeProperty('display');
        });
        btn.innerText = isHidden ? '📖' : '👁️';
        btn.style.opacity = '0.3'; //isHidden ? '0.3' : '0.8';
    };

    btn.onclick = () => { isHidden = !isHidden; update(); };
    document.body.appendChild(btn);
    update();
})();