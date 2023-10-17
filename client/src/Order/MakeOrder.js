import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import Balance, { calculateBalance } from './Blance';
import PayPalButtonComponent from './PayPalButtonComponenet';
import MetaPayment from '../Metamask/MetaPaymetnt';
import './Order.css'
import StripeContainer from '../Payment/StripeContainer';


const OrderForm = () => {
  const [pieces, setPieces] = useState('');
  const [waterLevel, setWaterLevel] = useState('');
  const [chemicalsLevel01, setChemicalsLevel01] = useState('');
  const [chemicalsLevel02, setChemicalsLevel02] = useState('');
  const [fabric, setFabric] = useState('');
  const [pressureLevel, setPressureLevel] = useState('');
  const [reservationDate, setReservationDate] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [missingInputs, setMissingInputs] = useState([]);
  const [ordersPerDay, setOrdersPerDay] = useState({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const handleWaterLevelChange = (selectedWaterLevel) => {
    setWaterLevel(selectedWaterLevel);

    // If Water Level is Low, disable the Pressure Level "3000 PSI" option
    if (selectedWaterLevel === 'Low') {
      setPressureLevel(''); // Clear pressure level selection
    }
  };

  const handleChemicalsLevel01Change = (selectedChemical) => {
    setChemicalsLevel01(selectedChemical);

    // Check if selected chemical is 'Oxalic Acid'
    if (selectedChemical === 'Oxalic Acid ') {
      // Clear the selected chemical in Chemical Level II
      setChemicalsLevel02('');
    }
  };

  const handlePayPalSuccess = (details) => {
    console.log('PayPal payment success:', details);
    setPaymentSuccess(true);
    setSubmitButtonDisabled(false);
  };

  const handlePayPalError = (error) => {
    console.error('PayPal payment error:', error);
  };

  function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
  }

  const sriLankanPublicHolidays = [
    // Add your list of public holidays here
    // For example: new Date(2023, 0, 15), // January 15, 2023
    //             new Date(2023, 3, 14), // April 14, 2023
    //             ...
  ];

  const excludedDates = useMemo(() => {
    const weekends = [];
    const holidays = sriLankanPublicHolidays.map(date => new Date(date));
  
    const currentDate = new Date();
    const endDate = new Date(currentDate.getFullYear() + 1, 11, 31); // Up to next year's end
  
    const disabledDates = Object.keys(ordersPerDay).filter(date => ordersPerDay[date] >= 3);
  
    for (let date = currentDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      if (isWeekend(date) || holidays.some(holiday => date.toDateString() === holiday.toDateString()) || disabledDates.includes(formattedDate)) {
        weekends.push(new Date(date));
      }
    }
  
    return weekends;
  }, [ordersPerDay]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/orders'); // Update the URL accordingly
        const orders = response.data;
    
        // Initialize an object to hold the order count per date
        const orderCounts = {};
    
        // Iterate through the fetched orders and count orders per date
        orders.forEach(order => {
          const formattedDate = format(order.reservationDate, 'yyyy-MM-dd');
          if (orderCounts[formattedDate]) {
            orderCounts[formattedDate]++;
          } else {
            orderCounts[formattedDate] = 1;
          }
        });
    
        // Update the ordersPerDay state with the order count data
        setOrdersPerDay(orderCounts);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };
  }, [])

  

  

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const missing = [];
    if (!waterLevel) missing.push('Water Level');
    if (!chemicalsLevel01) missing.push('chemicalsLevel01');
    if (!chemicalsLevel02) missing.push('chemicalsLevel02');
    if (!pressureLevel) missing.push('pressureLevel');
    if (!fabric) missing.push('fabric');
    if (!reservationDate) missing.push('reservationDate');
    if (!pieces) missing.push('pieces');


    if (missing.length > 0) {
      setMissingInputs(missing);
      return;
    }

    
    try {

      const formattedDate = format(reservationDate, 'yyyy-MM-dd');
      console.log(formattedDate)
      if (ordersPerDay[formattedDate] >= 3) {
        setErrorMessage('Maximum orders reached for this date');
        return;
      }

      const userId = localStorage.getItem('userId');

      console.log(userId)
  
      await axios.post('http://localhost:9000/order', {
        waterLevel,
        chemicalsLevel01,
        chemicalsLevel02,
        fabric,
        pressureLevel,
        reservationDate,
        pieces,
        userId: userId
      });

      setWaterLevel('');
      setChemicalsLevel01('');
      setChemicalsLevel02('');
      setFabric('');
      setPressureLevel('');
      setPieces('');
      setReservationDate(null);
      setSubmissionStatus('success');

    
    setOrdersPerDay(prevOrders => ({
      ...prevOrders,
      [formattedDate]: (prevOrders[formattedDate] || 0) + 1
    }));
    window.location.reload();
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmissionStatus('error');
      setErrorMessage('An error occurred while submitting the order.');
    }
  };

   const balanceNew = calculateBalance(waterLevel, chemicalsLevel01, chemicalsLevel02, pressureLevel, pieces);
   const clientId = 'AZtDXHO86G3L4UosECS9R-X0JMwlR7B0cgyhR0yhr93jI2jr4YmdGfcrq2DiYGgt_2aMkWtI1axg2fDp';

  return (
    <FormContainer>
      <h1>Ready to get started? Place your new order here!</h1>
      <Form onSubmit={handleFormSubmit}>
        <div className='card-03'>
        <h1>01. Choose Pieces</h1>
          <RadioContainer>
          <div > 
      <input
      id='control_01'
      className='radio'
        type="radio"
        value="between 1000 - 5000"
        checked={pieces === 'between 1000 - 5000'}
        onChange={() => setPieces('between 1000 - 5000')}
      />
      <label className='label-o' for='control_01'>
        <h2>between 1000 - 5000</h2>
        <p>Select this option for a moderate-sized laundry load, perfect for businesses or individuals with a substantial cleaning need. It offers an efficient and cost-effective solution for fresh and ready-to-use items.</p>
      </label>
      
    </div>
    <div>
      <input
      id='control_02'
        type="radio"
        value="between 5000 - 10000"
        checked={pieces === 'between 5000 - 10000'}
        onChange={() => setPieces('between 5000 - 10000')}
      />
       <label className='label-o' for='control_02'>
        <h2>between 5000 - 10000</h2>
        <p>This choice suits larger laundry loads, ideal for businesses or individuals with extensive cleaning requirements. It offers efficient, cost-effective cleaning, ensuring your items are fresh and ready for use.</p>
      </label>
    </div>
    <div>
      <input
        id='control_03'
        type="radio"
        value="between 10000 - 15000"
        checked={pieces === 'between 10000 - 15000'}
        onChange={() => setPieces('between 10000 - 15000')}
      />
      <label className='label-o' for='control_03'>
        <h2>between 10000 - 15000</h2>
        <p>Select this option for substantial laundry loads, catering to businesses and individuals with extensive cleaning needs. It provides efficient and cost-effective cleaning, ensuring your items are fresh and ready for use in larger quantities.</p>
      </label>
    </div>

    <div>
      <input
      id='control_04'
        type="radio"
        value="between 15000 - 20000"
        checked={pieces === 'between 15000 - 20000'}
        onChange={() => setPieces('between 15000 - 20000')}
      />
      <label className='label-o' for='control_04'>
        <h2>Between 15000 - 20000</h2>
        <p>This choice is designed for extensive laundry needs, perfect for businesses and individuals with substantial cleaning requirements. It offers efficient, cost-effective cleaning, ensuring your large quantity of items is fresh and ready for use.</p>
      </label>
    </div>
          </RadioContainer>
        </div>
        <div className='card-03'>
          <h1>02. Choose Water Level</h1>
          <RadioContainer>
        <div>
          <input
          id='control_06'
            type="radio"
            value="Low"
            checked={waterLevel === 'Low'}
            onChange={() => handleWaterLevelChange('Low')} // Call the new handler
          />
          <label className='label-o' for='control_06'>
            <h2>Low</h2>
            <p>Choosing "Low" water level indicates a conservation-oriented approach, using minimal water for the washing process. This option is suitable for smaller loads, focusing on eco-friendly and efficient cleaning. It's a great choice to save water while ensuring your items still receive a thorough wash.</p>
          </label>
        </div>
        <div>
          <input
            id='control_07'
            type="radio"
            value="Medium"
            checked={waterLevel === 'Medium'}
            onChange={() => setWaterLevel('Medium')}
          />
          <label className='label-o' for='control_07'>
            <h2>Medium</h2>
            <p>Selecting "Medium" water level provides a balanced approach to washing. It's suitable for moderate-sized loads, ensuring effective cleaning without excessive water usage. This option strikes a good compromise between efficiency and resource conservation, delivering clean and refreshed items.</p>
          </label>
        </div>
        <div>
          <input
          id='control_05'
            type="radio"
            value="High"
            checked={waterLevel === 'High'}
            onChange={() => setWaterLevel('High')}
          />
          <label className='label-o'for='control_05'>
            <h2>High</h2>
            <p>Opting for "High" water level signifies a thorough and robust washing process. This choice is ideal for larger loads and heavily soiled items, ensuring an ample supply of water for a deep and effective clean. It guarantees that even the toughest stains are tackled, leaving your items exceptionally clean and fresh.</p>
          </label>
        </div>
      </RadioContainer>
         
        </div>


        <div className='card-03'>
          <h1>03. Choose Chemical Level I:</h1>
          <RadioContainer>
            <div>
              <input
              id='control_08'
                type="radio"
                value="Sodium Hypochlorite 12.5%"
                checked={chemicalsLevel01 === 'Sodium Hypochlorite 12.5%'}
                onChange={() => setChemicalsLevel01('Sodium Hypochlorite 12.5%')}
              />
              <label className='label-o'for='control_08'>
            <h2>Sodium Hypochlorite 12.5%</h2>
            <p>This option offers a robust cleaning solution, particularly effective against stubborn stains and ensuring comprehensive disinfection for your items, making them exceptionally clean and hygienic.</p>
          </label>
            </div>

            <div>
              <input
              id='control_09'
                type="radio"
                value="Hydrochloric Acid"
                checked={chemicalsLevel01 === 'Hydrochloric Acid'}
                onChange={() => setChemicalsLevel01('Hydrochloric Acid')}
              />
              <label className='label-o'for='control_09'>
            <h2>Hydrochloric Acid</h2>
            <p>This selection offers a powerful solution tailored for addressing stubborn stains, mineral deposits, and rust issues. When used appropriately and with caution on compatible materials, it ensures effective and thorough cleaning, leaving your items spotless and free from hard-to-remove contaminants.</p>
          </label>
            </div>

            <div>
            <input
            id='control_10'
              type="radio"
              value="Oxalic Acid "
              checked={chemicalsLevel01 === 'Oxalic Acid'}
              onChange={() => handleChemicalsLevel01Change('Oxalic Acid')}
            />
            <label className='label-o'for='control_10'>
            <h2>Oxalic Acid</h2>
            <p>Choosing "Oxalic Acid" as your chemical level provides an effective solution for removing rust stains, ink marks, and other specific types of discolorations. It's particularly useful for revitalizing the appearance of certain fabrics and materials.</p>
          </label>
          </div>

            
           
          </RadioContainer>
        </div>


        <div className='card-03'>
          
          <h1>04. Choose Chemical Level II(Cleaners/Degreasers):</h1>
          <RadioContainer>
            <div>
              <input
              id='control_11'
                type="radio"
                value="Sodium Hypochlorite 12.5%"
                checked={chemicalsLevel02 === 'Sodium Hypochlorite 12.5%'}
                onChange={() => setChemicalsLevel02('Sodium Hypochlorite 12.5%')}
              />
               <label className='label-o' for='control_11'>
            <h2>Sodium Hypochlorite 12.5%</h2>
            <p>This selection offers a potent cleaning solution, highly effective for tackling tough stains and ensuring thorough disinfection. It's widely used for various cleaning needs, providing exceptional results in terms of cleanliness and hygiene.</p>
          </label>
            </div>

            <div>
            <input
            id='control_12'
              type="radio"
              value="Super Red II Modified"
              checked={chemicalsLevel02 === 'Super Red II Modified'}
              onChange={() => setChemicalsLevel02('Super Red II Modified')}
              disabled={chemicalsLevel01 === 'Oxalic Acid '}
            />
                 <label className='label-o' for='control_12'>
            <h2>Super Red II Modified</h2>
            <p>"Super Red II Modified" is a specialized and enhanced cleaning solution designed for specific cleaning requirements. It is highly effective in removing tough stains, grease, and grime. This option is ideal for situations where standard cleaning agents may not suffice, ensuring a thorough and spotless result.</p>
          </label>
          </div>

          <div>
            <input
            id='control_13'
              type="radio"
              value="Super Red II Degreaser"
              checked={chemicalsLevel02 === 'Super Red II Degreaser'}
              onChange={() => setChemicalsLevel02('Super Red II Degreaser')}
              disabled={chemicalsLevel01 === 'Oxalic Acid '}
            />
                   <label className='label-o' for='control_13'>
            <h2>Super Red II Degreaser</h2>
            <p>"Super Red II Degreaser" is a powerful cleaning solution tailored for tackling grease and oil-related stains and build-up. It excels at cutting through stubborn residues, making it an ideal choice for heavy-duty cleaning tasks in commercial and industrial settings.</p>
          </label>
          </div>

            <div>
              <input
              id='control_14'
                type="radio"
                value="Green Cat 5000"
                checked={chemicalsLevel02 === 'Green Cat 5000'}
                onChange={() => setChemicalsLevel02('Green Cat 5000')}
              />
                     <label className='label-o' for='control_14'>
            <h2>Green Cat 5000</h2>
            <p>"Green Cat 5000" represents an environmentally friendly cleaning solution. It is effective in removing stains and dirt while prioritizing eco-conscious cleaning practices. This choice is ideal for those who seek a balance between cleaning performance and sustainability.</p>
          </label> 
            </div>

            <div>
              <input
              id='control_15'
                type="radio"
                value="DeScale7 Liquid Descaler"
                checked={chemicalsLevel02 === 'DeScale7 Liquid Descaler'}
                onChange={() => setChemicalsLevel02('DeScale7 Liquid Descaler')}
              />
          <label className='label-o' for='control_15'>
            <h2>DeScale7 Liquid Descaler</h2>
            <p>"DeScale7 Liquid Descaler" is a specialized cleaning solution designed for removing mineral deposits and limescale buildup from various surfaces, such as appliances and plumbing fixtures. It is highly effective in restoring the efficiency of equipment and ensuring they function optimally.</p>
          </label> 
            </div>

                    
           
          </RadioContainer>
        </div>


        <div className='card-03'>
        <h1>05. Choose Fabric Type</h1>
          <RadioContainer>
            <div>
              <input
              id='control_16'
                type="radio"
                value="Chiffon"
                checked={fabric === 'Chiffon'}
                onChange={() => setFabric('Chiffon')}
              />
              <label className='label-o'for='control_16'>
            <h2>Chiffon</h2>
            <p>Selecting "Chiffon" as your fabric type indicates that you have delicate and lightweight items to be cleaned. Chiffon is a sheer and elegant fabric often used in clothing and accessories. </p>
          </label>
            </div>

            <div>
              <input
              id='control_17'
                type="radio"
                value="Cotton"
                checked={fabric === 'Cotton'}
                onChange={() => setFabric('Cotton')}
                disabled={waterLevel === 'High'}
                
              />
              <label className='label-o'for='control_17'>
            <h2>Cotton</h2>
            <p>Our cleaning process for cotton ensures effective stain removal and thorough cleaning, making sure your cotton garments and materials maintain their softness and comfort after each wash. </p>
          </label>
            </div>

            

            <div>
              <input
              id='control_18'
                type="radio"
                value="Denim"
                checked={fabric === 'Denim'}
                onChange={() => setFabric('Denim')}
              />
                  <label className='label-o'for='control_18'>
            <h2>Denim</h2>
            <p>Our cleaning process for denim ensures effective stain removal and revitalizes the fabric's appearance while preserving its robust texture and color. Your denim items will come out looking fresh and ready to wear. </p>
          </label>
            </div>

            <div>
              <input
              id='control_19'
                type="radio"
                value="Lace"
                checked={fabric === 'Lace'}
                onChange={() => setFabric('Lace')}
                disabled={chemicalsLevel01 === 'Sodium Hypochlorite 12.5%'}
              />
                      <label className='label-o'for='control_19'>
            <h2>Lace</h2>
            <p>Our cleaning process for lace is designed to handle these fragile textiles with utmost care, ensuring gentle stain removal and preserving the intricate patterns and details. Your lace items will be returned to you in their original, elegant condition.</p>
          </label>
            </div>

            
            <div>
              <input
              id='control_20'
                type="radio"
                value="Linen"
                checked={fabric === 'Linen'}
                onChange={() => setFabric('Linen')}
                disabled={chemicalsLevel01 === 'Sodium Hypochlorite 12.5%'}
              />

        <label className='label-o'for='control_20'>
            <h2>Linen</h2>
            <p>Our cleaning process for linen focuses on effective stain removal while maintaining the fabric's natural texture and breathability. Your linen items will be refreshed and ready for use, with their inherent qualities preserved.</p>
          </label>
            </div>

            <div>
              <input
              id='control_21'
                type="radio"
                value="Satin"
                checked={fabric === 'Satin'}
                onChange={() => setFabric('Satin')}
                disabled={chemicalsLevel01 === 'Sodium Hypochlorite 12.5%'}
              />
              <label className='label-o' for='control_21'>
            <h2>Satin</h2>
            <p>Our cleaning process for satin ensures meticulous care, gently removing any stains or impurities while preserving the fabric's exquisite sheen and texture. Your satin items will be returned to you in impeccable, glamorous condition.</p>
          </label> 
            </div>

            <div>
              <input
              id='control_22'
                type="radio"
                value="Silk"
                checked={fabric === 'Silk'}
                onChange={() => setFabric('Silk')}
                disabled={chemicalsLevel01 === 'Sodium Hypochlorite 12.5%'}
              />
                  <label className='label-o' for='control_22'>
            <h2>Silk</h2>
            <p>Our cleaning process for silk emphasizes gentle handling and stain removal while safeguarding the fabric's natural shine and drape. Your silk items will be returned to you in pristine condition, maintaining their elegance and quality.</p>
          </label>
            </div>
          </RadioContainer>
        </div>


        <div className='card-03'>
          <h1>06. Choose Pressure Level</h1>
          <RadioContainer>
          <div>
            <input
            id='control_23'
              type="radio"
              value="2500 PSI"
              checked={pressureLevel === '2500 PSI'}
              onChange={() => setPressureLevel('2500 PSI')}
            />
                    <label className='label-o' for='control_23'>
            <h2>2500 PSI</h2>
            <p>This level is effective for removing dirt, grime, and mild stains from surfaces such as driveways, decks, and vehicles. It strikes a balance between power and precision, making it a versatile choice for both residential and light commercial cleaning needs.</p>
          </label>
          </div>

          <div>
            <input
            id='control_24'
              type="radio"
              value="3000 PSI"
              checked={pressureLevel === '3000 PSI'}
              onChange={() => setPressureLevel('3000 PSI')}
              disabled={waterLevel === 'Low'} // Disable if water level is Low
            />
                <label className='label-o' for='control_24'>
            <h2>3000 PSI</h2>
            <p>Opting for "3000 PSI" as your pressure level signifies a high-pressure setting, ideal for tackling tough and stubborn stains, as well as more demanding cleaning tasks. This level of pressure is well-suited for heavy-duty cleaning in commercial and industrial settings.</p>
          </label>
          </div>

          <div>
            <input
            id='control_25'
              type="radio"
              value="3500 PSI"
              checked={pressureLevel === '3500 PSI'}
              onChange={() => setPressureLevel('3500 PSI')}
            />
                  <label className='label-o' for='control_25'>
            <h2>3500 PSI</h2>
            <p>This extreme pressure level is ideal for heavy-duty industrial cleaning, including removing stubborn residue, paint, and corrosion from surfaces. It provides the maximum force needed to tackle the toughest stains and grime effectively.</p>
          </label>
          </div>

          <div>
            <input
            id='control_30'
              type="radio"
              value="4000 PSI"
              checked={pressureLevel === '4000 PSI'}
              onChange={() => setPressureLevel('4000 PSI')}
              disabled={chemicalsLevel01 === 'Oxalic Acid '}
            />
                    <label className='label-o' for='control_30'>
            <h2>4000 PSI</h2>
            <p>This level of pressure is ideal for heavy-duty industrial and commercial cleaning, capable of removing even the toughest stains, coatings, and contaminants from surfaces. It provides maximum force and precision for specialized applications. </p>
          </label>
          </div>
        </RadioContainer>
        </div>
        <div className='card-03'>
          <h1>07. Choose Reservation Date</h1>
          <DatePickerContainer>
          <DatePicker
          selected={reservationDate}
          onChange={date => setReservationDate(date)}
          dateFormat="dd/MM/yyyy"
          excludeDates={excludedDates}
          highlightDates={ordersPerDay}
          inline
          showYearDropdown
          showMonthDropdown
          scrollableMonthYearDropdown
        />
        
          </DatePickerContainer>
        </div>




        

        {paymentSuccess ? <Success>
                 <h1>Payment confirmation received. You are now clear to finalize your order. Please select the 'Complete Order Submission' option.</h1>
                   </Success> : (
                 <Section className='card-03'>
                 <Left>
       
                 
       
                     <Balance
                       pieces={pieces}
                       waterLevel={waterLevel}
                       chemicalsLevel01={chemicalsLevel01}
                       chemicalsLevel02={chemicalsLevel02}
                       fabric={fabric}
                       pressureLevel={pressureLevel}
                       
                     />

<Card>
        <div class="card-01">
         <div class="card__side card__side_front">
            <div class="flex__1">
               <p class="card__side__name-bank">monobank</p>
               <div class="card__side__chip"></div>
               <p class="card__side__name-person">PAVLO MATVIIENKO</p>
            </div>
         </div>
         <div class="card__side card__side_back">
            <div class="card__side__black"></div>
            <p class="card__side__number">XXXX XXXX XXXX XXXX</p>
            <div class="flex__2">
               <p class="card__side__other-numbers card__side__other-numbers_1">XX/XX</p>
               <p class="card__side__other-numbers card__side__other-numbers_2">XXX</p>
               <div class="card__side__photo">your-photo</div>
               <div class="card__side__debit">debit</div>
            </div>
            <p class="card__side__other-info">
               MONOBANK.UA | 0 800 205 205 | 
               АТ "УНІВЕРСАЛ БАНК". ЛІЦЕНЗІЯ 
               НБУ №92 ВІД 20.01.1994 | 
               PCE PC100650 WORLD DEBIT
            </p>
         </div>
      </div>
        </Card>
             
       
             
                 </Left>
       
                 <Right>
                 {/* <PayPalButtonComponent
                
               amount={balanceNew} 
               onSuccess={handlePayPalSuccess}
               onError={handlePayPalError}
               clientId="AZtDXHO86G3L4UosECS9R-X0JMwlR7B0cgyhR0yhr93jI2jr4YmdGfcrq2DiYGgt_2aMkWtI1axg2fDp"
             /> */}

           <StripeContainer />

          <MetaPayment amount={balanceNew} />
       
             
                 </Right>
               </Section>
                )}

       
        
        <button className={submitButtonDisabled ? 'disabled-button' : 'enable-button'} disabled={submitButtonDisabled} type="submit">Complete Order Submission</button>
      </Form>

      

      {submissionStatus === 'success' && (
        <p style={{ color: 'green' }}>Order submitted successfully!</p>
      )}
      {submissionStatus === 'error' && (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}

      {missingInputs.length > 0 && (
        <p style={{ color: 'red' }}>
          Please fill in the following missing inputs: {missingInputs.join(', ')}
        </p>
      )}
    </FormContainer>
  );
};

export default OrderForm;

const FormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 100px;

  h1{
    color: #423077;
    margin-bottom: 20px;
    
  }
`;



const Form = styled.form`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 29px;
    color: #2F1C6A;
    margin-bottom: 40px;
    letter-spacing: 1.2px;

  }
`;



const RadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`



const DatePickerContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Section = styled.div`
  width: 100%;
  display: flex;


`

const Left = styled.div`
  width: 50%;
  padding: 50px;
  

`

const Success = styled.div`

  width:100%;
h1{
  color: var(--sec);
  margin-bottom: 30px ;
  font-size: 25px;
  text-align: center;
}

`

const Right = styled.div`
  width: 50%;
  padding: 80px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


`