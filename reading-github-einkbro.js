js
// ==UserScript==
// @name         GitHub E-Ink Reader (EinkBro version)
// @match        https://github.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    const css = `
        .react-blob-sticky-header, 
        header.GlobalNav, 
        .BlobViewHeader-module__Box__yhm9u, 
        #repos-sticky-header, 
        .AppHeader, 
        .gh-header-sticky,
        [data-testid="file-header"] { 
            display: none !important; 
        }
    `;

    const style = document.createElement('style');
    style.id = 'eink-reading-styles';
    style.innerHTML = css;

    // This ensures the styles are applied even if the page hasn't finished loading
    document.documentElement.appendChild(style);

    // Toggle button logic
    const toggle = () => {
        const styleTag = document.getElementById('eink-reading-styles');
        if (styleTag) {
            styleTag.remove();
        } else {
            document.documentElement.appendChild(style);
        }
    };

    // Note: You might need to add the button creation logic here 
    // but wrapping it in window.onload for EinkBro compatibility.
    window.addEventListener('load', () => {
        const btn = document.createElement('button');
        btn.innerText = '📖';
        Object.assign(btn.style, {
            position: 'fixed', bottom: '10px', right: '10px', zIndex: '10000',
            width: '35px', height: '35px', backgroundColor: '#fff', 
            border: '2px solid #000', borderRadius: '50%', opacity: '0.5'
        });
        btn.onclick = toggle;
        document.body.appendChild(btn);
    });
})();