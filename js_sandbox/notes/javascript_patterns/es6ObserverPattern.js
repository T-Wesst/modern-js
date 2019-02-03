// used to notify the DOM of certain elements to be updated, Angular.js relies heavily on this pattern through event management through the scope.

class EventObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`you are now subscribe to ${fn.name}`);
  }
  unsubscribe(fn) {
    // filter out from the list whatever matches the callback function. if there is no match, the callback gets to stay on the list. the filter returns a new list and reassigns the list of observers.
    this.observers.filter(item => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`you are now unsubscribed from ${fn.name}`);
  }
  fire() {
    this.observers.forEach(item => {
      item.call();
    });
  }
}

const click = new EventObserver();

// event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// click handler
const getCurMilliseconds = function() {
  console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function() {
  console.log(`current Seconds: ${new Date().getSeconds()}`);
};
