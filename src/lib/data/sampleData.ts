export const users = [
  {
    uid: 'vince-id',
    displayName: 'Vince Cartwright',
    email: 'vince.cartwright@pegasus.com',
    photoURL: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    uid: 'carlton-id',
    displayName: 'Carlton Hughes',
    email: 'carlton.hughes@griffin.com',
    photoURL: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    uid: 'amanda-id',
    displayName: 'Amanda Wilkes',
    email: 'amanda.wilkes@unicorn.com',
    photoURL: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    uid: 'raj-id',
    displayName: 'Raj Singh',
    email: 'raj.singh@dragon.com',
    photoURL: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    uid: 'sarah-id',
    displayName: 'Sarah Bennett',
    email: 'sarah.bennett@basilisk.com',
    photoURL: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    uid: 'leon-id',
    displayName: 'Leon Chambers',
    email: 'leon.chambers@mercury.com',
    photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    uid: 'amina-id',
    displayName: 'Amina Khan',
    email: 'amina.khan@pluto.com',
    photoURL: 'https://randomuser.me/api/portraits/women/18.jpg'
  },
  {
    uid: 'dave-id',
    displayName: 'Dave Holloway',
    email: 'dave.holloway@saturn.com',
    photoURL: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  {
    uid: 'chantelle-id',
    displayName: 'Chantelle Price',
    email: 'chantelle.price@venus.com',
    photoURL: 'https://randomuser.me/api/portraits/women/25.jpg'
  },
  {
    uid: 'lucy-id',
    displayName: 'lucy Brookes',
    email: 'lucy.brookes@neptune.com',
    photoURL: 'https://randomuser.me/api/portraits/women/40.jpg'
  }
]

export const events = [
  {
    id: 'activity-p1',
    title: 'Past Activity 1',
    date: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString(),
    description: 'Activity 2 months ago',
    category: 'drinks',
    city: 'Birmingham',
    venue: 'The Old Joint Stock Pub & Theatre, 4 Temple Row West, Birmingham B2 5NY',
    latitude: 52.4808,
    longitude: -1.8991,
    hostUid: users[0].uid,
    attendees: [
      {id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL, isHost: true},
      {id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: false}
    ],
    attendeeIds: [users[0].uid, users[1].uid]
  },
  {
    id: 'activity-p2',
    title: 'Past Activity 2',
    date: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
    description: 'Activity 1 month ago',
    category: 'culture',
    city: 'Coventry',
    venue: 'Herbert Art Gallery & Museum, Jordan Well, Coventry CV1 5QP',
    latitude: 52.4070,
    longitude: -1.5045,
    hostUid: users[1].uid,
    attendees: [
      {id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: true},
      {id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL},
      {id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL}
    ],
    attendeeIds: [users[0].uid, users[1].uid, users[2].uid]
  },
  {
    id: 'activity-f1',
    title: 'Future Activity 1',
    date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
    description: 'Activity 1 month in future',
    category: 'culture',
    city: 'Wolverhampton',
    venue: 'Wolverhampton Art Gallery, Lichfield St, Wolverhampton WV1 1DU',
    latitude: 52.5862,
    longitude: -2.1267,
    hostUid: users[2].uid,
    attendees: [{id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL, isHost: true}],
    attendeeIds: [users[2].uid]
  },
  {
    id: 'activity-f2',
    title: 'Future Activity 2',
    date: new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(),
    description: 'Activity 2 months in future',
    category: 'music',
    city: 'West Bromwich',
    venue: 'The Public, New Street, West Bromwich B70 7PG',
    latitude: 52.5196,
    longitude: -1.9945,
    hostUid: users[1].uid,
    attendees: [
      {id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: true},
      {id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL}
    ],
    attendeeIds: [users[1].uid, users[2].uid]
  },
  {
    id: 'activity-f3',
    title: 'Future Activity 3',
    date: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString(),
    description: 'Activity 3 months in future',
    category: 'drinks',
    city: 'Birmingham',
    venue: 'The Distillery, 4 Sheepcote St, Birmingham B16 8AE',
    latitude: 52.4786,
    longitude: -1.9154,
    hostUid: users[1].uid,
    attendees: [{id: users[1].uid, displayName: users[1].displayName, photoURL: users[1].photoURL, isHost: true}],
    attendeeIds: [users[1].uid]
  },
  {
    id: 'activity-f4',
    title: 'Future Activity 4',
    date: new Date(new Date().setMonth(new Date().getMonth() + 4)).toISOString(),
    description: 'Activity 4 months in future',
    category: 'drinks',
    city: 'Coventry',
    venue: 'The Yard, 11-12 Bull Yard, Coventry CV1 1LH',
    latitude: 52.4078,
    longitude: -1.5074,
    hostUid: users[2].uid,
    attendees: [
      {id: users[2].uid, displayName: users[2].displayName, photoURL: users[2].photoURL, isHost: true},
      {id: users[0].uid, displayName: users[0].displayName, photoURL: users[0].photoURL}
    ],
    attendeeIds: [users[0].uid, users[2].uid]
  }
]
