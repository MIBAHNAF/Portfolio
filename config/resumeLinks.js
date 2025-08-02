// Google Drive Resume Links Configuration
// To update: Replace the FILE_ID with your actual Google Drive file IDs
// 
// How to get Google Drive file ID:
// 1. Right-click your PDF in Google Drive → Share → Get link
// 2. From: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
// 3. Copy the FILE_ID part and paste below

export const resumeLinks = {
  SWE_RESUME_ID: "18qWS3yNhBxc9kouG8HBW8XW7th_sTzFi", // Extracted file ID from your Google Drive link
  ITS_RESUME_ID: "16nL84-RkUaTMZtuLim4t55q1-0sBaVR7", // Extracted file ID from your Google Drive link
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
  SWE_RESUME: "https://drive.google.com/uc?export=download&id=18qWS3yNhBxc9kouG8HBW8XW7th_sTzFi",
  ITS_RESUME: "https://drive.google.com/uc?export=download&id=16nL84-RkUaTMZtuLim4t55q1-0sBaVR7"
};
