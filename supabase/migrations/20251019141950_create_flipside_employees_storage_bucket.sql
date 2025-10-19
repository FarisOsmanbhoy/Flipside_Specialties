/*
  # Create Storage Bucket for Employee Images

  1. New Storage Buckets
    - `Flipside-employees` - Public bucket for storing employee photos

  2. Security
    - Bucket is public for read access
    - Anyone can view employee photos
    - Only authenticated users can upload

  3. Notes
    - Employee images should be named using format: "First-Last.jpg" (e.g., "Natasha-Osmanbhoy.jpg")
    - Images will be publicly accessible via direct URLs
*/

-- Create the storage bucket for employee images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'Flipside-employees',
  'Flipside-employees',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml', 'image/avif']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to view files in the bucket
CREATE POLICY "Public Access to Employee Photos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'Flipside-employees');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload employee photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'Flipside-employees');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update employee photos"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'Flipside-employees')
WITH CHECK (bucket_id = 'Flipside-employees');

-- Allow authenticated users to delete files
CREATE POLICY "Authenticated users can delete employee photos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'Flipside-employees');