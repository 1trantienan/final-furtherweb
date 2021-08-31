import React from 'react'
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';

export default function CountrySelector({value, handleOnchange, countries}) {
    return (
        <FormControl>

            <InputLabel htmlFor ="country-selector" shrink>Select Country</InputLabel>

            <NativeSelect
                value = {value}
                onChange = {handleOnchange}
                inputProps = {{
                    name: 'country',
                    id: 'country-selector',

                }}>
                {
                    countries.map((country) =>{
                        return <option value ={country.ISO2.toLowerCase}>
                            {country.Country}</option>
                    })
                }
                </NativeSelect>

        <FormHelperText>Please Select A Country</FormHelperText>
        
        </FormControl>
    )
}
