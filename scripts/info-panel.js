/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button')
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground')

    this.movieImageEl
    this.movieTitleEl = document.querySelector('#projectTitle')
    this.movieDescriptionEl = document.querySelector('#projectDescription')

    this.projectInfo = {
      M1_Pa8: {
        title: 'Projet a 8',
        imgEl: document.querySelector('#projectResume'),
        description: "Ce projet a 8 qui s'est deroule sur 1 an et dont j'avais pour rôle chef de projet a consister a developper un site pour animaux en language ELM disponible sur le lien suivant : https://petopia-app.netlify.app/fr (site non fini)"
      },
      M1_Parking: {
        title: "Analyse d'image",
        imgEl: document.querySelector('#projectResume'),
        description: "Ce projet a ete realise en trinôme en C sous OpenCV. Le but est, a partir d'une image de parking simple, determiner automatiquement combien de places sont prises et combien de places ne le sont pas. Nous avons donc pu detecter les places puis si une voiture ou une moto se situait dessus ou non"
      },
      M1_Robot: {
        title: 'Robot manipulateur',
        imgEl: document.querySelector('#projectResume'),
        description: "Ce projet a ete realise en binôme en C# sous Unity3D. Ce projet consistait a appliquer les techniques de navigation, selection et manipulation a un robot type d'usine muni d'un bra manipulateur avec une base mouvantedz"
      },
      M1_RayTracing: {
        title: 'Ray Tracing',
        imgEl: document.querySelector('#projectResume'),
        description: 'Ce projet a ete realise en binôme en C++. Nous avons cree un moteur de rendu 3D non-temps reel base sur la technique du Ray Tracing'
      },
      M1_Fusee: {
        title: 'Fusee Unity',
        imgEl: document.querySelector('#projectResume'),
        description: 'Ce projet a ete realise en binôme en C# sous Unity3D. Il consistait a creer, dans un environnement 3D, un serious-game permettant au joueur de creer sa fusee avec des composants pre-crees puis de la faire, si bien construite, decoller'
      }
    }

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this)
    this.onBackgroundClick = this.onBackgroundClick.bind(this)
    this.backgroundEl = document.querySelector('#infoPanel')
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick)
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick)
    this.el.object3D.renderOrder = 9999999
    this.el.object3D.depthTest = false
    fadeBackgroundEl.object3D.renderOrder = 9
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false
  },

  onMenuButtonClick: function (evt) {
    var projectInfo = this.projectInfo[evt.currentTarget.id]
    this.backgroundEl.object3D.scale.set(1, 1, 1)

    this.el.object3D.scale.set(1, 1, 1)
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true
    this.fadeBackgroundEl.object3D.visible = true

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = projectInfo.imgEl
    this.movieImageEl.object3D.visible = true

    this.movieTitleEl.setAttribute('text', 'value', projectInfo.title)
    this.movieDescriptionEl.setAttribute('text', 'value', projectInfo.description)
    document.querySelector('#camera').setAttribute('wasd-controls-enabled', false)
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001)
    this.el.object3D.scale.set(0.001, 0.001, 0.001)
    this.el.object3D.visible = false
    this.fadeBackgroundEl.object3D.visible = false
    document.querySelector('#camera').setAttribute('wasd-controls-enabled', true)
  }
})
