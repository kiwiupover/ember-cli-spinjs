# Ember-cli Spinjs
[![Build Status](https://travis-ci.org/kiwiupover/ember-cli-spinjs.svg)](https://travis-ci.org/kiwiupover/ember-cli-spinjs)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-spinjs.svg)](http://emberobserver.com/addons/ember-cli-spinjs)

## Install
In the root of your ember-cli project directory, run:

```bash
  npm install --save-dev ember-cli-spinjs

  ember generate ember-cli-spinjs
```




## Usage
Now you in your templates you can use `{{ember-spinner}}` to add a spinner to your page.

[View Demo](http://ember-cli-spinjs.surge.sh/)

```handlebars
{{ember-spinner}}
```
Default

### With a config file
```handlebars
{{ember-spinner config='standard'}}
```
Add two folders to your app the  first called `config` and in that folder
another called `ember-spinner` with a file called `standard.js`

```javascript
export default {
  color:  'blue',
  lines:  10,
  length: 30,
  zIndex: 200000
}
```

```handlebars
{{ember-spinner lines=11 length=16 radius=30 width=8 rotate=10 speed='1.1' color="#ffc52e"}}
```
Spinning Lines

```handlebars
{{ember-spinner lines=18 radius=10 width=5 rotate=0 speed="3.4" color='blue'}}
```
Fast spinning blue dots

The [Spin.js docs](http://fgnass.github.io/spin.js/)

Cheers
