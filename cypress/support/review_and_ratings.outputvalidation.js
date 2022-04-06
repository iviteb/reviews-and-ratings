import { PRODUCTS } from './common/utils.js'

const TESTCASE = {
  testCase1: 'testCase1',
  testCase2: 'testCase2',
  testCase3: 'testCase3',
  testCase4: 'testCase4',
}
const ANONYMOUS_USER = {
  a1: 'a1',
  a2: 'a2',
}
const USER = {
  u1: 'u1',
  u2: 'u2',
}
export default {
  testCase1: {
    title: 'Enable Anonymous review with no admin approval',
    product: PRODUCTS.onion,
    productId: 880030,
    configuration: {
      allowAnonymousReviews: true,
      requireApproval: false,
      defaultStarsRating: '3',
    },
    anonymousUser1: {
      name: `shashi-${TESTCASE.testCase1}-${ANONYMOUS_USER.a1}`,
      line: 'Test',
      location: 'California', // optional
      email: 'shashi@bitcot.com',
      rating: 3,
      review: 'Good',
      average: 3,
    },
    anonymousUser2: {
      name: `shashi-${TESTCASE.testCase1}-${ANONYMOUS_USER.a2}`,
      line: 'Test',
      location: null,
      email: 'shashi@bitcot.com',
      rating: 5,
      review: 'Excellent Product',
      average: 4,
    },
    user1: {
      name: `syed-${TESTCASE.testCase1}-${USER.u1}`,
      line: 'Bottom Line',
      location: null,
      rating: 5,
      review: 'Excellent Product',
      average: 4.33,
    },
  },
  testCase2: {
    product: PRODUCTS.cauliflower,
    postalCode: '33180',
    title: 'Disable Anonymous review with no admin approval',
    configuration: {
      allowAnonymousReviews: false,
      requireApproval: false,
      defaultStarsRating: '4',
    },
    user1: {
      name: `syed-${TESTCASE.testCase2}-${USER.u1}`,
      line: 'Bottom Line',
      location: null,
      rating: 4,
      review: 'Excellent Product',
      average: 4,
      verified: true,
    },
  },
  testCase3: {
    product: PRODUCTS.orange,
    verifiedProduct: PRODUCTS.cauliflower,
    otherProduct: PRODUCTS.onion,
    postalCode: '33180',
    title: 'Enable Anonymous review with admin approval',
    configuration: {
      allowAnonymousReviews: true,
      requireApproval: true,
      defaultStarsRating: '4',
    },
    anonymousUser1: {
      name: `shashi-${TESTCASE.testCase3}-${ANONYMOUS_USER.a1}`,
      line: 'Test',
      location: 'California', // optional
      email: 'shashi@bitcot.com',
      rating: 3,
      review: 'Good',
      average: 3,
    },
    user1: {
      name: `syed-${TESTCASE.testCase3}-${USER.u1}`,
      line: 'Bottom Line',
      location: null,
      rating: 4,
      review: 'Excellent Product',
      average: 4,
    },
    user2: {
      name: `syed-${TESTCASE.testCase3}-${USER.u2}`,
      line: 'Bottom Line',
      location: null,
      rating: 4,
      review: 'Excellent Product',
      average: 4,
    },
  },
  testCase4: {
    product: PRODUCTS.orange,
    verifiedProduct: PRODUCTS.cauliflower,
    otherProduct: PRODUCTS.onion,
    postalCode: '33180',
    title: 'Disable Anonymous review with admin approval',
    configuration: {
      allowAnonymousReviews: false,
      requireApproval: true,
      defaultStarsRating: '4',
    },
    anonymousUser1: {
      name: `shashi-${TESTCASE.testCase4}-${ANONYMOUS_USER.a1}`,
      line: 'Test',
      location: 'California', // optional
      email: 'shashi@bitcot.com',
      rating: 3,
      review: 'Good',
      average: 3,
    },
    user1: {
      name: `syed-${TESTCASE.testCase4}-${USER.u1}`,
      line: 'Bottom Line',
      location: null,
      rating: 4,
      review: 'Excellent Product',
      average: 4,
    },
    user2: {
      name: `syed-${TESTCASE.testCase4}-${USER.u2}`,
      line: 'Bottom Line',
      location: null,
      rating: 4,
      review: 'Excellent Product',
      average: 4,
      verified: true,
    },
  },
}
