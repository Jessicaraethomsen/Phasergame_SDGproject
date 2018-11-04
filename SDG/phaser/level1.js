var cursors;
var score = 0;
var score1 = 0;
var score2 = 0;
var plasticVisited = 0;
var plastic = 0;
var button;
var exploreTxt;

var level1 = {

	create: function () {
		"use strict";
		game.add.image(0, 0, 'bg-level1');
		game.world.setBounds(0, 0, 1900, 1082);

		// physics, so enable the Arcade Physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.physics.arcade.sortDirection = Phaser.Physics.Arcade.BOTTOM_TOP;


		//Background Countries
		this.land = game.add.sprite(0, 0,'bg-land');
		

		//AUDIO

		this.intromusic = game.add.audio('level1-audio');
		this.intromusic.play();

		
		//music ON/PAUSED
		this.button = game.add.button(940, 0,'music', offVolume, this);
    	this.button.input.useHandCursor = true;
		this.button.fixedToCamera = true;
		this.button.visible = true;



		this.buttonOff = game.add.button(940, 0,'music-off', onVolume, this);
    	this.buttonOff.input.useHandCursor = true;
		this.buttonOff.fixedToCamera = true;
		this.buttonOff.visible = false;


		//logo
		this.logo = game.add.sprite(0, 0,'logo');
		this.logo.fixedToCamera = true;
	

		//Scooter
			this.sub = game.add.sprite(game.world.width / 2, game.world.height/2, 'scooter');
			game.camera.follow(this.sub);
			game.physics.arcade.enable(this.sub);
			cursors = game.input.keyboard.createCursorKeys();
			this.sub.visible = true;





		// Display the timer
		this.plasticVisited = game.add.text(700, 10,);
		this.plasticVisited.fixedToCamera = true;
		this.plasticVisited.text = 'Found:'; 
		this.plasticVisited.addColor("#fff", 0); //white


	    //Feedback for next level

	    this.exploreTxt = this.add.text(10, 10, {
	    	font: "10px Rammetto One",
	    	fill: "#fff"
	    });
	    this.exploreTxt.fixedToCamera = true;
	    this.exploreTxt.text = '';
	    this.exploreTxt.addColor("#fff", 0); //white 


	    

	},
	


	update: function () {
		"use strict";
		//responisve
		game.scale.setShowAll();
		game.scale.refresh(); 

		this.sub.rotation = game.physics.arcade.angleToPointer(this.sub);


		//overlaps
		game.physics.arcade.overlap(this.sub, this.land, SwitchTransport, null, this);
	
	




    //  only move when you click
    if(game.input.activePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(this.sub, 250);

    }

    else
    {
        this.sub.body.velocity.setTo(0, 0);
        	
    }




}
};









//BOTTLE FUNCTIONS
function SwitchTransport(sub, land) {
	"use strict";
	this.sub.visible = true;

};


//Music on/off functions
function offVolume() {
	"use strict";
		this.intromusic.pause();
		this.button.visible = false;
		this.buttonOff.visible = true;

console.log("clickclick");
  
};


function onVolume() {
	"use strict";
		this.intromusic.pause();
		this.buttonOff.visible = false;
	    this.button.visible = true;
	    this.intromusic.play();


console.log("clickclick");
  
};



function nextlevel(sub, crab){
	"use strict";

	if (score >= 1 && score1 >= 1 && score2 >= 1) {
		sub.kill();
		console.log(score + score2 + score1);
		setTimeout(function() {
			this.game.state.start("boot"); 
		}, 500);



	}


};





