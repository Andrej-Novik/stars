import Button from '../../atoms/Button';
import style from './style.module.scss'
import { useState } from 'react';

const Toggle = ({sortUp, sortDown , stars} ) => {
  const [state, setState] = useState()
  return (
    <div className={style.block}>
      <h2 className={style.title}>Каталог</h2>
      <div className={style.btns}>
        <span>Сортировать по:</span>
        <Button value={'возр'} color={state ? true : false} onClick={() => {sortUp(stars); setState(true)}} />
        <Button value={'убыв'} color={!state ? true : false} onClick={() => {sortDown(stars); setState(false)}} />
      </div>
    </div>
  );
};

export default Toggle;
