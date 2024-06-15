import {one} from './modules/one.mjs' //background
import {two} from './modules/two.mjs' //player-space
import {three} from './modules/three.mjs' //foreground

var gameFrame = 0;
const staggerFrame = 2;

while(false){
    gameFrame++;
    if(gameFrame%staggerFrame == 0){
        console.log(8);
    }
}