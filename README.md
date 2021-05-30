## Project
- A lightweight Twitch chat bot application.
- Supplement to youtube_request_twitch_bot that keeps track of played requests.
- Output YouTube links and some watchlist data to a file for review. 

## Motivation
Allow for reaction-based Twitch streamers to keep track of youtube links that have been played - make the audience aware of the watchlist.

## Technology Stack 
- Node JS/ Javascript

## Prerequisites and Setup
#### Required accounts
- Twitch account

#### Get your Twitch OAuth token to call Twitch API & configure /const.js with Twitch account info.
1. Register and log into [Twitch developer console](https://dev.twitch.tv/console/apps).
2. Select the Applications tab, and click **+ Register Your Application**.
3. Enter desired app name and http://localhost as the OAuth redirect URL.  Then select Chat Bot as the app category.
4. Click **Create**, and the app is created and listed on the dashboard as a registered app.
5. Click **Manage** to see the client ID.
6. Connect to [Twitch Chat Password Generator](https://twitchapps.com/tmi/) to authorize access to desired Twitch account.
7. Copy the generated OAuth login password, and paste it to replace value for `OAUTH_TOKEN` in /const.js.  Also replace value for CHANNEL_NAME with desired Twitch channel alias.  

## Startup and Execution  
1. Initiate Twitch chat stream associated with Twitch OAuth token setup.
2. Run the application with 'npm start'.
3. Verify Twitch connection in console, and bot message initiated in Twitch chat.
    ##### _command 'npm start' will fire up the bot; console logging reveals connection status to Twitch chat stream; a welcome message from the bot will be sent to the Twitch chat box._
    <img src="https://user-images.githubusercontent.com/72060658/95268592-a0c42580-0805-11eb-9e18-41116ca87ed4.jpg"></img>