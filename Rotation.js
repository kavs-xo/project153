//sea Rotation
AFRAME.registerComponent("sea-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  // diver ROTATION COMPONENT
  
  AFRAME.registerComponent("diver-rotation-reader",{
    schema: {
      speedofrotation:{type:"number" , default: 0},
      speedofposition:{type:"number" , default: 0}
  
    },
    init:function(){
      window.addEventListener("keydown", (e)=> {
        this.data.speedofrotation=this.el.getAttribute("rotation")
        this.data.speedofposition=this.el.getAttribute("position")
  
        
        var diverrotation = this.data.speedofrotation
        var diverposition = this.data.speedofposition
  
        // Control the attributes with the arrow keys
  
        if(e.key === "ArrowRight"){
          if(diverrotation.x < 10){
            diverrotation.x = diverrotation.x + 0.5
            this.el.setAttribute("rotation", diverrotation)
          }
        }
  
        if(e.key === "ArrowLeft"){
          if(diverrotation.x > -10){
            diverrotation.x = diverrotation.x - 0.5
            this.el.setAttribute("rotation", diverrotation)
          }
        }
        if(e.key === "ArrowUp"){
          if(diverrotation.z < 20){
            diverrotation.z = diverrotation.z + 0.5
            this.el.setAttribute("rotation", diverrotation)
          }
          if(diverposition.y < 2){
            diverposition.y = diverposition.y + 0.01
            this.el.setAttribute("position", diverposition)
          }
        }
        if(e.key === "ArrowDown"){
          if(diverrotation.z > -10){
            diverrotation.z = diverrotation.z - 0.5
            this.el.setAttribute("rotation", diverrotation)
          }
          if(diverposition.y > -2){
            diverposition.y = diverposition.y - 0.01
            this.el.setAttribute("position", diverposition)
          }
        }
      })
    }
  
  })  