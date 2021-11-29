import React from 'react'
import { useState } from 'react'
import Preview from '../../components/Preview/Preview'
import Editor from '../../components/Editor/Editor'

import './Home.css'

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('')
  const [font, setFont] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [align, setAlign] = useState('')
  const [text, setText] = useState('')

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subtitle={subtitle} font={font} text={text} align={align} />
      <Editor
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        align={align}
        setAlign={setAlign}
        font={font}
        setFont={setFont}
        text={text}
        setText={setText}
      />
    </main>
  )
}
