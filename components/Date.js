import { parseISO, format } from 'date-fns';

export function Date ({dateString}) {
  return (
    dateString ?
      <time dateTime={dateString}>
        {format(parseISO(dateString), 'LLLL d, yyyy')}
      </time>
      : <span>&mdash;</span>
  )
}