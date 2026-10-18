CREATE TABLE public.order_inquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 product text NOT NULL DEFAULT 'Premium Makhana' CHECK (product = 'Premium Makhana'),
 name text NOT NULL CHECK (length(trim(name)) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (length(email) <= 255 AND email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 phone text NOT NULL DEFAULT '' CHECK (length(phone) <= 25 AND phone ~ '^[0-9+() -]*$'),
 quantity text NOT NULL CHECK (length(trim(quantity)) BETWEEN 1 AND 100),
 message text NOT NULL DEFAULT '' CHECK (length(message) <= 2000)
);
GRANT INSERT ON public.order_inquiries TO anon, authenticated;
GRANT ALL ON public.order_inquiries TO service_role;
ALTER TABLE public.order_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Shoppers submit inquiries" ON public.order_inquiries FOR INSERT TO anon, authenticated WITH CHECK (product = 'Premium Makhana');