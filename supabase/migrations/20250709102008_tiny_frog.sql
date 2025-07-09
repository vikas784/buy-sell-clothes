/*
  # Create orders table

  1. New Tables
    - `orders`
      - `id` (uuid, primary key)
      - `customer_name` (text, required)
      - `customer_email` (text, required)
      - `customer_phone` (text, required)
      - `items` (jsonb, required) - Array of order items
      - `total_amount` (numeric, required)
      - `order_type` (text, required) - 'pickup' or 'delivery'
      - `delivery_address` (text) - Required for delivery orders
      - `special_instructions` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `orders` table
    - Add policy for public insert access
    - Add policy for service role management
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  items jsonb NOT NULL,
  total_amount numeric NOT NULL,
  order_type text NOT NULL CHECK (order_type IN ('pickup', 'delivery')),
  delivery_address text,
  special_instructions text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'ready', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create orders"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Service role can manage orders"
  ON orders
  FOR ALL
  TO service_role
  USING (true);