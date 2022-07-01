import { Quest, Upgrade } from "./types";

export const quests: Quest[] = [
  {
    name: "Time to Punch In",
    campaign: "Korolev",
    parts: [
      {
        deliverItems: [
          {
            item: "Nickel",
            quantity: 1,
          },
        ],
      },
      {
        description: "Kill 3 Striders",
      },
      {
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
        description: "Kill 3 Creatures at Water Facility",
      },
      {
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
        deliverItems: [
          {
            item: "Altered Nickel",
            quantity: 10,
          },
          {
            item: "Cloudy Veltecite",
            quantity: 7,
          },
        ],
      },
      {
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
        description: "Kill 10 Rattlers with a Korolev weapon",
      },
      {
        dropItems: [
          {
            item: "Metallic Alloys",
            quantity: 3,
            dropLocation: "Swamp Camp",
          },
          {
            item: "Ball Bearings",
            quantity: 2,
            dropLocation: "Swamp Camp",
          },
        ],
      },
      {
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
        description: "Kill 3 Striders at Dig Site. Kill 1 Rattler at Dig Site",
      },
      {
        deliverItems: [
          {
            item: "Cloudy Veltecite",
            quantity: 7,
          },
          {
            item: "Optic Glass",
            quantity: 5,
          },
        ],
      },
      {
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
        description: "Kill a player with a Korolev Weapon",
      },
      {
        description: 'Collect 3 miner cameras at the Dig Site.'
      }
      {
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
        description: "Kill 8 creatures in The Jungle",
      },
      {
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
    name: "Veltecite for the Masses",
    campaign: "Korolev",
    parts: [
      {
        deliverItems: [
          {
            item: "Clear Veltecite",
            quantity: 7,
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
        description: "Kill 1 Player",
        deliverItems: [
          {
            item: "Radio Equipment",
            quantity: 5,
          },
        ],
      },
      {
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
        description: "Go to Crescent falls mining site?",
      },
      {
        description:
          "Kill 15 Creatured with the PKR Maelstrom. Kill 2 Prospectors with the PKR Maelstrom.",
      },
      {
        description:
          'Kill 10 creatures at Starport. Kill 10 Creatures at "jungle favela"(?)',
        deliverItems: [
          {
            item: "Spinal Base",
            quantity: 20,
          },
        ],
      },
      {
        dropItems: [
          {
            item: "Biological Sampler",
            quantity: 1,
          },
          {
            item: "Sampler Container",
            quantity: 2,
          },
        ],
      },
      {
        deliverItems: [
          {
            item: "Valuable Data Drive",
            quantity: 20,
          },
        ],
      },
      {
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
        description:
          "Kill 3 Rattlers in the Jungle. Kill 1 Marauder in the Jungle.-",
      },
      {
        deliverItems: [
          {
            item: "Jewellery",
            quantity: 5,
          },
        ],
      },
      {
        description: "Kill 3 Players with an SMG",
      },
      {
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
        description: "Kill 6 Creatures at Dig Site",
        deliverItems: [
          {
            item: "Spinal Base",
            quantity: 20,
          },
        ],
      },
      {
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
        description: "Kill 30 Creatures with a Korolev weapon",
      },
      {
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
        deliverItems: [
          {
            item: "Legendary Data Drive",
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Crafting Better Bags",
    campaign: "Korolev",
    parts: [
      {
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
        description: "Visit Old Drill Head",
        deliverItems: [
          {
            item: "Laser Drill Control Unit",
            quantity: 1,
          },
        ],
      },
      {
        description:
          "Kill 3 Prospectors with a Shotgun. Kill 25 Striders with a Shotgun.",
      },
      {
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
        description: "Kill 8 Creates at Pinnacle Labs",
        dropItems: [
          {
            item: "Pure Focus Crystal",
            quantity: 3,
          },
          {
            item: "Pure Veltecite",
            quantity: 1,
          },
        ],
      },
      {
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
        deliverItems: [
          {
            item: "Osirus Scrip",
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
        description: "Kill 6 Players",
      },
      {
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
        description: "Kill 1 Crusher.",
      },
    ],
  },
  {
    name: "The Test Run",
    campaign: "Korolev",
    parts: [
      {
        deliverItems: [
          {
            item: "Letium",
            quantity: 10,
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
        deliverItems: [
          {
            item: "Compound Sheets",
            quantity: 1,
          },
        ],
      },
      {
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
        description: "Kill 3 creatured at Lagoon",
      },
      {
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
        description: "Kill 5 creatures at Woodcutter Camp",
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
        dropItems: [
          {
            item: "Frag Grenade",
            quantity: 3,
            dropLocation: "Swamp Camp",
          },
        ],
      },
      {
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
        description: 'Find the SOS sign'
      },
      {
        description: 'Enter the Water Facility Loot Room. Deliver the Sign of Life.'
      },
      {
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
        deliverItems: [
          {
            item: "Uncommon Data Drive",
            quantity: 3,
          },
        ],
      },
      {
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
        description: "Kill 4 Creatures at Power Plant",
        deliverItems: [
          {
            item: "Fusion Cartridge Batteries",
            quantity: 8,
          },
        ],
      },
      {
        description: "Visit House on Stilts at North Uplink",
        deliverItems: [
          {
            item: "Rare Data Drive",
            quantity: 3,
          },
        ],
      },
      {
        deliverItems: [
          {
            item: 'Fusion Cartridge Batteries',
            quantity: 8
          }
        ]
      },
      {
        dropItems: [
          {
            item: 'Valuable Data Drive',
            quantity: 1,
            dropLocation: 'Main Office'
          },
          {
            item: 'Miniature Reactor',
            quantity: 1,
            dropLocation: 'Main Office'
          }
        ]
      }
    ],
  },
  {
    name: "Toxic Love",
    campaign: "ICA",
    parts: [
      {
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
        deliverItems: [
          {
            item: "Co-TEC MultiTool",
            quantity: 3,
          },
        ],
      },
      {
        description: "Kill 3 Players with an Assault Rifle",
        deliverItems: [
          {
            item: "Meteor Core",
            quantity: 3,
          },
        ],
      },
      {
        description:
          "Kill 10 Creatures at the Lake. Kill 10 Creatures at Starport",
      },
      {
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
    name: "Working for the Community",
    campaign: "ICA",
    parts: [
      {
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
        description: "Kill 5 Creatures with a Sniper Rifle at Greens Prospect",
      },
      {
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
        description: "Kill 10 Creatures at Pumpkin Fields",
      },
      {
        description: "Kill 2 players with an ICA weapon",
        deliverItems: [
          {
            item: "Sampler Container",
            quantity: 5,
          },
        ],
      },
      {
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
        description: "Kill 3 Players with a Pistol",
      },
      {
        description:
          "Kill 8 Creatures at Base Camp. Kill 8 Creatures at Power Plant. Kill 8 Creatures at Water Facility.",
      },
      {
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
        dropItems: [
          {
            item: "Polymetallic Prefabricate",
            quantity: 10,
            dropLocation: "Nutrition Office",
          },
          {
            item: "Resin Gun",
            quantity: 4,
            dropLocation: "Nutrition Office",
          },
          {
            item: "Magnetic Field Stabilizer",
            quantity: 4,
            dropLocation: "Nutrition Office",
          },
        ],
      },
      {
        deliverItems: [
          {
            item: "Legendary Data Drive",
            quantity: 3,
          },
        ],
      },
      {
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
        description: "Kill 8 Marauders",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 5,
          },
        ],
      },
      {
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
        description: "Kill 6 Players with an ICA weapon",
      },
      {
        deliverItems: [
          {
            item: "Miniature Reactor",
            quantity: 5,
          },
          {
            item: "Smart Mesh",
            quantity: 8,
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
        deliverItems: [
          {
            item: "Radio Equipment",
            quantity: 10,
          },
          {
            item: "Copper Wire",
            quantity: 15,
          },
          {
            item: "Pure Veltecite",
            quantity: 2,
          },
        ],
      },
      {
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
        description: "Kill 1 Crusher",
      },
      {
        deliverItems: [
          {
            item: "NiC Oil Cannister",
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
        description:
          "Kill 3 Rattlers at Woodcutter Camp. Kill 3 Rattlers at Water Facility. Kill 3 Rattlers at Power Plant.",
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
        description: "Kill 1 Strider.",
      },
      {
        deliverItems: [
          {
            item: "Waterweed Filament",
            quantity: 3,
          },
        ],
      },
      {
        description: "Kill 5 Striders at Swamp.",
        deliverItems: [
          {
            item: "Spinal Base",
            quantity: 3,
          },
        ],
      },
      {
        description: "Kill 7 Blast Ticks.",
        deliverItems: [
          {
            item: "Brightcap Mushroom",
            quantity: 3,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
        description: "Kill 5 Creatures at Science Campus.",
        deliverItems: [
          {
            item: "Optic Glass",
            quantity: 3,
          },
        ],
      },
      {
        description: "Kill 10 Striders at Lake. Kill 3 Rattlers at Lake.",
      },
      {
        description: "Kill 1 Player with an Orsirus weapon.",
      },
      {
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
        description: "Kill 15 Creatures at Vaccine Labs.",
        deliverItems: [
          {
            item: "Pale Ivy Blossom",
            quantity: 3,
          },
        ],
      },
      {
        description: "Kill 3 Players with an SMG.",
      },
      {
        description: "Kill 2 Rattlers at Jungle.",
        deliverItems: [
          {
            item: "Rattler Eyes",
            quantity: 5,
          },
        ],
      },
      {
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
    name: "Stimulating Developments",
    campaign: "Osirus",
    parts: [
      {
        deliverItems: [
          {
            item: "Medical Supplies",
            quantity: 4,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
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
        description: "Kill 3 Players with an Osirus weapon.",
      },
      {
        description: "Kill 5 Creatures at Forest Crystal Seal",
        deliverItems: [
          {
            item: "Clear Veltecite",
            quantity: 8,
          },
        ],
      },
    ],
  },
  {
    name: "Explosive Delivery",
    campaign: "Osirus",
    parts: [
      {
        deliverItems: [
          {
            item: "Derelict Explosives",
            quantity: 6,
          },
        ],
      },
    ],
  },
  {
    name: "Laser Show",
    campaign: "Osirus",
    parts: [
      {
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
        deliverItems: [
          {
            item: "Optic Glass",
            quantity: 6,
          },
          {
            item: "Radio Equipment",
            quantity: 10,
          },
        ],
      },
    ],
  },
  {
    name: "Storm Rider",
    campaign: "Osirus",
    parts: [
      {
        deliverItems: [
          {
            item: "Radioactive Brightcap Mushroom",
            quantity: 10,
          },
        ],
      },
      {
        description: "Kill 15 Creatures at Starport.",
      },
      {
        dropItems: [
          {
            item: "Charged Spinal Base",
            quantity: 8,
            dropLocation: "Nutrition Office",
          },
        ],
      },
    ],
  },
  {
    name: "The Needs of the One",
    campaign: "Osirus",
    parts: [
      {
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
        description: "Kill 5 Marauders.",
        deliverItems: [
          {
            item: "Hardened Bone Plates",
            quantity: 3,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
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
            item: "Sampler Container",
            quantity: 8,
          },
        ],
      },
      {
        description: "Kill 10 Creatures at Pinnacle Labs",
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
    campaign: "Osirus",
    parts: [
      {
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
        deliverItems: [
          {
            item: "Pale Ivy Blossom",
            quantity: 10,
          },
          {
            item: "Radioactive Brightcap Mushroom",
            quantity: 8,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
        deliverItems: [
          {
            item: "Dustbloom",
            quantity: 5,
          },
          {
            item: "Radioactive Brightcap Mushroom",
            quantity: 10,
          },
          {
            item: "Magic-GROW Fertilizer",
            quantity: 10,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
        deliverItems: [
          {
            item: "Valuable Data Drive",
            quantity: 2,
          },
        ],
      },
      {
        deliverItems: [
          {
            item: "Legendary Data Drive",
            quantity: 2,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
        description: "Kill 1 Crusher.",
        deliverItems: [
          {
            item: "Crusher Flesh",
            quantity: 1,
          },
        ],
      },
      {
        deliverItems: [
          {
            item: "Portable Lab",
            quantity: 1,
          },
          {
            item: "Radioactive Brightcap Mushroom",
            quantity: 10,
          },
          {
            item: "Medical Supplies",
            quantity: 5,
          },
        ],
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
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
        description: "Kill 6 Players with an Osirus weapon.",
      },
      {
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
    campaign: "Osirus",
    parts: [
      {
        description: "Kill 15 Creatures at Crystal Cave",
        deliverItems: [
          {
            item: "Alpha Crusher Heart",
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
                quantity: 3,
              },
            ],
            kMarks: 8000,
          },
          {
            items: [
              {
                item: "Aluminum Scrap",
                quantity: 5,
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
                item: "Fusion Cartridge Batteries",
                quantity: 14,
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
                item: "Print Resin",
                quantity: 16,
              },
              {
                item: "Zero Systems CPU",
                quantity: 20,
              },
              {
                item: "Crusher Flesh",
                quantity: 5,
              },
            ],
            kMarks: 64000,
          },
          {
            items: [
              {
                item: "Smart Mesh",
                quantity: 14,
              },
              {
                item: "Master Unit CPU",
                quantity: 1,
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
                item: "Alpha Crusher Heart",
                quantity: 2,
              },
              {
                item: "Letium",
                quantity: 150,
              },
              {
                item: "NiC Oil Cannister",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
                quantity: 6,
              },
            ],
            kMarks: 4690,
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
                item: "Osirus Scrip",
                quantity: 8,
              },
            ],
            kMarks: 6566,
          },
          {
            items: [
              {
                item: "Rare Data Drive",
                quantity: 1,
              },
              {
                item: "Osirus Scrip",
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
                item: "Circuit Board",
                quantity: 11,
              },
              {
                item: "Osirus Scrip",
                quantity: 11,
              },
            ],
            kMarks: 12870,
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
                item: "Osirus Scrip",
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
                item: "Biological Sampler",
                quantity: 6,
              },
              {
                item: "Hardened Bone Plates",
                quantity: 5,
              },
              {
                item: "Osirus Scrip",
                quantity: 17,
              },
            ],
            kMarks: 25226,
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
                item: "Osirus Scrip",
                quantity: 21,
              },
            ],
            kMarks: 35316,
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
                item: "Osirus Scrip",
                quantity: 26,
              },
            ],
            kMarks: 49442,
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
                item: "Osirus Scrip",
                quantity: 31,
              },
            ],
            kMarks: 69219,
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
                item: "Osirus Scrip",
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
                item: "Interactive Screen",
                quantity: 10,
              },
              {
                item: "Savage Marauder Flesh",
                quantity: 4,
              },
              {
                item: "Osirus Scrip",
                quantity: 58,
              },
            ],
            kMarks: 135670,
          },
          {
            items: [
              {
                item: "Shard Slicer",
                quantity: 11,
              },
              {
                item: "Dustbloom",
                quantity: 4,
              },
              {
                item: "Osirus Scrip",
                quantity: 86,
              },
            ],
            kMarks: 189938,
          },
          {
            items: [
              {
                item: "Master Unit CPU",
                quantity: 1,
              },
              {
                item: "Pure Focus Crystal",
                quantity: 2,
              },
              {
                item: "Osirus Scrip",
                quantity: 130,
              },
            ],
            kMarks: 265913,
          },
          {
            items: [
              {
                item: "Alpha Crusher Heart",
                quantity: 1,
              },
              {
                item: "Osirus Scrip",
                quantity: 195,
              },
            ],
            kMarks: 189938,
          },
          {
            items: [
              {
                item: "Veltecite Heart",
                quantity: 1,
              },
              {
                item: "Osirus Scrip",
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
            kMarks: 870,
          },
          {
            items: [
              {
                item: "Nickel",
                quantity: 5,
              },
              {
                item: "Korolev Scrip",
                quantity: 2,
              },
            ],
            kMarks: 1400,
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
            kMarks: 2200,
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
            kMarks: 3400,
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
            kMarks: 4300,
          },
          {
            items: [
              {
                item: "Sampler Container",
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
            kMarks: 5400,
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
            kMarks: 8600,
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
            kMarks: 10400,
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
            kMarks: 14000,
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
            kMarks: 17000,
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
            kMarks: 21400,
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
            kMarks: 34000,
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
            kMarks: 53500,
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
            kMarks: 67000,
          },
        ],
      },
      {
        levels: [
          {
            items: [
              {
                item: "Pure Veltecite",
                quantity: 1,
              },
              {
                item: "Strider Flesh",
                quantity: 12,
              },
              {
                item: "Korolev Scrip",
                quantity: 58,
              },
            ],
            kMarks: 84500,
          },
          {
            items: [
              {
                item: "Smart Mesh",
                quantity: 11,
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
            kMarks: 133500,
          },
          {
            items: [
              {
                item: "Meteor Core",
                quantity: 4,
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
            kMarks: 211000,
          },
          {
            items: [
              {
                item: "Letium",
                quantity: 107,
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
            kMarks: 870,
          },
          {
            items: [
              {
                item: "NiC Oil Cannister",
                quantity: 38,
              },
              {
                item: "Korolev Scrip",
                quantity: 292,
              },
            ],
            kMarks: 527000,
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
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
                item: "Osirus Scrip",
                quantity: 130,
              },
            ],
            kMarks: 265913,
          },
          {
            items: [
              {
                item: "Legendary Data Drive",
                quantity: 1,
              },
              {
                item: "Savage Marauder Flesh",
                quantity: 5,
              },
              {
                item: "Osirus Scrip",
                quantity: 195,
              },
            ],
            kMarks: 372278,
          },
          {
            items: [
              {
                item: "Alpha Crusher Heart",
                quantity: 3,
              },
              {
                item: "Osirus Scrip",
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
                item: "Sampler Container",
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
                item: "ICA Scrip",
                quantity: 86,
              },
            ],
            kMarks: 333000,
          },
          {
            items: [
              {
                item: "NiC Oil Cannister",
                quantity: 53,
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
                item: "Alpha Crusher Heart",
                quantity: 2,
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
            kMarks: 2180,
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
                quantity: 3,
              },
            ],
            kMarks: 5451,
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
            kMarks: 13626,
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
            kMarks: 34066,
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
                quantity: 17,
              },
            ],
            kMarks: 85165,
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
                item: "Co-TEC MultiTool",
                quantity: 8,
              },
              {
                item: "ICA Scrip",
                quantity: 38,
              },
            ],
            kMarks: 212913,
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
                quantity: 86,
              },
            ],
            kMarks: 532283,
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
                item: "Sampler Container",
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
                item: "Resin Gun",
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
                item: "Autoloader",
                quantity: 2,
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
                item: "Pure Focus Crystal",
                quantity: 3,
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
                quantity: 2,
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
          {
            items: [
              {
                item: "Sampler Container",
                quantity: 8,
              },
              {
                item: "Resin Gun",
                quantity: 8,
              },
              {
                item: "Korolev Scrip",
                quantity: 86,
              },
            ],
            kMarks: 133581,
          },
          {
            items: [
              {
                item: "Smart Mesh",
                quantity: 8,
              },
              {
                item: "Miniature Reactor",
                quantity: 6,
              },
              {
                item: "Korolev Scrip",
                quantity: 130,
              },
            ],
            kMarks: 211058,
          },
          {
            items: [
              {
                item: "Portable Lab",
                quantity: 2,
              },
              {
                item: "Meteor Core",
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
                item: "Resin Gun",
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
                item: "Sampler Container",
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
                item: "Optic Glass",
                quantity: 24,
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
                item: "Portable Lab",
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
  "Sampler Container": 0,
  "Valuable Data Drive": 0,
  Jewellery: 0,
  "Restoration Shield (Green)": 0,
  "Medium Backpack": 0,
  "Rattler Skin": 0,
  "Portable Lab": 0,
  "Toxic Glands": 0,
  "Marauder Flesh": 0,
  "Rattler Eyes": 0,
  "Strider Flesh": 0,
  "Legendary Data Drive": 0,
  "Print Resin": 0,
  Textiles: 0,
  "Salvaged Insulation": 0,
  "Smart Mesh": 0,
  "Laser Drill Control Unit": 0,
  "Magnetic Field Stabilizer": 0,
  "Co-TEC MultiTool": 0,
  Gyroscope: 0,
  "Miniature Reactor": 0,
  "Copper Wire": 0,
  "Osirus Scrip": 0,
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
  "NiC Oil Cannister": 0,
  "Waterweed Filament": 0,
  "Brightcap Mushroom": 0,
  "Weak Medkit": 0,
  "Medical Supplies": 0,
  "Blue Runner Egg": 0,
  "Old Medicine": 0,
  "Derelict Explosives": 0,
  "Radioactive Brightcap Mushroom": 0,
  Dustbloom: 0,
  "Crusher Flesh": 0,
  "Crusher Hide": 0,
  "Alpha Crusher Heart": 0,
  "Heavy Strider Flesh": 0,
  "Aluminum Scrap": 0,
  "Savage Marauder Flesh": 0,
  "Nutritional Bar": 0,
  Autoloader: 0,
  Kmarks: 0,
};
