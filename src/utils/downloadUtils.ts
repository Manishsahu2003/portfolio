export const downloadResume = async (): Promise<void> => {
  try {
    // First, check if the file exists
    const response = await fetch('/resume.pdf', { method: 'HEAD' });
    if (!response.ok) {
      throw new Error(`Resume file not found: ${response.status}`);
    }
    
    // Method 1: Direct download using anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manish_Sahu_Resume.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Fallback using fetch if direct download doesn't work
    setTimeout(async () => {
      try {
        const fetchResponse = await fetch('/resume.pdf');
        if (!fetchResponse.ok) {
          throw new Error(`HTTP error! status: ${fetchResponse.status}`);
        }
        
        const blob = await fetchResponse.blob();
        const url = window.URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'Manish_Sahu_Resume.pdf';
        downloadLink.style.display = 'none';
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Clean up the URL object
        window.URL.revokeObjectURL(url);
      } catch (fetchError) {
        console.error('Fetch method failed:', fetchError);
        // Final fallback: open in new tab
        window.open('/resume.pdf', '_blank');
      }
    }, 100);
    
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: open in new tab
    window.open('/resume.pdf', '_blank');
  }
}; 