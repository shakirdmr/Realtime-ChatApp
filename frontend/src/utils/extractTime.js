export function extractTime(dateString) {
	const date = new Date(dateString);
	const day = padZero(date.getDate());
	const month = padZero(date.getMonth() + 1); // Months are zero-based
	const year = date.getFullYear();
	const hours24 = date.getHours();
	const hours12 = hours24 % 12 || 12; // Convert to 12-hour format, with 0 becoming 12
	const minutes = padZero(date.getMinutes());
	const amPm = hours24 < 12 ? 'AM' : 'PM';
  
	
	if(day>1)
	return `${day}/${month} ${padZero(hours12)}:${minutes} ${amPm}`;
	else
	return ` ${padZero(hours12)}:${minutes} ${amPm}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
	return number.toString().padStart(2, "0");
  }
  