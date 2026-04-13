import { MenuItem, MenuCategory } from '../types'

export const menuItems: MenuItem[] = [
  // ── KEBABS ──
  { id: 'k1', nameBn: 'মাটন বোটি কাবাব', nameEn: 'Mutton Boti Kabab', description: '', price: 230, category: 'kebabs' },
  { id: 'k2', nameBn: 'মাটন গুরদা কাবাব', nameEn: 'Mutton Gurda Kabab', description: '', price: 220, category: 'kebabs' },
  { id: 'k3', nameBn: 'মাটন খিরি', nameEn: 'Mutton Kheery', description: '', price: 200, category: 'kebabs' },
  { id: 'k4', nameBn: 'বিফ সিক কাবাব', nameEn: 'Beef Seekh Kabab', description: '', price: 185, category: 'kebabs' },
  { id: 'k5', nameBn: 'বিফ চাপলি কাবাব', nameEn: 'Beef Chapli Kabab', description: '', price: 320, category: 'kebabs' },
  { id: 'k6', nameBn: 'বিফ তাওয়া চাপ', nameEn: 'Beef Tawa Chap', description: '', price: 190, category: 'kebabs' },
  { id: 'k7', nameBn: 'চিকেন তাওয়া চাপ', nameEn: 'Chicken Tawa Chap', description: '', price: 160, category: 'kebabs' },
  { id: 'k8', nameBn: 'চিকেন বার বি কিউ (ব্রয়লার)', nameEn: 'Chicken B.B.Q (Broiler)', description: '', price: 150, category: 'kebabs' },
  { id: 'k9', nameBn: 'চিকেন মালাই বার বি কিউ', nameEn: 'Chicken Malai Bar B.Q', description: '', price: 160, category: 'kebabs' },
  { id: 'k10', nameBn: 'চিকেন বার বি কিউ (রোস্টার)', nameEn: 'Chicken B.B.Q (Roaster)', description: '', price: 160, category: 'kebabs' },
  { id: 'k11', nameBn: 'চিকেন তাংড়ি', nameEn: 'Chicken Tangdi', description: '', price: 360, category: 'kebabs' },
  { id: 'k12', nameBn: 'চিকেন রেশমি কাবাব', nameEn: 'Chicken Reshme Kabab', description: '', price: 180, category: 'kebabs' },
  { id: 'k13', nameBn: 'চিকেন হারিয়ালি কাবাব', nameEn: 'Chicken Haryali Kabab', description: '', price: 180, category: 'kebabs' },
  { id: 'k14', nameBn: 'চিকেন বোটি কাবাব', nameEn: 'Chicken Boti Kabab', description: '', price: 180, category: 'kebabs' },
  { id: 'k15', nameBn: 'ফিশ তিক্কা বোটি', nameEn: 'Fish Tikka Boti', description: '', price: 220, category: 'kebabs' },

  // ── MAINS ──
  { id: 'm16', nameBn: 'চিকেন ঝাল ফ্রাই', nameEn: 'Chicken Jhal Fry', description: '', price: 200, category: 'mains' },
  { id: 'm17', nameBn: 'চিকেন আচারি', nameEn: 'Chicken Achari', description: '', price: 230, category: 'mains' },
  { id: 'm18', nameBn: 'চিকেন আফগানি তাংড়ি', nameEn: 'Chicken Afghani Tangdi', description: '', price: 220, category: 'mains' },
  { id: 'm19', nameBn: 'লাহোরি বিফ করাহি', nameEn: 'Lahori Beef Karahi', description: '', price: 280, category: 'mains' },
  { id: 'm20', nameBn: 'বিফ ব্রেন মাসালা', nameEn: 'Beef Brain Masala', description: '', price: 300, category: 'mains' },
  { id: 'm21', nameBn: 'বিফ আফগানি কিমা', nameEn: 'Beef Afghani Keema', description: '', price: 300, category: 'mains' },
  { id: 'm22', nameBn: 'কলিজা ও গুরদা', nameEn: 'Kalegi & Gurda', description: '', price: 220, category: 'mains' },
  { id: 'm23', nameBn: 'আর্সালান হাড্ডি নিহারি', nameEn: 'Arsalan Haddi Nehari', description: '', price: 230, category: 'mains' },
  { id: 'm24', nameBn: 'আর্সালান গোশত নিহারি', nameEn: 'Arsalan Gosht Nehari', description: '', price: 250, category: 'mains' },
  { id: 'm25', nameBn: 'আর্সালান স্পেশাল বিফ নিহারি', nameEn: 'Arsalan Special Beef Nehari', description: '', price: 450, category: 'mains', isBestseller: true, isSignature: true },
  { id: 'm26', nameBn: 'আর্সালান বাটার রোটি চিকেন', nameEn: 'Arsalan Butter Roti Chicken', description: '', price: 360, category: 'mains' },
  { id: 'm27', nameBn: 'চিকেন বাটার মাসালা', nameEn: 'Chicken Butter Masala', description: '', price: 360, category: 'mains' },

  // ── BREAD ──
  { id: 'b28', nameBn: 'বিফ কাবাব রোল', nameEn: 'Beef Kabab Roll', description: '', price: 220, category: 'bread' },
  { id: 'b29', nameBn: 'চিকেন কাবাব রোল', nameEn: 'Chicken Kabab Roll', description: '', price: 210, category: 'bread' },
  { id: 'b30', nameBn: 'প্লেইন নান', nameEn: 'Plain Nan', description: '', price: 25, category: 'bread' },
  { id: 'b31', nameBn: 'বাটার নান', nameEn: 'Butter Nan', description: '', price: 50, category: 'bread', isBestseller: true },
  { id: 'b32', nameBn: 'প্যাচ পরোটা', nameEn: 'Patch Paratha', description: '', price: 25, category: 'bread' },

  // ── DRINKS ──
  { id: 'd33', nameBn: 'স্ট্রবেরি মিল্ক শেক', nameEn: 'Strawberry Milk Shake', description: '', price: 150, category: 'drinks' },
  { id: 'd34', nameBn: 'হোয়াইট লাচ্ছি', nameEn: 'White Lassi', description: '', price: 100, category: 'drinks' },
  { id: 'd35', nameBn: 'মালাই লাচ্ছি', nameEn: 'Malai Lassi', description: '', price: 150, category: 'drinks' },
  { id: 'd36', nameBn: 'আইস কফি', nameEn: 'Ice Coffee', description: '', price: 120, category: 'drinks' },
  { id: 'd37', nameBn: 'ওরিও শেক', nameEn: 'Oreo Shake', description: '', price: 150, category: 'drinks' },
  { id: 'd38', nameBn: 'নুটেলা শেক', nameEn: 'Nutella Shake', description: '', price: 150, category: 'drinks' },
  { id: 'd39', nameBn: 'কিটক্যাট শেক', nameEn: 'Kitkat Shake', description: '', price: 150, category: 'drinks' },
  { id: 'd40', nameBn: 'চকোলেট মিল্ক শেক', nameEn: 'Chocolate Milk Shake', description: '', price: 150, category: 'drinks' },
  { id: 'd41', nameBn: 'ভ্যানিলা মিল্ক শেক', nameEn: 'Vanilla Milk Shake', description: '', price: 120, category: 'drinks' },
  { id: 'd42', nameBn: 'জাফরানি শরবত', nameEn: 'Zafrani Sharbat', description: '', price: 100, category: 'drinks' },
  { id: 'd43', nameBn: 'আর্সালান ক্ষীর সেমাই', nameEn: 'Arsalan Kheer Shemai', description: '', price: 100, category: 'drinks' },
  { id: 'd44', nameBn: 'এম আই ডব্লিউ', nameEn: 'MIW', description: '', price: 0, category: 'drinks' },
  { id: 'd45', nameBn: 'কোল্ড ড্রিংকস', nameEn: 'Cold Drinks', description: '', price: 0, category: 'drinks' },
]

export const menuCategories: { id: MenuCategory; labelBn: string; labelEn: string; icon: string }[] = [
  { id: 'kebabs', labelBn: 'কাবাব', labelEn: 'Kebabs', icon: '🍢' },
  { id: 'mains', labelBn: 'মূল পদ', labelEn: 'Mains', icon: '🫕' },
  { id: 'bread', labelBn: 'নান ও রুটি', labelEn: 'Bread', icon: '🫓' },
  { id: 'drinks', labelBn: 'পানীয়', labelEn: 'Drinks', icon: '🍵' },
]
