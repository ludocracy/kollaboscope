# Kollaboscope
This project is a fork of a group project for General Assembly [located here](https://github.com/ludocracy/project-01) originally written in jQuery with an Express backend.

This app was rewritten in React with a Firebase backend. [Try it here!](https://kollaboscope-183217.firebaseapp.com/).
## Instructions
### To develop this project
1. fork and clone this project into a local directory
2. navigate to the directory from your terminal and enter `npm install`
3.  add a .env file with credentials to your own firebase instance
```
REACT_APP_API_KEY=<YOUR-API-KEY>
REACT_APP_AUTH_DOMAIN=<YOUR-AUTH-DOMAIN>
REACT_APP_DATABASE_URL=<YOUR-DATABASE-URL>
REACT_APP_STORAGE_BUCKET=""
REACT_APP_MESSAGING_SENDER_ID=<YOUR-SENDER-ID>
```
4. from your terminal, enter `npm start` or `yarn start`
### To deploy this project to your own firebase instance
1. Install Firebase CLI
2. `firebase init`
  - enter `build` for your public directory
3. `yarn build`
4. `firebase deploy`

# tasks
## General
  - general styling
    - landing page done
    - playlist page (WIP)
  - shorter room codes instead of firebase reference keys
  - auth
  - footer with links to github and byline (WIP -Karla)
  - update README to look more profesh
    - still needs work
## By component
### Videos
  - synchronized listening using youtube's 'seek' methods
### Video
  - display who added it
  - style when a video is currently playing
  - style when a video is selected
  - style so user knows video can be selected
### Search
  - get results for more than youtube
  - autocomplete suggestions (maybe in youtube search API?)
### SearchResult
  - display video length
  - style when a video is selected
  - style add video button (maybe a '+' icon?)
### Playlist
  - ***make it clear that the url can be copied and shared***
  - show who is in the room
  - make buttons larger and style "delete" button clearly so user avoids it unless needed
    - only allow owner to delete
  - general styling
  - share playlist buttons (fb, instagram, email, etc)
  - admin controls if user is owner of Playlist
    - lock add/remove songs
    - set public/private
    - apply content filters
      - no NSFW
      - no repeated Videos
      - only results from give playlist or tags
### Landing
  - give user option to log in
