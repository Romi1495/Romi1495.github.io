let images = [
    ["https://www.nytimes.com/interactive/2014/04/06/world/asia/modi-gujarat-riots-timeline.html", "Timeline of the Riots in Modis Gujarat", "./images/gujarat.jpg"],
    ["https://en.wikipedia.org/wiki/Bharatiya_Janata_Party,_West_Bengal", "Bharatiya Janata Party, West Bengal", "./images/party.png"],
    ["https://www.nationalheraldindia.com/book-extract/the-battle-between-india-and-hindutva", "The battle between India & Hindutva", "./images/hindutva.jpg"],
    ["https://www.tourmyindia.com/blog/popular-mosques-of-india", "Top 12 Popular Mosques of India", "./images/mosque.jpg"],
    ["https://www.deccanherald.com/international/world-news-politics/nrc-caa-may-affect-status-of-indias-muslim-minority-789069.html", "Status of India's Muslim Minority", "./images/minority.jpg"],
    ["https://www.nytimes.com/interactive/2014/04/06/world/asia/modi-gujarat-riots-timeline.html", "Timeline of the Riots in Modis Gujarat", "./images/violence.jpg" ]
]
$(document).ready(function() {
    let count = 0
    images.forEach(tile => {
      let target = count < 2 ? $("#one") : (count < 4 ? $("#two") : $("#three"))
      target.append(`
          <article class="hover tile is-child notification is-warning is-light box">
            <div class="content">
              <div class="columns is-vcentered">
                <div class="has-text-centered column is-vcentered">
                  <a class="title" href=${tile[0]}> ${tile[1]} </a>
                </div>
                <div class="column is-vcentered">
                  <figure class="image is-256x256">
                    <img class="is-rounded" src=${tile[2]}>
                      </figure>
                  </div>
                </div>
              </div>
          </article>
  `);
        count++
    })
})