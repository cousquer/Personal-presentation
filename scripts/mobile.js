/* global AFRAME */
AFRAME.registerComponent('mobile', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
      console.log('MOBILE')
      document.querySelector('.phone').setAttribute('visible', true)
    } else {
      console.log('PC')
      document.querySelector('.phone').setAttribute('visible', false)
    }
  }
})
