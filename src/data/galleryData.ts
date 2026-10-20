export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  alt: string;
  serviceId: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "striped-lawn",
    title: "Freshly Mown Striped Lawn",
    category: "Lawn Care",
    location: "Oswestry, Shropshire",
    description: "Precision cylinder-stripe grass cutting with neat mechanical edging along herbaceous border.",
    imageUrl: "/src/assets/images/gallery_striped_lawn_1792525421628.jpg",
    alt: "Pristine green striped lawn in Shropshire residential garden with neat flower borders",
    serviceId: "lawn-mowing"
  },
  {
    id: "box-hedges",
    title: "Neatly Trimmed Box Hedges",
    category: "Hedge Trimming",
    location: "Shrewsbury, Shropshire",
    description: "Formal box hedge shaping and topiary line trimming to maintain sharp architectural structure.",
    imageUrl: "/src/assets/images/gallery_hedge_trimming_1792525423407.jpg",
    alt: "Crisply pruned and trimmed box hedges along gravel pathway in Shropshire",
    serviceId: "hedge-trimming"
  },
  {
    id: "cleaned-patio",
    title: "Cleaned Patio & Pathways",
    category: "Jet Washing",
    location: "Ellesmere, Shropshire",
    description: "High-pressure jet wash restoration removing years of algae, lichen, and stubborn dirt from sandstone pavers.",
    imageUrl: "/src/assets/images/gallery_patio_jetwash_1792525422165.jpg",
    alt: "Clean stone patio flagstones and winding garden walkway after pressure washing",
    serviceId: "jet-washing"
  },
  {
    id: "garden-clearance",
    title: "Completed Garden Clearance",
    category: "Garden Clearance",
    location: "Wem, Shropshire",
    description: "Full plot cutback, bramble and weed root removal, stone edging definition, and clean organic mulch dressing.",
    imageUrl: "/src/assets/images/gallery_garden_clearance_1792525422614.jpg",
    alt: "Cleaned, weed-free garden bed with rich dark mulch and tidy stone curb edge",
    serviceId: "garden-clearance"
  },
  {
    id: "fencing-repair",
    title: "Repaired Garden Fence Panel",
    category: "Fencing & Gates",
    location: "Whitchurch, Shropshire",
    description: "Heavy-duty pressure-treated lap fencing panels installed with secure concrete posts and custom timber latch gate.",
    imageUrl: "/src/assets/images/gallery_fencing_repair_1792525423677.jpg",
    alt: "Newly erected wooden featherboard garden fence panels and sturdy garden gate",
    serviceId: "fencing-repairs"
  },
  {
    id: "flower-beds",
    title: "Healthy Planted Flower Beds",
    category: "Property Upkeep",
    location: "Church Stretton, Shropshire",
    description: "Restructured perennial beds featuring vibrant hydrangeas, lavender, salvia, and moisture-retaining compost top-dressing.",
    imageUrl: "/src/assets/images/gallery_flower_beds_1792525424286.jpg",
    alt: "Lush flowering perennial garden bed with purple blooms and manicured lawn edge",
    serviceId: "property-maintenance"
  }
];

export default galleryItems;
