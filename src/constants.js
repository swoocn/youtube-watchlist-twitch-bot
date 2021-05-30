// File location constants
export const REQUEST_FILE_PATH = 'input/youtube_delim.list';
export const WATCHLIST_FILE_PATH = 'output/youtube_req_watch.list';

// Twitch constants
export const CHANNEL_NAME = '[INSERT TWITCH CHANNEL_NAME]';
export const CLIENT_ID = '[INSERT TWITCH CLIENT_ID]';
export const CLIENT_SECRET = '[INSERT TWITCH CLIENT_SECRET]';
export const TMI_OAUTH_TOKEN = '[INSERT TWITCH TMI OAUTH_TOKEN]';
export const BOT_USERNAME = 'youtube-request-watchlist-twitch-bot';
export const GET_TOKEN_URL = 'https://id.twitch.tv/oauth2/token';
export const SEARCH_CHANNEL_URL = 'https://api.twitch.tv/helix/search/channels?query=';

// Youtube constants
/* https://regexr.com/3a2p0 */
export const YOUTUBE_REGEX = /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/g;
export const YOUTUBE_VID_ID_REGEX = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
