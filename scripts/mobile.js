/* global AFRAME */
AFRAME.registerComponent('mobile', {
  init: function () {
    var tpsMain = document.querySelectorAll('#tp_circles_main')
    var tpsSecond = document.querySelectorAll('#tp_circles_second')

    if (AFRAME.utils.device.isMobile()) {
      tpsMain.setAttribute('visible', 'true')
      tpsSecond.setAttribute('visible', 'true')
      console.log('MOBILE')
    }else {
      tpsMain.setAttribute('visible', 'false')
      tpsSecond.setAttribute('visible', 'true')
      console.log('PC')
    }
  }
})
