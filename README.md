# Polymer Examples
This repository contains various examples for getting started with [Polymer 1.0].
The examples assume the reader has some programming experience and has read through the [feature overview] from polymer-project.org.

## Setting up a development environment
Before starting, we have to setup a development environment. The approach used here is to use [Yeoman] as opposed to the [polymer starter kit].

1. Install [node.js]. Follow the instructions on their site to install for your OS.
2. Install [Yeoman] by typing the command `sudo npm install -g yo` in your system's console. 
   The `-g` installs the package globally, which is why the `sudo` command is needed (your system may vary).
3. Next we'll install a couple of [Yeoman generators].
  1. Install the [polymer generator] with the command `sudo npm install -g generator-polymer`.
  2. (optional) Install the [polymer element generator] with the command `sudo npm install -g generator-element`.
      This will help with scaffolding out custom Polymer elements.

## Starting a new project
With the development environment setup, starting a project is extremely easy.
```sh
mkdir my-project
cd my-project
yo polymer
```
A new polymer project will be setup in the `my-project` directory using the latest releases of polymer and other dependencies.

## Testing a project
Polymer uses the [gulp] streaming build system. From your project's directory, simply type
```sh
gulp serve
```

See my [Polymer 1.0 Notes] Google doc.


[polymer 1.0]: https://www.polymer-project.org/1.0/
[feature overview]: https://www.polymer-project.org/1.0/docs/devguide/feature-overview.html
[yeoman]: http://yeoman.io/
[polymer starter kit]: https://github.com/PolymerElements/polymer-starter-kit
[node.js]: https://nodejs.org/en/
[yeoman generators]: http://yeoman.io/generators/
[polymer generator]: https://github.com/yeoman/generator-polymer
[polymer element generator]: https://github.com/webcomponents/generator-element
[gulp]: http://gulpjs.com/
[polymer 1.0 notes]: https://docs.google.com/document/d/12-BNonP4cBpG61ZDArgEB7E30s3017GsA77ZiOgsAFY/edit?usp=sharing
