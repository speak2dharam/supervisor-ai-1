$(document).ready(function () {
    const features = [
        "Constant Monitoring",
        "Service Use Optimization",
        "Security Alerts",
        "Cost Optimization",
        "Compliance Management",
        "Cloud Infrastructure Management"
    ];

    let index = 0;

    setInterval(() => {
        const $feature = $("#dynamic-feature");

        // Apply the flip-out animation
        $feature.css("animation-name", "flip-out");

        // Change the text after the flip-out animation completes
        setTimeout(() => {
            $feature.text(features[index]);
            $feature.css("animation-name", "flip-in");
            index = (index + 1) % features.length;
        }, 300); // Half the animation duration (out phase)
    }, 3000); // Change every 3 seconds
});
