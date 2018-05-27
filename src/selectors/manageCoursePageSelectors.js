export function getAuthorsFormatted(authors) {
  return authors.map(
    author => ({ value: author.id, text: author.firstName + ' ' + author.lastName })
  );
}