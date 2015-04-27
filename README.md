# Teamburner Workflows

This is a collection of workflows for Teamburner. It's also a playground where we can experiment with and test out ideas.

This README outlines the details of collaborating on this Ember application.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Watchman](https://facebook.github.io/watchman/docs/install.html)

## Installation

* `git clone git@github.com:teamburner/workflows-ember.git`
* `cd workflows-ember`
* `npm install`
* `bower install`
* `npm install -g surge` (for deployment)

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Templating & Preprocessor Languages

Because I'm incredibly lazy, I like to make use of languages that reduce the amount of typing by as much as possible. Favour writing code using:
* [Sass](http://sass-lang.com/)
* [Emblem](http://emblemjs.com/syntax/)
* ~~coffeescript~~ not yet, familiarizing myself with Ember before I make the jump.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Ember Data

Prefer writing RESTApi calls to push/fetch data, but mock out static apis instead of creating real ones. This way, hooking into a real API later should be trivial.

See `server/mocks` for examples. For deployment, publish static `.json` files with seed data to `public/api/`

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Build & deploy the app in a single step
* `surge login` (only needs to be done once)
* `bin/deploy`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
