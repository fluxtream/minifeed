# Minifeed Debug App

This is a featherweight nodejs app that renders a feed of the 20 last update events that were pushed to parse.

As a debugging aid, Fluxtream has a mechanism that will push a "FacetsCreatedEvent" entry to a (configurable) account on [Parse.com](http://parse.com)  for a specific list of interested users (/guests).

Amongst other things, a "FacetsCreatedEvent" has a "username" and a "serverName" field. This app will render a feed of the 20 last such events for a specific guest and server(Name).

Please note that there is no authentication required to access this app to date, so use at your own risk.

## Deploy on Heroku

The app depends on heroku for deployment. In particular, it depends on the following two environment variables:

    heroku config:add parse_applicationID=<Your-Parse-Application-ID> parse_javascriptKey=<Your-Parse-Javascript-Key>

Once you have pushed these values to heroku, in order to use the same variables on your development machine, please do:

    heroku config:pull --overwrite --interactive


## Usage

To test the app locally, just do the usual:

    foreman start
    
Access your feed by hitting the following url in your browser:

    http://localhost:5000/<username>/<serverName>
    
    