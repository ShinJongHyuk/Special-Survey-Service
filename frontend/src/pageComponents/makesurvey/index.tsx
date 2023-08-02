import React from 'react';
import MakeSettings from './makesettings';
import MakeQuestion from './makequestion';
import useSelectedStore from '@/stores/useSelectedStore';

function MakeSurvey() {
  const { selected, setSelected } = useSelectedStore();
  console.log(selected)

  return (
    <>
       {selected === 'question' && <MakeQuestion />}
       {selected === 'setting' && <MakeSettings />}
    </>
  );
};

export default MakeSurvey;