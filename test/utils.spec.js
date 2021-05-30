import chai from 'chai'

import { formatDate } from '../src/utils.js'

describe('Utils', () => {

  it('should format the date into [MM/DD/YYYY | HH:MM:SS]', () => {
    chai.assert.match(formatDate(new Date()), /^(0[0-9]|1[0-2])[\/](0[0-9]|1[0-9]|2[0-9]|3[0-1])[\/][0-9]{4} [\|] (0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, 'date is formatted to [MM/DD/YYYY | HH:MM:SS].');
  });

});
