$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
toggleGrid();

    // TODO 2 - Create Platforms
createPlatform(500, 625, 100,10);
createPlatform(600,525,10,220);
createPlatform(1000,480,1,1);
createPlatform(1000, 550, 200, 10);
createPlatform(700, 625,50,10);
createPlatform(220, 450,110,10);
createPlatform(580, 350,100,10);
createPlatform(1100,200,100,10);
createPlatform(900, 300,1,1);
    // TODO 3 - Create Collectables
createCollectable("steve", 1150, 150);
createCollectable("diamond",1100, 510);
createCollectable("max",300,400);
    
    // TODO 4 - Create Cannons
createCannon("top",250,400);
createCannon("right",100,1);
createCannon("left",600,2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
