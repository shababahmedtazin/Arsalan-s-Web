import { SignatureDish } from '../types'

export const signatureDishes: SignatureDish[] = [
  {
    id: 's1', number: '01',
    nameBn: 'সিক কাবাব', nameEn: 'Seekh Kebab',
    description: 'Hand-minced beef seasoned with 8 aromatic spices, char-grilled on iron skewers over live flame. The dish that made Arsalan famous in Lalbagh.',
    price: 320,
    imagePath: '/media/dishes/seekh-kebab.jpg',
    imageAlt: 'Arsalan Seekh Kebab on iron skewers',
  },
  {
    id: 's2', number: '02',
    nameBn: 'গরুর নিহারি', nameEn: 'Beef Nihari',
    description: 'Slow-braised beef shank in a bone-marrow broth with 12 whole spices. Simmered overnight. Served with fried onion, ginger and fresh roti.',
    price: 380,
    imagePath: '/media/dishes/nihari.jpg',
    imageAlt: 'Arsalan Beef Nihari slow braised',
  },
  {
    id: 's3', number: '03',
    nameBn: 'বাটার নান', nameEn: 'Butter Naan',
    description: 'Stone-fired in our original tandoor since day one. Brushed with cultured butter and a kiss of garlic. Impossibly soft, perfectly charred.',
    price: 60,
    imagePath: '/media/dishes/butter-naan.jpg',
    imageAlt: 'Arsalan Butter Naan fresh from tandoor',
  },
  {
    id: 's4', number: '04',
    nameBn: 'চাপলি কাবাব', nameEn: 'Chapli Kebab',
    description: 'Authentic Afghani-style flat beef patties with pomegranate seeds, dried coriander and green chili. A Peshawar street classic, perfected here.',
    price: 350,
    imagePath: '/media/dishes/chapli-kebab.jpg',
    imageAlt: 'Arsalan Chapli Kebab Afghani style',
  },
]
