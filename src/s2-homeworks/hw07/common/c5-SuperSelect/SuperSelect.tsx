import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent, SetStateAction,
} from 'react'
import s from './SuperSelect.module.css'
import {Arr} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Arr[]
    onChangeOption?: (option: SetStateAction<number>) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange && onChange(e) ❓
        console.log('onChangeCallbakc')
        onChangeOption && onChangeOption(Number(e.currentTarget.value))
        console.log(e.currentTarget.value)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            onClick={()=>('onClick')}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
