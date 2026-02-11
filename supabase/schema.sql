-- Create a table for public profiles (optional, but good practice)
create table if not exists profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  avatar_url text,
  website text,

  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create a table for bookings
create table if not exists bookings (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users, -- can be null for guest bookings if you want
  full_name text not null,
  email text not null,
  phone text,
  package_id text,
  travel_date date,
  message text,
  status text default 'pending'
);

-- Set up RLS for bookings
alter table bookings enable row level security;

-- Policy: Users can view their own bookings
create policy "Users can view own bookings" on bookings
  for select using (auth.uid() = user_id);

-- Policy: Users can insert their own bookings (or guests if we allow public inserts, but usually authenticated)
-- For now allowing public inserts for "Contact/Booking" forms might be needed if users aren't logged in.
-- If you want ONLY logged in users to book:
-- create policy "Authenticated users can create bookings" on bookings for insert with check (auth.uid() = user_id);

-- If you want GUEST bookings (no login required):
create policy "Anyone can create a booking" on bookings
  for insert with check (true);
  
-- Storage: Create a bucket for 'galleries'
insert into storage.buckets (id, name, public) 
values ('galleries', 'galleries', true)
on conflict (id) do nothing;

-- Storage Policy: Public access to view files
create policy "Give public access to galleries" on storage.objects
  for select using (bucket_id = 'galleries');

-- Storage Policy: Allow authenticated users to upload (e.g. admins)
-- This is a simple check for any authenticated user. For true admin, you'd check a role or a table.
create policy "Allow authenticated uploads" on storage.objects
  for insert with check (bucket_id = 'galleries' and auth.role() = 'authenticated');
