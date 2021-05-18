/* global AFRAME */
AFRAME.registerComponent('interractions', {
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
        description: "Ce projet a 8 qui s'est deroule sur 1 an et dont j'avais pour role chef de projet a consiste a developper un site pour animaux en language ELM disponible sur le lien suivant : https://petopia-app.netlify.app/fr (site non fini)"
      },
      M1_Parking: {
        title: "Analyse d'image",
        imgEl: document.querySelector('#projectResume'),
        description: "Ce projet a ete realise en trinome en C sous OpenCV. Le but est, a partir d'une image de parking simple, determiner automatiquement combien de places sont prises et combien de places ne le sont pas. Nous avons donc pu detecter les places puis si une voiture ou une moto se situait dessus ou non"
      },
      M1_Robot: {
        title: 'Robot manipulateur',
        imgEl: document.querySelector('#projectResume'),
        description: "Ce projet a ete realise en binome en C# sous Unity3D. Ce projet consistait a appliquer les techniques de navigation, selection et manipulation a un robot type d'usine muni d'un bras manipulateur avec une base mouvantedz"
      },
      M1_RayTracing: {
        title: 'Ray Tracing',
        imgEl: document.querySelector('#projectResume'),
        description: 'Ce projet a ete realise en binome en C++. Nous avons cree un moteur de rendu 3D non-temps reel base sur la technique du Ray Tracing. Les scenes sont composees de formes geometriques de bases (spheres, cubes, pyramides...)'
      },
      M1_Fusee: {
        title: 'Construction et lancement de fusee ',
        imgEl: document.querySelector('#projectResume'),
        description: 'Ce projet a ete realise en binome en C# sous Unity3D. Il consistait a creer, dans un environnement 3D, un serious-game permettant au joueur de creer sa fusee avec des composants pre-crees puis de la faire, si bien construite, decoller'
      },
      M1_Chat: {
        title: 'Application de chat',
        imgEl: document.querySelector('#projectResume'),
        description: "Projet solo realise en C#. Creation d'une simulation web (avec requetes, threads, base de donnee) dans laquelle j'ai integre une application de chat permettant a des utilisateurs de communiquer en temps reel via des messages prives et via des forums publiques"
      },
      M1_Covid: {
        title: 'Detection de COVID',
        imgEl: document.querySelector('#projectResume'),
        description: "Projet en duo realise en python via Spyder. Le but dans ce projet etait, a partir d'une large banque d'images, de les analyser pour en faire resortir des caracteristiques. Nous avons donc choisi des images medicales de poumons en tomographie et realise un traitement par dessus afin de pouvoir differencier tres facilement et rapidement des poumons sains de poumons possedant le COVID"
      },
      M1_MD_Learning: {
        title: 'Machine et Deep Learning',
        imgEl: document.querySelector('#projectResume'),
        description: 'Le projet realise a 4 consistait en 2 parties. Premierement, trier des nombres manuscrits en images de 25x25 automatiquement en ML, puis deuxiemement trier des images de chiens et de chats en DL'
      },
      L3_NewsAdventure: {
        title: 'Jeux mobile sous Unity',
        imgEl: document.querySelector('#projectResume'),
        description: 'Projet realise a 4 en C# sous Unity3D. Le but de projet etait de proposer des mini-jeux lies a une actualite sur mobile. Nous avons donc utilise Unity pour realiser une application sur pc et la transfere facilement vers mobile. Nous avond cree 2 jeux en 2D'
      },
      L3_Psy: {
        title: 'Gestion de clients',
        imgEl: document.querySelector('#projectResume'),
        description: "Projet realise en solo en Java. La problematique etait de creer un programme de gestion d'emploi du temps pour qu'une psychologue puisse l'utiliser et acceder facilement a son emploi du temps ainsi qu'a chacun de ses clients et ainsi prendre entre autre des notes, des remarques, etc..."
      },
      L3_Graphs: {
        title: 'Analyse de graphs',
        imgEl: document.querySelector('#projectResume'),
        description: "Projet realise en solo en Java. le but etait, a partir d'un fichier .txt comportant des noeuds et des vecteurs d'un graph, realiser plusieurs operation mathematiques. Comme reperer la branche la plus courte, le graph est-il optimise ? si non le faire, trouver les noeuds innutiles et repartir ses entrees, etc..."
      },
      L3_Garage: {
        title: "Gestion d'emploi du temps",
        imgEl: document.querySelector('#projectResume'),
        description: "Projet realise en solo en Java. La problematique etait de concevoir un outil de gestion d'emploi du temps et de prises de rendez-vous complexes pour un garagiste (avec l'horaire, les pieces, le technicien, la voiture, les outils, le devis, etc...) "
      },
      L2_BwarioKart: {
        title: 'Jeux de gestion',
        imgEl: document.querySelector('#projectResume'),
        description: "Projet realise en trinome et code en C. C'est un jeu de gestion ou le joueur gere des karting. Il dispose de points de ventes ainsi que de points de reparation afin de réaprer les karting utilises. Le joueur dispose de nombreuses ameliorations de karting afin d'etre rentable. Le but etant de gagner de l'argent. "
      },
      L2_ObjectiveEquilibrium: {
        title: 'Jeux de societe adapte aux non-voyants',
        imgEl: document.querySelector('#projectResume'),
        description: 'Projet a 5 sur un semestre en entier. Nous avons realise un jeu de societe a bases de cartes et de pions ayant la particularite de pouvoir etre joue par des personnes non-voyantes'
      },
      Other_This: {
        title: 'Ce projet',
        imgEl: document.querySelector('#projectResume'),
        description: "J'ai realise cet espace immersif disponible sur internet et via casque VR lors de mon stage de M1 au Cnam (Conservatoir National des Arts et Metiers). J'ai utilise le framework 'Aframe' pour realise ce musee de mes projets"
      },
      Other_Dimension: {
        title: 'Pokemon Dimension',
        imgEl: document.querySelector('#projectResume'),
        description: "Fan-game (jeux realise par et pour les fans d'une license en particulier) pokemon maintenant abandonne par son createur 'Zenos'. Pendant 3 ans, j'ai travaille principalement en tant que mappeur sur ce jeux. L'equipe etait composee uniquement de fan ne se connaissant pas dans la vie relle ayant entre 16 et 25 ans. Touts les echanges que ce soit d'idees, de conception ou pour disctuer se faisaient via le logiciel Discord. Ce fut une innitiative se basant purement sur le volontariat et la bonne volontee des developpeurs"
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
