-- FIX: Allow Admin (Authenticated Users) to View All Bookings
-- Currently, RLS only allows users to view their OWN bookings. 
-- Since bookings are created by "anonymous" users (public), they have no owner, so the Admin cannot see them.

-- This policy allows any user who is logged in (which is only YOU, the admin) to view all rows.

create policy "Allow authenticated users to view all bookings"
on bookings for select
using (auth.role() = 'authenticated');

-- Optional: Allow admin to update status (contacted, booked, etc.)
create policy "Allow authenticated users to update bookings"
on bookings for update
using (auth.role() = 'authenticated');
