$(document).ready(function() {
    const overlay = $("#overlay");
    const overlayImage = overlay.find("img.overlay-image");
    const overlayCaption = overlay.find("div.overlay-caption");

    // Use event delegation for dynamically added images
    $(document).on("click", ".figure img", function() {
        const clickedImageSrc = $(this).attr("src");
        const captionText = $(this).attr("alt"); // Extract caption text
        overlayImage.attr("src", clickedImageSrc); // Update the overlay image src
        overlayCaption.html(captionText); // Set the overlay caption text
        overlay.addClass("active"); // Show the overlay
    });

    overlay.click(function(event) {
        if (event.target === overlay[0]) {
            overlay.removeClass("active"); // Hide the overlay if clicked outside
        }
    });
});
