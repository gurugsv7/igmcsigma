-- Add missing columns to DelegatePass table for delegate registration

ALTER TABLE "DelegatePass"
ADD COLUMN IF NOT EXISTS institution TEXT;

ALTER TABLE "DelegatePass"
ADD COLUMN IF NOT EXISTS delegate_id TEXT;

ALTER TABLE "DelegatePass"
ADD COLUMN IF NOT EXISTS registration_id TEXT;

ALTER TABLE "DelegatePass"
ADD COLUMN IF NOT EXISTS payment_screenshot_url TEXT;
