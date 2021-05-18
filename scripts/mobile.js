/* global AFRAME */
AFRAME.registerComponent('mobile', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
      this.setAttribute('visible', 'true')
      console.log('MOBILE')
    }else {
      this.setAttribute('visible', 'false')
      console.log('PC')
    }
  }
})
