import React, { useState } from 'react';
import { data } from './Data';

const Screen = () => {
    const[prev,cur]=useState('n1.jpg');
    const[id,setid]=useState(0);
    const imgselect=(img,id)=>{
        setid(id);
        cur(img);
    }
    return (
        <>
            <div>
                <div className='con' >
                    <img src={prev} alt="react" width={'50%'} height={'450px'} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', padding: '10px' }} />
                    <p style={{ color: 'white', marginLeft: '50%' }}>{id}</p>
                </div>
                <div className='side'>
                    <div style={{ backgroundColor: 'grey', display: 'flex', }}>
                        <p>File Selected:{id}</p>
                        <p>{id}/23 Files</p>
                        {/* <div className="dropdown" style={{ marginLeft: '70px' }}>
                            <button class="btn btn-primary dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">Do not Filter</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">Filter</a></li>
                            </ul>
                        </div>
                        <div className="dropdown" style={{ marginLeft: '50px' }}>
                            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdo
                                wn-item" href="/">Filter</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className='cardi' >
                    <div id='slider' className='cardj'>
                        {data.map((item,id) => (
                            <>
                                <img key={id} className='photo' src={item.img} alt="react" onClick={()=>imgselect(item.img,id)}/>

                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Screen;