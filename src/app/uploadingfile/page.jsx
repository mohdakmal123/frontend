    import React from 'react'
    
    const UploadingFile = () => {
      return (
        <div className='max-w-2xl mx-auto rounded-lg border-3 border-blue-300 flex justify-center p-8'>
            <label htmlFor="Uploadfile"
            className='texty-5xl font-bold text-blue-300'> ↑Uploading Your file</label>
            <input id='uploadfile' type="file" className='hidden'/>
            


        </div>
      )
    }
    
    export default UploadingFile;