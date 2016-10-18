const projects = [{
  url: 'path-paradox',
  title: 'Path Paradox',
  client: '',
  text: `Path Paradox is an online multi-player game based on the popular board game *Tsuro*. Place a tile in front of your token to continue your path, but be careful to keep your token on the board as the last one remaining wins. 

  Path Paradox was created in collaboration with [Lori-Anne Ashwood](https://github.com/ashes74), [Jennifer Cen](https://github.com/cenjennifer ), and [Torng-Lin (Taffy) Chen](https://github.com/maxww). You can watch a video of our presentation [here!](http://www.gracehopper.com/student-projects/path-paradox)

We built the board as a graph structure of nodes organized into the 36 spaces of the board, eight nodes per space which correspond to the eight notches in a tile. Placing a tile creates “neighbor” associations between nodes which represent the paths on the board. This process creates a collection of linked lists that can be traversed in any direction. This tile placement is then broadcast to Firebase so all players will receive a real-time update of the state of the board. After they receive this broadcast, each player will move themselves along their paths until they reach the end, the edge of the board, or collide with another player.

We utilized Firebase to store only the essential data to keep players’ local game states seamlessly in sync with one another. The minimal structure of the data keeps updates between players speedy and we leveraged the built-in authentication to manage game states between players.

You can play Path Paradox any time at [pathparadox.com](https://www.youtube.com/watch?v=dNofUqUkkF8).`,
  createdAtVD: false,
  awards: [],
  images: [
    'path-paradox_01.jpg',
    'path-paradox_02.jpg' 
  ]
}, {
  url: 'rosyfeed',
  title: 'RosyFeed',
  client: '',
  text: `View your social media feeds through rose-colored glasses. Rosyfeed is a Chrome Extension that analyzes the sentiments of each post in either your Twitter or Facebook feeds and blurs out posts perceived as negative. You can hover over a blurred out item to reveal the text and from the extension popup you can toggle the blurring on/off and add custom polarity values for words to customize your experience with your social media feeds.

Uses the Chrome JavaScript APIs, jQuery, Browserify,  ReText + ReText-Sentiment, Lodash, CSS.

Check it out on the [Chrome Web Store](http://bit.ly/rosyfeed).`,
  createdAtVD: false,
  awards: [],
  images: [
    'rosyfeed_01.jpg',
    'rosyfeed_02.jpg',
    'rosyfeed_03.jpg',
    'rosyfeed_04.jpg'
  ]
}, {
  url: '1630-pop-up-shoppe',
  title: '1630 Pop-Up Shoppe',
  client: '',
  text: `1630, Proprietors of Boston Goods & Curiosities, is a ‘pop-up shoppe’ that features goods created by New England makers, curated antiques, and smart, Boston-themed merchandise. To give the pop-up shop a more permanent home online I took the design provided by the team and built it using Kirby CMS with PHP, HTML, CSS, and a little bit of jQuery, with responsive practices and SEO in mind. View the full site at [1630boston.com](http://1630boston.com).

  And now you can shop the 1630 collection online! I created a custom Shopify theme with Liquid for our online store to reflect the existing design of the main site. You can visit it now at [shop.1630boston.com](shop.1630boston.com).`,
  createdAtVD: true,
  awards: [],
  images: [
    '1630-website.jpg'
  ]
}, {
  url: 'woody-at-100-lead-belly',
  title: 'Woody at 100 & Lead Belly',
  client: 'Smithsonian Folkways',
  text: `Two large format, special edition collections for Smithsonian Folkways Recordings, the nonprofit record label of the Smithsonian Institution. *Woody at 100: The Woody Guthrie Centennial Collection* commemorates Woody Guthrie’s 100th birthday with a 150-page, 12x12 book which includes essays about his life, photos, drawings, and 57 tracks on 3 CDs. Woody at 100 went on to win a Grammy in 2013 for design in the Best Boxed Set or Limited Edition Package category. *Lead Belly: The Smithsonian Folkways Collection* was released two years later and focuses on the life and music of Huddie Ledbetter, better known as Lead Belly, featuring 140 pages of essays, photos and 5 CDs of music. I contributed to the concept, typography, layout, and image treatment as well as creating the print-ready files.`,
  createdAtVD: true,
  awards: ['The Grammys', 'Communication Arts', 'Packaging of the World', 'FPO',  'Hatch', 'Dexigner', 'Art Directors Club of New Jersey', 'New England Book Show Award','Independent Music Awards', 'American Association of Independent Music', 'Album Cover Hall of Fame'],
  images: [
    'smithsonian_01.jpg',
    'smithsonian_02.jpg',
    'smithsonian_03.jpg',
    'smithsonian_04.jpg',
    'smithsonian_05.jpg',
    'smithsonian_06.jpg',
    'smithsonian_07.jpg',
    'smithsonian_08.jpg',
    'smithsonian_09.jpg'
  ]
}, {
  url:'hungry-for-design',
  title: 'Hungry for Design',
  client: '',
  text: `Hungry for Design is a restaurant review site that critiques a restaurant from design to interior to experience, everything but the food—well, including the food but mostly everything else. I helped create the site from collaborating on the logo and web design to development using Kirby CMS with PHP, HTML, and CSS. View the full site at [hungryfordesignreview.com](http://hungryfordesignreview.com).`,
  createdAtVD: true,
  awards: [],
  images: [
    'hungryfordesign-website-1.jpg',
    'hungryfordesign-website-2.jpg'
  ]

}, {
  url: 'colloquy',
  title: 'Colloquy',
  client: 'Harvard Graduate School of Arts & Sciences',
  text: 'In 2012 Colloquy, the Harvard Graduate School of Arts and Sciences’ Alumni magazine came to Visual Dialogue for a much needed redesign. I contributed to the initial update to the look and feel, typography, layout, and organization and have since worked on visual concepts, typographic treatments, type-setting and preparing files for print for 12 issues.',
  createdAtVD: true,
  awards: ['Hatch'],
  images: [
    'colloquy_01.jpg',
    'colloquy_02.jpg',
    'colloquy_03.jpg',
    'colloquy_04.jpg',
    'colloquy_05.jpg',
    'colloquy_06.jpg'
  ]
}, {
  url: 'diacritics',
  title: 'Diacritics',
  client: 'Cornell University',
  text: `Upon reaching its 40th year of publication, diacritics, a quarterly “review of contemporary criticism” by Cornell University, felt it needed a refresh to the design. The first step was to bring back the logotype from the very first issue in 1971. We then took that retro (in a great way) logo and paired it with type from Hoefler & Co. and a clean, modern layout that is as bold as the essays in each issue. Following the initial redesign I have typeset and produced print-ready files for 13 issues.`,
  createdAtVD: false,
  awards: ['Council of Editors of Learned Journals (CELJ)','Association of American University Presses (AAUP) Book, Jacket, & Journal Show 2014'],
  images: [
    'diacritics_01.jpg',
    'diacritics_02.jpg',
    'diacritics_03.jpg',
    'diacritics_04.jpg',
    'diacritics_05.jpg',
    'diacritics_06.jpg'
  ]
}, {
  url: 'visual-dialogue',
  title: 'Visual Dialogue',
  client: '',
  text: `When I joined Visual Dialogue in 2011 their website was still in Flash—it was definitely in need of an update. I helped design the new layout and initially built it out with Cargo Collective. Once we outgrew that platform I redeveloped a responsive version using PHP, HTML, CSS and jQuery using [Kirby CMS](http://getkirby.com). See the full website at [visualdialogue.com](http://visualdialogue.com).`,
  createdAtVD: true,
  awards: [],
  images: [
    'visualdialogue-website-1.jpg',
    'visualdialogue-website-2.jpg'
  ]
}

];

export default projects;
