draw2d.shape.node.Block = draw2d.SetFigure.extend({
  NAME: 'draw2d.shape.node.Block',
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:100,height:100},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0.18079999999997654, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Input");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100.36159999999995, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Output");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 100;
    this.originalHeight= 100;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L100,0 L100,100 L0,100");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path('M0 0L100 0L100 100L0 100Z');
    shape.attr({"stroke":"#000000","stroke-width":1,"fill":"#00BD7E","dasharray":null,"opacity":1});
    shape.data("name","Rectangle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});

draw2d.shape.node.Operation = draw2d.SetFigure.extend({
  NAME: "draw2d.shape.node.Operation",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:30,height:30},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-0.9598791161173874, 50));
        port.setBackgroundColor("#37B1DE");
    port.setName("Input");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(101.08854383684313, 50));
        port.setBackgroundColor("#37B1DE");
    port.setName("Output");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 30;
    this.originalHeight= 30;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L30,0 L30,30 L0,30");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Circle
    shape = this.canvas.paper.ellipse();
    shape.attr({"rx":15,"ry":15,"cx":15,"cy":15,"stroke":1,"stroke-width":1,"fill":"#806459","dasharray":null,"opacity":1});
    shape.data("name","Circle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});

draw2d.shape.node.Baton = draw2d.SetFigure.extend({

  NAME: "draw2d.shape.node.Baton",

  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:1, bgColor:null, width:80.32799999999986,height:30},attr), setter, getter);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 80.32799999999986;
    this.originalHeight= 30;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L80.32799999999986,0 L80.32799999999986,30 L0,30");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Circle
    shape = this.canvas.paper.path('M65.39359999999999 29.994260743672612L67.93272266500378 29.77211629518314L70.45830214988462 29.095389311788722L72.82799999999963 27.99038105676658L74.96981414529796 26.490666646784632L76.81866664678455 24.641814145298156L78.31838105676638 22.500000000000057L79.42338931178858 20.13030214988501L80.10011629518306 17.604722665003948L80.32799999999986 14.999999999999943L80.10011629518306 12.395277334996052L79.42338931178858 9.869697850114989L78.31838105676638 7.499999999999886L76.81866664678455 5.358185854701929L74.96981414529796 3.509333353215311L72.82799999999963 2.009618943233505L70.45830214988462 0.9046106882113065L67.93272266500378 0.22788370481686115L65.39359999999999 0.00573925632721739L65.39359999999999 0L65.32799999999975 0L15.393600000000106 0L15.393600000000106 0.034435537963702245L14.999999999999545 0L12.395277334996194 0.22788370481686115L9.869697850115244 0.9046106882113065L7.499999999999886 2.009618943233505L5.358185854701787 3.509333353215311L3.5093333532150837 5.358185854701929L2.0096189432335905 7.499999999999886L0.9046106882108234 9.869697850114989L0.22788370481669062 12.395277334996052L0 14.999999999999943L0.22788370481669062 17.604722665003948L0.9046106882108234 20.13030214988501L2.0096189432335905 22.500000000000057L3.5093333532150837 24.641814145298156L5.358185854701787 26.490666646784632L7.499999999999886 27.99038105676658L9.869697850115244 29.095389311788722L12.395277334996194 29.77211629518314L14.999999999999545 30L15.393600000000106 29.965564462036355L15.393600000000106 30L65.32799999999975 30L65.39359999999999 30L65.39359999999999 29.994260743672612Z');
    shape.attr({"stroke":1,"stroke-width":1,"fill":"#53C0BC","dasharray":null,"opacity":1});
    shape.data("name","Circle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});

draw2d.shape.node.Start = draw2d.shape.node.Baton.extend({
  NAME: "draw2d.shape.node.Start",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:80.32799999999986,height:30},attr), setter, getter);
    let port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(99.33273578328901, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },
});

draw2d.shape.node.End = draw2d.SetFigure.extend({
  NAME: "draw2d.shape.node.End",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:107.75383040000031,height:34.45259520000013},attr), setter, getter);
    let port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(-0.11876552278922103, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Port");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 107.75383040000031;
    this.originalHeight= 34.45259520000013;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L107.75383040000031,0 L107.75383040000031,34.45259520000013 L0,34.45259520000013");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path('M73.15360000000021 26.080012800000077L73.15360000000021 34.45259520000013L107.75383040000031 16.96103679999962L107.74400000000026 16.86241280000047L73.15360000000021 0L73.15360000000021 9.080012800000077L0 9.080012800000077L0 26.080012800000077L73.15360000000021 26.080012800000077Z');
    shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#53C0BC","dasharray":null,"opacity":1});
    shape.data("name","Rectangle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});

draw2d.shape.node.Condition = draw2d.SetFigure.extend({
  NAME: "draw2d.shape.node.Condition",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:79,height:78},attr), setter, getter);
    let port;
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(0.08144758602499298, 50.00000000000001));
        port.setBackgroundColor("#37B1DE");
    port.setName("Input");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50, 0.1409330149745832));
        port.setBackgroundColor("#37B1DE");
    port.setName("Yes");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(50, 99.71672127015414));
        port.setBackgroundColor("#37B1DE");
    port.setName("No");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 79;
    this.originalHeight= 78;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L79,0 L79,78 L0,78");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path('M39.419009394494196 0L79 39.31101064365873L39.455096216612446 78L0 38.60755166643122Z');
    shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#53C0BC","dasharray":null,"opacity":1});
    shape.data("name","Rectangle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});

draw2d.shape.node.Sync = draw2d.SetFigure.extend({
  NAME: "draw2d.shape.node.Sync",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:30.33621300510754,height:43.41696540180487},attr), setter, getter);
    let port;
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(33.88729476080834, 50));
    port.setBackgroundColor("#37B1DE");
    port.setConnectionDirection(3);
    port.setName("Input");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(70.14758868130524, 50));
    port.setBackgroundColor("#37B1DE");
    port.setConnectionDirection(1);
    port.setName("Output");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 30.33621300510754;
    this.originalHeight= 43.41696540180487;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L30.33621300510754,0 L30.33621300510754,43.41696540180487 L0,43.41696540180487");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path('M0 0L30.33621300510754 5.684341886080802e-14L0.5566277615620265 43.416965401804816L30.05789912432681 43.41696540180487Z');
    shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#991D1D","dasharray":null,"opacity":1});
    shape.data("name","Rectangle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});

draw2d.decoration.connection.connectionPikArrowDecorator = draw2d.decoration.connection.Decorator.extend({
  NAME : "draw2d.decoration.connection.connectionPikArrowDecorator",
  paint: function(paper)
  {
    let st = paper.set();
    let width = 20;
    let height = 10;
    st.push(paper.path(["M0 0" ,
      "L", width, " ", -height/2,
      "L", width, " ",  height/2,
      "L0 0"].join("")));
    st.attr({fill: '#000000',stroke:this.color.hash()});
    return st;
  }
});

draw2d.shape.node.Product = draw2d.SetFigure.extend({
  NAME: "draw2d.shape.node.Product",
  init:function(attr, setter, getter)
  {
    this._super( $.extend({stroke:0, bgColor:null, width:38,height:47.335544320000054},attr), setter, getter);
    var port;
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(2.4859553684220113, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Input");
    port.setMaxFanOut(20);
    // Port
    port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(100.50021726315897, 50));
    port.setConnectionDirection();
    port.setBackgroundColor("#37B1DE");
    port.setName("Output");
    port.setMaxFanOut(20);
    this.persistPorts=false;
  },

  createShapeElement : function()
  {
    var shape = this._super();
    this.originalWidth = 38;
    this.originalHeight= 47.335544320000054;
    return shape;
  },

  createSet: function()
  {
    this.canvas.paper.setStart();

    // BoundingBox
    shape = this.canvas.paper.path("M0,0 L38,0 L38,47.335544320000054 L0,47.335544320000054");
    shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
    shape.data("name","BoundingBox");

    // Rectangle
    shape = this.canvas.paper.path('M18.17948870280361 0L38 23.955457201144725L20.097817553775144 47.335544320000054L0 24.642762739415218Z');
    shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#65D45D","dasharray":null,"opacity":1});
    shape.data("name","Rectangle");


    return this.canvas.paper.setFinish();
  },

  applyAlpha: function()
  {
  },

  layerGet: function(name, attributes)
  {
    if(this.svgNodes===null) return null;

    var result=null;
    this.svgNodes.some(function(shape){
      if(shape.data("name")===name){
        result=shape;
      }
      return result!==null;
    });

    return result;
  },

  layerAttr: function(name, attributes)
  {
    if(this.svgNodes===null) return;

    this.svgNodes.forEach(function(shape){
      if(shape.data("name")===name){
        shape.attr(attributes);
      }
    });
  },

  layerShow: function(name, flag, duration)
  {
    if(this.svgNodes===null) return;

    if(duration){
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){
            node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
          }
          else{
            node.animate({ opacity : 0 }, duration, function () { this.hide() });
          }
        }
      });
    }
    else{
      this.svgNodes.forEach(function(node){
        if(node.data("name")===name){
          if(flag){node.show();}
          else{node.hide();}
        }
      });
    }
  },

  calculate: function()
  {
  },

  onStart: function()
  {
  },

  onStop:function()
  {
  },

  getParameterSettings: function()
  {
    return [];
  },

  /**
   * @method
   */
  addPort: function(port, locator)
  {
    this._super(port, locator);
    return port;
  },

  /**
   * @method
   * Return an objects with all important attributes for XML or JSON serialization
   *
   * @returns {Object}
   */
  getPersistentAttributes : function()
  {
    var memento = this._super();

    // add all decorations to the memento
    //
    memento.labels = [];
    this.children.each(function(i,e){
      var labelJSON = e.figure.getPersistentAttributes();
      labelJSON.locator=e.locator.NAME;
      memento.labels.push(labelJSON);
    });

    return memento;
  },

  /**
   * @method
   * Read all attributes from the serialized properties and transfer them into the shape.
   *
   * @param {Object} memento
   * @returns
   */
  setPersistentAttributes : function(memento)
  {
    this._super(memento);

    // remove all decorations created in the constructor of this element
    //
    this.resetChildren();

    // and add all children of the JSON document.
    //
    $.each(memento.labels, $.proxy(function(i,json){
      // create the figure stored in the JSON
      var figure =  eval("new "+json.type+"()");

      // apply all attributes
      figure.attr(json);

      // instantiate the locator
      var locator =  eval("new "+json.locator+"()");

      // add the new figure as child to this figure
      this.add(figure, locator);
    },this));
  }
});
