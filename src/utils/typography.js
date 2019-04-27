import React from 'react'


export const nl2br = str => {
  const newlineRegex = /(\r\n|\r|\n)/gu

  return str.split(newlineRegex).map((line, index) => {
    if (line.match(newlineRegex)) {
      // eslint-disable-next-line react/no-array-index-key
      return React.createElement('br', { key: index })
    }
    return line
  })
}
