export const COMMITMENTS = [
  { id: 'morning', title: 'Morning prayer', desc: 'Before phone, email, or social — start with Him.' },
  { id: 'scripture', title: '20 min Bible reading', desc: 'Read, reflect, ask what God is teaching you.' },
  { id: 'workout', title: '45 min workout', desc: 'Honor the body He entrusted to you.' },
  { id: 'nutrition', title: 'Nourish Well', desc: 'Every meal is an act of stewardship. Choose with intention.' },
  { id: 'fast', title: 'Daily fast', desc: 'Food, tech, or comfort — create space for God.' },
  { id: 'water', title: '1 gallon of water', desc: 'Hydrate your body and brain.' },
  { id: 'evening', title: 'Evening prayer', desc: 'Reflect, give thanks, release tomorrow to Him.' },
  { id: 'reflection', title: 'Daily reflection', desc: '5 min writing — where did you see God today?' },
]

export const WEEKLY_COMMITMENTS = [
  { id: 'sabbath', title: 'Sabbath hour', desc: 'One hour set apart. Rest is obedience.' },
  { id: 'scripture_memory', title: 'Scripture memory', desc: 'This week\'s verse is assigned below. Commit it to memory.', hasVerse: true },
  { id: 'act_of_service', title: 'Act of service', desc: 'Faith without works is dead. Go prove yours alive.' },
]

export const WEEKLY_VERSES = [
  { week: 1, verse: 'But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control. Against such there is no law.', ref: 'Galatians 5:22-23 (NKJV)' },
  { week: 2, verse: 'For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.', ref: 'John 3:16 (NKJV)' },
  { week: 3, verse: 'For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast.', ref: 'Ephesians 2:8-9 (NKJV)' },
  { week: 4, verse: 'There is therefore now no condemnation to those who are in Christ Jesus, who do not walk according to the flesh, but according to the Spirit.', ref: 'Romans 8:1 (NKJV)' },
  { week: 5, verse: 'For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.', ref: 'Jeremiah 29:11 (NKJV)' },
  { week: 6, verse: 'Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths.', ref: 'Proverbs 3:5-6 (NKJV)' },
  { week: 7, verse: 'Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.', ref: 'Philippians 4:6-7 (NKJV)' },
  { week: 8, verse: 'God is not a man, that He should lie, Nor a son of man, that He should repent. Has He said, and will He not do? Or has He spoken, and will He not make it good?', ref: 'Numbers 23:19 (NKJV)' },
  { week: 9, verse: 'For unto us a Child is born, Unto us a Son is given; And the government will be upon His shoulder. And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.', ref: 'Isaiah 9:6 (NKJV)' },
  { week: 10, verse: 'But He was wounded for our transgressions, He was bruised for our iniquities; The chastisement for our peace was upon Him, And by His stripes we are healed.', ref: 'Isaiah 53:5 (NKJV)' },
  { week: 11, verse: 'The Spirit of the Lord God is upon Me, Because the Lord has anointed Me To preach good tidings to the poor; He has sent Me to heal the brokenhearted, To proclaim liberty to the captives, And the opening of the prison to those who are bound;', ref: 'Isaiah 61:1 (NKJV)' },
]

export const FRUIT_DATA = [
  { week: 1, name: 'The Fruit of the Spirit', eyebrow: 'Week 1 / Introduction', def: 'The fruit of the Spirit is not something you force. It is something the Holy Spirit produces as you walk with Him. A healthy tree naturally produces fruit. Stay close to the vine.', verse: '"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law."', ref: 'Galatians 5:22-23 (KJV)', anchor: null, anchorRef: null, isList: true, fruits: ['Love — Caring for others the way God cares for us.', 'Joy — A deep happiness that comes from God, even when life is hard.', 'Peace — A calm heart because you trust God.', 'Longsuffering — Being patient with people and difficult situations.', 'Gentleness — Being kind and thoughtful.', 'Goodness — Choosing to do what is right.', 'Faith — Trusting God and being faithful to Him.', 'Meekness — Being humble and gentle, not proud.', 'Temperance — Having self-control.'] },
  { week: 2, name: 'Love', eyebrow: 'Week 2 / The First Fruit', def: 'Caring for others the way God cares for us. Not because they deserve it. But because He first loved us.', verse: '"A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another."', ref: 'John 13:34 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 3, name: 'Joy', eyebrow: 'Week 3', def: 'A deep happiness that comes from God, not from circumstances. Joy is not the absence of pain. It is the presence of God in the middle of it.', verse: '"The joy of the Lord is your strength."', ref: 'Nehemiah 8:10 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 4, name: 'Peace', eyebrow: 'Week 4', def: 'A calm heart because you trust God. Not the absence of trouble, but the presence of God in the middle of it.', verse: '"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid."', ref: 'John 14:27 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 5, name: 'Longsuffering', eyebrow: 'Week 5', def: 'Being patient with people and difficult situations. Not because they are easy, but because God has been patient with you.', verse: '"Tribulation worketh patience; and patience, experience; and experience, hope."', ref: 'Romans 5:3-4 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 6, name: 'Gentleness', eyebrow: 'Week 6', def: 'Being kind and thoughtful. Strength under control. Jesus described Himself as meek and lowly, and He was the most powerful person who ever lived.', verse: '"Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls."', ref: 'Matthew 11:29 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 7, name: 'Goodness', eyebrow: 'Week 7', def: 'Choosing to do what is right. Not because anyone is watching, but because God is good and you belong to Him.', verse: '"Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the Lord for ever."', ref: 'Psalm 23:6 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 8, name: 'Faith', eyebrow: 'Week 8', def: 'Trusting God and being faithful to Him. In the seen and the unseen, in the answered and the waiting.', verse: '"Now faith is the substance of things hoped for, the evidence of things not seen."', ref: 'Hebrews 11:1 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 9, name: 'Meekness', eyebrow: 'Week 9', def: 'Being humble and gentle, not proud. Meekness is not weakness. It is power submitted to God.', verse: '"Blessed are the meek: for they shall inherit the earth."', ref: 'Matthew 5:5 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 10, name: 'Temperance', eyebrow: 'Week 10 / The Final Push', def: 'Having self-control. The discipline you have built over these 75 days is itself an act of temperance. Finish strong.', verse: '"Every man that striveth for the mastery is temperate in all things. Now they do it to obtain a corruptible crown; but we an incorruptible."', ref: '1 Corinthians 9:25 (KJV)', anchor: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', anchorRef: 'Romans 5:5 (KJV)' },
  { week: 11, name: 'The Harvest', eyebrow: 'Week 11 / The Full Harvest', def: 'You have walked 75 days with Him. Look back at who you were on Day 1. The Holy Spirit has been working. What fruit do you see?', verse: '"The love of God is shed abroad in our hearts by the Holy Ghost which is given unto us."', ref: 'Romans 5:5 (KJV)', anchor: null, anchorRef: null, isHarvest: true, fruits: ['Love', 'Joy', 'Peace', 'Longsuffering', 'Gentleness', 'Goodness', 'Faith', 'Meekness', 'Temperance'] },
]

export const APPROACH_NAMES: Record<string, string> = {
  mediterranean: 'Mediterranean eating',
  paleo: 'Paleo',
  keto: 'Ketogenic eating',
  plantbased: 'Plant-based eating',
  whole30: 'Whole30',
  mypath: 'my own path',
}

export const PROMISE_TEXT = `I choose to pursue Jesus with the same dedication I once gave to building my body.

I will seek Him before the world.
I will honor Him with my health.
I will strengthen my mind through His Word.
I will discipline my flesh through fasting.
I will move with gratitude.
I will pray without ceasing.

For the next 75 days, I choose surrender over comfort, obedience over convenience, and faith over fear.

May every habit bring me closer to Christ, and may my life reflect His love, His truth, and His purpose.

Not my will, but Yours be done.`

// Date utilities (local time, no UTC offset issues)
export function localDateStr(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function today(): Date {
  const d = new Date()
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function parseLocalDate(s: string): Date {
  const parts = s.slice(0, 10).split('-')
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]))
}

export function dayNumber(startDate: Date, currentDate: Date = today()): number {
  return Math.max(1, Math.min(75, Math.floor((currentDate.getTime() - startDate.getTime()) / 86400000) + 1))
}

export function weekNumber(startDate: Date): number {
  return Math.max(1, Math.min(11, Math.ceil(dayNumber(startDate) / 7)))
}

export function dayKey(startDate: Date, day: number): string {
  const d = new Date(startDate)
  d.setDate(d.getDate() + day - 1)
  return localDateStr(d)
}

export function formatDate(startDate: Date, day: number): string {
  const d = new Date(startDate)
  d.setDate(d.getDate() + day - 1)
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

export function weekRange(startDate: Date, week: number): string {
  const d1 = new Date(startDate)
  d1.setDate(d1.getDate() + (week - 1) * 7)
  const d2 = new Date(d1)
  d2.setDate(d2.getDate() + 6)
  const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  return `${fmt(d1)} — ${fmt(d2)}`
}
