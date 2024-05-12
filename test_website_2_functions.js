// Assuming reviewsData is an array of review objects
const reviewsData = [
    { name: 'Bob Smith', position: 'Employee', date: '2022-01-01', rating: 'Excellent', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Michael Scott', position: 'Branch Manager', date: '2022-02-01', rating: 'Meets Expectations', comments: 'Nulla facilisi. Sed non finibus odio.' },
    // Add more review objects as needed
];

// Function to display reviews
function displayReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = ''; // Clear existing content

    reviewsData.forEach((review, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.id = `review${index + 1}`;

        reviewItem.innerHTML = `
            <h2>${review.name}</h2>
            <p><strong>Position:</strong> ${review.position}</p>
            <p><strong>Date:</strong> ${review.date}</p>
            <p><strong>Rating:</strong> ${review.rating}</p>
            <p><strong>Comments:</strong> ${review.comments}</p>
            <!-- Add a link to the review form -->
            <a href="review_form.html?employee=${encodeURIComponent(review.name.replace(/\s+/g, ''))}">Complete Review</a>
        `;

        reviewsList.appendChild(reviewItem);
    });
}

// Call displayReviews function when the page loads
document.addEventListener('DOMContentLoaded', displayReviews);
