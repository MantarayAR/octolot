Octolot
=======

Organize your stuff and always know what you own – no matter where you are

# Development

This is a Meteor application. You can run this application using:

```sh
cd src
meteor --settings settings.json
```

## Settings

A `settings.example.json` file is in `/src/` as an example of what your `settings.json` file should look like. You will need to add your own Twitter API tokens in order to get Twitter logins to work.


# Deployment

A `settings.prod.json` file is recommended to have when deploying to production, in order to keep your development and production settings separate.

Deploy using:

```sh
cd src
meteor deploy --settings settings.prod.json octolot.meteor.com
```