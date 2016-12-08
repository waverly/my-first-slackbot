module.exports = function(robot){



  robot.hear(/yomamma/i, function(msg){
    msg.send("testing... Don't you be talkin bout my mamma!")
  })

  robot.hear(/badger/i, function(msg){
    msg.send("NO BADGERS!!!!!!")
  })

  // 1. create array of 4 non blondes lyrics to be sent at random to any user who says HEY. include a random image of linda perry.

  var four_non_blondes = ["And I say, hey yeah yeah, hey yeah yeah", "I said hey, what's going on?", "And I try, oh my god do I try", "And I pray, oh my god do I pray"];

  robot.hear(/hey/i, function(msg){
    msg.send(msg.random(four_non_blondes));
  })

  // 2. capture the user's favorite food and use conditional tree to respond accordingly

  robot.hear(/my favorite food is (.*)/i, function(msg){
      var favorite_food;
      favorite_food = msg.match[1];
      if (favorite_food === 'salad' || favorite_food === 'collard greens' || favorite_food === 'kale'){
        return msg.reply('Wow! Leafy Greens!');
      } else if (favorite_food === 'pizza' || favorite_food === 'bread'){
        return msg.reply('Carbohydrates are such a comfort.');
      } else if (favorite_food === 'pie' || favorite_food === 'cake' || favorite_food === 'soda'){
        return msg.reply("You've got quite the sweet tooth!");
      } else{
        return msg.reply("I've never heard of " + favorite_food + ", would you like to make it for me?");
      }
  })

  // create an array of images, reply directly to a user with a picture

  robot.respond(/I'm feeling sad/i, function(msg){
    var puppies = ["https://s-media-cache-ak0.pinimg.com/736x/09/3a/d7/093ad773131f636164111dc7336361ec.jpg", "http://www.puppy-videos.com/wp-content/uploads/2016/01/CUTE-FUNNY-BOXER-PUPPY-MEME.jpe", "https://cdn.meme.am/cache/instances/folder669/500x/23956669.jpg", "http://www.funnyonlinepictures.com/wp-content/uploads/2013/01/panda-dog.png" ];
    return msg.reply("awwwwwwww... have a puppy!   " + msg.random(puppies));
  })

  robot.hear(/my name is (.*)/i, function(msg){
    var name;
    name = msg.match[1];

    for (i=(name.length-1); i>=0; (i--)){

      letter = name[i];
      switch (letter) {
        case "a":
          msg.send('Always');
          break;
        case "b":
          msg.send('Be');
          break;
        case "c":
          msg.send('Crafty');
          break;
        case "d":
          msg.send('Dumpling');
          break;
        case "e":
          msg.send('Extra');
          break;
        case "f":
          msg.send('Full');
          break;
        case "g":
          msg.send('Grumbling');
          break;
        case "h":
          msg.send('Happily');
          break;
        case "i":
          msg.send('Importantly');
          break;
        case "j":
          msg.send('Jocular');
          break;
        case "k":
          msg.send('Kite flyer');
          break;
        case "l":
          msg.send('Lost in translation');
          break;
        case "m":
          msg.send('Muppet trophy');
          break;
        case "n":
          msg.send('Narwhal chaser');
          break;
        case "o":
          msg.send('Official');
          break;
        case "p":
          msg.send('Punkin pie');
          break;
        case "q":
          msg.send('Queen');
          break;
        case "r":
          msg.send('Restful');
          break;
        case "s":
          msg.send('Sunshine');
          break;
        case "t":
          msg.send('Typical');
          break;
        case "u":
          msg.send('Undulating');
          break;
        case "v":
          msg.send('Ventriloquist');
          break;
        case "w":
          msg.send('Wonderful');
          break;
        case "x":
          msg.send('Xylephonic');
          break;
        case "y":
          msg.send('Yabbering');
          break;
        case "z":
          msg.send('Zenithal');
          break;
        default:
          msg.send( letter +' .. Wait...');

      }
    }
    msg.send("Hi " + name + " ... let me write you an acrostic");

  })

}
