const newsData = [
  {
    category: 'sports',
    articles: [
      {
        title: 'Tom Brady signs one-year extension with the Tampa Bay Buccaneers',
        description: 'Tom Brady has signed a one-year extension with the Tampa Bay Buccaneers that will keep him with the team through the 2023 season. The 45-year-old quarterback led the Buccaneers to their second Super Bowl victory in 2021.',
        image: 'https://www.tampabay.com/resizer/V_vC3Nq3MKeOzucZKjDdRi-QbM=/800x450/top/cloudfront-us-east-1.images.arcpublishing.com/tbt/DGRZRAV7EYMAHANUGVYBQCJZM4.jpg',
        author: 'Mike Jones',
        date: '2022-03-09'
      },
      {
        title: 'Serena Williams advances to quarterfinals at Australian Open',
        description: 'Serena Williams has advanced to the quarterfinals at the Australian Open after defeating Anastasia Potapova in straight sets. The 23-time Grand Slam champion is aiming to win her eighth Australian Open title.',
        image: 'https://www.essentiallysports.com/wp-content/uploads/2022/01/56z6c5-1-696x442.jpg',
        date: '2022-01-24',
        author: 'Emma Stone',
      },
      {
        title: 'Los Angeles Lakers defeat Brooklyn Nets in NBA Finals rematch',
        description: 'The Los Angeles Lakers defeated the Brooklyn Nets 112-107 in a rematch of the 2022 NBA Finals. LeBron James led the way for the Lakers with 30 points, 12 rebounds, and 7 assists.',
        image: 'https://cdn.vox-cdn.com/thumbor/69OzweEY7fwh1zJ0V7OQ9IlOv1c=/0x0:4177x2785/920x613/filters:focal(1756x546:2422x1212):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70783875/1338763577.jpg.0.jpg',
        date: '2022-11-28',
        author: 'Tom Williams',
      },
    ],
  },
  {
    category: 'politics',
    articles: [
      {
        title: 'President Biden signs $1.2 trillion infrastructure bill',
        description: 'President Joe Biden signed a $1.2 trillion infrastructure bill into law on Monday, saying it would create jobs and improve the country\'s roads, bridges, and broadband access. The bill had bipartisan support in Congress.',
        image: 'https://cdn.pixabay.com/photo/2021/11/03/14/22/white-house-6766017_1280.jpg',
        author: 'John Smith',
        date: '2022-11-15'
      },
      {
        title: 'Senate passes voting rights bill',
        description: 'The Senate passed a voting rights bill on Tuesday that would expand access to voting and limit partisan gerrymandering. The bill faces an uncertain future in the House of Representatives, where it may not have enough support to pass.',
        image: 'https://cdn.pixabay.com/photo/2022/02/24/16/19/vote-7022955_1280.jpg',
        author: 'Jane Smith',
        date: '2022-10-22'
      },
      {
        title: 'Supreme Court to hear case on abortion rights',
        description: 'The US Supreme Court announced on Monday that it will hear a case on Mississippi\'s restrictive abortion law, which bans most abortions after 15 weeks of pregnancy. The case could lead to a major shift in abortion law in the US.',
        image: 'https://cdn.pixabay.com/photo/2022/02/21/16/57/supreme-court-7015569_1280.jpg',
        author: 'Bob Johnson',
        date: '2023-03-01',
      },
    ],
  },
  {
    category: 'world-news',
    articles: [
      {
        title: 'Scientists discover new species of deep-sea jellyfish',
        description: 'A team of scientists has discovered a new species of deep-sea jellyfish that glows in the dark. The jellyfish was found at a depth of over 2,000 meters in the waters off the coast of California.',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/220224140909-deep-sea-jellyfish-scn-trnd-exlarge-tease.jpg',
        author: 'Sarah Johnson',
        date: '2023-03-08'
      },
      {
        title: 'Australia issues new warning on climate change',
        description: 'The Australian government has issued a new warning on the dangers of climate change. The warning comes after a series of extreme weather events, including bushfires, floods, and heatwaves, that have caused widespread damage across the country.',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/220224120921-australia-heatwave-exlarge-tease.jpg',
        author: 'Michael Brown',
        date: '2023-03-07'
      },
      {
        title: 'WHO announces new global health initiative',
        description: 'The World Health Organization has announced a new global health initiative aimed at improving health outcomes in low-income countries. The initiative will focus on strengthening health systems, improving access to healthcare, and increasing investment in health research and development.',
        image: 'https://www.who.int/images/default-source/health-topics/global-health-initiative/global-health-initiative-banner.jpg',
        author: 'Anna Chen',
        date: '2023-03-06'
      },
    ],
  },
  {
    category: 'entertainment',
    articles: [
      {
        title: 'Oscar-winning actor Tom Hanks to star in new movie',
        description: 'Tom Hanks has signed on to star in an upcoming movie based on a bestselling novel. The film is set to begin production later this year and is expected to be a major awards contender.',
        image: 'https://www.gannett-cdn.com/presto/2022/01/21/USAT/e24744fb-56cb-4a1e-8c2c-5ba38a5d9036-XXX_West_Side_Story_2879.jpg?auto=webp&crop=2777,1560,x0,y0&format=pjpg&width=1200',
        author: 'Jennifer Lee',
        date: '2023-03-08'
      },
      {
        title: 'Popular TV show renewed for two more seasons',
        description: 'Fans of the hit TV show "Stranger Things" can rejoice: the show has been renewed for two more seasons. The announcement was made by the showrunners earlier this week.',
        image: 'https://www.indiewire.com/wp-content/uploads/2022/02/stranger-things-season-4-hopper.jpeg',
        author: 'David Brown',
        date: '2023-03-07'
      },
      {
        title: 'Actor and director Tim Robbins to release new book',
        description: 'Tim Robbins, known for his work as an actor and director, is set to release a new book later this year. The book is a collection of essays on a variety of topics, including politics and culture.',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51p85zDJjXL._SX331_BO1,204,203,200_.jpg',
        author: 'Maria Rodriguez',
        date: '2023-03-06'
      }
    ],
  },
  {
    category: 'business',
    articles: [
      {
        title: 'Tesla posts record quarterly profits',
        description: 'Tesla reported a record profit of $1.62 billion in Q4 2022, up from $331 million in the same period last year. The company attributed the strong results to increased production and deliveries of its electric vehicles.',
        image: 'https://www.tesla.com/sites/default/files/blog_images/model-s-plaid-hero.jpg',
        author: 'Sarah Lee',
        date: '2023-01-26'
      },
      {
        title: 'Amazon acquires video game studio',
        description: 'Amazon has acquired video game development studio Double Helix Games as part of its ongoing push into the gaming industry. The acquisition is expected to strengthen Amazon\'s game development capabilities and support its cloud gaming service, Luna.',
        image: 'https://cdn.vox-cdn.com/thumbor/tUM8jK93u9X9DlIgKNWjrkL1vzE=/0x0:3840x2160/1200x800/filters:focal(1666x587:2298x1219)/cdn.vox-cdn.com/uploads/chorus_image/image/69421744/luna.0.png',
        author: 'Tom Johnson',
        date: '2023-03-01'
      },
      {
        title: 'Google announces new tools for small businesses',
        description: 'Google has launched a new suite of tools to help small businesses improve their online presence and reach more customers. The tools include a free website builder, a mobile app, and a range of marketing and analytics features.',
        image: 'https://cdn.vox-cdn.com/thumbor/vc_G_Td39ZV8CQDQ2Pj_VRyapuA=/0x0:2000x1334/1200x800/filters:focal(840x465:1160x785)/cdn.vox-cdn.com/uploads/chorus_image/image/69401701/GoogleSmallBiz.0.png',
        author: 'Jennifer Kim',
        date: '2023-02-18'
      },
    ],
  },
  {
    category: 'Technology',
    articles: [
    {
        title: 'Google announces new Pixel 6 smartphone with Tensor chip',
        description: 'Google has unveiled the Pixel 6 and Pixel 6 Pro, featuring their new custom Tensor chip and improved camera system.',
        image: 'https://cdn.vox-cdn.com/thumbor/GvCTeLIRW8KEMiKyzQ2JzvZfK7M=/0x0:2040x1360/920x613/filters:focal(892x441:1180x729):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71184868/acastro_201025_1777_0001.0.jpg',
        author: 'Dieter Bohn',
        date: '2021-10-19'
      },
      {
        title: 'Tesla unveils new Cybertruck with more than 500-mile range',
        description: 'Tesla CEO Elon Musk has unveiled the company\'s new Cybertruck, which features an angular design and is set to be available for purchase in 2022.',
        image: 'https://cdn.vox-cdn.com/thumbor/5n5l7CtOaEYm9P-ysvFd8JlWDCw=/0x0:2040x1360/920x613/filters:focal(864x433:1184x753):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65852728/akrales_191123_3666_0018.0.jpg',
        author: 'Andrew J. Hawkins',
        date: '2019-11-22'
      },
      {
        title: 'Apple introduces new AirPods Pro with noise cancellation',
        description: 'Apple has announced the new AirPods Pro, featuring noise cancellation and a new design with replaceable ear tips.',
        image: 'https://cdn.vox-cdn.com/thumbor/4yTTk1I4tV4Dlv_6_xurS9A3JO8=/0x0:2040x1360/920x613/filters:focal(892x515:1180x803):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65456804/bokhari_191028_3811_0006.0.jpg',
        author: 'Nilay Patel',
        date: '2019-10-28'
      }
    ],
  },
  {
    category: 'health',
    articles: [
      {
        title: 'Study finds that sleep is essential for maintaining a healthy immune system',
        description: 'A new study published in the journal Science Advances suggests that getting enough sleep is crucial for maintaining a strong and healthy immune system. The study found that lack of sleep can weaken the immune system and make individuals more susceptible to illnesses and diseases.',
        image: 'https://www.sleepfoundation.org/wp-content/uploads/2021/01/GettyImages-1164082571.jpg',
        author: 'Sarah Lee',
        date: '2023-03-08'
      },
      {
        title: 'How to maintain a healthy diet while working from home',
        description: 'With more people working from home, it can be challenging to maintain a healthy diet. However, there are simple steps you can take to ensure that you are eating nutritious and balanced meals. Some tips include meal planning, cooking in bulk, and having healthy snacks on hand.',
        image: 'https://via.placeholder.com/400x250',
        author: 'John Doe',
        date: '2023-03-07'
      },
      {
        title: 'New research suggests that drinking green tea may help improve brain function',
        description: 'A new study published in the journal Nutrients has found that drinking green tea may have cognitive benefits. The study found that green tea consumption was associated with improved cognitive function and a reduced risk of cognitive decline in older adults.',
        image: 'https://www.healthline.com/hlcmsresource/images/AN_images/green-tea-benefits-1296x728-feature.jpg',
        author: 'Jane Smith',
        date: '2023-03-06'
      }
    ],
  },
  {
    category: 'science',
    articles: [
      {
        title: 'NASA’s Perseverance rover collects first Mars rock sample',
        description: 'NASA’s Perseverance rover has successfully collected its first rock sample from Mars. The sample is expected to provide important insights into the history of the red planet.',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/211006171722-nasa-perseverance-rover-mars-1006-super-tease.jpg',
        author: 'Sarah Johnson',
        date: '2022-09-06'
      },
      {
        title: "New study shows promising results for Alzheimer’s treatment",
        description: 'A new study has shown promising results for a potential treatment for Alzheimer’s disease. The treatment targets a protein called tau, which is believed to play a key role in the development of the disease.',
        image: 'https://www.alzheimers.net/wp-content/uploads/2013/11/Preventing-Alzheimers.jpg',
        author: 'David Lee',
        date: '2022-09-01'
      },
      {
        title: 'Scientists discover new species of dinosaur in Argentina',
        description: 'A team of scientists has discovered a new species of dinosaur in Argentina. The dinosaur is believed to have lived around 140 million years ago and is thought to be an early member of the group that includes the long-necked sauropods.',
        image: 'https://www.sciencenews.org/wp-content/uploads/2022/02/030922_cz_dinosaur-discovery_feat-1028x579.jpg',
        author: 'Rachel Chen',
        date: '2022-08-28'
      },
    ],
  },
  {
    category: 'environment',
    articles: [
      {
        title: 'Scientists discover new species of jellyfish in the Arctic',
        description: 'A team of scientists has discovered a new species of jellyfish in the Arctic. The jellyfish, named Cyanea capillata arctica, has a unique set of characteristics that differentiate it from other jellyfish species. It is also the first jellyfish to be found in the Arctic with this specific set of traits.',
        image: 'https://www.hakaimagazine.com/wp-content/uploads/header-jellyfish-2.jpg',
        author: 'Sarah Lee',
        date: '2023-03-08'
      },
      {
        title: 'How deforestation is affecting biodiversity in the Amazon rainforest',
        description: 'Deforestation is one of the main causes of biodiversity loss in the Amazon rainforest. A new study has found that deforestation not only reduces the number of species in the region, but it also alters their interactions with each other, which can have cascading effects throughout the ecosystem.',
        image: 'https://www.nationalgeographic.com/content/dam/environment/2019/03/amazon-rainforest-deforestation/01-amazon-deforestation-nationalgeographic_1429469.jpg',
        author: 'David Wong',
        date: '2023-03-07'
      },
      {
        title: 'The impact of plastic pollution on marine life',
        description: 'Plastic pollution is having a devastating impact on marine life around the world. A recent study found that over 700 species of marine animals are affected by plastic debris, with some species at risk of extinction. The study also found that plastic pollution can lead to the spread of harmful bacteria and other diseases.',
        image: 'https://www.sciencenews.org/wp-content/uploads/2020/09/090920_kc_plastic-free_feat-1028x579.jpg',
        author: 'Karen Chen',
        date: '2023-03-06'
      },
    ],
  },
];

var search = '';
$('#search').on('click', function () {
  console.log($('#select').val());
  for (const iterator of newsData) {
    if (iterator.category == $('#select').val()) {
      for (const iterato of iterator.articles) {
        $('#news-articles').append(
          "<div class ='article' >" +
            '<p>' +
            iterato.title +
            '</p>' +
            '<p>' +
            iterato.description +
            '</p>' +
            '<p>' +
            iterato.date +
            '</p>' +
            '<p>' +
            iterato.author +
            '</p>' +
            "<img src='" +
            iterato.image +
            "'/>" +
            '</div>'
        );
      }
    }
  }
});

function add(){
  var readMore = document.getElementById('bech-nzid');
var moreText = document.getElementById('ezyeda');
readMore.addEventListener('click', function() {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    readMore.innerHTML = 'Read Less';
  } else {
    moreText.style.display = 'none';
    readMore.innerHTML = 'Read More';
  }
});
}
function add2(){
  var readMore = document.getElementById('bech-nziid');
var moreText = document.getElementById('ezyeda2');
readMore.addEventListener('click', function() {
  if (moreText.style.display === 'none') {
    moreText.style.display = 'block';
    readMore.innerHTML = 'Read Less';
  } else {
    moreText.style.display = 'none';
    readMore.innerHTML = 'Read More';
  }
});
}

