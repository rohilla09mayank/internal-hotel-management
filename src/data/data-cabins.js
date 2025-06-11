import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 280,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "A peaceful lakeside escape perfect for couples. Featuring rustic charm with a modern twist, this cabin includes a queen-sized bed, cozy fireplace, and a private deck overlooking serene waters. Ideal for romantic weekends or quiet reflection.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 330,
    discount: 30,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Tucked away in the woods, The Hideaway offers intimacy and comfort for two. Enjoy stylish interiors, a luxurious hot tub, and a fully-equipped kitchen. Perfect for celebrating anniversaries or escaping city life.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 310,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Designed for small families or friends, Forest Nook blends comfort with convenience. With two bedrooms, a shared living space, and a warm wooden aesthetic, it’s a charming base for nature hikes and bonfire nights.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 480,
    discount: 40,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Positioned for breathtaking views, Sunset Point offers elevated living with expansive windows, a luxe kitchen, and a scenic patio. Great for families who love sunsets, nature, and upscale amenities.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 370,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "The Cedar Haven combines rustic aesthetics with spacious functionality. Accommodating up to 6, it’s ideal for families or groups with kids. Comes with a full kitchen, shared lounge area, and a deck for outdoor meals.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 850,
    discount: 150,
    image: imageUrl + "cabin-006.jpg",
    description:
      "A luxurious option for mid-sized groups, Grand Oak Lodge boasts elegant decor, two fireplaces, high ceilings, and an open-plan living area. With spa-style bathrooms and a hot tub deck, comfort meets class here.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 620,
    discount: 80,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Spacious and refined, Woodland Villa caters to larger families or group gatherings. Multiple bedrooms, a large dining area, and entertainment options make it ideal for getaways and reunions in nature.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1450,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "The ultimate luxury retreat, Mountain Majesty is designed for grandeur and comfort. With five bedrooms, a gourmet kitchen, and panoramic mountain views, it’s a favorite for corporate retreats and family celebrations alike.",
  },
];
