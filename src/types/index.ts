export interface MenuItem {
  id: string
  nameBn: string
  nameEn: string
  description: string
  price: number
  category: MenuCategory
  isSignature?: boolean
  spiceLevel?: 1 | 2 | 3
  isVegetarian?: boolean
  isBestseller?: boolean
}

export type MenuCategory = 'kebabs' | 'mains' | 'bread' | 'drinks' | 'specials'

export interface SignatureDish {
  id: string
  number: string
  nameBn: string
  nameEn: string
  description: string
  price: number
  imagePath: string
  imageAlt: string
}

export interface GalleryItem {
  id: string
  type: 'image' | 'video'
  src: string
  alt: string
  caption?: string
  thumb?: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  date?: string
  source: 'facebook' | 'google' | 'direct'
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  addressBn: string
  hours: string
  hoursBn: string
  instagram: string
  facebook: string
  mapUrl: string
  branches?: {
    name: string
    address: string
    addressBn: string
    mapUrl: string
  }[]
}
