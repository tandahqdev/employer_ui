const formatDate = (dateParser: Intl.DateTimeFormat) => {
  const time = new Date();
  const formatted = dateParser.format(time);
  return formatted;
};

export const getDay = (type: boolean) => {
  const dateParser = new Intl.DateTimeFormat('en-US', {
    dateStyle: type ? 'medium' : 'long',
  });
  return formatDate(dateParser);
};
