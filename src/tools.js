export function eventWithoutDefaults(element, event, callback) {
    element.addEventListener(event, (e) => {
        e.preventDefault() 

        callback()
    })
}

export function changeThemeDark() {
    let body = document.querySelector('body');

    body.style.setProperty('--brightest-color', '#5865F2');
    body.style.setProperty('--card-bg', '#1E1F22');
    body.style.setProperty('--main-bg', '#313338');
    body.style.setProperty('--text-color', '#f1f1f1'); 
};

export function changeThemeLight() {
    let body = document.querySelector('body');

    body.style.setProperty('--brightest-color', '#4285f4');
    body.style.setProperty('--card-bg', '0 0 10px rgba(0, 0, 0, 0.1)');
    body.style.setProperty('--main-bg', '#fff');
    body.style.setProperty('--text-color', '#000'); 
}