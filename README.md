# Ember-cli Spinjs
[![Build Status](https://travis-ci.org/kiwiupover/ember-cli-spinjs.svg)](https://travis-ci.org/kiwiupover/ember-cli-spinjs)

## Install
In the root of your ember-cli project directory, run:

```bash
  npm install --save-dev ember-cli-spinjs

  ember generate ember-cli-spinjs
```


## Usage
Now you in your templates you can use `{{ember-spinner}}` to add a spinner to your page.

[View Demo](http://ember-cli-spinjs.s3-website-us-east-1.amazonaws.com)

```handlebars
{{ember-spinner}}
```
Standard

```handlebars
{{ember-spinner lines=11 length=16 raidus=30 width=8 rotate=10 speed='1.1' color="#ffc52e"}}
```
Spinning Lines

```handlebars
{{ember-spinner lines=18 raidus=10 width=5 rotate=0 speed="3.4" color='blue'}}
```
Fast spinning blue dots

The [Spin.js docs](http://fgnass.github.io/spin.js/)

Cheers
