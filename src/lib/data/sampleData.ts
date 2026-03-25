import type { AppEvent, AppUser } from '../types'

export const users: AppUser[] = [
  {
    uid: 'saeed-id',
    displayName: 'Saeed Ayoub',
    email: 'saeed.ayoub@pegasus.com',
    photoURL: 'https://randomuser.me/api/portraits/men/56.jpg'
  },
  {
    uid: 'carlton-id',
    displayName: 'Carlton Hughes',
    email: 'carlton.hughes@griffin.com',
    photoURL: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    uid: 'jenny-id',
    displayName: 'Jenny Wilkes',
    email: 'amanda.wilkes@unicorn.com',
    photoURL: 'https://randomuser.me/api/portraits/women/63.jpg'
  },
  {
    uid: 'raj-id',
    displayName: 'Raj Singh',
    email: 'raj.singh@dragon.com',
    photoURL: 'https://randomuser.me/api/portraits/men/39.jpg'
  },
  {
    uid: 'amanda-id',
    displayName: 'Amanda Moore',
    email: 'amanda.moore@basilisk.com',
    photoURL: 'https://randomuser.me/api/portraits/women/66.jpg'
  },
  {
    uid: 'leon-id',
    displayName: 'Leon Chambers',
    email: 'leon.chambers@mercury.com',
    photoURL: 'https://randomuser.me/api/portraits/men/72.jpg'
  },
  {
    uid: 'amina-id',
    displayName: 'Amina Khan',
    email: 'amina.khan@pluto.com',
    photoURL: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    uid: 'dave-id',
    displayName: 'Dave Holloway',
    email: 'dave.holloway@saturn.com',
    photoURL: 'https://randomuser.me/api/portraits/men/18.jpg'
  },
  {
    uid: 'chantelle-id',
    displayName: 'Chantelle Price',
    email: 'chantelle.price@venus.com',
    photoURL: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    uid: 'lucy-id',
    displayName: 'lucy Brookes',
    email: 'lucy.brookes@neptune.com',
    photoURL: 'https://randomuser.me/api/portraits/women/98.jpg'
  }
]

export const events: AppEvent[] = [
  {
    id: 'activity-p1',
    title: 'Birmingham Creators Meetup',
    date: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString(),
    description: 'A relaxed evening at The Old Joint Stock for conversation, networking, and good company.',
    category: 'drinks',
    city: 'Birmingham',
    venue: 'The Old Joint Stock Pub & Theatre, 4 Temple Row West, Birmingham B2 5NY',
    latitude: 52.4808,
    longitude: -1.8991,
    hostUid: users[1].uid,
    attendees: [
      {id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: true},
      {id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL, isHost: false}
    ],
    attendeeIds: [users[1].uid, users[2].uid]
  },
  {
    id: 'activity-p2',
    title: 'Coventry Culture Walk & Coffee',
    date: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
    description: 'Explore the Herbert Art Gallery with friends and enjoy a casual cultural afternoon.',
    category: 'culture',
    city: 'Coventry',
    venue: 'Herbert Art Gallery & Museum, Jordan Well, Coventry CV1 5QP',
    latitude: 52.4070,
    longitude: -1.5045,
    hostUid: users[4].uid,
    attendees: [
      {id: users[4].uid, displayName: users[4].displayName, photoURL: users[4].photoURL, isHost: true},
      {id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL, isHost: false},
      {id: users[6].uid, displayName: users[6].displayName, photoURL: users[6].photoURL, isHost: false}
    ],
    attendeeIds: [users[4].uid, users[0].uid, users[6].uid]
  },
  {
    id: 'activity-f1',
    title: 'Wolverhampton Art & Ideas Night',
    date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
    description: 'A friendly meetup at Wolverhampton Art Gallery to share ideas, projects, and inspiration.',
    category: 'culture',
    city: 'Wolverhampton',
    venue: 'Wolverhampton Art Gallery, Lichfield St, Wolverhampton WV1 1DU',
    latitude: 52.5862,
    longitude: -2.1267,
    hostUid: users[5].uid,
    attendees: [
      {id: users[5].uid, displayName: users[5].displayName, photoURL: users[5].photoURL, isHost: true},
      {id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: false},
      {id: users[4].uid, displayName: users[4].displayName, photoURL: users[4].photoURL, isHost: false},
    ],
    attendeeIds: [users[5].uid, users[1].uid, users[4].uid]
  },
  {
    id: 'activity-f2',
    title: 'West Bromwich Live Music Social',
    date: new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(),
    description: 'An evening of music, drinks, and conversation at The Public in West Bromwich.',
    category: 'music',
    city: 'West Bromwich',
    venue: 'The Public, New Street, West Bromwich B70 7PG',
    latitude: 52.5196,
    longitude: -1.9945,
    hostUid: users[7].uid,
    attendees: [
      {id: users[7].uid, displayName: users[7].displayName, photoURL: users[7].photoURL, isHost: true},
      {id: users[9].uid, displayName: users[9].displayName, photoURL: users[9].photoURL, isHost: false}
    ],
    attendeeIds: [users[7].uid, users[9].uid]
  },
  {
    id: 'activity-f3',
    title: 'Birmingham Drinks & Discussion Evening',
    date: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString(),
    description: 'Join us at The Distillery for a laid‑back night of drinks and good conversation.',
    category: 'drinks',
    city: 'Birmingham',
    venue: 'The Distillery, 4 Sheepcote St, Birmingham B16 8AE',
    latitude: 52.4786,
    longitude: -1.9154,
    hostUid: users[8].uid,
    attendees: [
      {id: users[8].uid, displayName: users[8].displayName, photoURL: users[8].photoURL, isHost: true},
      {id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL, isHost: false}
    ],
    attendeeIds: [users[8].uid, users[2].uid]
  },
  {
    id: 'activity-f4',
    title: 'Coventry Social Gathering ',
    date: new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString(),
    description: 'Meet, chat, and unwind at The Yard in Coventry’s Bull Yard.',
    category: 'drinks',
    city: 'Coventry',
    venue: 'The Yard, 11-12 Bull Yard, Coventry CV1 1LH',
    latitude: 52.4078,
    longitude: -1.5074,
    hostUid: users[4].uid,
    attendees: [
      {id: users[4].uid, displayName: users[4].displayName, photoURL: users[4].photoURL, isHost: true},
      {id: users[7].uid, displayName: users[7].displayName, photoURL: users[7].photoURL, isHost: false},
      {id: users[8].uid, displayName: users[8].displayName, photoURL: users[8].photoURL, isHost: false}
    ],
    attendeeIds: [users[4].uid, users[7].uid, users[8].uid]
  },
  {
    id: 'activity-f5',
    title: 'Birmingham Street Food Social',
    date: new Date(new Date().setMonth(new Date().getMonth() + 5)).toISOString(),
    description: 'Join fellow food lovers for an evening exploring Birmingham\'s best street food stalls and sharing great flavours.',
    category: 'food',
    city: 'Birmingham',
    venue: 'Digbeth Dining Club, 60 Floodgate St, Birmingham B5 5SL',
    latitude: 52.4751,
    longitude: -1.8867,
    hostUid: users[3].uid,
    attendees: [
      { id: users[3].uid, displayName: users[3].displayName, photoURL: users[3].photoURL, isHost: true }, 
      { id: users[6].uid, displayName: users[6].displayName, photoURL: users[6].photoURL, isHost: false }, 
      { id: users[9].uid, displayName: users[9].displayName, photoURL: users[9].photoURL, isHost: false }
    ],
    attendeeIds: [users[3].uid, users[6].uid, users[9].uid]
  },
  {
    id: 'activity-f6',
    title: 'Peak District Day Trip Adventure',
    date: new Date(new Date().setMonth(new Date().getMonth() + 6)).toISOString(),
    description: 'A scenic group trip into the Peak District for walking, fresh air, and a break from the city.',
    category: 'travel',
    city: 'Derbyshire',
    venue: 'Mam Tor, Hope Valley, Derbyshire S33 8WA',
    latitude: 53.3498,
    longitude: -1.8113,
    hostUid: users[5].uid,
    attendees: [
      { id: users[5].uid, displayName: users[5].displayName, photoURL: users[5].photoURL, isHost: true },
      { id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL, isHost: false },
      { id: users[6].uid, displayName: users[6].displayName, photoURL: users[6].photoURL, isHost: false }  
    ],
    attendeeIds: [users[5].uid, users[0].uid, users[6].uid]
  }
]
