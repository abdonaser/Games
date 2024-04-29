import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"

export class Home {
    constructor() {
        this.handelActiveNavLink()
        this.loadingPage = document.querySelector('.loading')
        this.gameData('MMORPG')
    }

    handelActiveNavLink() {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.navbar-nav .active').classList.remove("active")
                link.classList.add("active")
                this.gameData(link.innerText)
            })
        })
    }

    async gameData(gat) {
         
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${gat}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e6963edafdmshd501feef2cce02dp1e3f4fjsnbc812d40b9d7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        try {
            this.loadingPage.classList.remove("d-none")
            let api = await fetch(url, options)
            let response = await api.json()
            this.loadingPage.classList.add("d-none")

            new Ui().displayHome(response)
            document.querySelectorAll('.card').forEach(card => {
                card.addEventListener('click', () => {
                    document.querySelector('.games').classList.add("d-none")
                    document.querySelector('.details').classList.remove("d-none")
                    new Details().getDetails(card.dataset.gameid)
                })
            });
        } catch {
            console.log("error found in Get Games")
        }






    }
}
