opiumApp
  .filter(
    'formatExifDate',
    () => {
        return (date, format) => {
            return moment(date, 'YYYY:MM:DD HH:mm:ss').format(format);
        }
    }
  )
;
