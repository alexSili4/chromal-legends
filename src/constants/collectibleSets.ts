import { CollectibleSets } from '@/types/collectibleSets.types';
import chromaLegendsXandra from '@/images/collectible-sets/chroma-legends-xandra-min.png';
import chromaLegendsNeon from '@/images/collectible-sets/chroma-legends-neon-min.png';

const collectibleSets: CollectibleSets = [
  {
    name: 'Набір карток<br/>Chroma Legends Неон',
    desc: 'Набір налічує 10 карток',
    price: '149 грн',
    img: chromaLegendsNeon,
  },
  {
    name: 'Набір карток<br/>Chroma Legends Ксандра',
    desc: 'Набір налічує 10 карток',
    price: '149 грн',
    img: chromaLegendsXandra,
  },
];

export default collectibleSets;
