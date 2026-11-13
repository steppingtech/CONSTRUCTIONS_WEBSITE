// ============================================================
// SHREE BALAJI CONSTRUCTIONS — Google Sheet API Connection
// ============================================================

//Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwRgIF-lPYxHRy0dhAN5JVixiT3AiG0UpKp1HGvUw32z6rGv7Z8TuSW-Trmyf3eIyzV/exec";

/**
 * 1. Fetch Projects
 */
export async function fetchProjects() {
    try {
        const response = await fetch(SCRIPT_URL + "?action=getProjects");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}

/**
 * 2. Send Data to Google Sheet
 */
export async function sendToSheet(formData) {
    
    if (!formData.has("action")) {
        formData.append("action", "addProject");
    }
    
    try {
        await fetch(SCRIPT_URL, { 
            method: "POST", 
            body: formData,
            mode: "no-cors" 
        });
       
        return { success: true };
    } catch (error) {
        console.error("Action error:", error);
        return { success: false };
    }
}

/**
 * 3. Submit Enquiry (Contact Form)
 */
export async function submitEnquiry(formData) {
  
    formData.append("action", "submitForm");
    
    try {
        await fetch(SCRIPT_URL, { 
            method: "POST", 
            body: formData,
            mode: "no-cors" 
        });
      
        return { success: true };
    } catch (error) {
        console.error("Form submit error:", error);
        return { success: false };
    }
}