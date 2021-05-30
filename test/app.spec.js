//const { chai } = require('chai');
import chai from 'chai'
//const { YOUTUBE_REGEX, YOUTUBE_VID_ID_REGEX } = require('../src/constants');
import { YOUTUBE_REGEX, YOUTUBE_VID_ID_REGEX } from '../src/constants.js'

describe('YouTube link composition', () => {

  var invalidYouTubeLinks = [
    'youtube.com/embed/v=ZdmFyyvJviw',
    'youtube.com/e/v=36Wm_zyEpcM',
    'youtube.com/attribution_link?u=/embed/v=hUf-zoui6-o',
    'youtube.com/attribution_link?u=/e/v=YUkAp5iV_Xc',
  ]

  var validYouTubeLinks = [
    'youtu.be/-ldI-oGzQQk',
    'youtu.be/KoxnD0RWMPw',
    'youtube.com/user/swoocn/watch?v=A6YQQ91IvXU',
    'youtube.com/user/swoocn/watch?v=EbKHsEUAgHA&feature=related',
    'youtube.com/user/swoocn/watch?feature=related&v=KP9ZwIxhzAA',
    'youtube.com/watch?v=tXj_Viuvcrc',
    'youtube.com/watch?feature=related&v=Lj1ioIke4nM',
    'youtube.com/watch?v=IAWI6nMQhQI&feature=related',
    'youtube.com/embed/watch?v=4Oz5MdI0464',
    'youtube.com/embed/watch?feature=related&v=vPPs8HJ5764',
    'youtube.com/embed/v/8MIPwr3Vd7M',
    'youtube.com/e/v/OjTY24Kdh8I',
    'youtube.com/e/watch?v=c2UQx2rnUww',
    'youtube.com/e/watch?feature=related&v=-5rSpwSqrLc',
    'youtube.com/attribution_link?u=/user/swoocn/watch?v=JeVmk6SAMvA',
    'youtube.com/attribution_link?u=/user/swoocn/watch?v=BHb1cPfVrXs&feature=related',
    'youtube.com/attribution_link?u=/user/swoocn/watch?feature=related&v=UVRkETfeBKA',
    'youtube.com/attribution_link?u=/watch?v=uw0S3mV850o',
    'youtube.com/attribution_link?u=/watch?feature=related&v=utggP1n2P-o',
    'youtube.com/attribution_link?u=/watch?v=zRq_DlEzygk&feature=related',
    'youtube.com/attribution_link?u=/embed/watch?v=3BM3-O4CpTE',
    'youtube.com/attribution_link?u=/embed/watch?feature=related&v=4ohhl6ONdDk',
    'youtube.com/attribution_link?u=/embed/v/kZm9-vWiUFY',
    'youtube.com/attribution_link?u=/e/v/DCkTN2y_x6A',
    'youtube.com/attribution_link?u=/e/watch?v=sg1rYzLdc48',
    'youtube.com/attribution_link?u=/e/watch?feature=related&v=NQunCjYdAcU',
  ]

  it('should recognize valid YouTube links', () => {
    validYouTubeLinks.forEach(link => {
      chai.assert.isTrue(new RegExp(YOUTUBE_REGEX).test(link), `${link} is not a valid YouTube link.`);
    })
  });

  it('should recognize invalid YouTube links', () => {
    invalidYouTubeLinks.forEach(link => {
      chai.assert.isFalse(new RegExp(YOUTUBE_REGEX).test(link), `${link} is not an invalid YouTube link.`);
    })
  });

  it('should extract vid ID from valid YouTube links', () => {
    validYouTubeLinks.forEach(validLink => {
      chai.assert.isNotNull(validLink.match(YOUTUBE_VID_ID_REGEX), `${validLink} does not have a vid ID.`);
    })
  });

});
