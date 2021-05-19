/* global AFRAME */
AFRAME.registerComponent('mobile', {
  init: function () {
    if (AFRAME.utils.device.isMobile()) {
      console.log('MOBILE')
      document.querySelector('.phone').setAttribute('visible', true)
    } else {
      console.log('PC')
    // document.querySelector('.phone').remove()
    }

    var teleport_pads = document.querySelectorAll('#teleport')
    this.onBackgroundClick = this.teleport.bind(this)
    for (var i = 0; i < teleport_pads.length; ++i) {
      teleport_pads[i].addEventListener('click', this.teleport)
    }

  },

  teleport: function (evt) {
    //document.querySelector('#camera').setAttribute('position', )
    console.log(this)
  }
})
