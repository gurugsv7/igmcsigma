-- Add payment_proof_url to Accommodation
alter table "Accommodation" add column if not exists payment_proof_url text;

-- Add payment_screenshot_url to EventRegistration
alter table "EventRegistration" add column if not exists payment_screenshot_url text;

-- Add paymentScreenshotUrl to DelegatePass
alter table "DelegatePass" add column if not exists paymentScreenshotUrl text;
