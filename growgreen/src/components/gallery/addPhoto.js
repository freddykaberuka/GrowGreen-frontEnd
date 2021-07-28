import React from 'react'
import './gallery.css';
function AddPhoto() {
    return (
        <div>
            <p>Upload New Media</p>
            <div class="area">
    <div id="dropZone">Drop files here</div>
</div>
            <div>
                <div class="file-upload-wrapper">
  <input type="file" id="input-file-max-fs" class="file-upload" data-max-file-size="2M" />
</div>
            </div>
           
        </div>
    )

}

export default AddPhoto
