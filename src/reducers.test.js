import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: '',
  };

  it('should return the Inital State', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc',
      })
    ).toEqual({ searchField: 'abc' });
  });
});

describe('requsetRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };

  it('should return the Initial State', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({ robots: [], isPending: true });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 3,
            name: 'test',
            email: 'test@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 3,
          name: 'test',
          email: 'test@gmail.com',
        },
      ],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Noooo!!!!',
      })
    ).toEqual({
      error: 'Noooo!!!!',
      robots: [],
      isPending: false,
    });
  });
});
