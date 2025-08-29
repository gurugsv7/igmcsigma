-- Add year column to store year of study
ALTER TABLE "EventRegistration"
ADD COLUMN IF NOT EXISTS year TEXT;

-- Add coupon_applied column to store if coupon was applied (yes/no)
ALTER TABLE "EventRegistration"
ADD COLUMN IF NOT EXISTS coupon_applied TEXT CHECK (coupon_applied IN ('yes', 'no'));
