/* global AFRAME */
AFRAME.registerComponent('mobile', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
        document.querySelector('#tp_circles_main').setAttribute('visible', true)
        document.querySelector('#tp_circles_second').setAttribute('visible', true)
      console.log('MOBILE')
    }else {
        document.querySelector('#tp_circles_main').setAttribute('visible', false)
        document.querySelector('#tp_circles_second').setAttribute('visible', false)
      console.log('PC')
    }
  }
})
