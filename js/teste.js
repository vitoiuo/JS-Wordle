const palavrasValidas = [
  "would",
  "think",
  "shall",
  "leave",
  "bring",
  "start",
  "thank",
  "allow",
  "write",
  "carry",
  "offer",
  "speak",
  "stand",
  "learn",
  "agree",
  "apply",
  "avoid",
  "begin",
  "voice",
  "spend",
  "build",
  "reach",
  "enjoy",
  "watch",
  "cover",
  "raise",
  "cause",
  "break",
  "prove",
  "occur",
  "exist",
  "check",
  "serve",
  "share",
  "enter",
  "visit",
  "claim",
  "worry",
  "place",
  "drive",
  "argue",
  "catch",
  "fight",
  "refer",
  "admit",
  "sleep",
  "close",
  "arise",
  "point",
  "drink",
  "treat",
  "throw",
  "study",
  "press",
  "sound",
  "teach",
  "trust",
  "match",
  "state",
  "marry",
  "split",
  "adopt",
  "touch",
  "stick",
  "clear",
  "guess",
  "blame",
  "cross",
  "focus",
  "force",
  "count",
  "doubt",
  "laugh",
  "judge",
  "solve",
  "alter",
  "order",
  "burst",
  "relax",
  "issue",
  "train",
  "clean",
  "limit",
  "climb",
  "shift",
  "imply",
  "shoot",
  "phone",
  "waste",
  "dance",
  "score",
  "upset",
  "paint",
  "grant",
  "react",
  "guide",
  "knock",
  "reply",
  "shake",
  "fetch",
  "fancy",
  "smoke",
  "smell",
  "trace",
  "print",
  "boost",
  "smile",
  "cease",
  "adapt",
  "quote",
  "yield",
  "spell",
  "shout",
  "spare",
  "dress",
  "delay",
  "steal",
  "range",
  "hurry",
  "store",
  "trade",
  "light",
  "swear",
  "dream",
  "block",
  "stare",
  "house",
  "slide",
  "grasp",
  "swing",
  "speed",
  "plant",
  "breed",
  "taste",
  "weigh",
  "mount",
  "brush",
  "cater",
  "repay",
  "sense",
  "shape",
  "alert",
  "seize",
  "exert",
  "crack",
  "guard",
  "float",
  "deter",
  "greet",
  "bless",
  "spoil",
  "merge",
  "coach",
  "drain",
  "chase",
  "anger",
  "await",
  "drift",
  "renew",
  "sweep",
  "cheer",
  "steer",
  "shine",
  "unite",
  "draft",
  "track",
  "price",
  "elect",
  "amend",
  "round",
  "march",
  "level",
  "widen",
  "board",
  "crash",
  "chuck",
  "plead",
  "creep",
  "twist",
  "blend",
  "drown",
  "dwell",
  "strip",
  "grade",
  "value",
  "award",
  "spill",
  "stock",
  "cling",
  "empty",
  "pause",
  "erect",
  "erect",
  "tread",
  "stage",
  "boast",
  "incur",
  "stamp",
  "panic",
  "rally",
  "infer",
  "probe",
  "crawl",
  "stuff",
  "label",
  "evoke",
  "abide",
  "smash",
  "screw",
  "drill",
  "flood",
  "click",
  "total",
  "punch",
  "tempt",
  "cough",
  "cheat",
  "shell",
  "crush",
  "model",
  "evade",
  "beset",
  "field",
  "scare",
  "hatch",
  "rival",
  "sweat",
  "haunt",
  "blast",
  "equip",
  "alarm",
  "abuse",
  "merit",
  "input",
  "swell",
  "chair",
  "excel",
  "shear",
  "flash",
  "scrap",
  "shove",
  "annoy",
  "nurse",
  "forge",
  "sneak",
  "grind",
  "spray",
  "amuse",
  "avert",
  "slice",
  "decay",
  "rinse",
  "mould",
  "tense",
  "shock",
  "frame",
  "carve",
  "defer",
  "bleed",
  "mimic",
  "clash",
  "rebel",
  "loose",
  "tease",
  "recur",
  "stake",
  "scrub",
  "usher",
  "weave",
  "hover",
  "sniff",
  "scale",
  "gauge",
  "ferry",
  "whisk",
  "wreck",
  "utter",
  "blind",
  "shrug",
  "flush",
  "shave",
  "pinch",
  "brief",
  "choke",
  "dread",
  "erase",
  "lobby",
  "trail",
  "lodge",
  "queue",
  "space",
  "toast",
  "smack",
  "reset",
  "pitch",
  "flick",
  "stray",
  "shame",
  "equal",
  "adore",
  "scoop",
  "query",
  "charm",
  "halve",
  "chart",
  "wield",
  "pluck",
  "graze",
  "slash",
  "enact",
  "budge",
  "kneel",
  "spark",
  "ensue",
  "quell",
  "waive",
  "bathe",
  "expel",
  "repel",
  "allay",
  "dodge",
  "heave",
  "spawn",
  "mourn",
  "unify",
  "align",
  "rouse",
  "bully",
  "blink",
  "enrol",
  "glide",
  "forgo",
  "curse",
  "curse",
  "clamp",
  "front",
  "relay",
  "index",
  "title",
  "erupt",
  "avail",
  "trick",
  "lease",
  "water",
  "video",
  "perch",
  "lapse",
  "bribe",
  "power",
  "erode",
  "crowd",
  "pride",
  "group",
  "stain",
  "stack",
  "storm",
  "curve",
  "prise",
  "stall",
  "flock",
  "fling",
  "blush",
  "prune",
  "sever",
  "faint",
  "vomit",
  "sting",
  "groom",
  "pound",
  "crave",
  "brake",
  "dirty",
  "abort",
  "thump",
  "purge",
  "fault",
  "shore",
  "swoop",
  "patch",
  "pilot",
  "roast",
  "squat",
  "nudge",
  "brace",
  "stoop",
  "spike",
  "swamp",
  "reign",
  "adorn",
  "inset",
  "delve",
  "ripen",
  "prick",
  "sight",
  "endow",
  "amaze",
  "quash",
  "stink",
  "stave",
  "piece",
  "awake",
  "audit",
  "wreak",
  "crown",
  "exact",
  "spoon",
  "slump",
  "chill",
  "flirt",
  "ditch",
  "blaze",
  "pedal",
  "brave",
  "chant",
  "court",
  "bloom",
  "revel",
  "yearn",
  "shade",
  "groan",
  "hedge",
  "evict",
  "bluff",
  "clasp",
  "wring",
  "surge",
  "vouch",
  "cloud",
  "motor",
  "elude",
  "roost",
  "eject",
  "allot",
  "staff",
  "grate",
  "waver",
  "glean",
  "rough",
  "smear",
  "knead",
  "grace",
  "clock",
  "wince",
  "while",
  "latch",
  "brood",
  "poach",
  "clone",
  "waken",
  "flare",
  "stalk",
  "glare",
  "brand",
  "hoist",
  "annex",
  "abate",
  "sneer",
  "skate",
  "scour",
  "blank",
  "craft",
  "hitch",
  "flout",
  "grill",
  "rhyme",
  "gross",
  "churn",
  "skirt",
  "usurp",
  "bitch",
  "lever",
  "cycle",
  "scorn",
  "wrest",
  "yeast",
  "drape",
  "frown",
  "tally",
  "verse",
  "lurch",
  "tally",
  "debit",
  "remit",
  "graft",
  "sling",
  "snore",
  "chain",
  "class",
  "orbit",
  "wheel",
  "munch",
  "prize",
  "swirl",
  "liken",
  "droop",
  "untie",
  "whizz",
  "pivot",
  "bulge",
  "plump",
  "gloss",
  "slope",
  "scold",
  "stump",
  "wedge",
  "embed",
  "scoff",
  "posit",
  "gleam",
  "amass",
  "creak",
  "exile",
  "spurn",
  "wager",
  "scout",
  "phase",
  "sieve",
  "fence",
  "rebut",
  "outdo",
  "grunt",
  "snuff",
  "whack",
  "whine",
  "jolly",
  "covet",
  "barge",
  "taunt",
  "augur",
  "shirk",
  "telex",
  "abhor",
  "mince",
  "paste",
  "tramp",
  "brook",
  "whirl",
  "grope",
  "strut",
  "exude",
  "cower",
  "swarm",
  "sober",
  "crane",
  "harry",
  "recap",
  "stunt",
  "cable",
  "right",
  "dwarf",
  "black",
  "douse",
  "beach",
  "glaze",
  "binge",
  "notch",
  "style",
  "liven",
  "swish",
  "flake",
  "hoard",
  "belie",
  "spect",
  "throb",
  "feign",
  "angle",
  "gedge",
  "spout",
  "trash",
  "scent",
  "demur",
  "skimp",
  "moult",
  "extol",
  "snort",
  "fudge",
  "table",
  "annul",
  "tutor",
  "strap",
  "cream",
  "swoon",
  "plumb",
  "decry",
  "quack",
  "steam",
  "layer",
  "peter",
  "shunt",
  "gloat",
  "lynch",
  "tweak",
  "leach",
  "parry",
  "atone",
  "amble",
  "stone",
  "nerve",
  "freak",
  "preen",
  "sport",
  "croak",
  "reuse",
  "clout",
  "blunt",
  "shred",
  "growl",
  "prowl",
  "winch",
  "trawl",
  "party",
  "slink",
  "refit",
  "lunge",
  "spite",
  "vault",
  "stoke",
  "lance",
  "exalt",
  "waltz",
  "steel",
  "unfit",
  "salve",
  "haste",
  "paper",
  "mouth",
  "slake",
  "slant",
  "beget",
  "hound",
  "bleep",
  "baulk",
  "imbue",
  "wrong",
  "verge",
  "quail",
  "blurt",
  "taint",
  "gouge",
  "trump",
  "deign",
  "tango",
  "radio",
  "prime",
  "lunch",
  "cramp",
  "sidle",
  "scowl",
  "strew",
  "ready",
  "plonk",
  "scoot",
  "major",
  "snarl",
  "sully",
  "chick",
  "feast",
  "honor",
  "daunt",
  "splat",
  "bunch",
  "stint",
  "splat",
  "stomp",
  "baste",
  "tower",
  "tower",
  "scald",
  "brown",
  "retch",
  "splay",
  "chime",
  "chomp",
  "saute",
  "scull",
  "exult",
  "crank",
  "steep",
  "parse",
  "quiet",
  "assay",
  "spunk",
  "strum",
  "flank",
  "spurt",
  "slave",
  "snare",
  "swipe",
  "debar",
  "snipe",
  "bleat",
  "purse",
  "fritz",
  "swill",
  "smite",
  "plane",
  "chafe",
  "drone",
  "cadge",
  "image",
  "curry",
  "tarry",
  "welch",
  "spear",
  "appal",
  "tithe",
  "braid",
  "skulk",
  "couch",
  "thumb",
  "chide",
  "proof",
  "flail",
  "cloak",
  "smirk",
  "brain",
  "stash",
  "ladle",
  "blitz",
  "slush",
  "debut",
  "croon",
  "snack",
  "fluff",
  "spank",
  "gripe",
  "gnash",
  "twine",
  "frock",
  "sally",
  "reify",
  "impel",
  "calve",
  "twirl",
  "clump",
  "psych",
  "drool",
  "queer",
  "retry",
  "chalk",
  "rearm",
  "belch",
  "plait",
  "clang",
  "resit",
  "spook",
  "devil",
  "grass",
  "debug",
  "unzip",
  "skive",
  "floor",
  "belay",
  "clank",
  "craze",
  "withe",
  "shoal",
  "crisp",
  "snoop",
  "swank",
  "squig",
  "lamed",
  "remix",
  "repot",
  "berth",
  "inlay",
  "cavil",
  "trial",
  "quaff",
  "twang",
  "affix",
  "grout",
  "truss",
  "blood",
  "sinew",
  "miaow",
  "hunch",
  "earth",
  "rerun",
  "scalp",
  "singe",
  "rivet",
  "haven",
  "chaff",
  "spire",
  "drawl",
  "sheet",
  "chute",
  "clunk",
  "sarge",
  "blare",
  "smart",
  "elope",
  "tweet",
  "batch",
  "clink",
  "short",
  "whirr",
  "stook",
  "spose",
  "carol",
  "mosey",
  "slosh",
  "enure",
  "opine",
  "edify",
  "slurp",
  "razor",
  "brawn",
  "gauze",
  "elide",
  "tract",
  "email",
  "mulch",
  "froth",
  "glint",
  "joust",
  "sugar",
  "spool",
  "thunk",
  "knife",
  "whelp",
  "cluck",
  "smock",
  "evert",
  "quill",
  "pease",
  "chuse",
  "poise",
  "brawl",
  "steve",
  "crimp",
  "floss",
  "dowse",
  "hough",
  "scant",
  "sleet",
  "lames",
  "pouch",
  "labor",
  "coxed",
  "gruel",
  "kebab",
  "filch",
  "glass",
  "emend",
  "bevel",
  "cache",
  "scuff",
  "witch",
  "scram",
  "botch",
  "conch",
  "ketch",
  "stilt",
  "snout",
  "frisk",
  "chump",
  "recut",
  "abase",
  "clomp",
  "bouge",
  "boing",
  "spoof",
  "metal",
  "chive",
  "neigh",
  "speke",
  "whiff",
  "fadge",
  "xerox",
  "roger",
  "sturt",
  "setup",
  "elute",
  "coast",
  "sleek",
  "twain",
  "flunk",
  "snick",
  "towel",
  "canoe",
  "spazz",
  "essay",
  "tryst",
  "hinge",
  "blurb",
  "deify",
  "ravel",
  "rejig",
  "troop",
  "clown",
  "amand",
  "upend",
  "shaft",
  "whore",
  "grice",
  "tubed",
  "meter",
  "sabre",
  "chack",
  "pique",
  "bugle",
  "thowt",
  "slack",
  "rimed",
  "prate",
  "roust",
  "refix",
  "snook",
  "glory",
  "crust",
  "plunk",
  "greek",
  "chuff",
  "avize",
  "belly",
  "ponce",
  "skiff",
  "appel",
  "quiff",
  "whoof",
  "scrag",
  "guest",
  "booze",
  "crate",
  "frank",
  "unman",
  "vaunt",
  "quake",
  "frost",
  "rifle",
  "tress",
  "horse",
  "demob",
  "slime",
  "wrack",
  "smarm",
  "parle",
  "tinge",
  "noise",
  "squab",
  "spasm",
  "leash",
  "scape",
  "bebop",
  "welsh",
  "crick",
  "boule",
  "snake",
  "bilge",
  "plate",
  "bread",
  "ingle",
  "favor",
  "alloy",
  "caddy",
  "educe",
  "dross",
  "ingot",
  "unjam",
  "adlib",
  "grump",
  "chirp",
  "befit",
  "onlap",
  "dight",
  "feint",
  "sheer",
  "spore",
  "uncap",
  "coopt",
  "graph",
  "bield",
  "trill",
  "rehab",
  "teaze",
  "bodge",
  "demit",
  "swarf",
  "mutex",
  "knowe",
  "thole",
  "chock",
  "abash",
  "yodel",
  "dulce",
  "mulct",
  "recce",
  "besom",
  "libel",
  "hould",
  "chunk",
  "pfaff",
  "hight",
  "clonk",
  "quoit",
  "shold",
  "prang",
];

const dateIntervalGenerator = (() => {
  const _generateInterval = (startDate, endDate) => {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };
  return {
    generateIn: _generateInterval,
  };
})();

function generateWordsBase() {
  let d1 = new Date("2022-08-19");
  let d2 = new Date("2023-08-19");

  dates = dateIntervalGenerator.generateIn(d1, d2);
  let obj = {};
  dates.forEach((e1, index) => {
    let e2 = palavrasValidas[index].toLocaleUpperCase();
    let key = e1.toLocaleDateString();
    obj[key] = e2;
  });
  return obj;
}
