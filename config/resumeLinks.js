// Google Drive Resume Links Configuration
// To update: Replace the FILE_ID with your actual Google Drive file IDs
// 
// How to get Google Drive file ID:
// 1. Right-click your PDF in Google Drive → Share → Get link
// 2. From: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
// 3. Copy the FILE_ID part and paste below

export const resumeLinks = {
  ITS_RESUME_ID: "1CoHBw_NvpXFxBkDnDVqu8T83n5_IoNMr", // Extracted file ID from your Google Drive link
};

// Helper function to generate Google Drive download link
export const getGoogleDriveDownloadLink = (fileId) => {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
};

// Helper function to generate Google Drive preview link (alternative if download doesn't work)
export const getGoogleDrivePreviewLink = (fileId) => {
  return `https://drive.google.com/file/d/${fileId}/view`;
};

// Backup: Direct download links (test these first)
export const directDownloadLinks = {
  ITS_RESUME: "https://drive.google.com/uc?export=download&id=1CoHBw_NvpXFxBkDnDVqu8T83n5_IoNMr"
};
