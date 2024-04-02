document.addEventListener("DOMContentLoaded", function() {
    var recommendationForm = document.getElementById("recommendationForm");
    var recommendationInput = document.getElementById("recommendationInput");
    var recommendationContainer = document.getElementById("recommendation");

    recommendationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the value of the recommendation input
        var newRecommendation = recommendationInput.value.trim();

        // Check if the recommendation is not empty
        if (newRecommendation !== "") {
            // Create a new paragraph element for the recommendation
            var recommendationParagraph = document.createElement("p");
            recommendationParagraph.textContent = newRecommendation;

            // Append the new recommendation to the recommendation container
            recommendationContainer.appendChild(recommendationParagraph);

            // Clear the recommendation input
            recommendationInput.value = "";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var recommendationForm = document.getElementById("recommendationForm");
    var popupModal = document.getElementById("popupModal");
    var popupMessage = document.getElementById("popupMessage");
    var closeButton = document.querySelector(".close");

    recommendationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Show the popup modal
        popupModal.style.display = "block";

        // Hide the popup modal after 3 seconds
        setTimeout(function() {
            popupModal.style.display = "none";
        }, 3000);
    });

    // Close the popup modal when the close button is clicked
    closeButton.addEventListener("click", function() {
        popupModal.style.display = "none";
    });
});
