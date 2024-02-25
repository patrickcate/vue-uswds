import { ref, readonly } from 'vue'
import { ID_PREFIX } from '@/utils/constants.js'

export const isMobileMenuOpen = /*#__PURE__*/ ref(false)

export function useMobileMenu(emit) {
  const menuId = ref(`${ID_PREFIX}global-mobile-header-menu`)
  const mobileMenuOpenClass = 'usa-js-mobile-nav--active'

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false

    if (emit) {
      emit('mobileMenuOpen', isMobileMenuOpen.value)
    }

    document.body.classList.remove(mobileMenuOpenClass)
    document
      .querySelectorAll('body > :not(.usa-nav)')
      .forEach(element => element.removeAttribute('aria-hidden', true))
  }

  const openMobileMenu = () => {
    isMobileMenuOpen.value = true

    if (emit) {
      emit('mobileMenuOpen', isMobileMenuOpen.value)
    }

    document.body.classList.add(mobileMenuOpenClass)
    document
      .querySelectorAll('body > :not(.usa-nav)')
      .forEach(element => element.setAttribute('aria-hidden', true))
  }

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    } else {
      openMobileMenu()
    }
  }

  return {
    isMobileMenuOpen: readonly(isMobileMenuOpen),
    mobileMenuId: readonly(menuId),
    closeMobileMenu: closeMobileMenu,
    openMobileMenu: openMobileMenu,
    toggleMobileMenu: toggleMobileMenu,
  }
}
