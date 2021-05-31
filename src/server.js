import request from 'request'
import { CLIENT_ID, CLIENT_SECRET, GET_TOKEN_URL, SEARCH_CHANNEL_URL } from './constants'

/**
 * Get the access token for Twitch API calls.
 */
 export var getToken = (callback) => {
    const initiateOptions = {
        url: GET_TOKEN_URL,
        method: 'POST',
        json: true,
        body: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials'
        }
    };

    request.post(initiateOptions, (error, response, body) => {
        if (error) {
            return console.log(`The getToken() returned an error: ${error}`);
        } else {
            console.log(`GET_TOKEN_URL Status: ${response.statusCode}`);
            //console.log(body);
            callback(response.body.access_token);
        }
    });
 };

/**
 * Retrieve the started timestamp for the live Twitch stream.
 */
 export const getStreamStarted = (accessToken, channel, callback) => {
    const streamOptions = {
        url: `${SEARCH_CHANNEL_URL} ${channel}`,
        method: 'GET',
        json: true,
        headers: {
            'Client-ID': CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`
        }
    };

    request.get(streamOptions, (error, response, body) => {
        var streamStartedAt = undefined;

        if (error) {
            return console.log(`The getStreamStarted() returned an error: ${error}`);
        } else {
            console.log(`SEARCH_CHANNEL_URL Status: ${response.statusCode}`);
            //console.log(body);
            //console.log(`size of collection: ${response.body.data.length}`);

            // search collection for exact channel name
            for (var i = 0; i < response.body.data.length; i++) {
                if (response.body.data[i].broadcaster_login.toLowerCase() === channel) {
                    streamStartedAt = response.body.data[i].started_at;
                    break;
                }
            }
            callback(streamStartedAt);
        }
    });
 };
