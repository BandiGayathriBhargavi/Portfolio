/*
# Create contact_messages table (single-tenant, public submissions)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null)
  - `email` (text, not null)
  - `subject` (text, not null)
  - `message` (text, not null)
  - `created_at` (timestamptz, default now)
  - `is_read` (boolean, default false)

2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon, authenticated` so the public contact form can submit.
- Grant SELECT to `authenticated` so the portfolio owner can read messages after signing in.
- INSERT is public (anyone can submit a message); reads are owner-only.
- No UPDATE/DELETE granted publicly — messages are immutable once submitted from the frontend.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_read boolean NOT NULL DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;
GRANT SELECT ON contact_messages TO authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated USING (true);
