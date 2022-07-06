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
    } else if (range.min === 0 === range.max) {
      setRange({
        min: 0,
        max: 10000,
      })
    } else {
        window.alert('only numbers are accepted');
      };
  };

  const sliderHandle = () => {
    const gap = range.max - range.min;
    return gap;
  }

    return (
      <div className="price-slider">
        <Box sx={{ width: 300 }} className="box" >
          <Slider
          aria-label="Small steps"
          defaultValue={range.max}
          onChange={sliderHandle}
          getAriaValueText={sliderHandle}
          step={1}
          min={0}
          max={3000}
          valueLabelDisplay="auto"
          />
        </Box>
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
      </div>
    );
}

export default FilterPrice;