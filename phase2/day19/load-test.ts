// Day 19 — k6 Load Test (TypeScript)
// Install types: npm install --save-dev @types/k6
// Run: k6 run load-test.ts
//   OR compile first: tsc load-test.ts && k6 run load-test.js

import http, { RefinedResponse, ResponseType } from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';
import { Options } from 'k6/options';

// ============================================================
// CUSTOM METRICS
// ============================================================
const errorRate  = new Rate('error_rate');
const bookingDuration = new Trend('booking_get_duration');

// ============================================================
// TEST OPTIONS — TODO: Adjust stages and thresholds as needed
// ============================================================
export const options: Options = {
  stages: [
    // TODO: Stage 1 — Ramp up to 5 users over 30 seconds
    { duration: '30s', target: 5 },

    // TODO: Stage 2 — Hold at 5 users for 1 minute
    { duration: '1m', target: 5 },

    // TODO: Stage 3 — Ramp down to 0
    { duration: '30s', target: 0 },

    // OPTIONAL: Uncomment below for a stress test (push harder)
    // { duration: '30s', target: 20 },
    // { duration: '1m', target: 20 },
    // { duration: '30s', target: 0 },
  ],

  thresholds: {
    // TODO: Define your pass/fail criteria
    // p(95) means 95th percentile (95% of requests must meet this)
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    http_req_failed:   ['rate<0.01'], // Less than 1% failure rate
    error_rate:        ['rate<0.05'], // Less than 5% error rate

    // TODO: Add a threshold for your custom booking_get_duration metric
    // booking_get_duration: ['p(99)<TODO'],
  },
};

// ============================================================
// INTERFACES
// ============================================================
interface AuthBody {
  token: string;
}

interface SetupData {
  token: string;
}

// ============================================================
// CONSTANTS
// ============================================================
const BASE_URL = 'https://restful-booker.herokuapp.com';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
};

// ============================================================
// SETUP — Runs once before all VUs start
// ============================================================
export function setup(): SetupData {
  // Get auth token once and share with all VUs
  const authResponse = http.post(
    `${BASE_URL}/auth`,
    JSON.stringify({ username: 'admin', password: 'password123' }),
    { headers: JSON_HEADERS },
  );

  const body = authResponse.json() as AuthBody;
  console.log(`Auth token obtained: ${body?.token ? 'YES' : 'NO'}`);

  return { token: body?.token ?? '' };
}

// ============================================================
// MAIN TEST FUNCTION — Each VU runs this in a loop
// ============================================================
export default function (data: SetupData): void {
  const { token } = data;

  // ----------------------------------------------------------
  // GROUP 1: Read Operations (GET)
  // ----------------------------------------------------------
  group('GET Bookings', () => {
    // TODO: Test 1 — Get all bookings
    const listResponse = http.get(`${BASE_URL}/booking`);

    const listCheck = check(listResponse, {
      // TODO: Add check — status is 200
      'list status 200': (r: RefinedResponse<ResponseType>) => r.status === 200,

      // TODO: Add check — response is a non-empty array
      'list is array': (r: RefinedResponse<ResponseType>) =>
        Array.isArray(r.json()),

      // TODO: Add check — response time is acceptable
      'list response time OK': (r: RefinedResponse<ResponseType>) =>
        r.timings.duration < 500,
    });

    errorRate.add(!listCheck);

    // TODO: Test 2 — Get a single booking by ID
    const singleResponse = http.get(`${BASE_URL}/booking/1`);
    bookingDuration.add(singleResponse.timings.duration);

    check(singleResponse, {
      // TODO: Add 3 checks for the single booking response
      'single booking status 200': (r: RefinedResponse<ResponseType>) =>
        r.status === 200,
      'has firstname': (r: RefinedResponse<ResponseType>) =>
        (r.json('firstname') as string | undefined) !== undefined,
      'has totalprice': (r: RefinedResponse<ResponseType>) =>
        typeof r.json('totalprice') === 'number',
    });

    sleep(1); // Think time between requests
  });

  // ----------------------------------------------------------
  // GROUP 2: Write Operations (POST)
  // ----------------------------------------------------------
  group('POST Booking', () => {
    // TODO: Create a new booking
    const createPayload = JSON.stringify({
      firstname: 'Load',
      lastname: 'Test',
      totalprice: 100,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-01-01',
        checkout: '2025-01-10',
      },
      additionalneeds: 'k6 test',
    });

    const createResponse = http.post(`${BASE_URL}/booking`, createPayload, {
      headers: JSON_HEADERS,
    });

    check(createResponse, {
      // TODO: Add checks for the create response
      'create status 200': (r: RefinedResponse<ResponseType>) => r.status === 200,
      'has bookingid': (r: RefinedResponse<ResponseType>) =>
        (r.json('bookingid') as number | undefined) !== undefined,
    });

    // TODO (OPTIONAL): Capture the created ID and then DELETE it
    // to keep the database clean during load tests
    // const bookingId = createResponse.json('bookingid') as number;

    sleep(2); // Longer think time after write operations
  });

  // Suppress unused var warning until token is used in DELETE
  void token;
}

// ============================================================
// TEARDOWN — Runs once after all VUs finish
// ============================================================
export function teardown(data: SetupData): void {
  console.log('Load test complete. Token used:', data.token ? 'YES' : 'NO');
  // TODO: Any cleanup needed? (e.g., delete test data created during the test)
}
