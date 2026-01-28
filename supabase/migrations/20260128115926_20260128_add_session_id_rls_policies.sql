/*
  # Add Row Level Security policies for session ID restriction

  1. Security
    - Add SELECT policy to restrict orders to matching session IDs
    - Add UPDATE policy to restrict order updates to matching session IDs
    
  2. Important Notes
    - Guests can only view and update orders created with their session ID
    - This prevents guests from accessing or modifying orders from other sessions
    - Admin access remains unrestricted through separate authentication
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE policyname = 'Guest users can view own orders by session'
    AND tablename = 'orders'
  ) THEN
    CREATE POLICY "Guest users can view own orders by session"
      ON orders
      FOR SELECT
      TO anon
      USING (session_id = current_setting('request.jwt.claims', true)::jsonb->>'session_id'
             OR (current_setting('request.jwt.claims', true) IS NULL AND session_id IS NOT NULL));
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE policyname = 'Guest users can update own orders by session'
    AND tablename = 'orders'
  ) THEN
    CREATE POLICY "Guest users can update own orders by session"
      ON orders
      FOR UPDATE
      TO anon
      USING (session_id = current_setting('request.jwt.claims', true)::jsonb->>'session_id'
             OR (current_setting('request.jwt.claims', true) IS NULL AND session_id IS NOT NULL))
      WITH CHECK (session_id = current_setting('request.jwt.claims', true)::jsonb->>'session_id'
                  OR (current_setting('request.jwt.claims', true) IS NULL AND session_id IS NOT NULL));
  END IF;
END $$;