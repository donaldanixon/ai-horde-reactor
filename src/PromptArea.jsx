import React from 'react'
import './PromptArea.css'
import SimpleImagePrompt from './PromptSimpleImage'
import AdvancedImagePrompt from './PromptAdvancedImage'
import TextPrompt from './PromptText'

function PromptArea() {
    const [generationType, setGenerationType] = React.useState(sessionStorage.getItem('generationType') || 'Image - Simple')

    return (
      <>
        <div className="PromptAreaContainer">
          <div className="Tabs">
            <div className={generationType === 'Image - Simple' ? 'TabSelected' : 'Tab'} onClick={() => setGenerationType('Image - Simple')}>Image - Simple</div>
            <div className={generationType === 'Image - Expert' ? 'TabSelected' : 'Tab'} onClick={() => setGenerationType('Image - Advanced')}>Image - Expert</div>
            <div className={generationType === 'Text - Simple' ? 'TabSelected' : 'Tab'} onClick={() => setGenerationType('Text - Simple')}>Text - Simple</div>
            <div className={generationType === 'Text - Expert' ? 'TabSelected' : 'Tab'} onClick={() => setGenerationType('Text - Expert')}>Text - Expert</div>
          </div>
          <div className="PromptArea">
            {generationType === 'Image - Simple' ? <SimpleImagePrompt />
             : generationType === 'Image - Advanced' ? <AdvancedImagePrompt /> 
             : <TextPrompt />}
          </div>
        </div>
      </>
    )
  }
  
  export default PromptArea