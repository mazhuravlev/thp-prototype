draw2d.layout.locator.TopLeftLocator = draw2d.layout.locator.Locator.extend({
  NAME : "draw2d.layout.locator.TopLeftLocator",

  /**
   * @constructor
   * Constructs a locator with associated parent.
   *
   * @param attr
   */
  init: function(attr)
  {
    this._super();
  },


  /**
   * @method
   * Relocates the given Figure.
   *
   * @param {Number} index child index of the target
   * @param {draw2d.Figure} target The figure to relocate
   **/
  relocate: function(index, target)
  {
    let parent = target.getParent();
    let boundingBox = parent.getBoundingBox();

    // I made a wrong decision in the port handling: anchor point
    // is in the center and not topLeft. Now I must correct this flaw here, and there, and...
    // shit happens.
    let offset = (parent instanceof draw2d.Port)?boundingBox.h/2:0;


    if(target instanceof draw2d.Port){
      target.setPosition(0,(boundingBox.h/2)-offset);
    }
    else{
      let targetBoundingBox = target.getBoundingBox();
      target.setPosition(-targetBoundingBox.w+20,-(targetBoundingBox.h+2)+1);
    }
  }
});
