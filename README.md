Flipside_Specialties

## Storage Reorganization

If you have images stored in the double-nested folder structure (`company-logos/company-logos/division8/` and `company-logos/company-logos/division10/`), you need to reorganize them to the correct structure.

### To reorganize storage folders:

1. Open `reorganize-storage.html` in your browser
2. Click the "Run Reorganization" button
3. Wait for all files to be moved from the old paths to the new paths
4. Once complete, verify that the Division 8 and Division 10 pages display logos correctly

This utility will:
- Move files from `company-logos/division8/` to `division8/`
- Move files from `company-logos/division10/` to `division10/`
- Delete the old files after successful migration

**Note**: This only needs to be run once. After reorganization, upload new images directly to the `division8/` or `division10/` folders within the `company-logos` bucket.
