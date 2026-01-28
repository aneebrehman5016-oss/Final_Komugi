/*
  # Add session ID to orders table

  1. New Columns
    - `session_id` (text, unique per guest visitor)
    
  2. Changes
    - Add `session_id` column to `orders` table with default value generation
    - Add index on `session_id` for faster queries
    - Add check constraint to ensure session_id is not empty
    
  3. Security
    - RLS policies will restrict order access to matching session IDs
    - Users can only view/modify orders created with their session ID
    
  4. Important Notes
    - Session ID is generated client-side and stored in localStorage
    - Each guest visitor gets a unique session ID on first visit
    - Orders are tied to session IDs for guest access control
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'session_id'
  ) THEN
    ALTER TABLE orders ADD COLUMN session_id text NOT NULL DEFAULT gen_random_uuid()::text;
    
    ALTER TABLE orders ADD CONSTRAINT session_id_not_empty CHECK (session_id != '');
    
    CREATE INDEX idx_orders_session_id ON orders(session_id);
  END IF;
END $$;