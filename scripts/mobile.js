/* global AFRAME */
AFRAME.registerComponent('interractions', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
      this.setAttribute('visible', 'true')
    }else {
      this.setAttribute('visible', 'false')
    }
  }
})
