-- Add new columns to the bookings table to support comprehensive inquiries

-- Check if columns exist before adding (using simple ADD COLUMN which is idempotent enough if running fresh, 
-- but separate statements prevent failure if one exists)

alter table bookings add column if not exists country text;
alter table bookings add column if not exists residency_status text; -- 'Citizen', 'Resident', 'Non-Resident'
alter table bookings add column if not exists adults integer default 1;
alter table bookings add column if not exists children integer default 0;
alter table bookings add column if not exists trip_type text; -- 'Family', 'Honeymoon', 'Solo', 'Group', 'Corporate'
alter table bookings add column if not exists accommodation_preference text; -- 'Budget', 'Mid-Range', 'Luxury'
alter table bookings add column if not exists arrival_date date;
alter table bookings add column if not exists departure_date date;
alter table bookings add column if not exists heard_about_us text;

-- Optional: Add constraint to ensure adults is at least 1
-- alter table bookings add constraint bookings_adults_check check (adults >= 1);
