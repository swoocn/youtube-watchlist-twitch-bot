import fs from 'fs'
import tmi from 'tmi.js'

import { getWatchedAtDate } from './utils'
import { getToken, getStreamStarted } from './server'
import {
    BOT_USERNAME,
    TMI_OAUTH_TOKEN,
    CHANNEL_NAME,
    USER_WHITELIST,
    YOUTUBE_REGEX,
    YOUTUBE_VID_ID_REGEX,
    REQUEST_FILE_PATH,
    WATCHLIST_FILE_PATH,
} from './constants'

const options = {
  options: {
    debug: false
  },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: BOT_USERNAME,
    password: TMI_OAUTH_TOKEN
  },
  channels: [ CHANNEL_NAME ]
}

// initialize a client w/ options to connect to Twitch server
const client = new tmi.Client(options);
var accessToken = null;
var streamStartedAt = null;

// connect to Twitch server
client.connect();

// invoked every time bot connects to Twitch chat
client.on("connected", (addr, port) => {
    try {
      client.say(options.channels[0], 'swoocn override - [youtube-request-watchlist-twitch-bot] initiated for testing..');
      // client.ws.on('message', data => console.log(data));
      console.log(`[youtube-watchlist-twitch-bot initiated] - connected to ${addr}:${port}`);
      requestTwitchData();
    } catch (err) {
        console.log(`unable to process connect and/ or request from Twitch API; -> ${err}`);
    }
});

// invoked every time a message is received by the bot
client.on("message", (target, context, msg, self) => {
  if (self) { return; }

  // only process potential watchlist entries by messages from whitelisted users.
  if (context.username == USER_WHITELIST[0] || context.username == USER_WHITELIST[1]) {
    if (new RegExp(YOUTUBE_REGEX).test(msg)) {
        try {
          // extract YouTube link.
          var id = msg.match(YOUTUBE_REGEX);
          // check if the id is in the supplemental youtube_request file.
          var requestData = readRequestFileFor(id);
          if (requestData != null) {
            writeToWaitlistFileFor(context, id, requestData);
          }
        } catch (err) {
            console.log(`unable to process message: ${msg}; -> ${err}`);
        }
    }
  }
});

// invoked every time the bot disconnects from Twitch chat
client.on("disconnected", (reason) => {
  console.log(`[youtube-watchlist-twitch-bot disconnected] - ${reason}`);
  process.exit(1);
});

var requestTwitchData = () => {
    setTimeout(() => {
        getToken(callback => {
            accessToken = callback;
        });
    }, 1000);

    setTimeout(() => {
        getStreamStarted(accessToken, options.channels[0], callback => {
            streamStartedAt = callback;
        });
    }, 5000);
};

var readRequestFileFor = (id) => {
    var result = null;

    var data = fs.readFileSync(REQUEST_FILE_PATH, 'UTF8');
    var lines = data.split('\n');

    // iterate line-by-line through file content to find the YouTube link that was requested.
    for (var i = 0; i < lines.length; i++) {
        // extract YouTube link
        if (lines[i].match(YOUTUBE_REGEX) == id[0]) {
            result = lines[i].replace(/[\n\r]/g, '');
            break;
        }
    }
    return result;
};

var writeToWaitlistFileFor = (context, id, requestData) => {
    var result = false;
    fs.appendFile(WATCHLIST_FILE_PATH, `${requestData} | [${getWatchedAtDate(streamStartedAt)}] | ${options.channels[0]}\n`, (err) => {
        if (err) throw err;
        console.log(`recorded -> @${id[0]} to watchlist file.`);
        result = true;
    });
    return result;
};
