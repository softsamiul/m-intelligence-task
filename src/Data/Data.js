import DateDataGrapgh from '../assets/images/report-graph.png'
import Chrome from '../assets/images/chrome.png'
import Safari from '../assets/images/safari.png';
import Firefox from '../assets/images/firefox.png';
import EDGE from '../assets/images/edge.png';

const data = [
    {
        browser: ['Chrome', 'Safari', 'Edge', 'Firefox'],
        country: ['India', 'United State', 'Australia', 'England', 'Canada', 'New Zeland','Ireland'],
        date: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06']
    }
  ]


export const allData = [
  {
    id:1,
    browser: 'chrome',
    src: Chrome,
    country:'India',
    date: DateDataGrapgh
  },
  {
    id:2,
    browser: 'safari',
    src: Safari,
    country:'United States',
    date: DateDataGrapgh
  },
  {
    id:3,
    browser: 'firefox',
    src: Firefox,
    country:'United Kingdom',
    date: DateDataGrapgh
  },
  {
    id:4,
    browser: 'edge',
    src: EDGE,
    country:'Ireland',
    date: DateDataGrapgh
  },

]



export default data;