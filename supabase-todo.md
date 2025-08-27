# Supabase Backend Integration Todo

- [x] Analyze requirements and define data models (registration, delegate pass, accommodation)

## Data Models

### EventRegistration
- id (uuid, primary key)
- name (text)
- email (text)
- phone (text)
- event_id (text)
- registration_time (timestamp)

### DelegatePass
- id (uuid, primary key)
- name (text)
- email (text)
- phone (text)
- pass_type (text)
- purchase_time (timestamp)

### Accommodation
- id (uuid, primary key)
- name (text)
- email (text)
- phone (text)
- room_type (text)
- check_in (date)
- check_out (date)
- booking_time (timestamp)
- [x] Set up Supabase project and database tables

## SQL Table Schemas

```sql
-- EventRegistration table
create table EventRegistration (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  event_id text not null,
  registration_time timestamp with time zone default now()
);

-- DelegatePass table
create table DelegatePass (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  pass_type text not null,
  purchase_time timestamp with time zone default now()
);

-- Accommodation table
create table Accommodation (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  room_type text not null,
  check_in date,
  check_out date,
  booking_time timestamp with time zone default now()
);
```
- [x] Generate and store Supabase API keys/connection details

## Supabase API Keys & Connection

1. Go to your Supabase project dashboard.
2. Navigate to Project Settings → API.
3. Copy the `anon` public API key and project URL.
4. Store these in your project as environment variables (e.g., `.env` file):

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```
- [ ] Install Supabase client SDK in the project
- [ ] Integrate Supabase into the codebase
- [ ] Implement logic to store registration events
- [ ] Implement logic to store delegate passes
- [ ] Implement logic to store accommodation data
- [ ] Test all backend integrations
