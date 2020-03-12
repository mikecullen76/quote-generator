var quoteBase = {
  1:["When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.","-BOB MONKHOUSE"],
  2:["Always borrow money from a pessimist. He won’t expect it back.","-OSCAR WILDE"],
  3:["The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.","-MARK RUSSELL"],
  4:["Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.","-ROBERT BLOCH"],
  5:["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.","-MILES KINGTON"],
  6:["A bargain is something you don’t need at a price you can’t resist.","-FRANKLIN JONES"],
  7:["If at first you don’t succeed ... so much for skydiving.","-HENNY YOUNGMAN"],
  8:["Never, under any circumstances, take a sleeping pill and a laxative on the same night.","-DAVE BARRY"],
  9:["If you think nobody cares if you’re alive, try missing a couple of car payments.","-FLIP WILSON"],
  10:["Patience is something you admire in the driver behind you, but not in one ahead.","-BILL MCGLASHEN"],
  11:["A diplomat is someone who can tell you to go to hell in such a way that you will look forward to the trip.","-CASKIE STINNETT"],
  12:["A bank is a place that will lend you money, if you can prove that you don’t need it.","-BOB HOPE"],
  13:["My husband wanted one of those big-screen TVs for his birthday. So I just moved his chair closer to the one we have already.","-WENDY LIEBMAN"],
  14:["He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.","-DOUGLAS ADAMS"],
};

// objectLength gets the current length of an object
function objectLength(obj) {
  var count = 0;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) { // hasOwnProperty only counts properties from the object literal, and not properties it inherits from its prototype.
        count++;
    }
  }
  return count;
}

// generates a random whole number between 1 and the length of the quote object
function randomNumber(objLen) {
  return Math.floor(Math.random() * (objLen - 1 + 1)) + 1;
}

// generates random quote on each button click
document.getElementById('button').onclick = function() {
  var tempNum = quoteBase[randomNumber(objectLength(quoteBase))];
  document.getElementById('quote').innerHTML = tempNum[0];
  document.getElementById('author').innerHTML = tempNum[1];
  var tweetThis1 = '<iframe src="https://platform.twitter.com/widgets/tweet_button.html?size=l&url=https%3A%2F%2Fcodepen.io%2Fmikecullen76%2Ffull%2FYZjzoJ&related=twitterapi%2Ctwitter&hashtags=fcc%2Cweb-development&text='
  var tweetThis2 = '"width="140"height="40"title="Twitter Tweet Button"style="border: 0; overflow: hidden;"> </iframe>'
  var quoteArray = tempNum[0].split(" ").join("%20");
  var tweetThis = tweetThis1 + quoteArray + tweetThis2;
  document.getElementById('tweet').innerHTML = tweetThis;
}

// On page load
var tempNum = quoteBase[randomNumber(objectLength(quoteBase))];
document.getElementById('quote').innerHTML = tempNum[0];
document.getElementById('author').innerHTML = tempNum[1];

var tweetThis1 = '<iframe src="https://platform.twitter.com/widgets/tweet_button.html?size=l&url=https%3A%2F%2Fcodepen.io%2Fmikecullen76%2Ffull%2FYZjzoJ&related=twitterapi%2Ctwitter&hashtags=fcc%2Cweb-development&text='
var tweetThis2 = '"width="140"height="40"title="Twitter Tweet Button"style="border: 0; overflow: hidden;"> </iframe>'
var quoteArray = tempNum[0].split(" ").join("%20");
var tweetThis = tweetThis1 + quoteArray + tweetThis2;
document.getElementById('tweet').innerHTML = tweetThis;