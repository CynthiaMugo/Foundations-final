// About us page - script to display the founders' details
const founders = {
    ariel: "Ariel Omondi has a soft spot for romance novels that tug at the heartstrings. She believes in the power of love stories to heal and inspire, and can often be found daydreaming about the perfect book boyfriend ",
    peter: "Peter Maina is a mystery aficionado with an eye for thrilling plots and unpredictable twists. He is the kind of reader who loves to be on the edge of their seat, and he’s always up for a good discussion about those “whodunit” moments.",
    zamani: "Zamani Wekezo is our go-to for deep dives into character development and intricate narratives. She enjoys a good romance as much as the next person but can easily get lost in the layers of suspense and plot-building."
};
document.querySelectorAll(".founder-btn").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.getAttribute("data-founder");
        const detailDiv = document.getElementById("founder-details");
        detailDiv.textContent = founders[key];
        detailDiv.classList.remove("hidden");
    });
});
