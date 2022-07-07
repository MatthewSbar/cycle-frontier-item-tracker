export type Quest = {
  name: string;
  campaign: Faction;
  parts: Part[];
};

export type Faction = "Korolev" | "Osiris" | "ICA";

export type ViewMode = "quest" | "upgrade" | "items";
export type ItemSource = "quest" | "upgrade" | null;

export type Part = {
  dropItems?: ItemHandin[];
  deliverItems?: ItemHandin[];
  description?: string;
  name: MissionName;
  requires: MissionName | null;
};

export type ItemHandin = {
  item: ItemName;
  quantity: number;
  dropLocation?: DropLocation;
};

type DropLocation =
  | "Swamp Camp"
  | "Gate C"
  | "Main Office"
  | "Comms Tower"
  | "Stockpile"
  | "Pinnacle Lab"
  | "Satellite Dish"
  | "Fulfillment Center"
  | "Nutrion Farms Office"
  | "Waterfall Lab"
  | "Garage Office"
  | "Server Room"
  | "East Collection Point";

export type ItemName =
  | "Nickel"
  | "Compound Sheets"
  | "Hydraulic Piston"
  | "Flawed Veltecite"
  | "Circuit Board"
  | "Altered Nickel"
  | "Cloudy Veltecite"
  | "Ball Bearings"
  | "Titan Ore"
  | "Electronic Cables"
  | "Resin Gun"
  | "Metallic Alloys"
  | "Optic Glass"
  | "Brittle Titan Ore"
  | "Pure Veltecite"
  | "Shard Slicer"
  | "Zero Systems CPU"
  | "Meteor Fragment"
  | "Focus Crystal"
  | "Hardened Bone Plates"
  | "Clear Veltecite"
  | "Radio Equipment"
  | "Pure Focus Crystal"
  | "Spinal Base"
  | "Biological Sampler"
  | "Sample Container"
  | "Valuable Data Drive"
  | "Jewellery"
  | "Restoration Shield (Green)"
  | "Medium Backpack"
  | "Rattler Skin"
  | "Portable Lab"
  | "Toxic Glands"
  | "Marauder Flesh"
  | "Rattler Eyes"
  | "Strider Flesh"
  | "Unique Data Drive"
  | "Print Resin"
  | "Textiles"
  | "Salvaged Insulation"
  | "Smart Mesh"
  | "Magnetic Field Stabilizer"
  | "Co-TEC MultiTool"
  | "Gyroscope"
  | "Miniature Reactor"
  | "Copper Wire"
  | "Osiris Scrip"
  | "Korolev Scrip"
  | "ICA Scrip"
  | "Veltecite Heart"
  | "Old Currency"
  | "Meteor Core"
  | "Letium"
  | "Hardened Metals"
  | "Azure Tree Bark"
  | "Frag Grenade"
  | "Fusion Cartridge Batteries"
  | "Uncommon Data Drive"
  | "Rare Data Drive"
  | "Smoke Grenade"
  | "Pale Ivy Blossom"
  | "Indigenous Fruit"
  | "Magic-GROW Fertilizer"
  | "Charged Spinal Base"
  | "Polymetallic Prefabricate"
  | "Shock Absorber"
  | "Master Unit CPU"
  | "Interactive Screen"
  | "Oil Tank"
  | "Waterweed Filament"
  | "Brightcap Mushroom"
  | "Weak Medkit"
  | "Medical Supplies"
  | "Blue Runner Egg"
  | "Old Medicine"
  | "Derelict Explosives"
  | "Glowy Brightcap Mushroom"
  | "Dustbloom"
  | "Crusher Flesh"
  | "Crusher Hide"
  | "Elite Crusher Heart"
  | "Heavy Strider Flesh"
  | "Aluminum Scrap"
  | "Savage Marauder Flesh"
  | "Nutritional Bar"
  | "Autoloader"
  | "Kmarks";

type UpgradeTree =
  | "Generate Kmarks"
  | "Kmark Passive Cap"
  | "Generate Aurum"
  | "Aurum Passive Cap"
  | "Supply Crate"
  | "Stash"
  | "Safe Pockets"
  | "Workbench"
  | "Quarters";

type UpgradeLevel = {
  items: ItemHandin[];
  kMarks: number;
};

type Stage = {
  levels: UpgradeLevel[];
};

export type Upgrade = {
  tree: UpgradeTree;
  stages: Stage[];
};

export type QuestProgress = Record<string, number>;

export type UpgradeProgress = Record<UpgradeTree, Record<number, number>>;

export type MissionName =
  | KorolevMissionName
  | IcaMissionName
  | OsirisMissionName;

export type KorolevMissionName =
  | "Welcome to the Workforce"
  | "Sometimes violence IS the answer"
  | "Spare Parts"
  | "Contaminated Waters"
  | "Company Identity"
  | "Mineral Master"
  | "Inevitable Automation"
  | "Tools of the Trade"
  | "Very Fast Moving Parts"
  | "Final Touches"
  | "Spring Cleaning"
  | "Active Scan"
  | "Through the Optic Glass"
  | "A Titanic Request"
  | "A Heavy Conscience"
  | "A Pinch of Pure Power"
  | "Aggressive Marketing"
  | "Miners' Strike"
  | "Zero Waste"
  | "For all the Trees"
  | "From Above"
  | "Thick Skinned"
  | "Clear Focus"
  | "Site Seeing"
  | "Stormbringer"
  | "The Missing Engineer"
  | "Rapid Gentrification"
  | "Supply Drop"
  | "Messenger Service"
  | "Clearing the Way"
  | "Shopping List"
  | "Don't Dig Too Deep"
  | "Just a Call Away"
  | "Collaborative Research"
  | "Lab Heist"
  | "It's All About Branding"
  | "It's in the Blood"
  | "Fresh Meat"
  | "Trek for Data"
  | "Building Blocks"
  | "Salvage Ops"
  | "Pattern Testing"
  | "Custom Rig"
  | "Expensive Tastes"
  | "Delicate Parts"
  | "This is Goodbye"
  | "This isn't Science"
  | "Unlimited Power"
  | "The Test Run"
  | "Tough as Nails"
  | "Order Refill"
  | "Exotic Leathers"
  | "Forest Clearing"
  | "Time for More Work? Part 2"
  | "Show Them How It's Done"
  | "A Pick Me Up";

export type IcaMissionName =
  | "Simple Needs"
  | "Don't Forget to Recycle"
  | "Animal Control"
  | "Basic Needs"
  | "The Forester"
  | "Audiophiles Beware Part 1"
  | "Audiophiles Beware Part 2"
  | "Audiophiles Beware Part 3"
  | "SOS Sign"
  | "Old Friend"
  | "Doing the Work Part 2"
  | "Doing the Work Part 3"
  | "Doing the Work Part 4"
  | "The Stranded Prospector"
  | "Doing the Work Part 5"
  | "Doing the Work Part 6"
  | "Project Fireball Part 1"
  | "Project Fireball Part 2"
  | "Plan B Part 1"
  | "Plan B Part 2"
  | "Project Fireball Part 3"
  | "Working for the Community Part 1"
  | "Working for the Community Part 2"
  | "Working for the Community Part 3"
  | "Project Fireball Part 4"
  | "Project Fireball Part 5"
  | "Never Give Up Part 1"
  | "Never Give Up Part 2"
  | "Never Give Up Part 3"
  | "Back to Basics? Part 1"
  | "Back to Basics? Part 2"
  | "Abandoned Oil Field"
  | "Back to Basics? Part 3"
  | "The Community Needs You Part 1"
  | "The Community Needs You Part 2"
  | "The Community Needs You Part 3"
  | "Back to Basics? Part 4"
  | "Back to Basics? Part 5"
  | "Back to Basics? Part 6"
  | "Back to Basics? Part 7"
  | "An Eye for Oil Part 1"
  | "An Eye for Oil Part 2"
  | "Put to the Test Part 1"
  | "Put to the Test Part 2"
  | "Private Business Part 1"
  | "Private Business Part 2"
  | "Private Business Part 3"
  | "Toxic Love Part 1"
  | "Toxic Love Part 2";

export type OsirisMissionName =
  | "Prove your Worth"
  | "The Real Wetwork"
  | "Fertile Grounds"
  | "Tick-Tock"
  | "Papers, Please"
  | "Field Research Part 1"
  | "Field Research Part 2"
  | "Old Bones"
  | "Field Research Part 3"
  | "Field Research Part 4"
  | "Field Research Part 5"
  | "Field Research Part 6"
  | "Field Research Part 7"
  | "Extinct Creatures"
  | "Field Research Part 8"
  | "Lost Knowledge Part 1"
  | "Crashed Osiris Freighter"
  | "Lost Knowledge Part 2"
  | "Lost Knowledge Part 3"
  | "Lost Scientist"
  | "Explosive Delivery Part 1"
  | "Frozen"
  | "Laser Show Part 1"
  | "Laser Show Part 2"
  | "Everything is Crystals Part 1"
  | "Everything is Crystals Part 2"
  | "Everything is Crystals Part 3"
  | "Path to Strong Medkits Part 1"
  | "Path to Strong Medkits Part 2"
  | "Path to Strong Medkits Part 3"
  | "Building a better Death Ray Part 1"
  | "Building a better Death Ray Part 2"
  | "Satellite Master Part 1"
  | "Satellite Master Part 2"
  | "Satellite Master Part 3"
  | "Combat Ready Part 1"
  | "Combat Ready Part 2"
  | "Combat Ready Part 3"
  | "Orbital Repairs Part 1"
  | "Orbital Repairs Part 2"
  | "Orbital Repairs Part 3"
  | "Orbital Repairs Part 4"
  | "Breaking and Entering Part 1"
  | "The Needs of the One Part 1"
  | "The Needs of the One Part 2"
  | "The Needs of the One Part 3"
  | "The Needs of the One Part 4"
  | "Storm Rider Part 1"
  | "Storm Rider Part 2"
  | "Storm Rider Part 3"
  | "Stimulating Developments Part 1"
  | "Stimulating Developments Part 2";
