import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// ============================================================
// CUSTOM METRICS
// ============================================================
const errorRate = new Rate('error_rate');
const bookingDuration = new Trend('booking_get_duration');

// ============================================================
// TEST OPTIONS — TODO: Adjust stages and thresholds as needed
// ============================================================
export const options = {
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
        'http_req_duration': ['p(95)<500'], // 95% of requests under 500ms
        'http_req_failed': ['rate<0.01'],   // Less than 1% failure rate
        'error_rate': ['rate<0.05'],        // Less than 5% error rate

        // TODO: Add a threshold for your custom booking_get_duration metric
        // 'booking_get_duration': ['p(99)<TODO'],
    },
};

// ============================================================
// TEST VARIABLES
// ============================================================
const BASE_URL = 'https://restful-booker.herokuapp.com';

// ============================================================
// SETUP — Runs once before all VUs start
// ============================================================
export function setup() {
    // Get auth token once and share with all VUs
    const authResponse = http.post(`${BASE_URL}/auth`, JSON.stringify({
        username: 'admin',
        password: 'password123',
    }), {
        headers: { 'Content-Type': 'application/json' },
    });

    const token = authResponse.json('token');
    console.log(`Auth token obtained: ${token ? 'YES' : 'NO'}`);

    return { token };
}

// ============================================================
// MAIN TEST FUNCTION — Each VU runs this in a loop
// ============================================================
export default function (data) {
    const token = data.token;

    // ----------------------------------------------------------
    // GROUP 1: Read Operations (GET)
    // ----------------------------------------------------------
    group('GET Bookings', function () {
        // TODO: Test 1 — Get all bookings
        const listResponse = http.get(`${BASE_URL}/booking`);

        const listCheck = check(listResponse, {
            // TODO: Add check — status is 200
            'list status 200': (r) => r.status === 200,

            // TODO: Add check — response is a non-empty array
            'list is array': (r) => Array.isArray(r.json()),

            // TODO: Add check — response time is acceptable
            'list response time OK': (r) => r.timings.duration < 500,
        });

        errorRate.add(!listCheck);

        // TODO: Test 2 — Get a single booking by ID
        const singleResponse = http.get(`${BASE_URL}/booking/1`);
        bookingDuration.add(singleResponse.timings.duration);

        check(singleResponse, {
            // TODO: Add 3 checks for the single booking response
            'single booking status 200': (r) => r.status === 200,
            'has firstname': (r) => r.json('firstname') !== undefined,
            'has totalprice': (r) => typeof r.json('totalprice') === 'number',
        });

        sleep(1); // Think time between requests
    });

    // ----------------------------------------------------------
    // GROUP 2: Write Operations (POST)
    // ----------------------------------------------------------
    group('POST Booking', function () {
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

        const createResponse = http.post(
            `${BASE_URL}/booking`,
            createPayload,
            { headers: { 'Content-Type': 'application/json' } }
        );

        check(createResponse, {
            // TODO: Add checks for the create response
            'create status 200': (r) => r.status === 200,
            'has bookingid': (r) => r.json('bookingid') !== undefined,
        });

        // TODO (OPTIONAL): Capture the created ID and then DELETE it
        // to keep the database clean during load tests
        // const bookingId = createResponse.json('bookingid');

        sleep(2); // Longer think time after write operations
    });
}

// ============================================================
// TEARDOWN — Runs once after all VUs finish
// ============================================================
export function teardown(data) {
    console.log('Load test complete. Token used:', data.token ? 'YES' : 'NO');
    // TODO: Any cleanup needed? (e.g., delete test data created during the test)
}
