# Node Forever js on any Virtual Machine

For detalied information check the [Medium Blog](https://medium.com/geekculture/node-forever-js-on-any-virtual-machine-e5d573583b67?source=friends_link&sk=f594ba86398b05e4461418a9b956de2b)

Here you can get the code of the server.js for testing you application.

If you wish to use the same code which I have then you may proceed with git clone 

Open up ur terminal and given the following command,

```
git clone https://github.com/narenltk/forever_node_js.git
```

then you need to install and check your local machine,

```
npm install
```

Once your done with all the steps given above all you to do is just fire up the server, with the following command and check your local host

```
npm start

or

node server.js
```

Now checkout "https://localhost:2020"

I have used the port 2020 and you can change the port to any number you like.

## The list of the forever js commands are as follows,

Installing the forever,
```
npm i forever -g
```
```
forever start server.js
forever list
forever stop server.js
forever stop o
forever stopall
forever logs
forever restart server.js
forever restart 0         --> restarts uid o script alone
forever restartall        --> restarts all running forever scripts
forever -h                --> -h, –help: Command line help information
forever config            --> lists all forever user configurations
forever clear             --> clears the specified forever config by its key
forever cleanlogs         --> deletes all historical forever log files
forever set               --> defines a forever config value for an unique key
```
