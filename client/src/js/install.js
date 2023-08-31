const btnInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// done?
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    btnInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `btnInstall` element
// done?
btnInstall.addEventListener('click', async () => {
    const btnEvent = window.deferredPrompt;

    if (!btnEvent) {
     return;
    }

    btnEvent.prompt();
    
    window.deferredPrompt = null;
    
    btnInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
// done?
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
