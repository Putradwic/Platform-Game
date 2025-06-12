export const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    description:
      "An open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.",
    price: 59.99,
    image: "/Cyberpunk-2077/1.jpg",
    images: [
      "/Cyberpunk-2077/2.jpg",
      "/Cyberpunk-2077/3.jpg",
      "/Cyberpunk-2077/4.jpg",
      "/Cyberpunk-2077/5.jpg",
    ],
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2020-12-10",
    genres: ["RPG", "Action", "Adventure"],
    rating: 4.2,
    platforms: ["PC", "PlayStation", "Xbox"],
    ageRating: "M 17+",
    features: ["Single-player", "Open World", "Character Customization", "Choices Matter", "Cyberpunk", "Futuristic"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3570K / AMD FX-8310",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 780 / AMD Radeon RX 470",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790 / AMD Ryzen 3 3200G",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1060 6GB / AMD Radeon R9 Fury",
        storage: "70 GB available space",
      },
    },
  },
  {
    id: 2,
    title: "Elden Ring",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.",
    price: 59.99,
    image: "/Elden-Ring/1.jpg",
    images: [
      "/Elden-Ring/2.jpg",
      "/Elden-Ring/3.jpg",
      "/Elden-Ring/4.jpg",
      "/Elden-Ring/5.jpg",
    ],
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "2022-02-25",
    genres: ["RPG", "Action", "Adventure"],
    rating: 4.8,
    platforms: ["PC", "PlayStation", "Xbox"],
    ageRating: "M 17+",
    features: ["Single-player", "Online Co-op", "Open World", "Dark Fantasy", "Challenging", "Character Creation"],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1060 3GB / AMD Radeon RX 580 4GB",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10/11",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1070 8GB / AMD Radeon RX Vega 56 8GB",
        storage: "60 GB available space",
      },
    },
  },
  {
    id: 3,
    title: "Fortnite",
    description:
      "Fortnite is the completely free multiplayer game where you and your friends can jump into Battle Royale or Fortnite Creative. Download now and jump into the action. This Season, battle to gain XP and unlock new rewards like Outfits, Wraps, Emotes, and more.",
    price: 0,
    image: "/Fortnite/1.jpg",
    images: [
      "/Fortnite/2.jpg",
      "/Fortnite/3.jpg",
      "/Fortnite/4.jpg",
      "/Fortnite/5.jpg",
    ],
    developer: "Epic Games",
    publisher: "Epic Games",
    releaseDate: "2017-07-25",
    genres: ["Battle Royale", "Action", "Shooter"],
    rating: 4.0,
    platforms: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    ageRating: "T 13+",
    features: ["Free-to-Play", "Battle Royale", "Building", "Cross-Platform", "Creative Mode", "Regular Updates"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-3225 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "Intel HD 4000 / AMD Radeon Vega 8",
        storage: "26 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-7300U / AMD Ryzen 3 3300U",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 960 / AMD R9 280",
        storage: "26 GB available space",
      },
    },
  },
  {
    id: 4,
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.",
    price: 59.99,
    image: "/The-Legend-Of-Zelda/1.jpg",
    images: [
      "/The-Legend-Of-Zelda/2.jpg",
      "/The-Legend-Of-Zelda/3.jpg",
      "/The-Legend-Of-Zelda/4.jpg",
      "/The-Legend-Of-Zelda/5.jpg",
    ],
    developer: "Nintendo",
    publisher: "Nintendo",
    releaseDate: "2017-03-03",
    genres: ["Action", "Adventure"],
    rating: 4.9,
    platforms: ["Switch", "Wii U"],
    ageRating: "E10+ 10+",
    features: ["Single-player", "Open World", "Exploration", "Physics-Based", "Crafting", "Climbing"],
    systemRequirements: {
      minimum: {
        os: "Nintendo Switch System",
        processor: "NVIDIA Custom Tegra",
        memory: "4 GB RAM",
        graphics: "NVIDIA Custom Tegra",
        storage: "13.4 GB available space",
      },
      recommended: {
        os: "Nintendo Switch System",
        processor: "NVIDIA Custom Tegra",
        memory: "4 GB RAM",
        graphics: "NVIDIA Custom Tegra",
        storage: "13.4 GB available space",
      },
    },
  },
  {
    id: 5,
    title: "Minecraft",
    description:
      "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then it's a good thing that Minecraft can be played with friends.",
    price: 29.99,
    image: "/Minecraft/1.jpg",
    images: [
      "/Minecraft/2.jpg",
      "/Minecraft/3.jpg",
      "/Minecraft/4.jpg",
      "/Minecraft/5.jpg",
    ],
    developer: "Mojang Studios",
    publisher: "Mojang Studios",
    releaseDate: "2011-11-18",
    genres: ["Sandbox", "Survival"],
    rating: 4.7,
    platforms: ["PC", "PlayStation", "Xbox", "Switch", "Mobile"],
    ageRating: "E10+ 10+",
    features: ["Multiplayer", "Creative Mode", "Survival Mode", "Modding Support", "Cross-Platform", "Infinite Worlds"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 version 14393.0",
        processor: "Intel Celeron J4105 / AMD FX-4100",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics 4000 / AMD Radeon R5 series",
        storage: "1 GB available space",
      },
      recommended: {
        os: "Windows 10 version 14393.0",
        processor: "Intel Core i5-4690 / AMD A10-7800",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 700 Series / AMD Radeon Rx 200 Series",
        storage: "4 GB available space",
      },
    },
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    description:
      "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run.",
    price: 39.99,
    image: "/RDR2/1.jpg",
    images: [
      "/RDR2/2.jpg",
      "/RDR2/3.jpg",
      "/RDR2/4.jpg",
      "/RDR2/5.jpg",
    ],
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    genres: ["Action", "Adventure", "Western"],
    rating: 4.9,
    platforms: ["PC", "PlayStation", "Xbox"],
    ageRating: "M 17+",
    features: ["Single-player", "Online Multiplayer", "Open World", "Story Rich", "Western", "Honor System"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 April 2018 Update",
        processor: "Intel Core i5-2500K / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 770 2GB / AMD Radeon R9 280 3GB",
        storage: "150 GB available space",
      },
      recommended: {
        os: "Windows 10 April 2018 Update",
        processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1060 6GB / AMD Radeon RX 480 4GB",
        storage: "150 GB available space",
      },
    },
  },
  {
    id: 7,
    title: "FIFA 22",
    description:
      "FIFA 22 brings The World's Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men's and women's FIFA World Cup coming to the game as post-launch updates, women's club football, cross-play features, and more.",
    price: 59.99,
    image: "/FIFA-22/1.jpg",
    images: [
      "/FIFA-22/2.jpg",
      "/FIFA-22/3.jpg",
      "/FIFA-22/4.jpg",
     "/FIFA-22/5.jpg",
    ],
    developer: "EA Sports",
    publisher: "Electronic Arts",
    releaseDate: "2022-09-30",
    genres: ["Sports", "Simulation"],
    rating: 4.0,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    ageRating: "E 6+",
    features: ["Multiplayer", "Cross-Platform", "Career Mode", "Ultimate Team", "Women's Football", "World Cup"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5 6600k / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1050 Ti / AMD Radeon RX 570",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7 6700 / AMD Ryzen 7 2700X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 1660 / AMD Radeon RX 5600 XT",
        storage: "100 GB available space",
      },
    },
  },  
  {
    id: 17,
    title: "Call of Duty: Warzone",
    description:
      "Welcome to Warzone, the new free-to-play massive combat arena from the world of Modern Warfare. Drop in, armor up, loot for rewards, and battle your way to the top. Featuring two epic modes of play: Battle Royale and Plunder.",
    price: 0,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600&text=COD+Warzone+Screenshot+1",
      "/placeholder.svg?height=400&width=600&text=COD+Warzone+Screenshot+2",
      "/placeholder.svg?height=400&width=600&text=COD+Warzone+Screenshot+3",
      "/placeholder.svg?height=400&width=600&text=COD+Warzone+Screenshot+4",
    ],
    developer: "Infinity Ward",
    publisher: "Activision",
    releaseDate: "2020-03-10",
    genres: ["Battle Royale", "FPS", "Shooter"],
    rating: 4.1,
    platforms: ["PC", "PlayStation", "Xbox"],
    ageRating: "M 17+",
    features: ["Free-to-Play", "Battle Royale", "150 Players", "Cross-Platform", "Loadouts", "Gulag"],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-Bit (SP1) or Windows 10 64-Bit",
        processor: "Intel Core i3-4340 / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 670 / AMD Radeon HD 7950",
        storage: "175 GB available space",
      },
      recommended: {
        os: "Windows 10 64-Bit",
        processor: "Intel Core i5-2500K / AMD Ryzen R5 1600X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GTX 970 / AMD R9 390",
        storage: "175 GB available space",
      },
    },
  },
]

export const news = [
  {
    id: 1,
    title: "Cyberpunk 2077 Phantom Liberty Expansion Announced",
    content: `CD Projekt Red has officially announced the highly anticipated expansion for Cyberpunk 2077, titled "Phantom Liberty." This major story expansion promises to deliver a thrilling spy-thriller narrative set in the dangerous district of Dogtown, a walled-off area of Night City controlled by militech forces and local gangs.

The expansion will feature Keanu Reeves reprising his role as Johnny Silverhand, alongside new characters including a mysterious netrunner known only as "Songbird" and Colonel Kurt Hansen, the ruthless leader of the Barghest militia. Players will take on the role of a sleeper agent working for the New United States of America, navigating a web of political intrigue and corporate espionage.

"Phantom Liberty represents our commitment to expanding the Cyberpunk 2077 universe in meaningful ways," said Paweł Sasko, Quest Director at CD Projekt Red. "We've learned from our experiences with the base game and are applying those lessons to create something truly special for our players."

The expansion will introduce new gameplay mechanics including enhanced vehicle combat, improved AI systems, and a completely revamped police system. Players can expect approximately 20 hours of new content, including side quests, gigs, and activities scattered throughout Dogtown.

New cyberware implants will be available, including military-grade modifications that were previously unavailable to civilian mercenaries. The expansion will also feature new weapons, vehicles, and clothing options that reflect the militaristic nature of the new district.

CD Projekt Red has confirmed that Phantom Liberty will be the only major expansion for Cyberpunk 2077, as the studio shifts focus to their next projects including the sequel to Cyberpunk 2077 and the next installment in The Witcher series. The expansion is expected to launch in late 2023 for PC, PlayStation 5, and Xbox Series X/S.`,
    date: "2023-06-15",
    image: "/Cyberpunk-2077/6.jpg",
    category: "Updates",
    author: "GameHub Staff",
  },
  {
    id: 2,
    title: "Summer Game Fest 2023: All the Major Announcements",
    content: `Summer Game Fest 2023 has concluded with a spectacular showcase of upcoming games, surprising reveals, and industry-shaking announcements. Hosted by Geoff Keighley, this year's event delivered on its promise to be the biggest gaming celebration of the summer.

The show opened with a bang as Kojima Productions revealed their mysterious new project, codenamed "OD" (Overdose). The cryptic trailer featured surreal imagery and the tagline "A game over the edge," suggesting another mind-bending experience from the legendary developer. While details remain scarce, industry insiders speculate it could be Kojima's take on the horror genre.

Microsoft stole much of the spotlight with the surprise announcement of "Fable 4," showing off gorgeous gameplay footage that demonstrated the series' return to its whimsical roots. The trailer showcased improved character creation, dynamic weather systems, and the series' trademark British humor. Xbox Game Studios confirmed the title will launch day-one on Game Pass.

Sony wasn't to be outdone, revealing the first gameplay footage of "Spider-Man 2" from Insomniac Games. The demo showed both Peter Parker and Miles Morales swinging through an expanded New York City, with new traversal mechanics and the introduction of Venom as a major antagonist. The symbiote's influence on Peter's abilities was prominently featured, promising a darker tone for the sequel.

Indie games had their moment to shine with several standout reveals. "Pizza Tower" from Tour De Pizza impressed with its hand-drawn animation and frenetic platforming gameplay. "Cocoon" from Geometric Interactive showcased beautiful puzzle-platforming mechanics in an alien world. These titles demonstrate the continued creativity and innovation coming from independent developers.

The event also featured world premieres of "Lies of P," a dark Pinocchio-inspired soulslike that has been generating significant buzz, and "Lords of the Fallen," a complete reboot of the 2014 action RPG that promises to deliver a more polished souls-like experience.

Virtual reality wasn't forgotten, with Meta showcasing "Horizon Call of the Mountain" for PlayStation VR2, demonstrating the potential of next-generation VR gaming with stunning visuals and immersive climbing mechanics.

The show concluded with a surprise appearance from Todd Howard, who provided a brief update on "The Elder Scrolls VI," confirming that development is progressing but the game is still several years away from release. This news, while expected, still managed to generate significant excitement among RPG fans worldwide.`,
    date: "2023-06-10",
    image: "/Cyberpunk-2077/7.jpg",
    category: "Events",
    author: "Alex Johnson",
  },
  {
    id: 3,
    title: "Elden Ring DLC Shadow of the Erdtree Coming Next Month",
    content: `FromSoftware has finally lifted the veil on "Shadow of the Erdtree," the massive expansion for their critically acclaimed action RPG Elden Ring. Set to launch next month, this DLC promises to be the studio's largest expansion to date, rivaling the size of some full games.

The expansion takes players to the Realm of Shadow, a mysterious parallel dimension that exists alongside the Lands Between. This new realm can be accessed through a specific location in the base game, though FromSoftware has remained tight-lipped about the exact requirements. What we do know is that players will need to have progressed significantly through the main story to access the new content.

"Shadow of the Erdtree introduces a completely new mythology to the Elden Ring universe," explained Hidetaka Miyazaki, director of the expansion. "Players will encounter Miquella, one of the most enigmatic figures from the base game's lore, and uncover secrets that will recontextualize much of what they thought they knew about the world."

The expansion features over 10 new boss encounters, each designed to challenge even the most experienced Tarnished. Early previews have shown glimpses of massive creatures that dwarf even the game's most imposing foes. New weapon categories have been confirmed, including light greatswords and throwing weapons, expanding the already diverse combat options.

The Realm of Shadow is described as being roughly the size of Limgrave, the starting area of the base game, but with significantly more vertical exploration. New traversal mechanics, including enhanced spirit steed abilities, will allow players to reach previously inaccessible areas and discover hidden secrets.

Character progression receives significant additions with new Scadutree Fragments, special items that enhance player abilities specifically within the DLC areas. This system allows FromSoftware to create challenging content for high-level players without trivializing the base game's difficulty curve.

The expansion also introduces new multiplayer elements, including expanded co-op functionality and new PvP arenas set in iconic locations from the Realm of Shadow. These additions should provide fresh experiences for the game's dedicated online community.

FromSoftware has confirmed that Shadow of the Erdtree will be their final major content addition to Elden Ring, as the studio shifts focus to their next projects. However, they've hinted that the expansion's story will set up elements that may be explored in future FromSoftware titles.

Pre-orders for the expansion are now available across all platforms, with special collector's editions featuring exclusive artwork and a detailed map of the Realm of Shadow. The expansion will be available for PC, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.`,
    date: "2023-05-28",
    image: "/Elden-Ring/6.jpg",
    category: "Releases",
    author: "Sarah Parker",
  },
  {
    id: 4,
    title: "PlayStation 6 Rumors: What We Know So Far",
    content: `The gaming industry is buzzing with speculation about Sony's next-generation console, tentatively dubbed the PlayStation 6. While Sony has remained officially silent about their future hardware plans, industry insiders and patent filings have provided tantalizing clues about what gamers might expect from the next PlayStation console.

According to multiple sources familiar with Sony's internal roadmap, the PlayStation 6 is currently in early development stages, with a potential release window targeting 2028-2030. This timeline would align with Sony's historical console release patterns, typically launching new hardware every 6-7 years.

The most significant rumored advancement involves the console's processing architecture. Industry analyst Dr. Lisa Chen from TechInsight Research suggests that Sony is exploring partnerships with both AMD and NVIDIA for the PS6's graphics capabilities. "Sony is likely evaluating multiple chip architectures to ensure they can deliver true 8K gaming at 60fps, with ray tracing as a standard feature rather than a premium option," Chen explained in a recent interview.

Backward compatibility appears to be a major focus for the PlayStation 6. Sources indicate that Sony is developing technology to ensure seamless compatibility with PS4 and PS5 games, potentially extending back to earlier PlayStation generations through advanced emulation techniques. This would address one of the most requested features from the PlayStation community.

Storage technology is expected to see revolutionary improvements. While the PS5's SSD was groundbreaking, the PS6 is rumored to feature next-generation storage solutions that could eliminate loading times entirely. Patent filings suggest Sony is exploring memory architectures that blur the line between RAM and storage, potentially allowing for instant game switching and unprecedented multitasking capabilities.

Virtual and augmented reality integration is another area of significant speculation. With the PlayStation VR2's recent launch, industry watchers believe Sony is positioning VR as a core component of their future gaming ecosystem. The PS6 might feature built-in VR processing capabilities, eliminating the need for separate VR hardware and making virtual reality gaming more accessible to mainstream audiences.

Cloud gaming integration is also expected to play a larger role. Sony's PlayStation Now service has evolved significantly, and the PS6 might feature hybrid local-cloud processing, where complex calculations can be offloaded to Sony's servers to enhance local performance. This could enable smaller, more affordable console variants while maintaining high-end gaming performance.

Environmental considerations are increasingly important in hardware design. Sony has committed to carbon neutrality by 2030, and the PS6 is expected to reflect this commitment with more efficient power consumption, sustainable materials, and potentially modular design elements that extend the console's lifespan.

Pricing remains a significant question mark. The PS5's launch price was already at the upper limit of what many consumers consider acceptable. Industry experts suggest Sony might explore multiple SKU options for the PS6, potentially including a premium model with cutting-edge features and a more affordable variant focused on essential gaming capabilities.

While these rumors paint an exciting picture of the future of PlayStation gaming, it's important to note that Sony's plans could change significantly before any official announcement. The company has historically been secretive about their hardware development, often surprising the industry with innovative features that weren't anticipated by analysts and insiders.`,
    date: "2023-05-15",
    image: "/placeholder.svg?height=300&width=600",
    category: "Rumors",
    author: "Michael Chen",
  },
  {
    id: 5,
    title: "Epic Games Store Announces New Free Games for June",
    content: `Epic Games Store has unveiled an impressive lineup of free games for June 2023, continuing their strategy of offering high-quality titles to attract and retain users on their digital platform. This month's selection includes several AAA titles and critically acclaimed indie games that collectively represent hundreds of dollars in value.

The headline offering is "Control Ultimate Edition" from Remedy Entertainment, the supernatural action-adventure game that garnered critical acclaim for its innovative gameplay mechanics and stunning visual design. The Ultimate Edition includes the base game plus both "The Foundation" and "AWE" expansions, offering players the complete Control experience. This marks the first time the Ultimate Edition has been offered for free on any platform.

Joining Control is "Rocket League," Psyonix's wildly popular vehicular soccer game that has maintained a massive player base since its 2015 launch. While Rocket League transitioned to a free-to-play model in 2020, Epic is offering exclusive cosmetic content and in-game currency to new players who claim the game through their store during June.

The indie game selection is particularly strong this month, featuring "Hades" from Supergiant Games, the roguelike action game that swept awards ceremonies in 2020. Hades combines tight combat mechanics with compelling narrative elements and stunning hand-drawn artwork. The game's inclusion in Epic's free games program is expected to introduce it to a new audience who may have missed its initial release.

"Subnautica: Below Zero," the standalone expansion to the underwater survival game, rounds out the major offerings. This sequel takes players to an arctic region of planet 4546B, featuring new biomes, creatures, and survival mechanics. The game has been praised for its atmospheric design and innovative approach to underwater exploration.

Epic Games Store's free games program has become a significant factor in the digital distribution landscape. Since launching in 2018, Epic has given away over 400 games, with a combined value exceeding $15,000. The program has successfully attracted over 200 million registered users to the platform, though conversion rates to paying customers remain a closely guarded metric.

The strategy appears to be working from a user acquisition standpoint. Epic Games CEO Tim Sweeney recently revealed that the free games program has cost the company over $500 million but has been instrumental in establishing Epic Games Store as a legitimate competitor to Steam. "We view the free games program as a long-term investment in building our user base and demonstrating the value of our platform," Sweeney explained during a recent industry conference.

This month's offerings also include several smaller indie titles that showcase the diversity of modern game development. "Coffee Talk," a visual novel about a barista in a fantasy world, offers a relaxing narrative experience. "What Remains of Edith Finch," the award-winning walking simulator from Giant Sparrow, provides a haunting exploration of family history and storytelling in games.

The free games program has also had broader industry implications. Developers have reported significant increases in sales of sequels and DLC following their games' inclusion in Epic's free offerings. This "halo effect" has made the program attractive to publishers who see it as a marketing opportunity rather than just a revenue source.

Looking ahead, Epic has hinted that their free games program will continue throughout 2023 and beyond, with some months featuring even more ambitious offerings. Industry speculation suggests that Epic might eventually offer day-one releases of major titles as part of their free games program, though no official announcements have been made.`,
    date: "2023-06-01",
    image: "/placeholder.svg?height=300&width=600",
    category: "Updates",
    author: "GameHub Staff",
  },
  {
    id: 6,
    title: "Exclusive Interview with Hideo Kojima on His New Project",
    content:
      "In an exclusive interview, legendary game designer Hideo Kojima discusses his upcoming project, creative process, and vision for the future of interactive entertainment.",
    date: "2023-04-20",
    image: "/placeholder.svg?height=300&width=600",
    category: "Interviews",
    author: "Emily Rodriguez",
  },
  {
    id: 7,
    title: "E3 2023 Officially Canceled, Future of the Event Uncertain",
    content:
      "The Entertainment Software Association (ESA) has officially announced the cancellation of E3 2023. The future of the once-premier gaming event remains uncertain as publishers increasingly opt for their own showcases.",
    date: "2023-03-30",
    image: "/placeholder.svg?height=300&width=600",
    category: "Events",
    author: "David Wilson",
  },
  {
    id: 8,
    title: "The Last of Us Part III Reportedly in Early Development",
    content:
      "According to multiple sources, Naughty Dog has begun early development on The Last of Us Part III. The game is expected to continue the story of Ellie and introduce new characters to the post-apocalyptic world.",
    date: "2023-05-05",
    image: "/placeholder.svg?height=300&width=600",
    category: "Rumors",
    author: "Lisa Thompson",
  },
  {
    id: 9,
    title: "Major Update Coming to Minecraft Next Week",
    content:
      "Mojang has announced a significant update for Minecraft that will introduce new biomes, mobs, and building materials. The update will be available across all platforms starting next week.",
    date: "2023-06-08",
    image: "/placeholder.svg?height=300&width=600",
    category: "Updates",
    author: "GameHub Staff",
  },
  {
    id: 10,
    title: "Community Spotlight: Amazing Creations in Animal Crossing",
    content:
      "This month's community spotlight features incredible island designs, custom patterns, and creative builds from the Animal Crossing: New Horizons community.",
    date: "2023-06-05",
    image: "/placeholder.svg?height=300&width=600",
    category: "Community",
    author: "Sophia Lee",
  },
]
