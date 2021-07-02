## HTML5 game with Phaser 3 :robot:
In this project, we will build a super basic game with the framework Phaser 3.14 where the player is getting points every time he touches a yellow coin.

<p align="center">
 <img height=250 src="https://www.lesscake.com/tutimg/1/v3.gif"><br>
</p>

### Files Required
* A directory called "assets" containing two sprites, that can be [downloaded here](https://www.lesscake.com/data/assets-1.zip).

### Test the game
To test the game directly opening the index.html file in a web browser is not enough, we need to use a local web server for Phaser to work properly.

There are multiple ways to set up a local web server. Here's my favourite technique using the Terminal:
* Navigate to the project's directory ```cd first-game/```.
* Type ```python -m http.server 8888``` (or ```python -m SimpleHTTPServer 8888``` if you are using Python 2).
* And then open the url ```http://localhost:8888``` in your browser.

### Credits
[_lesscake.com/phaser-game-tutorial_](https://www.lesscake.com/phaser-game-tutorial)