import { disableScroll } from '../functions/disable-scroll'
import { enableScroll } from '../functions/enable-scroll'
;(function () {
  const burger = document?.querySelector('[data-burger]')
  const menu = document?.querySelector('[data-menu]')
  const menuLinks = document?.querySelectorAll('[data-menu-link]')

  burger?.addEventListener('click', e => {
    menu?.classList.toggle('menu--active')

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true')
      burger?.setAttribute('aria-label', 'Close menu')
      disableScroll()
    } else {
      burger?.setAttribute('aria-expanded', 'false')
      burger?.setAttribute('aria-label', 'Open menu')
      enableScroll()
    }
  })

  menuLinks?.forEach(link => {
    link.addEventListener('click', e => {
      menu?.classList.remove('menu--active')
      burger?.setAttribute('aria-expanded', 'false')
      burger?.setAttribute('aria-label', 'Open menu')
      enableScroll()
    })
  })
})()
