
document.getElementById("Btn").addEventListener("click", async () => {


    document.getElementById("loading-overlay").classList.remove("hidden")



       const nums = [
        "5491164486165",
        "5491168818355",
        "5491168819633",
    ]


    const randomLine = nums[Math.floor(Math.random() * nums.length)];


    if (randomLine) {
        console.log("ok")

        const msg = `Hola! vengo por el bono de bienvenida de Joker Fortuna\nMe creas un usuario?`
        const url = `https://wa.me/${randomLine}?text=${encodeURIComponent(msg)}`;
        window.location.href = url
    }




})










window.addEventListener('load', async () => {
    document.body.classList.remove("lbody")
    console.log("load")
})
