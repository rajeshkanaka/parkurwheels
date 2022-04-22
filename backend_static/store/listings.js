const listings = {
  Deccan: [
    {
      id: 201,
      title: "Deccan-Rani Zhanshi Chowk",
      images: [{ fileName: "rani" }],
      price: {
        Bike: 10,
        Car: 35,
        SUV: 40
      },
      categoryId: 5,
      userId: 1,
      location: {
        latitude: 18.52276510905384, 
        longitude: 73.84817638782893,
      },
    },
    {
      id: 3,
      title: "Deccan-Bhandarkar Road",
      images: [{ fileName: "bhandarkar" }],
      categoryId: 1,
      price: {
        Bike: 5,
        Car: 25,
        SUV: 45
      },
      userId: 2,
      location: {
        latitude: 18.517824708915732, 
        longitude: 73.84014333680373,
      },
    },
    {
      id: 1,
      title: "Deccan-Prabhat Road",
      description:
        "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
      images: [
        { fileName: "prabhat" },
        { fileName: "prabhat" },
        { fileName: "prabhat" },
      ],
      price: {
        Bike: 10,
        Car: 30,
        SUV: 45
      },
      categoryId: 1,
      userId: 1,
      location: {
        latitude: 18.51413134307149, 
        longitude: 73.83782796787258,
      },
    },
    {
      id: 2,
      title: "Deccan-Garware Bridge",
      images: [{ fileName: "garware" }],
      categoryId: 5,
      price: {
        Bike: 15,
        Car: 35,
        SUV: 40
      },
      userId: 2,
      location: {
        latitude: 18.515671704805918, 
        longitude: 73.84211723930585,
      },
    },
    {
      id: 102,
      title: "Deccan-FC Road",
      images: [{ fileName: "fcroad" }],
      price: {
        Bike: 5,
        Car: 40,
        SUV: 50
      },
      categoryId: 3,
      userId: 1,
      location: {
        latitude: 18.520820928863454, 
        longitude: 73.84108973056166,
      },
    },
    {
      id: 101,
      title: "Deccan-Starbucks",
      images: [{ fileName: "starbuck" }],
      price: {
        Bike: 15,
        Car: 30,
        SUV: 40
      },
      categoryId: 3,
      userId: 1,
      location: {
        latitude: 18.522601152258467, 
        longitude: 73.8411850722622,
      },
    },
    {
      id: 4,
      title: "Deccan-Modern College",
      description: "No rips no stains no odors",
      images: [{ fileName: "modern" }],
      categoryId: 1,
      price: {
        Bike: 10,
        Car: 20,
        SUV: 25
      },
      userId: 2,
      location: {
        latitude: 18.526357770908522, 
        longitude: 73.8453384135396,
      },
    },
    {
      id: 6,
      title: "Deccan-BMCC",
      images: [{ fileName: "bmcc" }],
      categoryId: 5,
      price: {
        Bike: 15,
        Car: 30,
        SUV: 45
      },
      userId: 2,
      location: {
        latitude: 18.52144020681394, 
        longitude: 73.835117439306,
      },
    },
  ],
  Kothrud: [
    {
      id: 1,
      title: "Kothrud-Yashwantrao Chavan Natyagruha",
      images: [{ fileName: "yashwantrao" }],
      categoryId: 5,
      price: {
        Bike: 10,
        Car: 30,
        SUV: 45
      },
      userId: 2,
      location: {
        latitude: 18.50284941014059, 
        longitude: 73.81238515279969,
      },
    },
    {
      id: 2,
      title: "Kothrud-Maree's Art, Science And Commerce College",
      images: [{ fileName: "MAREE" }],
      categoryId: 5,
      price: {
        Bike: 5,
        Car: 25,
        SUV: 35
      },
      userId: 2,
      location: {
        latitude: 18.516016407784758, 
        longitude: 73.8151565393059,
      },
    },
    {
      id: 3,
      title: "Kothrud-Vanaz Co-operative Housing Society",
      images: [{ fileName: "vanaj" }],
      categoryId: 5,
      price: {
        Bike: 10,
        Car: 25,
        SUV: 40
      },
      userId: 2,
      location: {
        latitude: 18.50481915454486, 
        longitude: 73.80567859882372,
      },
    },
    {
      id: 4,
      title: "Kothrud-Klaus Multiparking Systems Pvt. Ltd",
      images: [{ fileName: "bhusary" }],
      categoryId: 5,
      price: {
        Bike: 20,
        Car: 35,
        SUV: 45
      },
      userId: 2,
      location: {
        latitude: 18.509105030632867, 
        longitude: 73.79062072581183,
      },
    },
  ]
};

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = (area) => listings[area];

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
