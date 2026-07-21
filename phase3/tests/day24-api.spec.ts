// Day 24 — Playwright API Testing (TypeScript)
// Playwright can test REST APIs directly without a browser
// Target: https://restful-booker.herokuapp.com
// Run: npx playwright test tests/day24-api.spec.ts

import { test, expect, request, APIRequestContext } from '@playwright/test';

// ============================================================
// TYPES
// ============================================================
interface BookingDates {
  checkin: string;
  checkout: string;
}

interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: BookingDates;
  additionalneeds?: string;
}

interface CreateBookingResponse {
  bookingid: number;
  booking: Booking;
}

interface AuthResponse {
  token: string;
}

// ============================================================
// SHARED STATE (module-level — shared between tests in this file)
// ============================================================
let apiContext: APIRequestContext;
let authToken: string;
let createdBookingId: number;

test.beforeAll(async () => {
  // TODO: Create an API request context
  apiContext = await request.newContext({
    baseURL: 'https://restful-booker.herokuapp.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // TODO: Authenticate and get token
  const authResponse = await apiContext.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123',
    },
  });
  expect(authResponse.ok()).toBeTruthy();
  const authBody = (await authResponse.json()) as AuthResponse;
  authToken = authBody.token;
  console.log(`Token received: ${authToken ? 'YES' : 'NO'}`);
});

test.afterAll(async () => {
  await apiContext.dispose();
});

// ============================================================
// API TEST SUITE
// ============================================================
test.describe('Restful-Booker API Tests — Day 24', () => {

  // --------------------------------------------------------
  // TEST 1: GET all bookings
  // --------------------------------------------------------
  test('API-001 — GET /booking returns list of booking IDs', async () => {
    const response = await apiContext.get('/booking');

    // TODO: Assert status is 200
    expect(response.status()).toBe(/* TODO */ 0);

    // TODO: Parse response body
    const body = (await response.json()) as Array<{ bookingid: number }>;

    // TODO: Assert body is an array
    expect(Array.isArray(body)).toBe(/* TODO */ false);

    // TODO: Assert array is not empty
    expect(body.length).toBeGreaterThan(/* TODO */ 0);

    // TODO: Assert the first element has a bookingid field
    // expect(body[0]).toHaveProperty('bookingid');
  });

  // --------------------------------------------------------
  // TEST 2: POST — Create a new booking
  // --------------------------------------------------------
  test('API-002 — POST /booking creates a new booking', async () => {
    const newBooking: Booking = {
      firstname: 'Playwright',
      lastname: 'Test',
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-06-01',
        checkout: '2025-06-10',
      },
      additionalneeds: 'Automation room',
    };

    const response = await apiContext.post('/booking', {
      data: newBooking,
    });

    // TODO: Assert status is 200
    expect(response.status()).toBe(/* TODO */ 0);

    const body = (await response.json()) as CreateBookingResponse;

    // TODO: Assert response has bookingid
    expect(body).toHaveProperty(/* TODO */ '');

    // TODO: Assert bookingid is a positive number
    expect(body.bookingid).toBeGreaterThan(0);

    // TODO: Assert the returned booking data matches what we sent
    // expect(body.booking.firstname).toBe('Playwright');

    // Save booking ID for later tests
    createdBookingId = body.bookingid;
    console.log(`Created booking ID: ${createdBookingId}`);
  });

  // --------------------------------------------------------
  // TEST 3: GET — Verify the created booking
  // --------------------------------------------------------
  test('API-003 — GET /booking/:id returns the created booking', async () => {
    // Skip if booking wasn't created (test ordering dependency)
    test.skip(!createdBookingId, 'Booking not created in API-002');

    const response = await apiContext.get(`/booking/${createdBookingId}`);

    // TODO: Assert status is 200
    // TODO: Assert firstname is 'Playwright'
    // TODO: Assert totalprice is 150
    // TODO: Assert depositpaid is true
    // TODO: Assert bookingdates.checkin is '2025-06-01'
    void response; // Remove once TODOs are filled in
  });

  // --------------------------------------------------------
  // TEST 4: PUT — Full update
  // --------------------------------------------------------
  test('API-004 — PUT /booking/:id updates all fields', async () => {
    test.skip(!createdBookingId, 'Booking not created in API-002');

    const updatedBooking: Booking = {
      firstname: 'Updated',
      lastname: 'Playwright',
      totalprice: 999,
      depositpaid: false,
      bookingdates: {
        checkin: '2025-07-01',
        checkout: '2025-07-15',
      },
      additionalneeds: 'Updated needs',
    };

    const response = await apiContext.put(`/booking/${createdBookingId}`, {
      data: updatedBooking,
      headers: {
        Cookie: `token=${authToken}`,
      },
    });

    // TODO: Assert status is 200
    // TODO: Parse body and verify updated fields
    void response; // Remove once TODOs are filled in
  });

  // --------------------------------------------------------
  // TEST 5: PATCH — Partial update
  // --------------------------------------------------------
  test('API-005 — PATCH /booking/:id partially updates booking', async () => {
    test.skip(!createdBookingId, 'Booking not created in API-002');

    const response = await apiContext.patch(`/booking/${createdBookingId}`, {
      data: { totalprice: 777 },
      headers: { Cookie: `token=${authToken}` },
    });

    // TODO: Assert status is 200
    // TODO: Assert totalprice is now 777
    // TODO: Assert other fields are unchanged (firstname should still be 'Updated')
    void response; // Remove once TODOs are filled in
  });

  // --------------------------------------------------------
  // TEST 6: DELETE
  // --------------------------------------------------------
  test('API-006 — DELETE /booking/:id removes the booking', async () => {
    test.skip(!createdBookingId, 'Booking not created in API-002');

    const deleteResponse = await apiContext.delete(`/booking/${createdBookingId}`, {
      headers: { Cookie: `token=${authToken}` },
    });

    // TODO: Assert delete was successful (status 201 on this API)

    // TODO: Verify deletion with a GET
    const getResponse = await apiContext.get(`/booking/${createdBookingId}`);
    // TODO: Assert GET now returns 404 or 'Not Found'
    void deleteResponse;
    void getResponse;
  });

  // --------------------------------------------------------
  // TEST 7: Negative — Invalid auth
  // --------------------------------------------------------
  test('API-007 — Protected endpoint rejects invalid token', async () => {
    test.skip(!createdBookingId, 'Need a booking ID to test');

    const response = await apiContext.delete(`/booking/1`, {
      headers: { Cookie: 'token=invalidtoken123' },
    });

    // TODO: Assert that this returns a 403 or 401 (not 201)
    // Document what Restful-Booker actually returns for bad auth
    void response; // Remove once TODO is filled in
  });
});
