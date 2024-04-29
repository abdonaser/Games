import { Ui } from "./ui.module.js";

export class Details {
    constructor() {
        document.querySelector('.close').addEventListener("click", () => {
            document.querySelector('.games').classList.remove("d-none")
            document.querySelector('.details').classList.add("d-none")
        })
        this.loadingPage = document.querySelector('.loading')
    }

    async getDetails(gameId) {
        this.loadingPage.classList.remove("d-none")

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e6963edafdmshd501feef2cce02dp1e3f4fjsnbc812d40b9d7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            let api = await fetch(url, options)
            let response = await api.json()
            this.loadingPage.classList.add("d-none")

            new Ui().displaydetails(response)

            document.querySelectorAll('.children img').forEach(image => {

                //' mouse in
                image.addEventListener('click', function () {

                    //' Set the src of selected img to the parent img
                    let parantImage = document.querySelector('.parent img')
                    let selectedImage = this.getAttribute("src")
                    parantImage.setAttribute("src", `${selectedImage}`)

                    //' handel the active img 
                    document.querySelector('.children .activeImage').classList.remove("activeImage")
                    this.classList.add("activeImage")
                })
            })
        } catch {
            console.log("error found in Get Details")
        }
    }
}