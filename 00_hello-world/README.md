# Hello World

Install the component using [Bower](http://bower.io/):

```sh
bower install hello-world --save
```

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    sudo npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    bower install
    ```

3. Start development server and open `http://localhost:8080/components/hello-world/`.

    ```sh
    polyserve
    ```
