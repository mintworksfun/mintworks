// ============================================================
//  MINTWORKS — PROJECTS DATA
//  Edit this file to add, update or remove projects.
//  The site reads this automatically — never touch the HTML!
// ============================================================

const PROJECTS = [

  // ── TEMPLATE (copy & paste to add a new project) ──────────
  // {
  //   name:        null,              // null = auto-fetch from DexScreener (recommended)
  //   ticker:      null,              // null = auto-fetch from DexScreener
  //   description: "Short description shown on the card.",
  //   logo:        null,              // null = auto-fetch from DexScreener
  //   pairAddress: "ABC123...",       // Dexscreener pair address (REQUIRED)
  //   chain:       "solana",          // "solana" | "ethereum" | "bsc"
  //   status:      "live",            // "live" | "dev" | "soon"
  //   twitter:     "https://x.com/MintWorksStudio",
  //   website:     null,              // null if no website yet
  //   dexscreener: "https://dexscreener.com/solana/ABC123...",
  //   ath:         null,              // ATH market cap in USD (number) — fill manually, null = "—"
  //   tags:        ["Meme Coin", "Solana"]
  // },
  // ──────────────────────────────────────────────────────────

  {
    name:        null,   // auto-fetch from DexScreener
    ticker:      null,   // auto-fetch from DexScreener
    description: "Test project to validate the live data feed. Not a real MintWorks coin — just making sure the factory machines work! 🔧",
    logo:        null,   // auto-fetch from DexScreener
    pairAddress: "DDmy5KEkx2h28JiaTiewFDo1uWJs3D2BdZytqJUKXJn7",
    chain:       "solana",
    status:      "live",
    twitter:     "https://x.com/MintWorksStudio",
    website:     null,
    dexscreener: "https://dexscreener.com/solana/DDmy5KEkx2h28JiaTiewFDo1uWJs3D2BdZytqJUKXJn7",
    ath:         null,
    tags:        ["Test", "Solana"]
  },

  {
    name:        null,   // auto-fetch from DexScreener
    ticker:      null,   // auto-fetch from DexScreener
    description: "Second test project to validate the live data feed. Not a real MintWorks coin — just keeping the factory gears turning! ⚙️",
    logo:        null,   // auto-fetch from DexScreener
    pairAddress: "ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY",
    chain:       "solana",
    status:      "live",
    twitter:     "https://x.com/MintWorksStudio",
    website:     null,
    dexscreener: "https://dexscreener.com/solana/ED5nyyWEzpPPiWimP8vYm7sD7TD3LAt3Q3gRTWHzPJBY",
    ath:         684000000,   // ~$684M ATH (price × supply at Nov 15, 2024)
    tags:        ["Test", "Solana"]
  }

];
