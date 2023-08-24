import React,{useState,useEffect}from 'react';
import axios from 'axios';
import classes from './Upitnik.css'


const Upitnik = ()=>{
    const[one, setOne]=useState('');
    const [disabled, setDisabled] = useState(true);
   
    const initialState = {
      state1: '',
      state2:'',
      state3:'',
      state4: '',
      state5:'',
      state6:'',
      state7: '',
      state8:'',
      state9:'',
      state10: '',
      state11:'',
      state12:'',
      state13:'',
      state14:'',
      state15: '',
      state16:'',
      state17:'',
      state18: '',
      state19:'',
      state20:'',
      state21: '',
      state22:'',
      state23:'',
      state24:'',
      state25: '',
      state26:'',
      state27:'',
      state28: '',
      state29:'',
      state30:'',
      state31: '',
      state32:'',
      state33:'',
      state34:'',
      state35: '',
      state36:'',
      state37:'',
      state38: '',
      state39:'',
      state40:'',
    }; 
  
    const [states, setStates] = useState(initialState);


   
const handleChange= (event, stateName)=>{
  event.persist(); 
  setStates((prevStates) => ({
    ...prevStates,
    [stateName]: event.target.value,
  }));

}
  
const checkButton = () => {
  const areAllStatesFilled = Object.values(states).every((stateValue) => stateValue !== '');
  setDisabled(!areAllStatesFilled);
};


const saveUpitnik=()=>{
  axios.post('http://localhost:8090/api/korisnik/setUpitnik', states,{
    headers: {
      'Authorization': `Bearer ${localStorage.token}`
    },
  })
  .then(response=>{
    console.log(response.data)
    console.log(`Bearer ${localStorage.token}`);
  })
  .catch(err=>{
    console.log(err)
    console.log(`Bearer ${localStorage.token}`);}
    )
}


useEffect(() => {
  checkButton();
}, [states]);
 

   return(
          <div className={classes.okvir}>
                 <h3> Upitnik</h3>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 1</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                 Да ли сте до сада добровољно давали крв или компоненте крви?</div>
                 </div>
            <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state1 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state1') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state1 === 'Ne'}
                 onChange={( event ) => handleChange(event,'state1')}   /> 
                <label>Ne</label>
            </div>


          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 2</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада били одбијени као давалац крви или компоненте крви?
                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state2 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state2') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state2 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state2')}   /> 
                <label>Ne</label>
            </div>

          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 3</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли се тренутно осећате здравим, способним и одморним да дате крв или компоненте крви?
                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state3 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state3') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state3 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state3')}   /> 
                <label>Ne</label>
            </div>

          </div>


          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 4</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте нешто јели пре доласка на давање крви или компоненте крви?

                 </div>
                 </div>
            <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state4 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state4') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state4 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state4')}   /> 
                <label>Ne</label>
            </div>

          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 5</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли се бавите опасним занимањем или хобијем?

                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state5 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state5') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state5 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state5')}   /> 
                <label>Ne</label>
            </div>

          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 6</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли редовно (свакодневно) узимате било какве лекове?


                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state6=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state6') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state6 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state6')}   /> 
                <label>Ne</label>
            </div>


          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 7</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте последња 2-3 дана узимали било какве лекове (нпр. Бруфен, Кафетин, Аналгин...)



                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state7 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state7') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state7 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state7')}   /> 
                <label>Ne</label>
            </div>


          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 8</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли стално узимате Аспирин (Cardiopirin)? Да ли сте га узимали у последњих 5 дана?


                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state8 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state8') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state8 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state8')}   /> 
                <label>Ne</label>
            </div>

          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 9</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте до сада испитивани или лечени у болници или сте тренутно на испитивању или боловању?


                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state9 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state9') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state9 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state9')}   /> 
                <label>Ne</label>
            </div>



          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 10</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте вадили зуб у протеклих 7 дана?

                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state10 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state10') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state10 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state10')}   /> 
                <label>Ne</label>
            </div>


          </div>


          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 11</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у последњих 7 до 10 дана имали температуру преко 38 C, кијавицу, прехладу или узимали антибиотике?

                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state11 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state11') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state11 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state11')}   /> 
                <label>Ne</label>
            </div>



          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 12</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте примили било коју вакцину или серум у протеклих 12 месеци?


                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state12 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state12') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state12 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state12')}   /> 
                <label>Ne</label>
            </div>


          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 13</div></div>

            <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у последњих 6 месеци нагло изгубили на тежини?



                 </div>
                 </div>
                 <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state13 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state13') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state13 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state13')}   /> 
                <label>Ne</label>
            </div>



          </div>



          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 14</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали убоде крпеља у протеклих 12 месеци и да ли сте се због тога јављали лекару?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state14 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state14') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state14 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state14')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 15</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада лечени од епилепсије (падавице), шећерне болести, астме, туберкулозе, инфаркта, можданог удара,
                малигних обољења, менталних болести или маларије?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state15 === 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state15') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state15 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state15')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 16</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли болујете од неке друге хроничне болести: срца, плућа, бубрега, јетре, желуца и црева, костију и зглобова,
                нервног система, крви и крвних судова?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state16=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state16') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state16 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state16')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 17</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада имали проблема са штитастом жлездом, хипофизом и/или примали хормоне?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state17=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state17') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state17 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state17')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 18</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли имате неке промене на кожи или болујете од алергије?
                 </div>
              </div>
          
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state18=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state18') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state18 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state18')}   /> 
                <label>Ne</label>
            </div>


          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 19</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли дуго крварите после повреде или спонтано добијате модрице?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state19=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state19') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state19 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state19')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 20</div></div>
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у протеклих 6 месеци имали неку операцију или примили крв?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state20=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state20') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state20 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state20')}   /> 
                <label>Ne</label>
            </div>
          </div>
          
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 21</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у протеклих 6 месеци путовали или живели у иностранству?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state21=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state21') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state21 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state21')}   /> 
                <label>Ne</label>
            </div>
          </div>
          
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 22</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у протеклих 6 месеци имали акупунктуру, пирсинг или тетоважу?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state22=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state22') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state22 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state22')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 23</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте пили алкохол у последњих 6 сати?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state23=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state23') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state23 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state23')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 24</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте боловали или болујете од хепатитиса (жутице) A, B или C?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state24=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state24') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state24 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state24')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 25</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                 Да ли сте били у контакту или живите са особом оболелом од хепатитиса (жутице)?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state25=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state25') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state25 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state25')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 26</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли мислите да је постојала могућност да се заразите HIV-ом?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state26=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state26') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state26 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state26')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 27</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада користили било коју врсту дроге?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state27=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state27') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state27 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state27')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 28</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада користили препарате који се званично не издају на рецепт и/или препарате за боди билдинг (стероиде)?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state28=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state28') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state28 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state28')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 29</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада користили препарате који се званично не издају на рецепт и/или препарате за боди билдинг (стероиде)?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state29=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state29') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state29 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state29')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 30</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте икада за пружање сексуалних услуга узимали новац или дрогу?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state30=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state30') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state30 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state30')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 31</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли знате на које све начине сте могли изложити себе ризику од заразних, крвљу преносивих болести?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state31=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state31') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state31 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state31')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
  

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 32</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали сексуалне односе током протеклих 6 месеци без заштите са особом која има или је имала хепатитис (жутицу) B или C?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state32=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state32') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state32 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state32')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 33</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали сексуалне односе током протеклих 6 месеци без заштите са особом која је HIV позитивна?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state33=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state33') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state33 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state33')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 34</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали сексуалне односе током протеклих 6 месеци без заштите  са особом која је икада за пружање сексуалних услуга узимала новац или дрогу?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state34=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state34') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state34 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state34')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 35</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали сексуалне односе током протеклих 6 месеци без заштите  са особом која је икада користила било коју врсту дроге на било који начин?

                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state35=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state35') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state35 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state35')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 36</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали сексуалне односе током протеклих 6 месеци без заштите  са особом чије Вас је дотадашње сексуално понашање могло довести у ризик добијања сексуално преносиве болести?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state36=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state36') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state36 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state36')}   /> 
                <label>Ne</label>
            </div>
          </div>
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 37</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте имали сексуалне односе током протеклих 6 месеци без заштите да ли сте Ви имали аналне сексуалне односе током протеклих 6 месеци?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state37=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state37') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state37 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state37')}   /> 
                <label>Ne</label>
            </div>
          </div>

          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 38</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у другом стању?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state38=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state38') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state38 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state38')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 39</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли тренутно имате менструацију?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state39=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state39') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state39 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state39')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
          <div className={classes.gridcontainer}>
            <div className={classes.griditem}> <div> 40</div></div> 
              <div className={classes.griditem}>
                <div className={classes.pitanje}>
                Да ли сте у последњих 6 месеци имали порођај или прекид трудноће?
                 </div>
              </div>
              <div className={classes.griditem}>
                <input type="radio" 
                 value="Da"
                 checked={states.state40=== 'Da'}
                 onChange={ ( event ) => handleChange(event, 'state40') }/> 
                <label>Da</label>   
            </div>
            <div className={classes.griditem}>
                <input type="radio"
                 value="Ne"
                 checked={states.state40 === 'Ne'}
                 onChange={( event ) => handleChange(event, 'state40')}   /> 
                <label>Ne</label>
            </div>
          </div>
  
   <button disabled={disabled} onClick={saveUpitnik}> Potvrdi</button>
  
  </div>




           


   );




}
export default (Upitnik)