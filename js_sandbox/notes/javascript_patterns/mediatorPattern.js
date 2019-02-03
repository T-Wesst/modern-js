// an interface for communicating with colleagues which are mediated objects. used in chat rooms (socket.io)

const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const chatroom = function() {
  let users = {}; // list of users
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // single user message
        to.receive(message, from);
      } else {
        // mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  };
};

const tyroo = new User('Tyroo');
const peter = new User('Peter');
const patrick = new User('Patrick');
const chatroom = new chatroom();

chatroom.register(tyroo);
chatroom.register(patrick);
chatroom.register(peter);

tyroo.send('hello peter', peter); // single message to user
peter.send('hello tyroo', tyroo); // single message to user
patrick.send('hello everyone'); // mass message to everyone
