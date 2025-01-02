export function formatDateTime(createdAt: string): string {
    const date = new Date(createdAt);

    // Correct options for formatting the date and time
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2024"
        month: 'long', // "December"
        day: 'numeric', // "14"
        hour: '2-digit', // "12"
        minute: '2-digit', // "11"
        second: '2-digit', // "41"
        timeZoneName: 'short', // "UTC"
    };

    // Return the formatted date and time string
    return date.toLocaleString('en-US', options);
}