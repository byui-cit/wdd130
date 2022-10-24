const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  }
];

function articleTemplate(item) {
  return `<article><section class="post-details">
    <p class="post-details__date">${item.date}</p>
    <p>${item.ages}</p>
    <p>${item.genre}</p>
    <p>${item.stars}</p>
  </section>
  <section class="post-content">
    <h2>
      <a href="#">${item.title}</a>
    </h2>
    <figure>
      <img
        src="${item.imgSrc}"
        alt="${item.imgAlt}"
      />
    </figure>
    <p>
    ${item.description}
      <a href="#">Read More...</a>
    </p>
  </section></article>`;
}
function renderArticleList(list) {
  const articlesElement = document.querySelector(".articles");
  const htmlStrings = list.map(articleTemplate);

  articlesElement.innerHTML = htmlStrings.join("");
}

renderArticleList(articles);
