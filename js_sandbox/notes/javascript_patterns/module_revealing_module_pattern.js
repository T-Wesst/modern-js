// Structure

// IIFE immediately invoked function
(function() {
  // declare private variables and functions
  return {
    // declare public variables and functions
  };
})();

// STANDARD MODULE PATTERN
const UiCtrl = (function() {
  // private
  let text = 'Hello World';
  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  };
// public
  return {
    callChangeText = function(){
      changeText();
      console.logg(text);
    }
  }
})();

UiCtrl.callChangeText(); // logs hello world and changes h1 to hello world

//  REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  // Private
  let data = [];
  function add(item){
    data.push(item);
    console.log('item added');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    // Public, if removed becomes private
    add: add,
    get: get
  }
})()

ItemCtrl.add({id: 1, name: 'John'}) // logs Item added
console.log(ItemCtrl.get(1)) // logs obj