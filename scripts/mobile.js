/* global AFRAME */
AFRAME.registerComponent('interractions', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
      this.setAttribute('visible', 'true')
      console.log("MOBILE")
    }else {
      this.setAttribute('visible', 'false')
      console.log("PC")
    }
  }
})
