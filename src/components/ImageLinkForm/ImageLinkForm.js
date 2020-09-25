import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange,onButtonSubmit})=> {
    return(
        <div>
                <p className='f3'>
                    {'This magic brain will detect your faces in a few seconds.Give it a try bud!'}
                </p>
            
            <div className='Center'>
                <div className=' form Center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center'type='tex' onChange={onInputChange}/>
                    <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-navy '
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
                
            </div>
        </div>
    );
}

export default ImageLinkForm;