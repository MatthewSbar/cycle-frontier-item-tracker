import { ItemName, ItemRarity, Quest, Upgrade } from "./types";

export const quests: Quest[] = [
  {
    name: "Time to Punch In",
    campaign: "Korolev",
    parts: [
      {
        name: "Welcome to the Workforce",
        requires: null,
        deliverItems: [
          {
            item: "Nickel",
            quantity: 1,
          },
        ],
      },
      {
        name: "Sometimes violence IS the answer",
        requires: "Welcome to the Workforce",
        description: "Kill 3 Striders",
      },
      {
        name: "Spare Parts",
        requires: "Sometimes violence IS the answer",
        deliverItems: [
          {
            item: "Compound Sheets",
            quantity: 5,
          },
          {
            item: "Hydraulic Piston",
            quantity: 1,
          },
        ],
      },
      {
        name: "Contaminated Waters",
        requires: "Spare Parts",
        description:
          "Visit Water Facility. Kill 3 Creatures at Water Facility.",
      },
      {
        name: "Company Identity",
        requires: "Contaminated Waters",
        deliverItems: [
          {
            item: "Flawed Veltecite",
            quantity: 10,
          },
          {
            item: "Circuit Board",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "What a Tool!",
    campaign: "Korolev",
    parts: [
      {
        name: "Mineral Master",
        requires: "Company Identity",
        deliverItems: [
          {
            item: "Altered Nickel",
            quantity: 6,
          },
          {
            item: "Cloudy Veltecite",
            quantity: 7,
          },
        ],
      },
      {
        name: "Inevitable Automation",
        requires: "Mineral Master",
        deliverItems: [
          {
            item: "Compound Sheets",
            quantity: 10,
          },
          {
            item: "Ball Bearings",
            quantity: 5,
          },
        ],
      },
      {
        name: "Tools of the Trade",
        requires: "Inevitable Automation",
        description: "Kill 10 Rattlers with a Korolev weapon",
      },
      {
        name: "Very Fast Moving Parts",
        requires: "Tools of the Trade",
        dropItems: [
          {
            item: "Metallic Alloys",
            quantity: 3,
            dropLocation: "Swamp Camp",
          },
          {
            item: "Hydraulic Piston",
            quantity: 2,
            dropLocation: "Swamp Camp",
          },
        ],
      },
      {
        name: "Final Touches",
        requires: "Very Fast Moving Parts",
        deliverItems: [
          {
            item: "Titan Ore",
            quantity: 3,
          },
          {
            item: "Electronic Cables",
            quantity: 5,
          },
          {
            item: "Resin Gun",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Good Honest Work",
    campaign: "Korolev",
    parts: [
      {
        name: "Spring Cleaning",
        requires: "Company Identity",
        description: "Kill 3 Striders at Dig Site. Kill 1 Rattler at Dig Site",
      },
      {
        name: "Through the Optic Glass",
        requires: "Spring Cleaning",
        deliverItems: [
          {
            item: "Cloudy Veltecite",
            quantity: 7,
          },
          {
            item: "Optic Glass",
            quantity: 3,
          },
        ],
      },
      {
        name: "A Pinch of Pure Power",
        requires: "Through the Optic Glass",
        deliverItems: [
          {
            item: "Brittle Titan Ore",
            quantity: 7,
          },
          {
            item: "Pure Veltecite",
            quantity: 1,
          },
        ],
      },
      {
        name: "Aggressive Marketing",
        requires: "A Pinch of Pure Power",
        description: "Kill a player with a Korolev Weapon",
      },
      {
        name: "Miners' Strike",
        requires: "Aggressive Marketing",
        description: "Collect 3 miner cameras at the Dig Site.",
      },
      {
        name: "Zero Waste",
        requires: "Miners' Strike",
        deliverItems: [
          {
            item: "Shard Slicer",
            quantity: 1,
          },
          {
            item: "Zero Systems CPU",
            quantity: 5,
          },
        ],
      },
      {
        name: "For all the Trees",
        requires: "Zero Waste",
        description: "Kill 8 creatures in The Jungle",
      },
      {
        name: "From Above",
        requires: "For all the Trees",
        deliverItems: [
          {
            item: "Meteor Fragment",
            quantity: 5,
          },
          {
            item: "Focus Crystal",
            quantity: 5,
          },
        ],
      },
      {
        name: "Thick Skinned",
        requires: "From Above",
        description: "Kill 1 marauder",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Uncharted Territory",
    campaign: "Korolev",
    parts: [
      {
        name: "Uncharted Territory Part 1",
        requires: "Miners' Strike",
        description: "Visit Hay Fields. Kill 5 creatures at Hay Fields",
      },
      {
        name: "Uncharted Territory Part 2",
        requires: "Uncharted Territory Part 1",
        deliverItems: [
          {
            item: "Aluminum Scrap",
            quantity: 3,
          },
        ],
      },
      {
        name: "Uncharted Territory Part 3",
        requires: "Uncharted Territory Part 2",
        description: "Visit Nutrition Farms Warehouse.",
        deliverItems: [
          {
            item: "Brittle Titan Ore",
            quantity: 6,
          },
          {
            item: "Salvaged Insulation",
            quantity: 3,
          },
        ],
      },
      {
        name: "Uncharted Territory Part 4",
        requires: "Uncharted Territory Part 3",
        deliverItems: [
          {
            item: "Nutritional Bar",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Veltecite for the Masses",
    campaign: "Korolev",
    parts: [
      {
        name: "Active Scan",
        requires: "Spring Cleaning",
        deliverItems: [
          {
            item: "Clear Veltecite",
            quantity: 3,
          },
          {
            item: "Optic Glass",
            quantity: 5,
          },
          {
            item: "Circuit Board",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Titan Hunter",
    campaign: "Korolev",
    parts: [
      {
        name: "A Titanic Request",
        requires: "Through the Optic Glass",
        description: "Kill 1 Player",
        deliverItems: [
          {
            item: "Radio Equipment",
            quantity: 5,
          },
        ],
      },
      {
        name: "A Heavy Conscience",
        requires: "A Titanic Request",
        deliverItems: [
          {
            item: "Titan Ore",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Focussed on Crystals",
    campaign: "Korolev",
    parts: [
      {
        name: "Clear Focus",
        requires: "Thick Skinned",
        deliverItems: [
          {
            item: "Pure Focus Crystal",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "A Powerful Discovery",
    campaign: "Korolev",
    parts: [
      {
        name: "Site Seeing",
        requires: "Thick Skinned",
        description:
          "Visit Geothermal Plant. Visit Skeleton Observation. Visit Hay Fields.",
      },
      {
        name: "Stormbringer",
        requires: "Site Seeing",
        description:
          "Kill 15 Creatured with the PKR Maelstrom. Kill 1 Players with the PKR Maelstrom.",
      },
      {
        name: "The Missing Engineer",
        requires: "Stormbringer",
        description:
          "Find the missing engineer. Kill 3 creatures near the missing engineer. Deliver evidence of Letium.",
      },
      {
        name: "Rapid Gentrification",
        requires: "The Missing Engineer",
        description:
          "Kill 10 creatures at Starport. Kill 10 Creatures at Favela",
        deliverItems: [
          {
            item: "Spinal Base",
            quantity: 20,
          },
        ],
      },
      {
        name: "Supply Drop",
        requires: "Rapid Gentrification",
        dropItems: [
          {
            item: "Biological Sampler",
            quantity: 1,
            dropLocation: "East Collection Point",
          },
          {
            item: "Sample Container",
            quantity: 2,
            dropLocation: "East Collection Point",
          },
        ],
      },
      {
        name: "Messenger Service",
        requires: "Supply Drop",
        deliverItems: [
          {
            item: "Valuable Data Drive",
            quantity: 1,
          },
        ],
      },
      {
        name: "Clearing the Way",
        requires: "Messenger Service",
        description:
          "Kill 5 creatures at Greens Project. Kill 10 creatures at Pinnacle Labs",
      },
    ],
  },
  {
    name: "Time for More Work",
    campaign: "Korolev",
    parts: [
      {
        name: "Forest Clearing",
        requires: "Stormbringer",
        description:
          "Kill 3 Rattlers in the Jungle. Kill 1 Marauder in the Jungle.",
      },
      {
        name: "Time for More Work? Part 2",
        requires: "Forest Clearing",
        deliverItems: [
          {
            item: "Jewellery",
            quantity: 5,
          },
        ],
      },
      {
        name: "Show Them How It's Done",
        requires: "Time for More Work? Part 2",
        description: "Kill 2 Players with an SMG.",
      },
      {
        name: "A Pick Me Up",
        requires: "Show Them How It's Done",
        dropItems: [
          {
            item: "Restoration Shield (Green)",
            quantity: 1,
            dropLocation: "Gate C",
          },
          {
            item: "Medium Backpack",
            quantity: 1,
            dropLocation: "Gate C",
          },
        ],
      },
    ],
  },
  {
    name: "Research Costs",
    campaign: "Korolev",
    parts: [
      {
        name: "Shopping List",
        requires: "Clearing the Way",
        deliverItems: [
          {
            item: "Optic Glass",
            quantity: 5,
          },
          {
            item: "Rattler Skin",
            quantity: 5,
          },
          {
            item: "Portable Lab",
            quantity: 1,
          },
        ],
      },
      {
        name: "Don't Dig Too Deep",
        requires: "Shopping List",
        description: "Visit Dig Site. Kill 10 Creatures at Dig Site.",
        deliverItems: [
          {
            item: "Spinal Base",
            quantity: 20,
          },
        ],
      },
      {
        name: "Just a Call Away",
        requires: "Don't Dig Too Deep",
        dropItems: [
          {
            item: "Radio Equipment",
            quantity: 1,
            dropLocation: "Swamp Camp",
          },
          {
            item: "Radio Equipment",
            quantity: 1,
            dropLocation: "Main Office",
          },
          {
            item: "Radio Equipment",
            quantity: 1,
            dropLocation: "Comms Tower",
          },
        ],
      },
      {
        name: "Collaborative Research",
        requires: "Just a Call Away",
        description: "Visit Greens Prospect.",
        dropItems: [
          {
            item: "Clear Veltecite",
            quantity: 6,
            dropLocation: "Stockpile",
          },
          {
            item: "Pure Veltecite",
            quantity: 2,
            dropLocation: "Stockpile",
          },
        ],
      },
      {
        name: "Lab Heist",
        requires: "Collaborative Research",
        description: "Visit Waterfall Lab. Deliver 5 Letium Bio Samples",
      },
      {
        name: "It's All About Branding",
        requires: "Lab Heist",
        description: "Kill 30 Creatures or Players with a Korolev weapon.",
      },
      {
        name: "It's in the Blood",
        requires: "It's All About Branding",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 5,
          },
          {
            item: "Toxic Glands",
            quantity: 8,
          },
        ],
      },
      {
        name: "Fresh Meat",
        requires: "It's in the Blood",
        deliverItems: [
          {
            item: "Marauder Flesh",
            quantity: 3,
          },
          {
            item: "Rattler Eyes",
            quantity: 5,
          },
          {
            item: "Strider Flesh",
            quantity: 10,
          },
        ],
      },
      {
        name: "Trek for Data",
        requires: "Fresh Meat",
        description:
          "Visit Starport Landing Pad Uplink. Visit Skeleton Observation.",
        deliverItems: [
          {
            item: "Unique Data Drive",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    name: "In a Deep Dark Hole",
    campaign: "Korolev",
    parts: [
      {
        name: "In a Deep Dark Hole Part 1",
        requires: "Lab Heist",
        description: "Kill 10 Creatures",
      },
      {
        name: "In a Deep Dark Hole Part 2",
        requires: "In a Deep Dark Hole Part 1",
        description: "Collect 1 Chief Engineer's Personal Diary.",
      },
      {
        name: "In a Deep Dark Hole Part 3",
        requires: "In a Deep Dark Hole Part 2",
        dropItems: [
          {
            item: "Spine Briar",
            quantity: 5,
            dropLocation: "Korolev Island HQ",
          },
        ],
      },
      {
        name: "In a Deep Dark Hole Part 4",
        requires: "In a Deep Dark Hole Part 3",
        description: "Kill 3 Prospectors with Korolev Weapons",
      },
      {
        name: "In a Deep Dark Hole Part 5",
        requires: "In a Deep Dark Hole Part 4",
        description: "Visit Geologist. Collect 8 Tharis Iron Sample",
      },
      {
        name: "In a Deep Dark Hole Part 6",
        requires: "In a Deep Dark Hole Part 5",
        description:
          "Find the first Mining Machine. Find the second Mining Machine. Find the third Mining Machine.",
      },
      {
        name: "In a Deep Dark Hole Part 7",
        requires: "In a Deep Dark Hole Part 6",
        deliverItems: [
          {
            item: "Tharis Iron",
            quantity: 5,
          },
          {
            item: "Teratomorphic Crystal Core",
            quantity: 5,
          },
        ],
      },
      {
        name: "In a Deep Dark Hole Part 8",
        requires: "In a Deep Dark Hole Part 7",
        description:
          "Kill 5 Creatures at Sparkling Waters. Collect 1 Pure Tharis Iron Nugget",
      },
      {
        name: "In a Deep Dark Hole Part 9",
        requires: "In a Deep Dark Hole Part 8",
        deliverItems: [
          {
            item: "Pure Tharis Iron",
            quantity: 5,
          },
          {
            item: "Teratomorphic Crystal Core",
            quantity: 5,
          },
        ],
      },
      {
        name: "In a Deep Dark Hole Part 10",
        requires: "In a Deep Dark Hole Part 9",
        description:
          "Kill 5 Creatures at Korolev Decks. Kill 5 Creatures at The Descent. Kill 5 Creatures at Storm Pillar.",
      },
      {
        name: "In a Deep Dark Hole Part 11",
        requires: "In a Deep Dark Hole Part 10",
        description: "Collect 1 Mining Party Medical Files",
      },
      {
        name: "In a Deep Dark Hole Part 12",
        requires: "In a Deep Dark Hole Part 11",
        dropItems: [
          {
            item: "Letium",
            quantity: 12,
            dropLocation: "East Collection Point",
          },
          {
            item: "Letium",
            quantity: 12,
            dropLocation: "Gate C",
          },
        ],
      },
      {
        name: "In a Deep Dark Hole Part 13",
        requires: "In a Deep Dark Hole Part 12",
        description:
          "Visit the Storm Pillar on Tharis Island. Find The Tharis Files. Stash The Tharis Files in the Korolev Core Outpost Dead Drop",
      },
    ],
  },
  {
    name: "Crafting Better Bags",
    campaign: "Korolev",
    parts: [
      {
        name: "Order Refill",
        requires: "Just a Call Away",
        deliverItems: [
          {
            item: "Resin Gun",
            quantity: 5,
          },
          {
            item: "Print Resin",
            quantity: 2,
          },
        ],
      },
      {
        name: "Exotic Leathers",
        requires: "Order Refill",
        deliverItems: [
          {
            item: "Rattler Skin",
            quantity: 5,
          },
          {
            item: "Textiles",
            quantity: 6,
          },
          {
            item: "Salvaged Insulation",
            quantity: 10,
          },
        ],
      },
    ],
  },
  {
    name: "Heavy Construction",
    campaign: "Korolev",
    parts: [
      {
        name: "Building Blocks",
        requires: "Trek for Data",
        deliverItems: [
          {
            item: "Compound Sheets",
            quantity: 20,
          },
          {
            item: "Metallic Alloys",
            quantity: 15,
          },
          {
            item: "Smart Mesh",
            quantity: 5,
          },
        ],
      },
      {
        name: "Salvage Ops",
        requires: "Building Blocks",
        description:
          "Visit the Crashed Drill. Find the Old Drill Head. Delivery the Laser Drill Control Unit.",
      },
      {
        name: "Pattern Testing",
        requires: "Salvage Ops",
        description:
          "Kill 3 Players with a Shotgun. Kill 25 Striders with a Shotgun.",
      },
      {
        name: "Custom Rig",
        requires: "Pattern Testing",
        deliverItems: [
          {
            item: "Magnetic Field Stabilizer",
            quantity: 10,
          },
          {
            item: "Circuit Board",
            quantity: 10,
          },
          {
            item: "Co-TEC MultiTool",
            quantity: 5,
          },
        ],
      },
      {
        name: "Expensive Tastes",
        requires: "Custom Rig",
        description: "Kill 8 creatures at Pinaccle Labs",
        dropItems: [
          {
            item: "Pure Focus Crystal",
            quantity: 3,
            dropLocation: "Pinnacle Lab",
          },
          {
            item: "Pure Veltecite",
            quantity: 1,
            dropLocation: "Pinnacle Lab",
          },
        ],
      },
      {
        name: "Delicate Parts",
        requires: "Expensive Tastes",
        deliverItems: [
          {
            item: "Gyroscope",
            quantity: 1,
          },
          {
            item: "Miniature Reactor",
            quantity: 5,
          },
          {
            item: "Copper Wire",
            quantity: 15,
          },
        ],
      },
      {
        name: "This is Goodbye",
        requires: "Delicate Parts",
        deliverItems: [
          {
            item: "Osiris Scrip",
            quantity: 20,
          },
          {
            item: "Veltecite Heart",
            quantity: 1,
          },
          {
            item: "Old Currency",
            quantity: 8000,
          },
        ],
      },
      {
        name: "This isn't Science",
        requires: "This is Goodbye",
        description: "Kill 6 Players.",
      },
      {
        name: "Unlimited Power",
        requires: "This isn't Science",
        deliverItems: [
          {
            item: "Meteor Core",
            quantity: 2,
          },
        ],
      },
    ],
  },
  {
    name: "Crush Hazard",
    campaign: "Korolev",
    parts: [
      {
        name: "Tough as Nails",
        requires: "This is Goodbye",
        description: "Kill 1 Crusher.",
      },
    ],
  },
  {
    name: "The Test Run",
    campaign: "Korolev",
    parts: [
      {
        name: "The Test Run",
        requires: "Unlimited Power",
        deliverItems: [
          {
            item: "Letium",
            quantity: 15,
          },
        ],
      },
    ],
  },
  {
    name: "Your Civic Duty",
    campaign: "ICA",
    parts: [
      {
        name: "Simple Needs",
        requires: null,
        deliverItems: [
          {
            item: "Compound Sheets",
            quantity: 1,
          },
        ],
      },
      {
        name: "Don't Forget to Recycle",
        requires: "Simple Needs",
        deliverItems: [
          {
            item: "Hardened Metals",
            quantity: 2,
          },
          {
            item: "Spinal Base",
            quantity: 3,
          },
        ],
      },
      {
        name: "Animal Control",
        requires: "Don't Forget to Recycle",
        description: "Visit Lagoon. Kill 3 creatures at Lagoon",
      },
      {
        name: "Basic Needs",
        requires: "Animal Control",
        deliverItems: [
          {
            item: "Metallic Alloys",
            quantity: 3,
          },
          {
            item: "Circuit Board",
            quantity: 1,
          },
        ],
      },
      {
        name: "The Forester",
        requires: "Basic Needs",
        description:
          "Visit Woodcutter Camp. Kill 5 creatures at Woodcutter Camp.",
        deliverItems: [
          {
            item: "Azure Tree Bark",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Audiophiles Beware",
    campaign: "ICA",
    parts: [
      {
        name: "Audiophiles Beware Part 1",
        requires: "The Forester",
        dropItems: [
          {
            item: "Frag Grenade",
            quantity: 3,
            dropLocation: "Swamp Camp",
          },
        ],
      },
      {
        name: "Audiophiles Beware Part 2",
        requires: "Audiophiles Beware Part 1",
        deliverItems: [
          {
            item: "Copper Wire",
            quantity: 8,
          },
          {
            item: "Ball Bearings",
            quantity: 5,
          },
        ],
      },
      {
        name: "Audiophiles Beware Part 3",
        requires: "Audiophiles Beware Part 2",
        dropItems: [
          {
            item: "Radio Equipment",
            quantity: 1,
            dropLocation: "Swamp Camp",
          },
          {
            item: "Electronic Cables",
            quantity: 3,
            dropLocation: "Swamp Camp",
          },
          {
            item: "Fusion Cartridge Batteries",
            quantity: 3,
            dropLocation: "Swamp Camp",
          },
        ],
      },
    ],
  },
  {
    name: "Doing the Work",
    campaign: "ICA",
    parts: [
      {
        name: "SOS Sign",
        requires: "The Forester",
        description: "Find the SOS sign",
      },
      {
        name: "Old Friend",
        requires: "SOS Sign",
        description:
          "Enter the Water Facility Loot Room. Deliver the Sign of Life.",
      },
      {
        name: "Doing the Work Part 2",
        requires: "Old Friend",
        deliverItems: [
          {
            item: "Zero Systems CPU",
            quantity: 1,
          },
          {
            item: "Fusion Cartridge Batteries",
            quantity: 5,
          },
          {
            item: "Metallic Alloys",
            quantity: 5,
          },
        ],
      },
      {
        name: "Doing the Work Part 3",
        requires: "Doing the Work Part 2",
        description: "Visit Southeast Uplink.",
        deliverItems: [
          {
            item: "Uncommon Data Drive",
            quantity: 2,
          },
        ],
      },
      {
        name: "Doing the Work Part 4",
        requires: "Doing the Work Part 3",
        description: "Visit Comms Base.",
        dropItems: [
          {
            item: "Radio Equipment",
            quantity: 2,
            dropLocation: "Satellite Dish",
          },
          {
            item: "Circuit Board",
            quantity: 2,
            dropLocation: "Satellite Dish",
          },
        ],
      },
      {
        name: "The Stranded Prospector",
        requires: "Doing the Work Part 4",
        description: "Visit House on Stilts.",
        deliverItems: [
          {
            item: "Rare Data Drive",
            quantity: 3,
          },
        ],
      },
      {
        name: "Doing the Work Part 5",
        requires: "The Stranded Prospector",
        description: "Kill 4 Creatures at Power Plant.",
        deliverItems: [
          {
            item: "Fusion Cartridge Batteries",
            quantity: 8,
          },
        ],
      },
      {
        name: "Doing the Work Part 6",
        requires: "Doing the Work Part 5",
        description: "Visit the Power Facility Loot Room at Dig Site.",
        dropItems: [
          {
            item: "Valuable Data Drive",
            quantity: 1,
            dropLocation: "Main Office",
          },
          {
            item: "Miniature Reactor",
            quantity: 1,
            dropLocation: "Main Office",
          },
        ],
      },
    ],
  },
  {
    name: "Toxic Love",
    campaign: "ICA",
    parts: [
      {
        name: "Toxic Love Part 1",
        requires: "The Stranded Prospector",
        dropItems: [
          {
            item: "Rare Data Drive",
            quantity: 1,
            dropLocation: "Comms Tower",
          },
          {
            item: "Smoke Grenade",
            quantity: 4,
            dropLocation: "Comms Tower",
          },
        ],
      },
      {
        name: "Toxic Love Part 2",
        requires: "Toxic Love Part 1",
        deliverItems: [
          {
            item: "Toxic Glands",
            quantity: 3,
          },
          {
            item: "Metallic Alloys",
            quantity: 10,
          },
          {
            item: "Hydraulic Piston",
            quantity: 7,
          },
        ],
      },
    ],
  },
  {
    name: "Project Fireball",
    campaign: "ICA",
    parts: [
      {
        name: "Project Fireball Part 1",
        requires: "Doing the Work Part 6",
        deliverItems: [
          {
            item: "Meteor Fragment",
            quantity: 3,
          },
          {
            item: "Magnetic Field Stabilizer",
            quantity: 6,
          },
        ],
      },
      {
        name: "Project Fireball Part 2",
        requires: "Project Fireball Part 1",
        description:
          "Visit Osiris Wildlife Preserve. Visit Skeleton Observation.",
        deliverItems: [
          {
            item: "Co-TEC MultiTool",
            quantity: 3,
          },
        ],
      },
      {
        name: "Project Fireball Part 3",
        requires: "Project Fireball Part 2",
        description:
          "Visit Power Plant Office. Enter Power Plant Office. Deliver Notes on Meteor Experiment 1.",
      },
      {
        name: "Project Fireball Part 4",
        requires: "Project Fireball Part 3",
        description:
          "Enter Geothermal Plant Office. Deliver notes on Meteor Experiment - 2.",
      },
      {
        name: "Project Fireball Part 5",
        requires: "Project Fireball Part 4",
        description: "Kill 3 Players with an Assault Rifle",
        deliverItems: [
          {
            item: "Meteor Core",
            quantity: 3,
          },
        ],
      },
      {
        name: "Project Fireball Part 6",
        requires: "Project Fireball Part 5",
        description:
          "Kill 10 Creatures at the Lake. Kill 10 Creatures at Starport",
      },
      {
        name: "Project Fireball Part 7",
        requires: "Project Fireball Part 6",
        dropItems: [
          {
            item: "Miniature Reactor",
            quantity: 2,
            dropLocation: "Stockpile",
          },
          {
            item: "Circuit Board",
            quantity: 4,
            dropLocation: "Stockpile",
          },
          {
            item: "Copper Wire",
            quantity: 6,
            dropLocation: "Stockpile",
          },
        ],
      },
    ],
  },
  {
    name: "Race to the Bottom",
    campaign: "ICA",
    parts: [
      {
        name: "Race to the Bottom Part 1",
        requires: "Project Fireball Part 7",
        description:
          "Find the Colonist Group in the Cave of Stars. Find the Colonist Group in the Korolev Quarry. Find the Colonist Group in the Sparkling Water.",
      },
      {
        name: "Race to the Bottom Part 2",
        requires: "Race to the Bottom Part 1",
        description: "Kill 3 Creatures at Atrium. Collect 1 Colonist Item",
      },
      {
        name: "Race to the Bottom Part 3",
        requires: "Race to the Bottom Part 2",
        description:
          "Visit Osiris Holo-Map. Deposit 1 Tharis Caverns Holo-Map Tharis Caverns Holo-Map at Pinnacle Lab Dead Drop.",
      },
      {
        name: "Race to the Bottom Part 4",
        requires: "Race to the Bottom Part 3",
        description:
          "Kill 3 Marauders on Tharis Island during a Storm. Kill 3 Prospectors on Crescent Falls. Kill 3 Prospectors on Bright Sands.",
      },
      {
        name: "Race to the Bottom Part 5",
        requires: "Race to the Bottom Part 4",
        deliverItems: [
          {
            item: "Teratomorphic Crystal Core",
            quantity: 5,
          },
          {
            item: "Tharis Iron",
            quantity: 5,
          },
          {
            item: "Biological Sampler",
            quantity: 5,
          },
        ],
      },
      {
        name: "Race to the Bottom Part 6",
        requires: "Race to the Bottom Part 5",
        description: "Collect 1 Vintage Camera.",
      },
      {
        name: "Race to the Bottom Part 7",
        requires: "Race to the Bottom Part 6",
        description:
          "Kill 10 Creatures on Tharis Island. Kill 2 Prospectors on Tharis Island.",
      },
      {
        name: "Race to the Bottom Part 8",
        requires: "Race to the Bottom Part 7",
        description: "Collect 1 Osiris Door Fragment.",
      },
      {
        name: "Race to the Bottom Part 9",
        requires: "Race to the Bottom Part 8",
        dropItems: [
          {
            item: "Tharis Iron",
            quantity: 1,
            dropLocation: "Korolev Island HQ",
          },
        ],
      },
      {
        name: "Race to the Bottom Part 10",
        requires: "Race to the Bottom Part 9",
        description:
          "Visit Analysis Tool. Collect 1 Advanced Analysis Toolkit.",
      },
      {
        name: "Race to the Bottom Part 11",
        requires: "Race to the Bottom Part 10",
        description: "Kill 3 Prospectors with a Shotgun on Tharis Island.",
      },
      {
        name: "Race to the Bottom Part 12",
        requires: "Race to the Bottom Part 11",
        dropItems: [
          {
            item: "Derelict Explosives",
            quantity: 4,
            dropLocation: "Osiris Research Center",
          },
          {
            item: "Oil Tank",
            quantity: 12,
            dropLocation: "Osiris Research Center",
          },
          {
            item: "Derelict Explosives",
            quantity: 6,
            dropLocation: "Korolev Island HQ",
          },
        ],
      },
      {
        name: "Race to the Bottom Part 13",
        requires: "Race to the Bottom Part 12",
        description:
          "Visit Osiris Chief Engineer at The Pit. Collect 1 Osiris Engineer Scanner.",
      },
      {
        name: "Race to the Bottom Part 14",
        requires: "Race to the Bottom Part 13",
        description: "Kill 3 Prospectors with an ICA weapon on Tharis Island.",
        deliverItems: [
          {
            item: "Charged Tharis Iron Ingot",
            quantity: 5,
          },
        ],
      },
      {
        name: "Race to the Bottom Part 15",
        requires: "Race to the Bottom Part 14",
        deliverItems: [
          {
            item: "Oil Tank",
            quantity: 18,
          },
          {
            item: "Old Currency",
            quantity: 30000,
          },
        ],
      },
      {
        name: "Race to the Bottom Part 16",
        requires: "Race to the Bottom Part 15",
        description:
          "Visit Osiris Head Scientist. Collect 1 Osiris Helmet Recorder.",
      },
    ],
  },
  {
    name: "Working for the Community",
    campaign: "ICA",
    parts: [
      {
        name: "Working for the Community Part 1",
        requires: "Project Fireball Part 3",
        dropItems: [
          {
            item: "Pale Ivy Blossom",
            quantity: 5,
            dropLocation: "Fulfillment Center",
          },
          {
            item: "Jewellery",
            quantity: 3,
            dropLocation: "Fulfillment Center",
          },
          {
            item: "Old Currency",
            quantity: 5000,
            dropLocation: "Fulfillment Center",
          },
        ],
      },
      {
        name: "Working for the Community Part 2",
        requires: "Working for the Community Part 1",
        description:
          "Visit Greens Prospect. Kill 5 Creatures with a Sniper Rifle at Greens Prospect",
      },
      {
        name: "Working for the Community Part 3",
        requires: "Working for the Community Part 2",
        deliverItems: [
          {
            item: "Smart Mesh",
            quantity: 3,
          },
          {
            item: "Indigenous Fruit",
            quantity: 8,
          },
          {
            item: "Magic-GROW Fertilizer",
            quantity: 15,
          },
        ],
      },
    ],
  },
  {
    name: "Never Give Up",
    campaign: "ICA",
    parts: [
      {
        name: "Never Give Up Part 1",
        requires: "Project Fireball Part 5",
        description:
          "Visit Pumpkin Fields. Kill 10 Creatures at Pumpkin Fields.",
      },
      {
        name: "Never Give Up Part 2",
        requires: "Never Give Up Part 1",
        description:
          "Visit Geothermal Plant. Kill 2 players with an ICA weapon",
        deliverItems: [
          {
            item: "Sample Container",
            quantity: 5,
          },
        ],
      },
      {
        name: "Never Give Up Part 3",
        requires: "Never Give Up Part 2",
        description: "Kill 10 Creatures at Skeleton Observation Site",
        deliverItems: [
          {
            item: "Rattler Skin",
            quantity: 8,
          },
          {
            item: "Biological Sampler",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Private Business",
    campaign: "ICA",
    parts: [
      {
        name: "Private Business Part 1",
        requires: "Never Give Up Part 3",
        description: "Kill 3 Players with a Pistol",
      },
      {
        name: "Private Business Part 2",
        requires: "Private Business Part 1",
        description:
          "Kill 10 Creatures at Base Camp. Kill 10 Creatures at Power Plant. Kill 10 Creatures at Water Facility.",
      },
      {
        name: "Private Business Part 3",
        requires: "Private Business Part 2",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 5,
          },
          {
            item: "Charged Spinal Base",
            quantity: 10,
          },
        ],
      },
    ],
  },
  {
    name: "Back to Basics",
    campaign: "ICA",
    parts: [
      {
        name: "Back to Basics? Part 1",
        requires: "Never Give Up Part 3",
        dropItems: [
          {
            item: "Polymetallic Prefabricate",
            quantity: 10,
            dropLocation: "Nutrion Farms Office",
          },
          {
            item: "Resin Gun",
            quantity: 4,
            dropLocation: "Nutrion Farms Office",
          },
          {
            item: "Magnetic Field Stabilizer",
            quantity: 4,
            dropLocation: "Nutrion Farms Office",
          },
        ],
      },
      {
        name: "Back to Basics? Part 2",
        requires: "Back to Basics? Part 1",
        description: "Visit Starport Landing Pad Uplink",
        deliverItems: [
          {
            item: "Unique Data Drive",
            quantity: 3,
          },
        ],
      },
      {
        name: "Back to Basics? Part 3",
        requires: "Back to Basics? Part 2",
        description:
          "Visit the Abandoned Oil Field. Kill 5 creatures at Abandoned Oil Field. Deliver Old Oil Pump Parts.",
      },
      {
        name: "Back to Basics? Part 4",
        requires: "Back to Basics? Part 3",
        deliverItems: [
          {
            item: "Metallic Alloys",
            quantity: 20,
          },
          {
            item: "Hydraulic Piston",
            quantity: 12,
          },
          {
            item: "Shock Absorber",
            quantity: 5,
          },
        ],
      },
      {
        name: "Back to Basics? Part 5",
        requires: "Back to Basics? Part 4",
        description: "Kill 8 Marauders.",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 5,
          },
        ],
      },
      {
        name: "Back to Basics? Part 6",
        requires: "Back to Basics? Part 5",
        deliverItems: [
          {
            item: "Circuit Board",
            quantity: 15,
          },
          {
            item: "Shard Slicer",
            quantity: 6,
          },
          {
            item: "Master Unit CPU",
            quantity: 3,
          },
        ],
      },
      {
        name: "Back to Basics? Part 7",
        requires: "Back to Basics? Part 6",
        description: "Kill 5 Players with an ICA weapon.",
      },
      {
        name: "Back to Basics? Part 8",
        requires: "Back to Basics? Part 7",
        deliverItems: [
          {
            item: "Miniature Reactor",
            quantity: 5,
          },
          {
            item: "Smart Mesh",
            quantity: 6,
          },
          {
            item: "Gyroscope",
            quantity: 2,
          },
        ],
      },
    ],
  },
  {
    name: "An Eye for Oil",
    campaign: "ICA",
    parts: [
      {
        name: "An Eye for Oil Part 1",
        requires: "Back to Basics? Part 7",
        deliverItems: [
          {
            item: "Radio Equipment",
            quantity: 10,
          },
          {
            item: "Copper Wire",
            quantity: 9,
          },
          {
            item: "Pure Veltecite",
            quantity: 2,
          },
        ],
      },
      {
        name: "An Eye for Oil Part 2",
        requires: "An Eye for Oil Part 1",
        deliverItems: [
          {
            item: "Circuit Board",
            quantity: 10,
          },
          {
            item: "Miniature Reactor",
            quantity: 5,
          },
          {
            item: "Interactive Screen",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Put to the Test",
    campaign: "ICA",
    parts: [
      {
        name: "Put to the Test Part 1",
        requires: "An Eye for Oil Part 2",
        description: "Kill 1 Crusher",
      },
      {
        name: "Put to the Test Part 2",
        requires: "Put to the Test Part 1",
        deliverItems: [
          {
            item: "Oil Tank",
            quantity: 10,
          },
        ],
      },
    ],
  },
  {
    name: "The Community Needs You",
    campaign: "ICA",
    parts: [
      {
        name: "The Community Needs You Part 1",
        requires: "Back to Basics? Part 3",
        deliverItems: [
          {
            item: "Textiles",
            quantity: 5,
          },
          {
            item: "Shard Slicer",
            quantity: 1,
          },
          {
            item: "Miniature Reactor",
            quantity: 3,
          },
        ],
      },
      {
        name: "The Community Needs You Part 2",
        requires: "The Community Needs You Part 1",
        description:
          "Kill 3 Rattlers at Woodcutter Camp. Kill 3 Rattlers at Water Facility. Kill 3 Rattlers at Power Plant.",
      },
      {
        name: "The Community Needs You Part 3",
        requires: "The Community Needs You Part 2",
        deliverItems: [
          {
            item: "Rattler Skin",
            quantity: 10,
          },
          {
            item: "Hardened Bone Plates",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Dangerous Science",
    campaign: "Osiris",
    parts: [
      {
        name: "Prove your Worth",
        requires: null,
        description: "Kill 1 Strider.",
      },
      {
        name: "The Real Wetwork",
        requires: "Prove your Worth",
        deliverItems: [
          {
            item: "Waterweed Filament",
            quantity: 3,
          },
        ],
      },
      {
        name: "Fertile Grounds",
        requires: "The Real Wetwork",
        description: "Visit Swamp. Kill 5 Striders at Swamp.",
        deliverItems: [
          {
            item: "Spinal Base",
            quantity: 3,
          },
        ],
      },
      {
        name: "Tick-Tock",
        requires: "Fertile Grounds",
        description: "Kill 7 Blast Ticks.",
        deliverItems: [
          {
            item: "Brightcap Mushroom",
            quantity: 3,
          },
        ],
      },
      {
        name: "Papers, Please",
        requires: "Tick-Tock",
        deliverItems: [
          {
            item: "Rattler Skin",
            quantity: 1,
          },
          {
            item: "Strider Flesh",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Field Research",
    campaign: "Osiris",
    parts: [
      {
        name: "Field Research Part 1",
        requires: "Papers, Please",
        description:
          "Visit Science Campus. Kill 5 Creatures at Science Campus.",
        deliverItems: [
          {
            item: "Optic Glass",
            quantity: 3,
          },
        ],
      },
      {
        name: "Field Research Part 2",
        requires: "Field Research Part 1",
        description:
          "Visit Lake. Kill 7 Striders at Lake. Kill 3 Rattlers at Lake.",
      },
      {
        name: "Old Bones",
        requires: "Field Research Part 2",
        description: "Visit the archaeology Site. Deliver 3 Old Bones.",
      },
      {
        name: "Field Research Part 3",
        requires: "Old Bones",
        description: "Kill 1 Player with an Osiris weapon.",
      },
      {
        name: "Field Research Part 4",
        requires: "Field Research Part 3",
        dropItems: [
          {
            item: "Biological Sampler",
            quantity: 1,
            dropLocation: "Swamp Camp",
          },
          {
            item: "Weak Medkit",
            quantity: 5,
            dropLocation: "Waterfall Lab",
          },
        ],
      },
      {
        name: "Field Research Part 5",
        requires: "Field Research Part 4",
        description: "Visit Vaccine Labs. Kill 15 Creatures at Vaccine Labs.",
        deliverItems: [
          {
            item: "Pale Ivy Blossom",
            quantity: 3,
          },
        ],
      },
      {
        name: "Field Research Part 6",
        requires: "Field Research Part 5",
        description: "Kill 1 Players with an SMG.",
      },
      {
        name: "Field Research Part 7",
        requires: "Field Research Part 6",
        description: "Visit the Jungle. Kill 2 Rattlers in the Jungle.",
        deliverItems: [
          {
            item: "Rattler Eyes",
            quantity: 5,
          },
        ],
      },
      {
        name: "Extinct Creatures",
        requires: "Field Research Part 7",
        description:
          "Visit the Extinct Creatures Lab. Deliver the Warden Skull.",
      },
      {
        name: "Field Research Part 8",
        requires: "Extinct Creatures",
        description: "Visit Greens Prospect.",
        dropItems: [
          {
            item: "Resin Gun",
            quantity: 2,
            dropLocation: "Garage Office",
          },
        ],
      },
    ],
  },
  {
    name: "A Whole New Ecosystem",
    campaign: "Osiris",
    parts: [
      {
        name: "A Whole New Ecosystem Part 1",
        requires: "Field Research Part 4",
        description: "Visit Starport Landing Pad. Visit Pumpkin Fields.",
      },
      {
        name: "A Whole New Ecosystem Part 2",
        requires: "A Whole New Ecosystem Part 1",
        description: "Visit Fallen Tree.",
        deliverItems: [
          {
            item: "Pale Ivy Blossom",
            quantity: 3,
          },
        ],
      },
      {
        name: "A Whole New Ecosystem Part 3",
        requires: "A Whole New Ecosystem Part 2",
        description: "Visit Skeleton. Kill 5 Creatures at Skeleton.",
      },
    ],
  },
  {
    name: "Stimulating Developments",
    campaign: "Osiris",
    parts: [
      {
        name: "Stimulating Developments Part 1",
        requires: "Field Research Part 2",
        description: "Visit Waterfall Lab. Visit Vaccine Lab.",
        deliverItems: [
          {
            item: "Medical Supplies",
            quantity: 4,
          },
        ],
      },
      {
        name: "Stimulating Developments Part 2",
        requires: "Stimulating Developments Part 1",
        deliverItems: [
          {
            item: "Blue Runner Egg",
            quantity: 3,
          },
          {
            item: "Toxic Glands",
            quantity: 2,
          },
          {
            item: "Old Medicine",
            quantity: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Lost Knowledge",
    campaign: "Osiris",
    parts: [
      {
        name: "Lost Knowledge Part 1",
        requires: "Field Research Part 8",
        description: "Visit Nutrion Farms Processing.",
        deliverItems: [
          {
            item: "Rattler Skin",
            quantity: 6,
          },
          {
            item: "Waterweed Filament",
            quantity: 12,
          },
        ],
      },
      {
        name: "Crashed Osiris Freighter",
        requires: "Lost Knowledge Part 1",
        description:
          "Visit Crashed Ship. Deliver Flight Recorder. Kill 3 Creatures at Crashed Ship.",
      },
      {
        name: "Lost Knowledge Part 2",
        requires: "Crashed Osiris Freighter",
        description: "Visit Favela. Kill 2 Players with an Osiris Weapon.",
      },
      {
        name: "Lost Knowledge Part 3",
        requires: "Lost Knowledge Part 2",
        description:
          "Visit Cave south of Fallen Tree. Kill 5 Creatures near Mysterious Cave Entrance. Kill 5 Creatures at Forest Crystal Seal",
        deliverItems: [
          {
            item: "Clear Veltecite",
            quantity: 8,
          },
        ],
      },
      {
        name: "Lost Scientist",
        requires: "Lost Knowledge Part 3",
        description: "Find the lost scientist. Deliver his notebook.",
      },
    ],
  },
  {
    name: "The Progenitor Device",
    campaign: "Osiris",
    parts: [
      {
        name: "The Progenitor Device Part 1",
        requires: "Lost Scientist",
        description: "Investigate what happened to the Osiris Researchers",
      },
      {
        name: "The Progenitor Device Part 2",
        requires: "The Progenitor Device Part 1",
        description: "Kill 15 Creatures at Tharis Island.",
        deliverItems: [
          {
            item: "Spine Briar",
            quantity: 5,
          },
        ],
      },
      {
        name: "The Progenitor Device Part 3",
        requires: "The Progenitor Device Part 2",
        description:
          "Collect Korolev Data Drive #473-D. Collect Korolev Notes.",
      },
      {
        name: "The Progenitor Device Part 4",
        requires: "The Progenitor Device Part 3",
        description:
          "Visit Surveyor Pod 1. Visit Surveyor Pod 2. Visit Surveyor Pod 3.",
      },
      {
        name: "The Progenitor Device Part 5",
        requires: "The Progenitor Device Part 4",
        description: "Kill 1 Crusher at Jungle Thermal Ponds.",
        deliverItems: [
          {
            item: "Crusher Hide",
            quantity: 1,
            dropLocation: "Osiris Labs",
          },
        ],
      },
      {
        name: "The Progenitor Device Part 6",
        requires: "The Progenitor Device Part 5",
        deliverItems: [
          {
            item: "Spine Briar",
            quantity: 5,
            dropLocation: "Fulfillment Center",
          },
        ],
      },
      {
        name: "The Progenitor Device Part 7",
        requires: "The Progenitor Device Part 6",
        description:
          "Kill 5 Creatures at Cave of Stars. Collect 1 Mysterious Glowing Contraption.",
      },
      {
        name: "The Progenitor Device Part 8",
        requires: "The Progenitor Device Part 7",
        deliverItems: [
          {
            item: "Teratomorphic Crystal Core",
            quantity: 5,
          },
        ],
      },
      {
        name: "The Progenitor Device Part 9",
        requires: "The Progenitor Device Part 8",
        description:
          "Find the Cave Marking at Storm Pillar. Find the Cave Marking at The Descent. Find the Cave Marking in the Canyons.",
      },
      {
        name: "The Progenitor Device Part 10",
        requires: "The Progenitor Device Part 9",
        deliverItems: [
          {
            item: "Tharis Iron",
            quantity: 5,
          },
          {
            item: "Pure Tharis Iron",
            quantity: 1,
          },
        ],
      },
      {
        name: "The Progenitor Device Part 11",
        requires: "The Progenitor Device Part 10",
        description: "Kill 10 Creatures on Tharis Island during a Storm",
        deliverItems: [
          {
            item: "Charged Spinal Base",
            quantity: 5,
          },
          {
            item: "Glowy Brightcap Mushroom",
            quantity: 5,
          },
        ],
      },
      {
        name: "The Progenitor Device Part 12",
        requires: "The Progenitor Device Part 11",
        description: "Collect 5 Cultist Ritual Item.",
      },
      {
        name: "The Progenitor Device Part 13",
        requires: "The Progenitor Device Part 12",
        description: "Visit The Forge Console.",
      },
      {
        name: "The Progenitor Device Part 14",
        requires: "The Progenitor Device Part 13",
        description: "Kill 5 Prospectors.",
        deliverItems: [
          {
            item: "Tharis Iron Ingot",
            quantity: 1,
          },
        ],
      },
      {
        name: "The Progenitor Device Part 15",
        requires: "The Progenitor Device Part 14",
        description: "Visit The Forge. Collect 1 Cultist Scribblings.",
      },
      {
        name: "The Progenitor Device Part 16",
        requires: "The Progenitor Device Part 15",
        description: "Kill 10 Creatures at Crusher Caverns.",
        dropItems: [
          {
            item: "Savage Marauder Flesh",
            quantity: 3,
            dropLocation: "Server Room",
          },
          {
            item: "Mature Rattler Eyes",
            quantity: 5,
            dropLocation: "Server Room",
          },
        ],
      },
      {
        name: "The Progenitor Device Part 17",
        requires: "The Progenitor Device Part 16",
        deliverItems: [
          {
            item: "Huge Forged Backpack",
            quantity: 1,
          },
          {
            item: "Charged Tharis Iron Ingot",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Explosive Delivery",
    campaign: "Osiris",
    parts: [
      {
        name: "Explosive Delivery Part 1",
        requires: "Lost Scientist",
        deliverItems: [
          {
            item: "Derelict Explosives",
            quantity: 6,
          },
        ],
      },
      {
        name: "Frozen",
        requires: "Explosive Delivery Part 1",
        description: "Find the frozen scientist.",
      },
    ],
  },
  {
    name: "Laser Show",
    campaign: "Osiris",
    parts: [
      {
        name: "Laser Show Part 1",
        requires: "Frozen",
        deliverItems: [
          {
            item: "Fusion Cartridge Batteries",
            quantity: 8,
          },
          {
            item: "Metallic Alloys",
            quantity: 10,
          },
          {
            item: "Circuit Board",
            quantity: 8,
          },
        ],
      },
      {
        name: "Laser Show Part 2",
        requires: "Laser Show Part 1",
        deliverItems: [
          {
            item: "Optic Glass",
            quantity: 6,
          },
          {
            item: "Radio Equipment",
            quantity: 10,
          },
          {
            item: "Gyroscope",
            quantity: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Storm Rider",
    campaign: "Osiris",
    parts: [
      {
        name: "Storm Rider Part 1",
        requires: "Field Research Part 8",
        deliverItems: [
          {
            item: "Glowy Brightcap Mushroom",
            quantity: 10,
          },
        ],
      },
      {
        name: "Storm Rider Part 2",
        requires: "Storm Rider Part 1",
        description: "Kill 15 Creatures at Starport.",
      },
      {
        name: "Storm Rider Part 3",
        requires: "Storm Rider Part 2",
        dropItems: [
          {
            item: "Charged Spinal Base",
            quantity: 8,
            dropLocation: "Nutrion Farms Office",
          },
        ],
      },
    ],
  },
  {
    name: "The Needs of the One",
    campaign: "Osiris",
    parts: [
      {
        name: "The Needs of the One Part 1",
        requires: "Frozen",
        deliverItems: [
          {
            item: "Brightcap Mushroom",
            quantity: 25,
          },
          {
            item: "Azure Tree Bark",
            quantity: 12,
          },
          {
            item: "Magic-GROW Fertilizer",
            quantity: 10,
          },
        ],
      },
      {
        name: "The Needs of the One Part 2",
        requires: "The Needs of the One Part 1",
        deliverItems: [
          {
            item: "Waterweed Filament",
            quantity: 25,
          },
          {
            item: "Strider Flesh",
            quantity: 12,
          },
        ],
      },
      {
        name: "The Needs of the One Part 3",
        requires: "The Needs of the One Part 2",
        description: "Kill 5 Marauders.",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 3,
          },
        ],
      },
      {
        name: "The Needs of the One Part 4",
        requires: "The Needs of the One Part 3",
        description: "Kill 5 Players",
        deliverItems: [
          {
            item: "Dustbloom",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Everything is Crystals",
    campaign: "Osiris",
    parts: [
      {
        name: "Everything is Crystals Part 1",
        requires: "Laser Show Part 2",
        deliverItems: [
          {
            item: "Pure Veltecite",
            quantity: 3,
          },
          {
            item: "Clear Veltecite",
            quantity: 8,
          },
        ],
      },
      {
        name: "Everything is Crystals Part 2",
        requires: "Everything is Crystals Part 1",
        deliverItems: [
          {
            item: "Portable Lab",
            quantity: 1,
          },
          {
            item: "Focus Crystal",
            quantity: 5,
          },
          {
            item: "Sample Container",
            quantity: 8,
          },
        ],
      },
      {
        name: "Everything is Crystals Part 3",
        requires: "Everything is Crystals Part 2",
        description: "Visit Pinnacle Labs. Kill 10 Creatures at Pinnacle Labs",
        dropItems: [
          {
            item: "Pure Focus Crystal",
            quantity: 3,
            dropLocation: "Pinnacle Lab",
          },
        ],
      },
    ],
  },
  {
    name: "Path to Strong Medkits",
    campaign: "Osiris",
    parts: [
      {
        name: "Path to Strong Medkits Part 1",
        requires: "Laser Show Part 2",
        deliverItems: [
          {
            item: "Marauder Flesh",
            quantity: 3,
          },
          {
            item: "Medical Supplies",
            quantity: 3,
          },
          {
            item: "Waterweed Filament",
            quantity: 15,
          },
        ],
      },
      {
        name: "Path to Strong Medkits Part 2",
        requires: "Path to Strong Medkits Part 1",
        deliverItems: [
          {
            item: "Pale Ivy Blossom",
            quantity: 10,
          },
          {
            item: "Glowy Brightcap Mushroom",
            quantity: 8,
          },
        ],
      },
      {
        name: "Path to Strong Medkits Part 3",
        requires: "Path to Strong Medkits Part 2",
        dropItems: [
          {
            item: "Old Medicine",
            quantity: 8,
            dropLocation: "Waterfall Lab",
          },
        ],
      },
    ],
  },
  {
    name: "Building a Better Death Ray",
    campaign: "Osiris",
    parts: [
      {
        name: "Building a better Death Ray Part 1",
        requires: "Path to Strong Medkits Part 3",
        deliverItems: [
          {
            item: "Dustbloom",
            quantity: 5,
          },
          {
            item: "Glowy Brightcap Mushroom",
            quantity: 10,
          },
          {
            item: "Magic-GROW Fertilizer",
            quantity: 10,
          },
        ],
      },
      {
        name: "Building a better Death Ray Part 2",
        requires: "Building a better Death Ray Part 1",
        deliverItems: [
          {
            item: "Veltecite Heart",
            quantity: 1,
          },
          {
            item: "Charged Spinal Base",
            quantity: 20,
          },
        ],
      },
    ],
  },
  {
    name: "Satellite Master",
    campaign: "Osiris",
    parts: [
      {
        name: "Satellite Master Part 1",
        requires: "Building a better Death Ray Part 2",
        description: "Visit Southeast Uplink. Visit North Uplink.",
        deliverItems: [
          {
            item: "Valuable Data Drive",
            quantity: 2,
          },
        ],
      },
      {
        name: "Satellite Master Part 2",
        requires: "Satellite Master Part 1",
        description:
          "Visit Starport Landing Pad Uplink. Visit Skeleton Observation Uplink.",
        deliverItems: [
          {
            item: "Unique Data Drive",
            quantity: 2,
          },
        ],
      },
      {
        name: "Satellite Master Part 3",
        requires: "Satellite Master Part 2",
        dropItems: [
          {
            item: "Radio Equipment",
            quantity: 5,
            dropLocation: "Server Room",
          },
          {
            item: "Circuit Board",
            quantity: 5,
            dropLocation: "Server Room",
          },
          {
            item: "Magnetic Field Stabilizer",
            quantity: 5,
            dropLocation: "Server Room",
          },
        ],
      },
    ],
  },
  {
    name: "Combat Ready",
    campaign: "Osiris",
    parts: [
      {
        name: "Combat Ready Part 1",
        requires: "Satellite Master Part 3",
        description: "Kill 1 Crusher.",
        deliverItems: [
          {
            item: "Crusher Flesh",
            quantity: 1,
          },
        ],
      },
      {
        name: "Combat Ready Part 2",
        requires: "Combat Ready Part 1",
        deliverItems: [
          {
            item: "Portable Lab",
            quantity: 1,
          },
          {
            item: "Glowy Brightcap Mushroom",
            quantity: 10,
          },
          {
            item: "Medical Supplies",
            quantity: 5,
          },
        ],
      },
      {
        name: "Combat Ready Part 3",
        requires: "Combat Ready Part 2",
        deliverItems: [
          {
            item: "Dustbloom",
            quantity: 8,
          },
        ],
      },
    ],
  },
  {
    name: "Orbital Repairs",
    campaign: "Osiris",
    parts: [
      {
        name: "Orbital Repairs Part 1",
        requires: "Satellite Master Part 3",
        description: "Kill 15 Creatures at Pinnacle Labs",
        dropItems: [
          {
            item: "Gyroscope",
            quantity: 1,
            dropLocation: "Pinnacle Lab",
          },
        ],
      },
      {
        name: "Orbital Repairs Part 2",
        requires: "Orbital Repairs Part 1",
        description: "Kill 5 Players with an Osiris weapon.",
      },
      {
        name: "Orbital Repairs Part 3",
        requires: "Orbital Repairs Part 2",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 8,
          },
          {
            item: "Smart Mesh",
            quantity: 8,
          },
          {
            item: "Salvaged Insulation",
            quantity: 20,
          },
        ],
      },
      {
        name: "Orbital Repairs Part 4",
        requires: "Orbital Repairs Part 3",
        deliverItems: [
          {
            item: "Crusher Hide",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Breaking and Entering",
    campaign: "Osiris",
    parts: [
      {
        name: "Breaking and Entering Part 1",
        requires: "Orbital Repairs Part 4",
        description:
          "Enter Mysterious Cave. Kill 15 Creatures at Mysterious Cave",
        deliverItems: [
          {
            item: "Elite Crusher Heart",
            quantity: 1,
          },
        ],
      },
    ],
  },
];

export const upgrades: Upgrade[] = [
  {
    tree: "Quarters",
    stages: [
      {
        levels: [
          {
            items: [],
            kMarks: 0,
          },
          {
            items: [
              {
                item: "Hardened Metals",
                quantity: 5,
              },
              {
                item: "Compound Sheets",
                quantity: 5,
              },
              {
                item: "Rattler Skin",
                quantity: 3,
              },
            ],
            kMarks: 1000,
          },
          {
            items: [
              {
                item: "Salvaged Insulation",
                quantity: 6,
              },
              {
                item: "Electronic Cables",
                quantity: 9,
              },
              {
                item: "Rattler Eyes",
                quantity: 4,
              },
            ],
            kMarks: 2000,
          },
          {
            items: [
              {
                item: "Azure Tree Bark",
                quantity: 12,
              },
              {
                item: "Circuit Board",
                quantity: 12,
              },
              {
                item: "Hardened Bone Plates",
                quantity: 3,
              },
            ],
            kMarks: 4000,
          },
          {
            items: [
              {
                item: "Resin Gun",
                quantity: 10,
              },
              {
                item: "Radio Equipment",
                quantity: 15,
              },
              {
                item: "Heavy Strider Flesh",
                quantity: 5,
              },
            ],
            kMarks: 8000,
          },
          {
            items: [
              {
                item: "Aluminum Scrap",
                quantity: 18,
              },
              {
                item: "Co-TEC MultiTool",
                quantity: 9,
              },
              {
                item: "Marauder Flesh",
                quantity: 6,
              },
            ],
            kMarks: 16000,
          },
          {
            items: [
              {
                item: "Print Resin",
                quantity: 9,
              },
              {
                item: "Interactive Screen",
                quantity: 7,
              },
              {
                item: "Savage Marauder Flesh",
                quantity: 1,
              },
            ],
            kMarks: 32000,
          },
          {
            items: [
              {
                item: "Progenitor Composite",
                quantity: 32,
              },
              {
                item: "Smart Mesh",
                quantity: 12,
              },
              {
                item: "Crusher Hide",
                quantity: 5,
              },
            ],
            kMarks: 64000,
          },
          {
            items: [
              {
                item: "Spine Briar",
                quantity: 14,
              },
              {
                item: "Letium",
                quantity: 150,
              },
              {
                item: "Crusher Flesh",
                quantity: 3,
              },
            ],
            kMarks: 128000,
          },
          {
            items: [
              {
                item: "Abyss Alloy",
                quantity: 1,
              },
              {
                item: "Elite Crusher Heart",
                quantity: 2,
              },
              {
                item: "Oil Tank",
                quantity: 50,
              },
            ],
            kMarks: 256000,
          },
        ],
      },
    ],
  },
  {
    tree: "Generate Kmarks",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Hardened Metals",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Electronic Cables",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1221,
          },
          {
            items: [
              {
                item: "Nickel",
                quantity: 5,
              },
              {
                item: "Polymetallic Prefabricate",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1709,
          },
          {
            items: [
              {
                item: "Copper Wire",
                quantity: 5,
              },
              {
                item: "Circuit Board",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 3,
              },
            ],
            kMarks: 2393,
          },
          {
            items: [
              {
                item: "Old Currency",
                quantity: 750,
              },
              {
                item: "Polymetallic Prefabricate",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 5,
              },
            ],
            kMarks: 3350,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Electronic Cables",
                quantity: 5,
              },
              {
                item: "Radio Equipment",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 6,
              },
            ],
            kMarks: 3964,
          },
          {
            items: [
              {
                item: "Altered Nickel",
                quantity: 10,
              },
              {
                item: "Jewellery",
                quantity: 4,
              },
              {
                item: "Osiris Scrip",
                quantity: 8,
              },
            ],
            kMarks: 4690,
          },
          {
            items: [
              {
                item: "Rare Data Drive",
                quantity: 1,
              },
              {
                item: "Osiris Scrip",
                quantity: 9,
              },
            ],
            kMarks: 5549,
          },
          {
            items: [
              {
                item: "Optic Glass",
                quantity: 11,
              },
              {
                item: "Circuit Board",
                quantity: 11,
              },
              {
                item: "Osiris Scrip",
                quantity: 11,
              },
            ],
            kMarks: 6566,
          },
          {
            items: [
              {
                item: "Ball Bearings",
                quantity: 15,
              },
              {
                item: "Zero Systems CPU",
                quantity: 8,
              },
              {
                item: "Osiris Scrip",
                quantity: 14,
              },
            ],
            kMarks: 7769,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Biological Sampler",
                quantity: 6,
              },
              {
                item: "Hardened Bone Plates",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 17,
              },
            ],
            kMarks: 9192,
          },
          {
            items: [
              {
                item: "Brittle Titan Ore",
                quantity: 10,
              },
              {
                item: "Clear Veltecite",
                quantity: 2,
              },
              {
                item: "Osiris Scrip",
                quantity: 21,
              },
            ],
            kMarks: 10875,
          },
          {
            items: [
              {
                item: "Meteor Core",
                quantity: 3,
              },
              {
                item: "Titan Ore",
                quantity: 1,
              },
              {
                item: "Osiris Scrip",
                quantity: 26,
              },
            ],
            kMarks: 12869,
          },
          {
            items: [
              {
                item: "Old Currency",
                quantity: 5625,
              },
              {
                item: "Co-TEC MultiTool",
                quantity: 9,
              },
              {
                item: "Osiris Scrip",
                quantity: 31,
              },
            ],
            kMarks: 15227,
          },
          {
            items: [
              {
                item: "Print Resin",
                quantity: 12,
              },
              {
                item: "Zero Systems CPU",
                quantity: 12,
              },
              {
                item: "Osiris Scrip",
                quantity: 38,
              },
            ],
            kMarks: 18016,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Shard Slicer",
                quantity: 10,
              },
              {
                item: "Savage Marauder Flesh",
                quantity: 4,
              },
              {
                item: "Osiris Scrip",
                quantity: 58,
              },
            ],
            kMarks: 25223,
          },
          {
            items: [
              {
                item: "Master Unit CPU",
                quantity: 1,
              },
              {
                item: "Dustbloom",
                quantity: 4,
              },
              {
                item: "Osiris Scrip",
                quantity: 86,
              },
            ],
            kMarks: 35312,
          },
          {
            items: [
              {
                item: "Spine Briar",
                quantity: 2,
              },
              {
                item: "Pure Focus Crystal",
                quantity: 2,
              },
              {
                item: "Osiris Scrip",
                quantity: 130,
              },
            ],
            kMarks: 49437,
          },
          {
            items: [
              {
                item: "Elite Crusher Heart",
                quantity: 1,
              },
              {
                item: "Progenitor Composite",
                quantity: 4,
              },
              {
                item: "Osiris Scrip",
                quantity: 195,
              },
            ],
            kMarks: 69212,
          },
          {
            items: [
              {
                item: "Veltecite Heart",
                quantity: 1,
              },
              {
                item: "Osiris Scrip",
                quantity: 292,
              },
            ],
            kMarks: 96897,
          },
        ],
      },
    ],
  },
  {
    tree: "Kmark Passive Cap",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Hardened Metals",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Nickel",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 5,
              },
            ],
            kMarks: 1221,
          },
          {
            items: [
              {
                item: "Fusion Cartridge Batteries",
                quantity: 1,
              },
              {
                item: "Flawed Veltecite",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1709,
          },
          {
            items: [
              {
                item: "Altered Nickel",
                quantity: 4,
              },
              {
                item: "Salvaged Insulation",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 3,
              },
            ],
            kMarks: 2393,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Hydraulic Piston",
                quantity: 3,
              },
              {
                item: "Azure Tree Bark",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 3,
              },
            ],
            kMarks: 2393,
          },
          {
            items: [
              {
                item: "Sample Container",
                quantity: 2,
              },
              {
                item: "Print Resin",
                quantity: 1,
              },
              {
                item: "Korolev Scrip",
                quantity: 5,
              },
            ],
            kMarks: 3350,
          },
          {
            items: [
              {
                item: "Smart Mesh",
                quantity: 2,
              },
              {
                item: "Cloudy Veltecite",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 8,
              },
            ],
            kMarks: 4690,
          },
          {
            items: [
              {
                item: "Meteor Fragment",
                quantity: 5,
              },
              {
                item: "Magnetic Field Stabilizer",
                quantity: 10,
              },
              {
                item: "Korolev Scrip",
                quantity: 11,
              },
            ],
            kMarks: 6566,
          },
          {
            items: [
              {
                item: "Electronic Cables",
                quantity: 18,
              },
              {
                item: "Resin Gun",
                quantity: 9,
              },
              {
                item: "Korolev Scrip",
                quantity: 17,
              },
            ],
            kMarks: 9192,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Circuit Board",
                quantity: 16,
              },
              {
                item: "Co-TEC MultiTool",
                quantity: 6,
              },
              {
                item: "Korolev Scrip",
                quantity: 17,
              },
            ],
            kMarks: 9192,
          },
          {
            items: [
              {
                item: "Brittle Titan Ore",
                quantity: 10,
              },
              {
                item: "Interactive Screen",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 21,
              },
            ],
            kMarks: 10876,
          },
          {
            items: [
              {
                item: "Blue Runner Egg",
                quantity: 9,
              },
              {
                item: "Salvaged Insulation",
                quantity: 21,
              },
              {
                item: "Korolev Scrip",
                quantity: 26,
              },
            ],
            kMarks: 12869,
          },
          {
            items: [
              {
                item: "Gyroscope",
                quantity: 1,
              },
              {
                item: "Titan Ore",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 31,
              },
            ],
            kMarks: 15227,
          },
          {
            items: [
              {
                item: "Clear Veltecite",
                quantity: 4,
              },
              {
                item: "Marauder Flesh",
                quantity: 8,
              },
              {
                item: "Korolev Scrip",
                quantity: 38,
              },
            ],
            kMarks: 18016,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Pure Veltecite",
                quantity: 2,
              },
              {
                item: "Heavy Strider Flesh",
                quantity: 12,
              },
              {
                item: "Korolev Scrip",
                quantity: 58,
              },
            ],
            kMarks: 25223,
          },
          {
            items: [
              {
                item: "Meteor Core",
                quantity: 4,
              },
              {
                item: "Shard Slicer",
                quantity: 11,
              },
              {
                item: "Korolev Scrip",
                quantity: 86,
              },
            ],
            kMarks: 35312,
          },
          {
            items: [
              {
                item: "Progenitor Composite",
                quantity: 3,
              },
              {
                item: "Portable Lab",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 130,
              },
            ],
            kMarks: 49437,
          },
          {
            items: [
              {
                item: "Charged Tharis Iron Ingot",
                quantity: 2,
              },
              {
                item: "Pure Focus Crystal",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 195,
              },
            ],
            kMarks: 69212,
          },
          {
            items: [
              {
                item: "Veltecite Heart",
                quantity: 1,
              },
              {
                item: "Tharis Iron Ingot",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 292,
              },
            ],
            kMarks: 96897,
          },
        ],
      },
    ],
  },
  {
    tree: "Generate Aurum",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Spinal Base",
                quantity: 6,
              },
              {
                item: "Osiris Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Polymetallic Prefabricate",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1221,
          },
          {
            items: [
              {
                item: "Flawed Veltecite",
                quantity: 3,
              },
              {
                item: "Electronic Cables",
                quantity: 3,
              },
              {
                item: "Osiris Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1709,
          },
          {
            items: [
              {
                item: "Old Currency",
                quantity: 750,
              },
              {
                item: "Metallic Alloys",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 3,
              },
            ],
            kMarks: 2393,
          },
          {
            items: [
              {
                item: "Uncommon Data Drive",
                quantity: 1,
              },
              {
                item: "Copper Wire",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 5,
              },
            ],
            kMarks: 3350,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Cloudy Veltecite",
                quantity: 1,
              },
              {
                item: "Magic-GROW Fertilizer",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 6,
              },
            ],
            kMarks: 4690,
          },
          {
            items: [
              {
                item: "Magnetic Field Stabilizer",
                quantity: 8,
              },
              {
                item: "Rattler Eyes",
                quantity: 6,
              },
              {
                item: "Osiris Scrip",
                quantity: 8,
              },
            ],
            kMarks: 6566,
          },
          {
            items: [
              {
                item: "Resin Gun",
                quantity: 8,
              },
              {
                item: "Circuit Board",
                quantity: 10,
              },
              {
                item: "Osiris Scrip",
                quantity: 9,
              },
            ],
            kMarks: 9193,
          },
          {
            items: [
              {
                item: "Optic Glass",
                quantity: 11,
              },
              {
                item: "Old Currency",
                quantity: 2750,
              },
              {
                item: "Osiris Scrip",
                quantity: 11,
              },
            ],
            kMarks: 12870,
          },
          {
            items: [
              {
                item: "Print Resin",
                quantity: 6,
              },
              {
                item: "Copper Wire",
                quantity: 23,
              },
              {
                item: "Osiris Scrip",
                quantity: 14,
              },
            ],
            kMarks: 18018,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Interactive Screen",
                quantity: 5,
              },
              {
                item: "Indigenous Fruit",
                quantity: 12,
              },
              {
                item: "Osiris Scrip",
                quantity: 17,
              },
            ],
            kMarks: 25226,
          },
          {
            items: [
              {
                item: "Rare Data Drive",
                quantity: 1,
              },
              {
                item: "Zero Systems CPU",
                quantity: 8,
              },
              {
                item: "Osiris Scrip",
                quantity: 21,
              },
            ],
            kMarks: 35316,
          },
          {
            items: [
              {
                item: "Jewellery",
                quantity: 11,
              },
              {
                item: "Magnetic Field Stabilizer",
                quantity: 21,
              },
              {
                item: "Osiris Scrip",
                quantity: 26,
              },
            ],
            kMarks: 49442,
          },
          {
            items: [
              {
                item: "Gyroscope",
                quantity: 1,
              },
              {
                item: "Heavy Strider Flesh",
                quantity: 11,
              },
              {
                item: "Osiris Scrip",
                quantity: 31,
              },
            ],
            kMarks: 69219,
          },
          {
            items: [
              {
                item: "Miniature Reactor",
                quantity: 6,
              },
              {
                item: "Teratomorphic Crystal Core",
                quantity: 18,
              },
              {
                item: "Osiris Scrip",
                quantity: 38,
              },
            ],
            kMarks: 96907,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Master Unit CPU",
                quantity: 1,
              },
              {
                item: "Osiris Scrip",
                quantity: 58,
              },
            ],
            kMarks: 135670,
          },
          {
            items: [
              {
                item: "Focus Crystal",
                quantity: 19,
              },
              {
                item: "Rattler Eyes",
                quantity: 11,
              },
              {
                item: "Osiris Scrip",
                quantity: 86,
              },
            ],
            kMarks: 189938,
          },
          {
            items: [
              {
                item: "Pure Focus Crystal",
                quantity: 2,
              },
              {
                item: "Dustbloom",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 130,
              },
            ],
            kMarks: 265913,
          },
          {
            items: [
              {
                item: "Unique Data Drive",
                quantity: 1,
              },
              {
                item: "Savage Marauder Flesh",
                quantity: 5,
              },
              {
                item: "Osiris Scrip",
                quantity: 195,
              },
            ],
            kMarks: 372278,
          },
          {
            items: [
              {
                item: "Abyss Alloy",
                quantity: 1,
              },
              {
                item: "Osiris Scrip",
                quantity: 292,
              },
            ],
            kMarks: 521189,
          },
        ],
      },
    ],
  },
  {
    tree: "Aurum Passive Cap",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Spinal Base",
                quantity: 6,
              },
              {
                item: "ICA Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Hardened Metals",
                quantity: 3,
              },
              {
                item: "ICA Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1400,
          },
          {
            items: [
              {
                item: "Nickel",
                quantity: 8,
              },
              {
                item: "Flawed Veltecite",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 2,
              },
            ],
            kMarks: 2200,
          },
          {
            items: [
              {
                item: "Fusion Cartridge Batteries",
                quantity: 2,
              },
              {
                item: "Compound Sheets",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 3,
              },
            ],
            kMarks: 3400,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Altered Nickel",
                quantity: 4,
              },
              {
                item: "Nutritional Bar",
                quantity: 2,
              },
              {
                item: "ICA Scrip",
                quantity: 3,
              },
            ],
            kMarks: 3400,
          },
          {
            items: [
              {
                item: "Azure Tree Bark",
                quantity: 8,
              },
              {
                item: "Circuit Board",
                quantity: 8,
              },
              {
                item: "ICA Scrip",
                quantity: 5,
              },
            ],
            kMarks: 5400,
          },
          {
            items: [
              {
                item: "Textiles",
                quantity: 11,
              },
              {
                item: "Copper Wire",
                quantity: 15,
              },
              {
                item: "ICA Scrip",
                quantity: 8,
              },
            ],
            kMarks: 8600,
          },
          {
            items: [
              {
                item: "Meteor Fragment",
                quantity: 6,
              },
              {
                item: "Cloudy Veltecite",
                quantity: 3,
              },
              {
                item: "ICA Scrip",
                quantity: 11,
              },
            ],
            kMarks: 13600,
          },
          {
            items: [
              {
                item: "Circuit Board",
                quantity: 15,
              },
              {
                item: "Fusion Cartridge Batteries",
                quantity: 8,
              },
              {
                item: "ICA Scrip",
                quantity: 17,
              },
            ],
            kMarks: 21500,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Miniature Reactor",
                quantity: 4,
              },
              {
                item: "Radio Equipment",
                quantity: 15,
              },
              {
                item: "ICA Scrip",
                quantity: 17,
              },
            ],
            kMarks: 34000,
          },
          {
            items: [
              {
                item: "Co-TEC MultiTool",
                quantity: 8,
              },
              {
                item: "Sample Container",
                quantity: 10,
              },
              {
                item: "ICA Scrip",
                quantity: 21,
              },
            ],
            kMarks: 53500,
          },
          {
            items: [
              {
                item: "Meteor Core",
                quantity: 3,
              },
              {
                item: "Marauder Flesh",
                quantity: 7,
              },
              {
                item: "ICA Scrip",
                quantity: 26,
              },
            ],
            kMarks: 84500,
          },
          {
            items: [
              {
                item: "Crusher Hide",
                quantity: 6,
              },
              {
                item: "Interactive Screen",
                quantity: 9,
              },
              {
                item: "ICA Scrip",
                quantity: 31,
              },
            ],
            kMarks: 133500,
          },
          {
            items: [
              {
                item: "Clear Veltecite",
                quantity: 5,
              },
              {
                item: "Savage Marauder Flesh",
                quantity: 4,
              },
              {
                item: "ICA Scrip",
                quantity: 38,
              },
            ],
            kMarks: 211000,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Pure Veltecite",
                quantity: 3,
              },
              {
                item: "Valuable Data Drive",
                quantity: 1,
              },
              {
                item: "ICA Scrip",
                quantity: 58,
              },
            ],
            kMarks: 265000,
          },
          {
            items: [
              {
                item: "Letium",
                quantity: 135,
              },
              {
                item: "Progenitor Composite",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 86,
              },
            ],
            kMarks: 333000,
          },
          {
            items: [
              {
                item: "Oil Tank",
                quantity: 53,
              },
              {
                item: "Tharis Iron Ingot",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 130,
              },
            ],
            kMarks: 419000,
          },
          {
            items: [
              {
                item: "Elite Crusher Heart",
                quantity: 2,
              },
              {
                item: "Progenitor Slag",
                quantity: 6,
              },
              {
                item: "ICA Scrip",
                quantity: 195,
              },
            ],
            kMarks: 527000,
          },
          {
            items: [
              {
                item: "Veltecite Heart",
                quantity: 1,
              },
              {
                item: "ICA Scrip",
                quantity: 292,
              },
            ],
            kMarks: 662000,
          },
        ],
      },
    ],
  },
  {
    tree: "Supply Crate",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Azure Tree Bark",
                quantity: 2,
              },
              {
                item: "ICA Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Compound Sheets",
                quantity: 3,
              },
              {
                item: "ICA Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1378,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Nickel",
                quantity: 15,
              },
              {
                item: "Aluminum Scrap",
                quantity: 4,
              },
              {
                item: "ICA Scrip",
                quantity: 2,
              },
            ],
            kMarks: 2177,
          },
          {
            items: [
              {
                item: "Salvaged Insulation",
                quantity: 8,
              },
              {
                item: "Hydraulic Piston",
                quantity: 8,
              },
              {
                item: "ICA Scrip",
                quantity: 5,
              },
            ],
            kMarks: 5434,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Textiles",
                quantity: 14,
              },
              {
                item: "Ball Bearings",
                quantity: 12,
              },
              {
                item: "ICA Scrip",
                quantity: 11,
              },
            ],
            kMarks: 13566,
          },
          {
            items: [
              {
                item: "Shock Absorber",
                quantity: 1,
              },
              {
                item: "Magnetic Field Stabilizer",
                quantity: 14,
              },
              {
                item: "ICA Scrip",
                quantity: 26,
              },
            ],
            kMarks: 33867,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Smart Mesh",
                quantity: 6,
              },
              {
                item: "Spine Briar",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 58,
              },
            ],
            kMarks: 84545,
          },
          {
            items: [
              {
                item: "Portable Lab",
                quantity: 1,
              },
              {
                item: "Medical Supplies",
                quantity: 20,
              },
              {
                item: "ICA Scrip",
                quantity: 130,
              },
            ],
            kMarks: 211058,
          },
        ],
      },
    ],
  },
  {
    tree: "Stash",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Hardened Metals",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Azure Tree Bark",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1378,
          },
          {
            items: [
              {
                item: "Compound Sheets",
                quantity: 5,
              },
              {
                item: "Nickel",
                quantity: 8,
              },
              {
                item: "Korolev Scrip",
                quantity: 2,
              },
            ],
            kMarks: 2177,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Sample Container",
                quantity: 2,
              },
              {
                item: "Metallic Alloys",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 3,
              },
            ],
            kMarks: 3440,
          },
          {
            items: [
              {
                item: "Resin Gun",
                quantity: 2,
              },
              {
                item: "Waterweed Filament",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 5,
              },
            ],
            kMarks: 5435,
          },
          {
            items: [
              {
                item: "Copper Wire",
                quantity: 12,
              },
              {
                item: "Magic-GROW Fertilizer",
                quantity: 12,
              },
              {
                item: "Korolev Scrip",
                quantity: 8,
              },
            ],
            kMarks: 8587,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Titan Ore",
                quantity: 1,
              },
              {
                item: "Co-TEC MultiTool",
                quantity: 4,
              },
              {
                item: "Korolev Scrip",
                quantity: 11,
              },
            ],
            kMarks: 13568,
          },
          {
            items: [
              {
                item: "Hydraulic Piston",
                quantity: 12,
              },
              {
                item: "Pale Ivy Blossom",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 17,
              },
            ],
            kMarks: 21437,
          },
          {
            items: [
              {
                item: "Smart Mesh",
                quantity: 5,
              },
              {
                item: "Zero Systems CPU",
                quantity: 9,
              },
              {
                item: "Korolev Scrip",
                quantity: 26,
              },
            ],
            kMarks: 33870,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Meteor Fragment",
                quantity: 9,
              },
              {
                item: "Shock Absorber",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 38,
              },
            ],
            kMarks: 53515,
          },
          {
            items: [
              {
                item: "Print Resin",
                quantity: 8,
              },
              {
                item: "Miniature Reactor",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 58,
              },
            ],
            kMarks: 84554,
          },
          {
            items: [
              {
                item: "Medical Supplies",
                quantity: 23,
              },
              {
                item: "Pure Veltecite",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 86,
              },
            ],
            kMarks: 133595,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Meteor Core",
                quantity: 4,
              },
              {
                item: "Dustbloom",
                quantity: 2,
              },
              {
                item: "Korolev Scrip",
                quantity: 130,
              },
            ],
            kMarks: 211080,
          },
          {
            items: [
              {
                item: "Progenitor Composite",
                quantity: 4,
              },
              {
                item: "Master Unit CPU",
                quantity: 1,
              },
              {
                item: "Korolev Scrip",
                quantity: 195,
              },
            ],
            kMarks: 333507,
          },
          {
            items: [
              {
                item: "Tharis Iron Ingot",
                quantity: 5,
              },
              {
                item: "Veltecite Heart",
                quantity: 1,
              },
              {
                item: "Korolev Scrip",
                quantity: 292,
              },
            ],
            kMarks: 526941,
          },
        ],
      },
    ],
  },
  {
    tree: "Safe Pockets",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Textiles",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Aluminum Scrap",
                quantity: 4,
              },
              {
                item: "Nutritional Bar",
                quantity: 4,
              },
              {
                item: "Korolev Scrip",
                quantity: 11,
              },
            ],
            kMarks: 13566,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Sample Container",
                quantity: 8,
              },
              {
                item: "Miniature Reactor",
                quantity: 4,
              },
              {
                item: "Korolev Scrip",
                quantity: 86,
              },
            ],
            kMarks: 133581,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Portable Lab",
                quantity: 1,
              },
              {
                item: "Meteor Core",
                quantity: 3,
              },
              {
                item: "Korolev Scrip",
                quantity: 130,
              },
            ],
            kMarks: 211058,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Progenitor Slag",
                quantity: 4,
              },
              {
                item: "Korolev Scrip",
                quantity: 292,
              },
            ],
            kMarks: 526885,
          },
        ],
      },
    ],
  },
  {
    tree: "Workbench",
    stages: [
      {
        levels: [
          {
            items: [
              {
                item: "Nickel",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 1,
              },
            ],
            kMarks: 872,
          },
          {
            items: [
              {
                item: "Metallic Alloys",
                quantity: 3,
              },
              {
                item: "ICA Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1570,
          },
          {
            items: [
              {
                item: "Resin Gun",
                quantity: 2,
              },
              {
                item: "Polymetallic Prefabricate",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 2,
              },
            ],
            kMarks: 2826,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Aluminum Scrap",
                quantity: 2,
              },
              {
                item: "Print Resin",
                quantity: 1,
              },
              {
                item: "ICA Scrip",
                quantity: 5,
              },
            ],
            kMarks: 5086,
          },
          {
            items: [
              {
                item: "Altered Nickel",
                quantity: 10,
              },
              {
                item: "Sample Container",
                quantity: 4,
              },
              {
                item: "ICA Scrip",
                quantity: 8,
              },
            ],
            kMarks: 9155,
          },
          {
            items: [
              {
                item: "Hydraulic Piston",
                quantity: 12,
              },
              {
                item: "Biological Sampler",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 11,
              },
            ],
            kMarks: 16479,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Ball Bearings",
                quantity: 15,
              },
              {
                item: "Shard Slicer",
                quantity: 5,
              },
              {
                item: "ICA Scrip",
                quantity: 26,
              },
            ],
            kMarks: 29662,
          },
          {
            items: [
              {
                item: "Magnetic Field Stabilizer",
                quantity: 18,
              },
              {
                item: "Co-TEC MultiTool",
                quantity: 7,
              },
              {
                item: "ICA Scrip",
                quantity: 38,
              },
            ],
            kMarks: 53391,
          },
          {
            items: [
              {
                item: "Brittle Titan Ore",
                quantity: 16,
              },
              {
                item: "Smart Mesh",
                quantity: 8,
              },
              {
                item: "ICA Scrip",
                quantity: 58,
              },
            ],
            kMarks: 96104,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Titan Ore",
                quantity: 2,
              },
              {
                item: "Teratomorphic Crystal Core",
                quantity: 18,
              },
              {
                item: "ICA Scrip",
                quantity: 130,
              },
            ],
            kMarks: 172988,
          },
          {
            items: [
              {
                item: "Valuable Data Drive",
                quantity: 1,
              },
              {
                item: "Derelict Explosives",
                quantity: 18,
              },
              {
                item: "ICA Scrip",
                quantity: 195,
              },
            ],
            kMarks: 311378,
          },
          {
            items: [
              {
                item: "Charged Tharis Iron Ingot",
                quantity: 2,
              },
              {
                item: "Shock Absorber",
                quantity: 4,
              },
              {
                item: "ICA Scrip",
                quantity: 292,
              },
            ],
            kMarks: 560480,
          },
        ],
      },
    ],
  },
];

export const items = {
  Nickel: 0,
  "Compound Sheets": 0,
  "Hydraulic Piston": 0,
  "Flawed Veltecite": 0,
  "Circuit Board": 0,
  "Altered Nickel": 0,
  "Cloudy Veltecite": 0,
  "Ball Bearings": 0,
  "Titan Ore": 0,
  "Electronic Cables": 0,
  "Resin Gun": 0,
  "Metallic Alloys": 0,
  "Optic Glass": 0,
  "Brittle Titan Ore": 0,
  "Pure Veltecite": 0,
  "Shard Slicer": 0,
  "Zero Systems CPU": 0,
  "Meteor Fragment": 0,
  "Focus Crystal": 0,
  "Hardened Bone Plates": 0,
  "Clear Veltecite": 0,
  "Radio Equipment": 0,
  "Pure Focus Crystal": 0,
  "Spinal Base": 0,
  "Biological Sampler": 0,
  "Sample Container": 0,
  "Valuable Data Drive": 0,
  Jewellery: 0,
  "Restoration Shield (Green)": 0,
  "Medium Backpack": 0,
  "Rattler Skin": 0,
  "Portable Lab": 0,
  "Toxic Glands": 0,
  "Marauder Flesh": 0,
  "Rattler Eyes": 0,
  "Mature Rattler Eyes": 0,
  "Strider Flesh": 0,
  "Unique Data Drive": 0,
  "Print Resin": 0,
  Textiles: 0,
  "Salvaged Insulation": 0,
  "Smart Mesh": 0,
  "Magnetic Field Stabilizer": 0,
  "Co-TEC MultiTool": 0,
  Gyroscope: 0,
  "Miniature Reactor": 0,
  "Copper Wire": 0,
  "Osiris Scrip": 0,
  "Korolev Scrip": 0,
  "ICA Scrip": 0,
  "Veltecite Heart": 0,
  "Old Currency": 0,
  "Meteor Core": 0,
  Letium: 0,
  "Hardened Metals": 0,
  "Azure Tree Bark": 0,
  "Frag Grenade": 0,
  "Fusion Cartridge Batteries": 0,
  "Uncommon Data Drive": 0,
  "Rare Data Drive": 0,
  "Smoke Grenade": 0,
  "Pale Ivy Blossom": 0,
  "Indigenous Fruit": 0,
  "Magic-GROW Fertilizer": 0,
  "Charged Spinal Base": 0,
  "Polymetallic Prefabricate": 0,
  "Shock Absorber": 0,
  "Master Unit CPU": 0,
  "Interactive Screen": 0,
  "Oil Tank": 0,
  "Waterweed Filament": 0,
  "Brightcap Mushroom": 0,
  "Weak Medkit": 0,
  "Medical Supplies": 0,
  "Blue Runner Egg": 0,
  "Old Medicine": 0,
  "Derelict Explosives": 0,
  "Glowy Brightcap Mushroom": 0,
  Dustbloom: 0,
  "Crusher Flesh": 0,
  "Crusher Hide": 0,
  "Elite Crusher Heart": 0,
  "Heavy Strider Flesh": 0,
  "Aluminum Scrap": 0,
  "Savage Marauder Flesh": 0,
  "Nutritional Bar": 0,
  Autoloader: 0,
  Kmarks: 0,
  "Progenitor Composite": 0,
  "Progenitor Slag": 0,
  "Spine Briar": 0,
  "Abyss Alloy": 0,
  "Tharis Iron": 0,
  "Pure Tharis Iron": 0,
  "Tharis Iron Ingot": 0,
  "Charged Tharis Iron Ingot": 0,
  "Teratomorphic Crystal Core": 0,
  "Huge Forged Backpack": 0,
};

export const itemRarity: Record<ItemName, ItemRarity> = {
  Nickel: "Common",
  "Compound Sheets": "Common",
  "Hydraulic Piston": "Uncommon",
  "Flawed Veltecite": "Common",
  "Circuit Board": "Uncommon",
  "Altered Nickel": "Uncommon",
  "Cloudy Veltecite": "Uncommon",
  "Ball Bearings": "Uncommon",
  "Titan Ore": "Rare",
  "Electronic Cables": "Common",
  "Resin Gun": "Uncommon",
  "Metallic Alloys": "Common",
  "Optic Glass": "Uncommon",
  "Brittle Titan Ore": "Uncommon",
  "Pure Veltecite": "Epic",
  "Shard Slicer": "Rare",
  "Zero Systems CPU": "Rare",
  "Meteor Fragment": "Rare",
  "Focus Crystal": "Rare",
  "Hardened Bone Plates": "Uncommon",
  "Clear Veltecite": "Rare",
  "Radio Equipment": "Uncommon",
  "Pure Focus Crystal": "Epic",
  "Spinal Base": "Common",
  "Biological Sampler": "Rare",
  "Sample Container": "Rare",
  "Valuable Data Drive": "Epic",
  Jewellery: "Rare",
  "Restoration Shield (Green)": "Uncommon",
  "Medium Backpack": "Uncommon",
  "Rattler Skin": "Common",
  "Portable Lab": "Epic",
  "Toxic Glands": "Common",
  "Marauder Flesh": "Rare",
  "Rattler Eyes": "Uncommon",
  "Mature Rattler Eyes": "Rare",
  "Strider Flesh": "Uncommon",
  "Unique Data Drive": "Legendary",
  "Print Resin": "Uncommon",
  Textiles: "Common",
  "Salvaged Insulation": "Common",
  "Smart Mesh": "Rare",
  "Magnetic Field Stabilizer": "Uncommon",
  "Co-TEC MultiTool": "Rare",
  Gyroscope: "Epic",
  "Miniature Reactor": "Rare",
  "Copper Wire": "Common",
  "Osiris Scrip": "Uncommon",
  "Korolev Scrip": "Uncommon",
  "ICA Scrip": "Uncommon",
  "Veltecite Heart": "Legendary",
  "Old Currency": "Common",
  "Meteor Core": "Epic",
  Letium: "Epic",
  "Hardened Metals": "Common",
  "Azure Tree Bark": "Common",
  "Frag Grenade": "Common",
  "Fusion Cartridge Batteries": "Common",
  "Uncommon Data Drive": "Uncommon",
  "Rare Data Drive": "Rare",
  "Smoke Grenade": "Common",
  "Pale Ivy Blossom": "Rare",
  "Indigenous Fruit": "Uncommon",
  "Magic-GROW Fertilizer": "Uncommon",
  "Charged Spinal Base": "Common",
  "Polymetallic Prefabricate": "Common",
  "Shock Absorber": "Epic",
  "Master Unit CPU": "Epic",
  "Interactive Screen": "Rare",
  "Oil Tank": "Epic",
  "Waterweed Filament": "Uncommon",
  "Brightcap Mushroom": "Uncommon",
  "Weak Medkit": "Common",
  "Medical Supplies": "Uncommon",
  "Blue Runner Egg": "Rare",
  "Old Medicine": "Common",
  "Derelict Explosives": "Uncommon",
  "Glowy Brightcap Mushroom": "Rare",
  Dustbloom: "Epic",
  "Crusher Flesh": "Epic",
  "Crusher Hide": "Rare",
  "Elite Crusher Heart": "Exotic",
  "Heavy Strider Flesh": "Rare",
  "Aluminum Scrap": "Common",
  "Savage Marauder Flesh": "Epic",
  "Nutritional Bar": "Common",
  Autoloader: "Epic",
  Kmarks: "Common",
  "Progenitor Composite": "Common",
  "Progenitor Slag": "Exotic",
  "Spine Briar": "Rare",
  "Abyss Alloy": "Legendary",
  "Tharis Iron Ingot": "Epic",
  "Charged Tharis Iron Ingot": "Exotic",
  "Teratomorphic Crystal Core": "Uncommon",
  "Tharis Iron": "Rare",
  "Pure Tharis Iron": "Epic",
  "Huge Forged Backpack": "Epic",
};
