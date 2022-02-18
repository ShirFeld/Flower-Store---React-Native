import Category from '../models/Categories';
import Flower from '../models/flower';

export const CATEGORIES = [
  new Category("c1", "Red Flowers", "https://cdn.pixabay.com/photo/2016/11/29/06/20/red-1867767_960_720.jpg"),
  new Category("c2", "Blue Flowers", "https://cdn.pixabay.com/photo/2020/01/12/03/08/orchids-4759196_960_720.jpg"),
  new Category("c3", "White Flowers", "https://cdn.pixabay.com/photo/2018/06/22/02/26/chamomile-3489847_960_720.jpg"),
  new Category("c4", "Pink Flowers", "https://cdn.pixabay.com/photo/2017/04/23/20/36/tulips-2254970_960_720.jpg"),
  new Category("c5", "Yellow Flowers", "https://cdn.pixabay.com/photo/2015/12/08/19/08/tulips-1083572_960_720.jpg"),
  new Category("c6", " Head Bouquets ", "https://media.istockphoto.com/photos/floral-background-top-view-picture-id669497978?s=612x612"),
];

export const FLOWERS = [
  new Flower(
    'f1',
    ["c1"], // Array of red flowers
    "Rose",
    "15₪",
    "60₪",
    "https://www.wallpapers4u.org/wp-content/uploads/red_rose_drops_rose_76464_1920x1080.jpg",
    "The most beautiful bouquet of flowers.",
    [
      'צוות החנות נחמד מאוד ושמח לעזור\n',
      'מרוצה מאוד\n',
      'מחירים נוחים לכל כיס\n',
    ],

  ),
  new Flower(
    'f16',
    ["c1"], // Array of red flowers
    "Anthurium",
    "10₪",
    "50₪",
    "https://mashtela-urbanit.co.il/images/stories/virtuemart/product/antorium_red.jpg",
    "Stunning flower pot ",
    [
      'עובדים נחמדים\n',
      'מחירים טובים\n',
      'עובדים מהר\n',
    ],

  ),
  new Flower(
    'f2',
    ["c1"], // Array of red flowers
    "Anemone",
    "10₪",
    "50₪",
    "https://falcha.co.il/wp-content/uploads/2020/02/%D7%9B%D7%9C%D7%A0%D7%99%D7%AA-%D7%90%D7%93%D7%95%D7%9E%D7%94-2.png",
    "Yow will get 10 Flowers and it will be amazing ",
    [
      'מחירים טובים ונוחים\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ],

  ),
  new Flower(
    "f3", // id
    ["c1"], // Array of red flowers
    "Asian light",
    "10₪",
    "60₪",
    "https://static.wixstatic.com/media/ff3a74_c1d7666936da477aace9c953023ebc59.jpg/v1/fill/w_304,h_438,al_c,q_80,usm_0.66_1.00_0.01/ff3a74_c1d7666936da477aace9c953023ebc59.webp",
    "We will prepare for you the most special bouquet that can be with this type of flower ",
    [
      'מגוון רחב של פרחים וזרים\n',
      'מנהלת נחמדה מאוד\n',
    ],

  ),
  new Flower(
    "f4",
    ['c2'],
    "Iris",
    "10₪",
    "60₪",
    "https://www.greendreams.co.il/wp-content/uploads/2019/09/%D7%90%D7%99%D7%A8%D7%95%D7%A1-%D7%9B%D7%A8%D7%AA%D7%99-%D7%A4%D7%A8%D7%97-1024x966.jpg",
    "uniqe flower",
    [
      'מחירים טובים ונוחים\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ],
  ),
  new Flower(
    "f17",
    ['c2'],
    "Daisy",
    "10₪",
    "60₪",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Anag_arve2.jpg",
    "Beautiful flower",
    [
      'עובדים נחמדים\n',
      'מחירים טובים\n',
      'עובדים מהר\n',
    ],
  ),
  new Flower(
    "f5",
    ["c2"],
    "The mountain lupine",
    "10₪",
    "60₪",
    "https://anattour.co.il/wp-content/uploads/2016/09/IMG_20190202_111138-2-Copy.jpg",
    "unique flower",
    [
      'I ordered yesterday and received the same day, great service!\n',
      'השירות היה די איטי\n',
      'מחירים סבירים\n'
    ],
  ),
  new Flower(
    "f6",
    ["c2"],
    "Blue elderberry",
    "10₪",
    "60₪",
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Centaurea_cyanoides_10.JPG",
    "Hug flower",
    [
      'Make me a bouquet of flowers in five minutes! Satisfied and recommends\n',
      'השירות מתחת לכל ביקורת \n',
      'זרים יפים מאוד ומושקעים\n'
    ],

  ),
  new Flower(
    "f7",
    ["c3"],
    "A thorny sniper",
    "10₪",
    "60₪",
    "https://images1.ynet.co.il/PicServer5/2017/03/14/7648793/13.jpg",
    "2 colors in 1 ",
    [
      'חנות יפה וגדולה\n',
      'היינו אתמול בערב ונתנו לנו שירות ממש טוב, מרוצים מאוד \n',
      'פרחים יפים שנשארים הרבה זמן\n'
    ],
  ),

  new Flower(
    "f18",
    ["c3"],
    "Flower orchid",
    "10₪",
    "70₪",
    "https://www.casandra.co.il/wp-content/uploads/2020/04/449.jpg",
    "A delicate and beautiful flower ",
    [
      'חנות עם הרבה מבחר\n',
      'התקשרתי היום להזמין וכבר בערב התקשרו להגיד שמוכן - מרוצה אוד \n',

    ],
  ),
  new Flower(
    "f8",
    ["c3"],
    "Whisk milk",
    "10₪",
    "80₪",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRJz3YdlMCX8oe19eO8lxBUoF_cWMaqO9bA&usqp=CAU",
    "2 colors in 1 ",
    "Wowwwwwwww I will definitely be back again "
  ),
  new Flower(
    "f9",
    ["c3"],
    "Carrots deprived",
    "15₪",
    "65₪",
    "http://www.ynet.co.il/PicServer2/02022009/1922693/12_wa.jpg",
    "Beautiful bouquet of flowers.",
    "Good value for money"
  ),
  new Flower(
    "f10",
    ["c4"],
    "A large beetle sniper",
    "10₪",
    "95₪",
    "https://www.kalanit.org.il/wp-content/uploads/2020/08/1-%D7%93%D7%91%D7%95%D7%A8%D7%A0%D7%99%D7%AA-%D7%92%D7%93%D7%95%D7%9C%D7%94-%D7%A9%D7%9E%D7%A9%D7%99%D7%AA-12.4.13-%D7%90.%D7%A9%D7%99%D7%A4%D7%9E%D7%9F.jpg",
    "Looks like bee ",
    [
      'Wow grate service\n',
      'good price and nice stuff\n',
      'grate service\n',
    ],
  ),
  new Flower(
    "f19",
    ["c4"],
    "Japan Hakone",
    "10₪",
    "60₪",
    "http://tmyun.com/jpeg/yun_1840.jpg",
    "A beautiful pink flower",
    [
      'מחירים טובים ונוחים\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ],
  ),
  new Flower(
    "f11",
    ["c4"],
    "Cyclamen",
    "10₪",
    "70₪",
    "https://img.mako.co.il/2012/11/29/sade_c.jpg",
    "A protected flower ",
    " I will definitely be back again "
  ),
  new Flower(
    "f12",
    ["c4"],
    "The three-toothed orchid",
    "10₪",
    "75₪",
    "https://www.fromycamera.com/uploads/user_6854512956_s.jpg",
    "Beautiful flower.",
    "good price and nice stuff"
  ),
  new Flower(
    "f13",
    ["c5"],
    "Decorated chrysanthemum",
    "10₪",
    "60₪",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Harzit.JPG/210px-Harzit.JPG",
    "Amazing flower ",
    [
      'מחירים טובים ונוחים\n',
      'good price and nice stuff\n',
      'grate service\n',
    ],


  ),
  new Flower(
    "f14",
    ["c5"],
    "Large-fruited aphid",
    "10₪",
    "75₪",
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Astragalus_macrocarpus_in_Nahal_Tut_%284%29.jpg",
    " A special and beautiful bouquet",
    [
      'מחירים טובים ונוחים\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ],
  ),

  new Flower(
    "f20",
    ["c5"],
    "Beautiful yellow green flowerpot",
    "15₪",
    "80₪",
    "http://market.marmelada.co.il/images/detailed/5723/9418EC1D-75B8-417B-B4CA-0E82E5455362.jpeg",
    " Beautiful yellow green flowerpot",
    [
      "שיפר לי את היופי שבדירה\n",
      " I love it "
    ]


  ),
  new Flower(
    "f15",
    ["c5"],
    "The coastal night candle",
    "10₪",
    "60₪",
    "https://www.tiuli.com/image/8111ce0d5e2a755f5c306c6b24e48f45.jpg?&width=1080&height=0",
    "Beautiful flower.",
    [
      'מחירים טובים ונוחים\n',
      'good price and nice stuff\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ]

  ),


  new Flower(
    "f30",
    ["c6"],
    " Head wreath in purple and white ",
    "15₪",
    "100₪",
    "https://www.herzliya-flowers.co.il/pictures/products/105/product_105_124846PM.jpg",
    "Beautiful Head bouquet.",
    [
      'מחירים טובים ונוחים\n',
      'good price and nice stuff\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ]

  ),

  new Flower(
    "f31",
    ["c6"],
    "Head wreath in white and blue",
    "15₪",
    "110₪",
    "https://www.raanana-flowers.co.il/pictures/products/41/product_41_41226PM.jpg",
    "Beautiful Head bouquet.",
    [
      'מחירים טובים ונוחים\n',
      'good price and nice stuff\n',
      'צוות לא נחמד ולא נותן עזרה\n',
    ]

  ),

  new Flower(
    "f32",
    ["c6"],
    "  Head wreath for the bride ",
    "15₪",
    "90₪",
    "https://www.krayotflowers.co.il/pictures/products/57/product_57_42226PM.jpg",
    "Beautiful Head bouquet. ",
    [
      'מחירים טובים ונוחים\n',
      'good price and nice stuff\n',
      'צוות לא נחמד ולא נותן עזרה\n',
      'grate service\n'

    ]

  ),


  new Flower(
    "f40",
    ["c6"],
    " A colorful head wreath ",
    "15₪",
    "120₪",
    "https://ashdod.shop/wp-content/uploads/2021/07/P_20201224_125607.jpg",
    "Beautiful Head bouquet. ",
    [
      'good price and nice stuff\n',
      'Wow grate service\n',
      'grate service\n'
    ]

  ),


];