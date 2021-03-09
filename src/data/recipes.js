import {
  ironOre,
  copperOre,
  stone,
  coal,
  siliconOre,
  titaniumOre,
} from './components'

export default {
  ironIngot: [
    {
      materials: [
        { material: ironOre, amount: 1 },
      ],
      duration: 1,
      outputAmount: 1,
    },
  ],
  copperIngot: [
    {
      materials: [
        { material: copperOre, amout: 1 },
      ],
      duration: 1,
      outputAmount: 1,
    },
  ],
  stoneBrick: [
    {
      materials: [
        { material: stone, amout: 1 },
      ],
      duration: 1,
      outputAmount: 1,
    },
  ],
  energeticGraphite: [
    {
      materials: [
        { material: coal, amount: 2 },
      ],
      duration: 2,
      outputAmount: 1,
    },
  ],
  highPuritySilicon: [
    {
      materials: [
        { material: siliconOre, amount: 2 },
      ],
      duration: 2,
      outputAmount: 1,
    },
  ],
  titaniumIngot: [
    {
      materials: [
        { material: titaniumOre, amount: 2 },
      ],
      duration: 2,
      outputAmount: 1,
    },
  ],
}

