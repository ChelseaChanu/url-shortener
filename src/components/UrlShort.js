import React,{useState} from 'react'
import createShortUrl from './Api';

export default function UrlShort({addUrlData}) {
  const [inputUrl, setInputUrl] = useState('');
  const [alert, setAlert] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (event)=>{
    setInputUrl(event.target.value);
    setAlert('');
  }

  const handleShortenClick = ()=>{
    if(inputUrl){
      createShortUrl(inputUrl)
      .then((shortenLink)=>{
        addUrlData(inputUrl,shortenLink);
        setInputUrl('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setIsEmpty(false);
    }
    else{
      setAlert("Please add a link");
      setIsEmpty(true);
    }
  }

  return (
    <section className="url-shortener">
      <div className="inputCont">
        <input type='url'
        value={inputUrl}
        id='urlInput' 
        className={isEmpty? 'error-input' : ''}
        placeholder='Shorten a link here...'
        onChange={handleInputChange}></input>
        <p className={`alert ${inputUrl? '' : 'show-alert'}`}>{alert}</p>
      </div>
      <button className="shorten-btn btn" onClick={handleShortenClick}>Shorten It!</button>
    </section>
  )
}
