-- Add team_members column to store member details (name, phone, year) as JSON
ALTER TABLE "EventRegistration"
ADD COLUMN IF NOT EXISTS team_members JSONB;

-- Optionally, migrate existing data if needed (not required for new events)

-- Add coupon_code column if not already present
ALTER TABLE "EventRegistration"
ADD COLUMN IF NOT EXISTS coupon_code TEXT;
