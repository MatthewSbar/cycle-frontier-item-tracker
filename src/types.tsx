export type Quest = {
  name: string;
  campaign: Faction;
  parts: Part[];
};

export type Faction = "Korolev" | "Osirus" | "ICA";

export type ViewMode = "quest" | "upgrade" | "items";

type Part = {
  dropItems?: ItemHandin[];
  deliverItems?: ItemHandin[];
  description?: string;
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
  | "Sampler Container"
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
  | "Laser Drill Control Unit"
  | "Magnetic Field Stabilizer"
  | "Co-TEC MultiTool"
  | "Gyroscope"
  | "Miniature Reactor"
  | "Copper Wire"
  | "Osirus Scrip"
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
