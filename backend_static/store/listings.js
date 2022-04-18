const listings = [
  {
    id: 201,
    title: "Deccan-Rani Zhanshi Chowk",
    images: [{ fileName: "rani" }],
    price: 30,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Deccan-Bhandarkar Road",
    images: [{ fileName: "bhandarkar" }],
    categoryId: 1,
    price: 20,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
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
    price: 20,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Deccan-Garware Bridge",
    images: [{ fileName: "garware" }],
    categoryId: 5,
    price: 30,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Deccan-FC Road",
    images: [{ fileName: "fcroad" }],
    price: 30,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Deccan-Starbucks",
    images: [{ fileName: "starbuck" }],
    price: 25,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Deccan-Modern College",
    description: "No rips no stains no odors",
    images: [{ fileName: "modern" }],
    categoryId: 1,
    price: 15,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Deccan-BMCC",
    images: [{ fileName: "bmcc" }],
    categoryId: 5,
    price: 15,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
