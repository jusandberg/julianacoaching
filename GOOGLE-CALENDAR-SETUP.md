# Connect Google Calendar

The branded booking artifact is `booking.html`.

1. On a computer, open Google Calendar using the coaching Workspace account.
2. Click **Create → Appointment schedule**.
3. Add each service, duration, availability, buffer time, booking window, and daily limit.
4. Choose Google Meet, add the service description, and enable email verification.
5. Configure confirmation emails and reminders.
6. Under **Booking pages**, open the schedule’s options.
7. Choose **Sharing options → Website embed → A single booking page → Inline booking page**.
8. Copy the embed code.
9. From that code, copy the URL inside `src="..."`.
10. In `booking.html`, replace the empty value in:

   `const GOOGLE_BOOKING_EMBED_URL = '';`

Once connected, change the coaching-site booking links from the Squarespace URL to `./booking.html`.

Optional: On eligible Google Workspace plans, connect Stripe under **Calendar Settings → Appointment schedules** and enable payment for paid services.
