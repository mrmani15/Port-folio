import React from 'react';
import GoodTech from '../components/GoodTech';
import FamiliarTech from '../components/FamiliarTech';
import Tool from '../components/Tool';

const SkillTech = () => {
	return (
		<div className='p-5' id='techskill'>
			<center>
				<h1 className='underline'>Tech & Tools</h1>
			</center>
			<GoodTech />
			<FamiliarTech />
			<Tool />
		</div>
	);
};

export default SkillTech;
