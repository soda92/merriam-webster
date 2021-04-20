// ==UserScript==
// @name         MerriamWebster
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fast search words
// @author       ---
// @match        https://www.merriam-webster.com/**
// @icon         https://www.merriam-webster.com/favicon.svg
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var a = document.evaluate("/html/body/div[1]/div/header/div/div[3]",
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var b = document.evaluate(
        '//*[@id="s-term"]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var c = document.evaluate(
        '/html/body/div[1]/div/header/div/div[4]',
        document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    function activate() {
        if (!c.classList.contains("active")) {
            a.click();
        }
    }
    function deactivate() {
        if (c.classList.contains("active")) {
            a.click();
        }
    }
    window.onkeyup = function (e) {
        if (e.key == "Enter") {
            activate();
            b.focus();
        }
        if (e.key == "Backspace") {
            activate();
            b.focus();
            b.value = "";
        }
        if (e.key == "Escape") {
            b.blur();
            deactivate();
        }
        if (e.altKey && e.key == 'r') {
            activate();
            b.select();
        }
    }
})();