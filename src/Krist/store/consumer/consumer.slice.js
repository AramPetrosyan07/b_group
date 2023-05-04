import { createSlice } from '@reduxjs/toolkit';

export const consumer = createSlice({
  name: 'consumer',
  initialState: [
    {
      img: '/assets/img/consumer/Person1.jpg',
      rating: 5,
      WhatSay:
        'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
      name: 'Sara Taylor',
      consumers: 'consumer',
      id: 0,
    },
    {
      img: '/assets/img/consumer/Person2.jpg',
      rating: 5,
      WhatSay:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
      name: 'Harry Lora',
      consumers: 'consumer',
      id: 1,
    },
    {
      img: '/assets/img/consumer/Person3.jpg',
      rating: 5,
      WhatSay:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      name: 'William Jackson',
      consumers: 'consumer',
      id: 2,
    },
  ],
  reducers: {
    changeUser: (state, { actions: payload }) => {
      if (payload) {
        return state[payload];
      }
      return state[1];
    },
  },
});

export const { actions, reducer } = consumer;
