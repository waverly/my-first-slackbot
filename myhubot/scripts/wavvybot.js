module.exports = function(robot){



  robot.hear(/yomamma/i, function(msg){
    msg.send("testing... Don't you be talkin bout my mamma!")
  })

  robot.hear(/badger/i, function(msg){
    msg.send("NO BADGERS!!!!!!")
  })


}
