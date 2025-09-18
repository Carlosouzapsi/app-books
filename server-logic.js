const searchBooks = async (title) => {
  const getWork = await fetch(`https://openlibrary.org/search.json?q=${title}`);
  const workData = await getWork.json();
  const getEdition = await fetch(
    `https://openlibrary.org${workData.docs[0].key}/editions.json`
  );
  const editionData = await getEdition.json();
  const result = editionData.entries.find(
    (entry) => entry.number_of_pages && entry.covers
  );
  console.log({
    title: result.title,
    author: workData.docs[0].author_name,
    numberOfPages: result.number_of_pages,
    cover: `https://covers.openlibrary.org/b/id/${result.covers[0]}-L.jpg`,
  });
};

searchBooks(encodeURI("neuromancer"));
searchBooks(encodeURI("count zero"));
searchBooks(encodeURI("mona lisa overdrive"));
searchBooks(encodeURI("O Xangô de Baker Street"));
searchBooks(encodeURI("Dune Messiah"));
searchBooks(encodeURI("Dune"));
searchBooks(encodeURI("Drácula"));
