import React, { useEffect, useState } from 'react';
import s from './HW11.module.css';
import s2 from '../../s1-main/App.module.css';
import { restoreState } from '../hw06/localStorage/localStorage';
import SuperRange from './common/c7-SuperRange/SuperRange';

/*
 * 1 - передать значения в оба слайдера
 * 2 - дописать типы и логику функции change
 * 3 - сделать стили в соответствии с дизайном
 * */

function HW11() {
  console.log('HW11 Render');
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0));
  const [value2, setValue2] = useState(
    restoreState<number>('hw11-value2', 100),
  );

  const [value, setValue] = useState<number[]>([value1, value2]); // Начальный диапазон для второго слайдера

  //Почему это работаеи без event (Тоесть от куда передаеться value?)
  const onChangeSingle = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue1(newValue);
    }
  };

  const onChangeRange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue1(newValue[0]);
      setValue2(newValue[1]);
      setValue(newValue); // Обновляем весь диапазон
    }
  };

  //Для синхранизации doubleSlider value1 с singleSlider value1,
  useEffect(() => {
    setValue([value1, value2]);
  }, [value1, value2]);

  // const onChangeMaxValueHandler = (_: Event, newValue: number | number[]) =>
  //   setMaxOptionsValue(newValue as number); // _ показывает что параметр намеренно не используется

  return (
    <div id={'hw11'}>
      <div className={s2.hwTitle}>Homework #11</div>x
      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={'hw11-single-slider'}
              onChange={onChangeSingle}
              value={value1}
              // сделать так чтоб value1 изменялось // пишет студент
            />
          </div>
          <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>
              {value1}
            </span>
            <SuperRange
              id={'hw11-double-slider'}
              onChange={onChangeRange}
              value={value}
              min={0}
              max={100}
              // сделать так чтоб value1/2 изменялось // пишет студент
            />
            <span id={'hw11-value-2'} className={s.number}>
              {value2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HW11;
