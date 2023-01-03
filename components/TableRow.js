import React from 'react'

const styles={
    th:'pb-5 hover:opacity-50 cursor pointer'
}
export default function TableRow({song}) {
  return (
    <tbody>
        <tr key={song.index}>
        <th className={styles.th} >{song.index}</th>
            <th className={styles.th} >{song.title}</th>

            <th className={styles.th} >{song.plays}</th>
            <th className={styles.th} >{song.songLength}</th>

        </tr>
    </tbody>
  )
}
