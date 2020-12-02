var dog, happyDog, database, foodS, foodStock , position;
var  dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");  
  
  
}
function setup(){
    createCanvas(900,500);
    database= firebase.database();
    dog = createSprite(450,300,50,50);
    dog.addImage("dog",dogImg);
    dog.scale=0.5  ;

     foodStock =  database.ref('food');
    foodStock.on("value",readStock)

}

function draw(){
    background(46,139,87);
    
    if(keyWentDown(UP_ARROW)){
       WriteStock(foodS);
       dog.addImage("happyDog",happyDog);   
    }
    
    drawSprites();
    textSize(25);
    fill("black");
    text("food remaining:"+ foodS,170,80);
    text("Note:Press UP_ARROW Key To Feed Drago Milk!",170,120 )
    
}

function WriteStock(x){
    if(x<=0){
        x=0;
    }
    else{
        x=x-1;
    }
    database.ref('/').update({
        food:x
    })
}
function readStock(data){
    foodS = data.val();
}




