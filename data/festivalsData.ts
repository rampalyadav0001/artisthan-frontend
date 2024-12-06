// festivals.ts
type minorData = {
  name: string;
  image: any;
};

export type Data = {
  name: string;
  image: any;
  related_minor_festivals: minorData[];
};

export const Festivals: Data[] = [
  {
    name: "Diwali",
    image: "https://example.com/images/diwali.jpg",
    related_minor_festivals: [
      {
        name: "Dhanteras",
        image: "https://example.com/images/dhanteras.jpg",
      },
      {
        name: "Naraka Chaturdashi",
        image: "https://example.com/images/naraka-chaturdashi.jpg",
      },
      {
        name: "Govardhan Puja",
        image: "https://example.com/images/govardhan-puja.jpg",
      },
      {
        name: "Bhai Dooj",
        image: "https://example.com/images/bhai-dooj.jpg",
      },
    ],
  },
  {
    name: "Holi",
    image: "https://example.com/images/holi.jpg",
    related_minor_festivals: [
      {
        name: "Lathmar Holi",
        image: "https://example.com/images/lathmar-holi.jpg",
      },
      {
        name: "Rang Panchami",
        image: "https://example.com/images/rang-panchami.jpg",
      },
    ],
  },
  {
    name: "Durga Puja",
    image: "https://example.com/images/durga-puja.jpg",
    related_minor_festivals: [
      {
        name: "Navratri",
        image: "https://example.com/images/navratri.jpg",
      },
      {
        name: "Saraswati Puja",
        image: "https://example.com/images/saraswati-puja.jpg",
      },
    ],
  },
  {
    name: "Ganesh Chaturthi",
    image: "https://example.com/images/ganesh-chaturthi.jpg",
    related_minor_festivals: [
      {
        name: "Anant Chaturdashi",
        image: "https://example.com/images/anant-chaturdashi.jpg",
      },
    ],
  },
  {
    name: "Janmashtami",
    image: "https://example.com/images/janmashtami.jpg",
    related_minor_festivals: [
      {
        name: "Dahi Handi",
        image: "https://example.com/images/dahi-handi.jpg",
      },
    ],
  },
  {
    name: "Raksha Bandhan",
    image: "https://example.com/images/raksha-bandhan.jpg",
    related_minor_festivals: [],
  },
  {
    name: "Pongal",
    image: "https://example.com/images/pongal.jpg",
    related_minor_festivals: [
      {
        name: "Bhogi",
        image: "https://example.com/images/bhogi.jpg",
      },
      {
        name: "Mattu Pongal",
        image: "https://example.com/images/mattu-pongal.jpg",
      },
    ],
  },
  {
    name: "Onam",
    image: "https://example.com/images/onam.jpg",
    related_minor_festivals: [
      {
        name: "Vishu",
        image: "https://example.com/images/vishu.jpg",
      },
    ],
  },
  {
    name: "Makar Sankranti",
    image: "https://example.com/images/makar-sankranti.jpg",
    related_minor_festivals: [
      {
        name: "Lohri",
        image: "https://example.com/images/lohri.jpg",
      },
    ],
  },
  {
    name: "Eid-ul-Fitr",
    image: "https://example.com/images/eid-ul-fitr.jpg",
    related_minor_festivals: [
      {
        name: "Chand Raat",
        image: "https://example.com/images/chand-raat.jpg",
      },
    ],
  },
  {
    name: "Christmas",
    image: "https://example.com/images/christmas.jpg",
    related_minor_festivals: [
      {
        name: "Good Friday",
        image: "https://example.com/images/good-friday.jpg",
      },
      {
        name: "Easter",
        image: "https://example.com/images/easter.jpg",
      },
    ],
  },
  {
    name: "Guru Nanak Jayanti",
    image: "https://example.com/images/guru-nanak-jayanti.jpg",
    related_minor_festivals: [],
  },
];
