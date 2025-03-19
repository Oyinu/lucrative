document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = [
        ".lucrative-token",
        ".hero h1",
        "nav",
        ".hero p",
        ".header-text",
        ".hero button",
        ".roadmap-item",
        ".roadmap-text p",
        ".second-paragraph",
        ".third-paragraph",
        ".forth-paragraph",
        ".fifth-paragraph",
        ".roadmap-image",
        ".tokenomics-info",
        ".tokenomics-chart",
        "#token-info",
        ".contact h2",
        ".contact p",
        ".form-content",
        "#community h2",
        "footer"
    ];

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    });

    elementsToAnimate.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element) observer.observe(element);
    });

    // Tokenomics Chart (only initialize if element exists)
    const chartElement = document.getElementById("tokenomicsChart");
    if (chartElement) {
        const ctx = chartElement.getContext("2d");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Development Team", "Airdrops", "Marketing", "Liquidity Pool", "Ecosystem Growth", "Public Sale"],
                datasets: [
                    {
                        data: [10, 2.5, 2.5, 25, 25, 35],
                        backgroundColor: ["#000000", "#FFFFFF", "#D3D3D3", "#A9A9A9", "#808080", "#505050"],
                        borderColor: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            color: "#000"
                        }
                    }
                }
            }
        });
    }

    // Copy Token Functionality
    document.getElementById("svgIcon").addEventListener("click", () => {
        const tokenText = document.getElementById("token").innerText;
        navigator.clipboard.writeText(tokenText).then(() => {
            alert("Token copied to clipboard!"); // Change to tooltip if needed
        }).catch(err => console.error("Failed to copy:", err));
    });
});
