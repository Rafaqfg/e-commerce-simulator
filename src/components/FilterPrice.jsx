import React, { useContext } from 'react';
import MyContext from '../myContext/MyContext';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';


function FilterPrice () {
  const { range, setRange } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const num = Number(target.value);
    if (Number.isInteger(num) && num >= 0) {
      setRange({
        ...range,
        [target.name]: num,
      });
    } else {
        window.alert('only numbers are accepted');
      };
  };

    return (
      <div className="price-slider">
        <input
          name="min"
          type="text"
          onChange={ (e) => handleChange(e) }
          placeholder="min price"
        />
        <input
          name="max"
          type="text"
          onChange={ (e) => handleChange(e) }
          placeholder="max price"
        />
        <Box sx={{ width: 300 }}>
          <Slider
          aria-label="Small steps"
          defaultValue={0.00000005}
          getAriaValueText={() =>{}}
          step={0.00000001}
          marks
          min={0}
          max={0.0000001}
          valueLabelDisplay="auto"
          />
        </Box>
      </div>
    );
}

export default FilterPrice;