// truncate('abcdefghi',2,2,8);
export function truncate(text, startChars, endChars, maxLength) {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + '.';
    }
    // return `${start}...${end}`;
    return start + end;
  }
  return text;
}
