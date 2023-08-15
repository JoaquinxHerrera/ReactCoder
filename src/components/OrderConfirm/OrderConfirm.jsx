import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../firebase';
import { Link } from 'react-router-dom';
import "./OrderConfirmStyle.css"

function OrderConfirm() {
    const [orderData, setOrderData] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        getOrder(id).then((order)=>{
            setOrderData(order);
        });
    }, []);

  return (
    <div className='orderConfirm'>
        <div className='d-flex'>
            <h1 className='ms-5'>Thanks for your order!</h1>
            <svg className='confeti' viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="41" y="47" width="2.42" height="1" transform="rotate(4 41 47)" fill="#4BC8EF" fill-opacity="0.35"/>
                <rect x="44" y="20" width="1.42" height="1" transform="rotate(148 44 20)" fill="#F54721" fill-opacity="0.45"/>
                <rect x="54" y="4" width="2.42" height="1" transform="rotate(20 54 4)" fill="#FC9E1C" fill-opacity="0.65"/>
                <rect x="15" y="42" width="1" height="1.47" transform="rotate(162 15 42)" fill="#03A3F5" fill-opacity="0.9"/>
                <rect x="8" y="24" width="1.42" height="1.47" transform="rotate(175 8 24)" fill="#9DED1A" fill-opacity="0.6"/>
                <rect x="43" y="41" width="1" height="1" transform="rotate(-22 43 41)" fill="#BA3E03" fill-opacity="0.85"/>
                <rect x="37" y="47" width="2.42" height="1" transform="rotate(-62 37 47)" fill="#F62584" fill-opacity="0.75"/>
                <rect x="45" y="47" width="1.42" height="1" transform="rotate(-70 45 47)" fill="#03A3F5" fill-opacity="0.45"/>
                <circle cx="20.65" cy="5.65" r="0.65" fill="#4BC8EF" fill-opacity="0.75"/>
                <circle cx="23.5" cy="41.5" r="0.5" fill="#FC9E1C" fill-opacity="0.75"/>
                <circle cx="51.65" cy="3.65" r="0.65" fill="#FC9E1C" fill-opacity="0.9"/>
                <circle cx="51.65" cy="23.65" r="0.65" fill="#C9FCBE"/>
                <circle cx="53.5" cy="4.5" r="0.5" fill="#03A3F5" fill-opacity="0.65"/>
                <circle cx="18.5" cy="17.5" r="0.5" fill="#C9FCBE" fill-opacity="0.85"/>
                <circle cx="46.5" cy="28.5" r="0.5" fill="#4BC8EF" fill-opacity="0.6"/>
                <circle cx="0.65" cy="37.65" r="0.65" fill="#F54721" fill-opacity="0.45"/>
                <path d="M3.5003 3.01745L2.98316 2.5352L3.46541 2.01806L3.98255 2.5003L3.5003 3.01745Z" fill="#BA3E03" fill-opacity="0.9"/>
                <path d="M23.4045 24.7061L23.9923 24.7061L24.1739 25.2651L23.6984 25.6106L23.2229 25.2651L23.4045 24.7061Z" fill="#480CA7" fill-opacity="0.6"/>
                <path d="M40.3346 14.6284L40.9095 14.5062L41.2034 15.0153L40.8101 15.4521L40.2731 15.213L40.3346 14.6284Z" fill="#F62584" fill-opacity="0.9"/>
                <path d="M29.7887 2.45315L28.926 2.52863L29.292 1.74375L29.7887 2.45315Z" fill="#F54721" fill-opacity="0.65"/>
                <path d="M5.15265 1.2147L6.0906 0.582044L6.72325 1.51999L5.7853 2.15265L5.15265 1.2147Z" fill="#9DED1A"/>
                <path d="M54.4589 10.3447L55.3481 10.0385L55.9141 10.7896L55.3746 11.56L54.4753 11.285L54.4589 10.3447Z" fill="#755FFE" fill-opacity="0.35"/>
                <path d="M53.735 42.576L53.776 41.9896L54.3464 41.8474L54.6578 42.3459L54.28 42.7962L53.735 42.576Z" fill="#F62584" fill-opacity="0.45"/>
                <path d="M59.281 4.3507L58.4829 4.29489L58.1322 3.57586L58.5796 2.91263L59.3776 2.96843L59.7283 3.68747L59.281 4.3507Z" fill="#C9FCBE" fill-opacity="0.65"/>
                <path d="M39.9304 18.4951L39.5502 18.5781L39.3657 18.9207L39.2828 18.5405L38.9401 18.356L39.3203 18.273L39.5049 17.9304L39.5878 18.3106L39.9304 18.4951Z" fill="#FFED36"/>
                <path d="M44.8337 39.2175L45.3256 38.9567L45.0809 38.4566L45.5527 38.7523L45.8634 38.2903L45.8433 38.8467L46.3987 38.8848L45.9068 39.1456L46.1515 39.6457L45.6797 39.35L45.369 39.812L45.3891 39.2556L44.8337 39.2175Z" fill="#4BC8EF" fill-opacity="0.85"/>
                <path d="M18.328 6.37735L18.1409 6.68874L18.3793 6.9629L18.0253 6.88119L17.8382 7.19257L17.8065 6.83068L17.4526 6.74896L17.787 6.60702L17.7553 6.24513L17.9936 6.5193L18.328 6.37735Z" fill="#755FFE" fill-opacity="0.6"/>
                <path d="M44.2192 34.5506L44.5789 34.6012L44.7382 34.2747L44.8013 34.6324L45.161 34.683L44.8402 34.8535L44.9033 35.2113L44.642 34.9589L44.3213 35.1295L44.4805 34.803L44.2192 34.5506Z" fill="#755FFE" fill-opacity="0.35"/>
                <path d="M54.2175 9.16633L53.9567 8.67443L53.4566 8.91912L53.7523 8.44734L53.2903 8.1366L53.8467 8.15673L53.8848 7.60129L54.1456 8.09319L54.6457 7.84851L54.35 8.32028L54.812 8.63102L54.2556 8.6109L54.2175 9.16633Z" fill="#FF21FB" fill-opacity="0.9"/>
                <path d="M14.7132 23.4096L14.3843 23.2959L14.2601 23.6209L14.1941 23.2792L13.8505 23.3341L14.1134 23.1061L13.8941 22.836L14.2229 22.9497L14.3472 22.6247L14.4132 22.9663L14.7568 22.9115L14.4939 23.1394L14.7132 23.4096Z" fill="#FFED36"/>
                <path d="M44.5364 35.8127L44.5479 35.4237L44.2601 35.1618L44.6491 35.1733L44.911 34.8855L44.8995 35.2745L45.1873 35.5364L44.7983 35.5249L44.5364 35.8127Z" fill="#C9FCBE" fill-opacity="0.9"/>
                <path d="M44.6343 5.659L44.7878 5.32977L44.5222 5.08201L44.8827 5.12629L45.0363 4.79705L45.1056 5.15365L45.4661 5.19792L45.1484 5.37404L45.2177 5.73063L44.952 5.48288L44.6343 5.659Z" fill="#BA3E03" fill-opacity="0.75"/>
            </svg>
        </div>
        

        {orderData !== null ? (
            <div>
                <p className='orderConfirmData'>
                    <b>Your products:</b>
                    {orderData.items.map((item) => {
                        return(
                            <small>
                                {item.title} - {item.quantity} units
                            </small>
                        );
                    })}
                </p>               
                <><Link className="goCartButton"to="/">Back to homepage</Link></>
            </div>  
        ) : (
            <p>Loading...</p>
        )} 
    </div>
  );
}

export default OrderConfirm;