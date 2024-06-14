const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        // Prepare the data to be sent to the backend
        const formData = {
            issue_description: issueDescription,
            date: date,
            plumber_id: plumberId,
            user_id: userId
        };

        const response = await fetch('/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to add booking');
        }

        
        fetchBookings();

        setIssueDescription('');
        setDate('');
        setPlumberId('');
        setUserId('');
    } catch (error) {
        console.error('Error adding booking:', error);
    }
};
