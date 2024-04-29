export class Ui {
    constructor() {
        this.gameData = document.querySelector('#gameData')
        this.detailsData = document.querySelector('#detailsData')
    }

    displayHome(data) {
        let games = ``
        for (const game of data) {
            games += `
            <div class="col-md-3 ">
                        <div data-gameId="${game.id}" class="card h-100 bg-transparent" role="button">
                            <div class="card-body">
                                <figure class="position-relative">
                                    <img src="${game.thumbnail}" alt=""
                                        class="card-img-top object-fit-cover h-100 w-100" srcset="">
                                </figure>
                                <figcaption>
                                    <div class="hstack justify-content-between">
                                        <h3 class="h6 small">${game.title.split(" ", 2).join(" ")}</h3>
                                        <span class="badge text-bg-primary p-2">Free</span>
                                    </div>
                                    <p class="card-text small text-center opacity-50">
                                        ${game.short_description}
                                    </p>
                                </figcaption>
                            </div>
                            <footer class="card-footer small hstack justify-content-between">
                                <span class="badge badge-color">${game.genre}</span>
                                <span class="badge badge-color">${game.platform}</span>
                            </footer>
                        </div>
                    </div>
            
            `
        }
        this.gameData.innerHTML = games
    }

    displaydetails(data) {
        console.log(data);
        let detailsBox = `
        
        <div class="col-md-5">
                    <div class="parent  ">
                        <img class="w-100" src="${data.thumbnail}" alt="">
                    </div>
                    <div class="row g-3 g-md-2 g-sm-3   mt-4 children">
                        <h5>More Images</h5>
                        <div class=" col-3  col-md-4 child">
                                <img class="w-100 activeImage " src="${data.thumbnail}" alt="">
                        </div>
                        ${data.screenshots.map((img) => {
            return `
                                <div class=" col-3  col-md-4 child">
                                    <img class="w-100  " src="${img.image}" alt="">
                                </div>
                               `
        }).join("")}
                    </div>
        </div>
        <div class="col-md-7">
                    <h3>Title : ${data.title} </h3>
                    <p>Category : <span class="badge text-bg-info">${data.genre} </span> </p>
                    <p>Platform :  <span class="badge text-bg-info">${data.platform} </span> </p>
                    <p>Status : <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="small"> ${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
                </div>
        `
        this.detailsData.innerHTML = detailsBox
    }


}