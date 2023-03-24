import { useRef, useState, useEffect} from 'react';
import './App.css';
import { uploadFile } from './services/api';
function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  useEffect(()=>{
     const getImage = async ()=>{
        if(file){
          const data = new FormData();
          data.append('name', file.name);
          data.append('file', file)
          let response = await uploadFile(data);
          setResult(response.path);
        }
     }

     getImage();
  }, [file])
  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }

  return (
    <div className="container">
      {/* <div><img src={logo} alt="banner"/></div> */}
      <div className='wrapper'>
        <h1>OneClickShare</h1>
        <p>Upload and Share the download link</p>
        <button onClick={onUploadClick}>upload</button>
        <input 
           type="file" 
           ref={fileInputRef} 
           onChange={(e)=>{setFile(e.target.files[0])}}
           style={{display:'none'}}/>
          
           <a href={result}>{result}</a>
      </div>
    </div>
  );
}

export default App;
