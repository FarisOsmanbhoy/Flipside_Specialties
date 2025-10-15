/*
  # Create Storage Bucket for Company Logos

  1. New Storage Buckets
    - `company-logos` - Public bucket for storing company/manufacturer logos

  2. Security
    - Bucket is public for read access
    - Anyone can view logos
    - Only authenticated users can upload

  3. Notes
    - This bucket will contain subfolders for division8 and division10
    - Images will be publicly accessible via direct URLs
*/

-- Create the storage bucket for company logos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'company-logos',
  'company-logos',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml', 'image/avif']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to view files in the bucket
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'company-logos');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'company-logos');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'company-logos')
WITH CHECK (bucket_id = 'company-logos');

-- Allow authenticated users to delete files
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'company-logos');