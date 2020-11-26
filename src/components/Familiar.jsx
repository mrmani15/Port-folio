import React from 'react';

const Familiar = () => {
	return (
		<div>
			<center>
				<h4 className='font-weight-bolder text-warning'>
					Stack I Familiar With
				</h4>
			</center>
			<div className='bg-dark rounded-pill p-4 mt-4 d-flex justify-content-center'>
				<img
					src='img/backend.png'
					className='img-fluid mx-auto d-block'
					alt='Frontend'
					width='80'
				/>
				<div>
					<h5 className='mt-3 mb-1 text-warning'>Backend</h5>
					<p className='text-white font-weight-bolder'>
						I can build the Backend using Express, MongoDB, MySql.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Familiar;
