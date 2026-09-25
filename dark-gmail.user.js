// ==UserScript==
// @name         Gmail Dark Email Display
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Applies a custom dark theme to the Gmail email display area.
// @author       Assistant
// @match        https://mail.google.com/*
// @updateURL    https://raw.githubusercontent.com/Atcold/alf-browser-scripts/master/dark-gmail.user.js
// @downloadURL  https://raw.githubusercontent.com/Atcold/alf-browser-scripts/master/dark-gmail.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        /* Main Email Container */
        .nH.a98.iY.aHo {
            background-color: rgb(45, 45, 45) !important;
            color: rgb(232, 234, 237) !important;
        }

        /* Subject Line */
        .hP {
            color: rgb(232, 234, 237) !important;
        }

        /* Sender Name (Jack) */
        .gD {
            color: rgb(255, 255, 255) !important;
        }

        /* Sender Email and "to me" label */
        .go, .hb, .g2, .ajy {
            color: rgb(154, 160, 166) !important;
            fill: rgb(154, 160, 166) !important;
        }

        /* "Show details" arrow next to "to me" (black PNG) */
        .ajz {
            filter: invert(0.65) !important;
        }

        /* Date and Timestamp */
        .g3, .adn.ads {
            color: rgb(154, 160, 166) !important;
        }

        /* Star Icon Inversion */
        .T-KT, .f.T-KT-JX {
            filter: invert(1) brightness(2) !important;
        }

        /* Buttons (Reply, Forward, etc.) */
        .ams, .T-I, .J-Z-M-I {
            color: rgb(232, 234, 237) !important;
            border-color: #5f6368 !important;
            background-color: transparent !important;
        }

        /* Icon buttons (print, new window, emoji, reply, more) */
        .nH.a98.iY.aHo .pYTkkf-JX-I, .nH.a98.iY.aHo .jWOS7-JX-I {
            color: rgb(154, 160, 166) !important;
            border-color: #5f6368 !important;
        }
        .nH.a98.iY.aHo .pYTkkf-JX-I svg, .nH.a98.iY.aHo .jWOS7-JX-I svg {
            fill: currentColor !important;
        }
        .nH.a98.iY.aHo .pYTkkf-JX-I[disabled], .nH.a98.iY.aHo .jWOS7-JX-I[disabled] {
            color: rgba(232, 234, 237, 0.5) !important;
        }

        /* Reply and Forward button icons (dark PNGs) */
        .nH.a98.iY.aHo .ams::before {
            filter: invert(1) brightness(1.5) !important;
        }

        /* Label chips next to the subject (Inbox, etc.) */
        .nH.a98.iY.aHo .ahR {
            background-color: rgb(80, 80, 80) !important;
            border-radius: 4px;
        }
        .nH.a98.iY.aHo .hN, .nH.a98.iY.aHo .hO {
            color: rgb(232, 234, 237) !important;
        }

        /* Ensure email body text is light */
        .a3s.aiL {
            color: rgb(232, 234, 237) !important;
        }

        /* General cleanup for white backgrounds inside the panel */
        .nH.a98.iY.aHo div, .nH.a98.iY.aHo table {
            background-color: transparent !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();
