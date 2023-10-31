import {useState} from 'react';
import Input from '../input/Input';
import style from './subscribe.module.css';
import Button from '../button/Button';
export default function Subsribe() {
    const [inputEmail, setInputEmail] = useState('');
    // Save Data When Needed
    // const [saveData, setSaveData] = useState(null);
    const inputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = event.target;
        setInputEmail(value);
    }

    return (
        <div className={style.row}>
            <Input type="text" placeholder="Enter your email here ...." value={inputEmail} onChange={inputChange} />
            <Button type="submit" children='Subscribe' className={style.btn}/>
        </div>
    )
}
