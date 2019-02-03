const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState());
  };
  this.change = function(state) {
    currentState = state;
  };
};

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-3">Hello World</h1>
      <p class="lead">this is a simple hero unit</p>
      <hr class="my-4" />
      <p>it uses utilitiy classes for typography and spacing</p>
      <p class="lead">
        <a href="" class="btn btn-primary btn-lg" role="button">
          Learn more
        </a>
      </p>
    </div>`;
};

// about state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'about us';
  document.querySelector('#content').innerHTML = `<p>this is about page</p>`;
};

// contact state
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'contact us';
  document.querySelector('#content').innerHTML = `
  <form action="">
      <div className="form-group">
        <label htmlFor="">name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="">email</label>
        <input type="text" className="form-control" />
      </div>
      <button className="btn btn-primary">submit</button>
    </form>`;
};

// instantiate pageState
const page = new PageState();

// init the first state
page.init(); // renders homeState

// UI variables
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  contact = document.getElementById('contact');

// home
home.addEventListener('click', e => {
  page.change(new homeState());
  e.preventDefault();
});
// about
about.addEventListener('click', e => {
  page.change(new aboutState());
  e.preventDefault();
});
// contact
home.addEventListener('click', e => {
  page.change(new contactState());
  e.preventDefault();
});
