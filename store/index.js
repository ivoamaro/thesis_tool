export const state = () => ({
  storyboard: [{
    title: 'Storyboard',
    subtitle: 'Deals with how simple transition are made like a pop-up',
    button: [{
      name: 'Hover',
      path: 'hover'
    }, {
      name: 'Submit Form',
      path: 'submitform'
    }]
  }],
  wireframe: [{
    title: 'Wireframe',
    subtitle: 'Deals with the page itself, how it is sketched',
    button: [{
      name: 'Screen Size',
      path: 'screensize'
    }, {
      name: 'Structure',
      path: 'structure'
    }, {
      name: 'Elements',
      path: 'elements'
    }]
  }],
  screensize: [{
    title: 'Screen Size',
    subtitle: 'isto faz isto isto',
    button: [{
      name: 'Desktop',
      path: 'Desktop'
    }, {
      name: 'Tablet',
      path: 'Tablet'
    }, {
      name: 'Mobile',
      path: 'Mobile'
    }]
  }],
  structure: [{
    title: 'Structure',
    subtitle: 'isto faz isto isto',
    button: [{
      name: 'Columns',
      path: 'columns'
    }, {
      name: 'Row',
      path: 'row'
    }, {
      name: 'Section',
      path: 'section'
    }, {
      name: 'Container',
      path: 'container'
    }, {
      name: 'Grid',
      path: 'grid'
    }]
  }],
  elements: [{
    title: 'Elements',
    subtitle: 'isto faz isto isto',
    button: [{
      name: 'Simple',
      path: 'simple'
    }, {
      name: 'Complex',
      path: 'complex'
    }]
  }],
  simple: [{
    title: 'Simple Elements',
    subtitle: 'isto faz isto isto',
    button: [{
      name: 'Link',
      path: 'link'
    }, {
      name: 'Text',
      path: 'text'
    }, {
      name: 'Image',
      path: 'image'
    }, {
      name: 'Video',
      path: 'video'
    }, {
      name: 'Input',
      path: 'input'
    }, {
      name: 'List',
      path: 'list'
    }, {
      name: 'Table',
      path: 'table'
    }, {
      name: 'Button',
      path: 'button'
    }, {
      name: 'Chart',
      path: 'chart'
    }, {
      name: 'Map',
      path: 'map'
    }, {
      name: 'Calendar',
      path: 'calendar'
    }]

  }],
  complex: [{
    title: 'Complex Elements',
    subtitle: 'isto faz isto isto',
    button: [{
      name: 'Navbar',
      path: 'navbar'
    }, {
      name: 'Footer',
      path: 'footer'
    }]
  }]


});



export const getters = {
  getStoryboardButtons: (state) => {
    return state.storyboard[0].button;
  },
  getStoryboardTitle: (state) => {
    return state.storyboard[0].title;
  },
  getStoryboardSubTitle: (state) => {
    return state.storyboard[0].subtitle;
  },
  getWireframeButtons: (state) => {
    return state.wireframe[0].button;
  },
  getWireframeTitle: (state) => {
    return state.wireframe[0].title;
  },
  getWireframeSubTitle: (state) => {
    return state.wireframe[0].subtitle;
  },
  getScreenSizeButtons: (state) => {
    return state.screensize[0].button;
  },
  getScreenSizeTitle: (state) => {
    return state.screensize[0].title;
  },
  getScreenSizeSubTitle: (state) => {
    return state.screensize[0].subtitle;
  },
  getStructureButtons: (state) => {
    return state.structure[0].button;
  },
  getStructureTitle: (state) => {
    return state.structure[0].title;
  },
  getStructureSubTitle: (state) => {
    return state.structure[0].subtitle;
  },
  getElementsButtons: (state) => {
    return state.elements[0].button;
  },
  getElementsTitle: (state) => {
    return state.elements[0].title;
  },
  getElementsSubTitle: (state) => {
    return state.elements[0].subtitle;
  },
  getSimpleButtons: (state) => {
    return state.simple[0].button;
  },
  getSimpleTitle: (state) => {
    return state.simple[0].title;
  },
  getSimpleSubTitle: (state) => {
    return state.simple[0].subtitle;
  },
  getComplexButtons: (state) => {
    return state.complex[0].button;
  },
  getComplexTitle: (state) => {
    return state.complex[0].title;
  },
  getComplexSubTitle: (state) => {
    return state.complex[0].subtitle;
  }
}
