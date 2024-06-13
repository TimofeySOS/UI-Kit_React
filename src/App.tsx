import React, { useState } from 'react';
import Button from './components/Button/Button';
import SearchInput from './components/SearchInput/SearchInput';
import TextField from './components/TextField/TextField';
import ListElement from './components/ListElement/ListElement';
import SelectElement from './components/SelectElement/SelectElement';
import Tooltip from './components/Tooltip/Tooltip';
import Notification from './components/Notification/Notification';
import Switch from './components/Switch/Switch';
import Checkbox from './components/Checkbox/Checkbox';
import Pagination from './components/Pagination/Pagination';

const App: React.FC = () => {

	const [inputs, setInputs] = useState([
		{ id: 1, value: '', placeholder: 'Search' },
		{ id: 2, value: '', placeholder: '' },
		{ id: 3, value: 'Typing', placeholder: '' },
		{ id: 4, value: 'Some text', placeholder: '' },
	  ]);
	  const [textFieldValue, setTextFieldValue] = useState('');
	  const [options] = useState(['Option 1', 'Option 2 selected']);
	  const sel_options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
	  const [showNotification, setShowNotification] = useState(true);
	  const [isSwitchOn, setIsSwitchOn] = useState(false);
	  const [isSwitchOff, setIsSwitchOff] = useState(true);
	  const [checkedStates, setCheckedStates] = useState({
		checked1: false,
		checked2: true,
		checked3: false,
		checked4: true,
	  });
	  const [currentPage, setCurrentPage] = useState(1);
	  const totalPages = 22;

	  const handlePageChange = (page: number) => {
		setCurrentPage(page);
	  };

	  const handleCheckboxChange = (key: string, checked: boolean) => {
		setCheckedStates(prevStates => ({ ...prevStates, [key]: checked }));
	  };

	  const handleInputChange = (id: number, newValue: string) => {
		setInputs((prevInputs) =>
		  prevInputs.map((input) =>
			input.id === id ? { ...input, value: newValue } : input
		  )
		);
	  };
	  const handleClear = (id: number) => {
		setInputs((prevInputs) =>
		  prevInputs.map((input) =>
			input.id === id ? { ...input, value: '' } : input
		  )
		);
	  };
  return (
    <div>
      <div>
        <Button variant="primary" onClick={() => alert('Primary Button Clicked')}>
          Primary
        </Button>
        <Button variant="secondary" onClick={() => alert('Secondary Button Clicked')}>
          Secondary
        </Button>
      </div>
      <div>
        <Button variant="primary-hover" onClick={() => alert('Primary Hover Button Clicked')}>
          Primary Hover
        </Button>
        <Button variant="secondary-hover" onClick={() => alert('Secondary Hover Button Clicked')}>
          Secondary Hover
        </Button>
      </div>
      <div>
        <Button variant="primary-active" onClick={() => alert('Primary Active Button Clicked')}>
          Primary Active
        </Button>
        <Button variant="secondary-active" onClick={() => alert('Secondary Active Button Clicked')}>
          Secondary Active
        </Button>
      </div>
      <div>
        <Button variant="primary-disabled" disabled>
          Primary Disabled
        </Button>
        <Button variant="secondary-disabled" disabled>
          Secondary Disabled
        </Button>
      </div>

	  <div>
	  <div>
      {inputs.map((input) => (
        <div key={input.id}>
          <SearchInput
            value={input.value}
            placeholder={input.placeholder}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            onClear={() => handleClear(input.id)}
          />
        </div>
      ))}
    </div>
    </div>
	
	<div>
      <div>
        <TextField
          placeholder="Placeholder"
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
      </div>
      <div>
        <TextField
          value="Text"
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
      </div>
      <div>
        <TextField
          value="Disabled"
          disabled
        />
      </div>
    </div>
	<ListElement options={options}  defaultSelectedIndex={1}/>

	<div>
	<SelectElement options={options} placeholder="Placeholder" />
      <SelectElement options={options} placeholder="Select option" />
      <SelectElement options={options} placeholder="Text" />
      <SelectElement options={options} placeholder="Disabled" disabled />
	</div>

	<div>
      <Tooltip text="Some text with info" />
    </div>
	   <div>
      <Notification message="Changes saved" />
    </div>

	<div>
      <Switch isOn={isSwitchOn} onToggle={(checked) => setIsSwitchOn(checked)} />
	  <Switch isOn={isSwitchOff} onToggle={(checked) => setIsSwitchOff(checked)} />
    </div>

	<div>
        <Checkbox
          checked={checkedStates.checked1}
          disabled={false}
          onChange={(checked) => handleCheckboxChange('checked1', checked)}
        />
        <Checkbox
          checked={checkedStates.checked2}
          disabled={false}
          onChange={(checked) => handleCheckboxChange('checked2', checked)}
        />
        <Checkbox
          checked={checkedStates.checked3}
          disabled={true}
          onChange={(checked) => handleCheckboxChange('checked3', checked)}
        />
        <Checkbox
          checked={checkedStates.checked4}
          disabled={true}
          onChange={(checked) => handleCheckboxChange('checked4', checked)}
        />
      </div>

	  <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
