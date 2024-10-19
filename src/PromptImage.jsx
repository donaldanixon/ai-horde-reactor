import React from 'react'
import './PromptArea.css'
import { CaretRightRegular, CaretDownRegular } from '@fluentui/react-icons'


function ImagePrompt() {
    const [simplicity, setSimplicity] = React.useState(sessionStorage.getItem('simplicity') || 'Simple')
    const [prompt, setPrompt] = React.useState('')
    const [imageCount, setImageCount] = React.useState(1)
  
    return (
      <>
        <div className="PromptAreaCard">
          <div className="PromptAreaItem">
            <div className="PromptAreaItemTitle">Prompt</div>
            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="PromptAreaTextInput" />
          </div>
          <div className="PromptAreaItem">
            <div className="PromptAreaItemTitle">Number of Images</div>
            <select value={imageCount} onChange={e => setImageCount(e.target.value)} className="PromptAreaSelectInput">
              {[...Array(20).keys()].map(i => <option key={i+1} value={i+1}>{i+1}</option>)}
            </select>
          </div>
          <div className="PromptAreaAdvanced">
            <div className="PromptAreaAdvancedToggle" onClick={() => setSimplicity(simplicity === 'Simple' ? 'Advanced' : 'Simple')}>
              {simplicity === 'Advanced' ? <CaretDownRegular /> : <CaretRightRegular />}
            </div>
              <div>Advanced</div>
          </div>
          {simplicity === 'Advanced' ?
            <div className="PromptAreaItem">
              <div className="PromptAreaItemTitle">Prompt</div>
              <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="PromptAreaTextInput" />
            </div>
            : null
          }
        </div>
      </>
    )
  }
  
  export default ImagePrompt