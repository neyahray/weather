import { changeThemeDark, changeThemeLight, eventWithoutDefaults } from "./tools";    

export function changeTabs () {
    let project = document.querySelector('.project')
    let weather = document.querySelector('.weather')
    let info = document.querySelector('.info')
    let settings = document.querySelector('.settings')
    let report = document.querySelector('.report')
    let isDark = false
    

   eventWithoutDefaults(info, 'click', () => {
    weather.style.display = 'none'
    project.style.display = 'block'
   })

   eventWithoutDefaults(report, 'click', () => {
    project.style.display = 'none'
    weather.style.display = 'block'
   })

   eventWithoutDefaults(settings, 'click', () => {
    if(isDark) {
        changeThemeLight()
        isDark = false
        settings.innerText = 'Темная тема'
    } else {
        changeThemeDark()
        isDark = true
        settings.innerText = 'Светлая тема'
    }
   })
}


