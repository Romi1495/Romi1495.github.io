var variables = {
  tiles: [
    [`Hindutva's "War on Terror`, "In line with the anti-Islam ideological project of connecting Muslim communities and movements to terrorism, the Hindutva project has adopted a similar framework as the United States or other combatants in the so-called `War on Terror`. In the context of India's 2014 general elections, Narendra Modi's candidacy with the Bharatiya Janata Party (BJP) connects an ongoing legacy of Hindutva violence with an ostensibly secular outlook which poses Indian Muslims as incapable or less willing to accept the central secularist tendencies of the post-independence Indian state. In practice, this included an explicit reference to a supposed 'soft' position on terror from the state of Bihar (pg. 105), along with the attack on then-defence minister A. K. Antony during these elections for being insufficiently hostile to Pakistan.", "PICTURE", "./images/party.png"],
    ["Majority Becomes Minority", "Islam is the second-largest religion in India, hosting around 200 million Muslims as of present. However, while post-independence India is constitutionally defined as secular, the state does engage in managing religious institutions such as the funding of temples or holy sites. This leads to a severe lack of general infrastructure for the Muslim population.", "PICTURE", "./images/minority.jpg"],
    ["Anti-Muslim Violence", "In the 21st century, anti-Muslim violence has been defined largely by the 2002 pogroms against Muslims in the state of Gujarat, in which 790 Muslims were murdered over the course of three days. At the time, the Chief Minister of Gujarat Narendra Modi was accused credibly of condoning the violence and having made an insufficient effort to stop the violence.", "PICTURE", "./images/violence.jpg"],
    ["Bharatiya Janata Party ", "The current governing party, Bharatiya Janata Party (BJP) particularly under the Narendra Modi administration has been associated with anti-Muslim Hindu chauvinism. Modi since the 1960s has been a member of the right-wing Hindutva paramilitary/organization Rashtriya Swayamsevak Sangh (RSS), itself a major constituent of the so-called `Sangh parivar`, describing a family of extreme Hindu nationalist cells and organizations.", "PICTURE", "./images/hindutva.jpg"],
    ["A Major Minority", "The current governing party, Bharatiya Janata Party (BJP) particularly under the Narendra Modi administration has been associated with anti-Muslim Hindu chauvinism. Modi since the 1960s has been a member of the right-wing Hindutva paramilitary/organization Rashtriya Swayamsevak Sangh (RSS), itself a major constituent of the so-called `Sangh parivar`, describing a family of extreme Hindu nationalist cells and organizations.", "PICTURE", "./images/hindutva.jpg"],
    ["Gujarat pogroms ", "Muslims are addressed by the state in a minority capacity that is often considered by politically extreme Hindu nationalist movements as the primary obstacle of their objectives. In the 21st century, anti-Muslim violence has been defined largely by the 2002 pogroms against Muslims in the state of Gujarat, in which 790 Muslims were murdered over the course of three days. At the time, the Chief Minister of Gujarat Narendra Modi was accused credibly of condoning the violence and having made an insufficient effort to stop the violence.", "PICTURE", "./images/gujarat.jpg"]

],
}
$(document).ready(function() {
    let con = false
    variables.tiles.forEach(tile => {
      let target = con ? $("#left") : $("#right")
      target.append(`
          <article class="hover tile is-child notification is-warning is-light box">
            <div class="content">
              <div class="columns is-vcentered">
                <div class="has-text-centered column is-vcentered">
                  <p class="title"> ${tile[0]} </p>
                </div>
                <div class="column is-half is-vcentered">
                  <p> ${tile[1]} </p>
                </div>
                <div class="column is-vcentered">
                  <figure class="image is-256x256">
                    <img class="is-rounded" src=${tile[3]}>
                      </figure>
                  </div>
                </div>
              </div>
          </article>
  `);
    con = !con
    })
})