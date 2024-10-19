import React from 'react'
import './PromptArea.css'
import ImagePrompt from './PromptImage'
import TextPrompt from './PromptText'

function PromptArea() {
    const [generationType, setGenerationType] = React.useState(sessionStorage.getItem('generationType') || 'Image')

    return (
      <>
        <div className="PromptAreaContainer">
          <div className="Tabs">
            <div className={generationType === 'Image' ? 'TabSelected' : 'Tab'} onClick={() => setGenerationType('Image')}>Image</div>
            <div className={generationType === 'Text' ? 'TabSelected' : 'Tab'} onClick={() => setGenerationType('Text')}>Text</div>
          </div>
          <div className="PromptArea">
            {generationType === 'Image' ? <ImagePrompt />
             : <TextPrompt />}
          </div>
        </div>
      </>
    )
  }
  
  export default PromptArea