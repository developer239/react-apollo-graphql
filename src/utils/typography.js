import React from 'react'


export const nl2br = str => {
  const newlineRegex = /(\r\n|\r|\n)/g

  return str.split(newlineRegex).map(function (line, index) {
    if (line.match(newlineRegex)) {
      // eslint-disable-next-line react/no-array-index-key
      return React.createElement('br', { key: index })
    }
    return line
  })
}
