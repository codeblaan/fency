// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let webview = document.querySelector('webview');

webview.src = 'https://mail.google.com/mail/mu/mp/40/'
webview.autosize = true 
webview.minwidth = '300'
webview.minheight = '600'

webview.addEventListener('new-window', openLinkInDefaultBrowser);

function openLinkInDefaultBrowser(e) {
  try {
    if (['http:', 'https:', 'mailto:'].indexOf(require('url').parse(e.url).protocol) < 0 ) {
      throw new Error('Invalid protocol')
    }
    require('electron').shell.openExternal(e.url);
  } catch (e) {
    console.warn('Error opening external link', e);
  }
}
