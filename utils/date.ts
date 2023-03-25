const formatDate = (dateParser: Intl.DateTimeFormat, date?: Date) => {
  const time = date ? new Date(date) : new Date();
  const formatted = dateParser.format(time);
  return formatted;
};

export const getDay = (type: boolean, date?: Date) => {
  const dateParser = new Intl.DateTimeFormat('en-US', {
    dateStyle: type ? 'medium' : 'long',
  });
  return formatDate(dateParser, date);
};
