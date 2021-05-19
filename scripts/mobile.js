/* global AFRAME */
AFRAME.registerComponent('mobile', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
      document.querySelectorAll('.phone').setAttribute('visible', true)
    } else {
      console.log()
      document.querySelectorAll('.phone').setAttribute('visible', true)
    // document.querySelector('.phone').remove()
    }

    var teleport_pads = document.querySelectorAll('#teleport')
    for (var i = 0; i < teleport_pads.length; ++i) {
      teleport_pads[i].addEventListener('click', this.teleport)
    }
  },

  teleport: function (evt) {
    document.querySelector('#camera').object3D.position.set(this.object3D.position.x, 1.6, this.object3D.position.z)
  }
})
