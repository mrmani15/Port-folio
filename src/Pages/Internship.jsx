import React from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';

const Internship = () => {
	return (
		<div className='container-fluid p-5' id='internship'>
			<center>
				<h1 className='intern text-warning'>Internship</h1>
			</center>
			<div className='rounded-pill p-5 bg-dark mt-4 text-center'>
				<h4>
					I have my One-month intership at quillhash technology. where
					i work on product{' '}
					<a href='https://zeptagram.com/' className='text-secondary'>
						zeptagram.com
					</a>{' '}
					as <b>React Developer</b> role.
				</h4>
				<a
					className='btn btn-info btn-lg mt-4 font-weight-bolder'
					href='Internship letter.pdf'
					target='_blank'
				>
					CERTIFICATE
				</a>
			</div>
			<div className='d-flex justify-content-end'>
				<a href='#home' className='text-white border btn btn-secondary rounded-pill'>Top<BsChevronDoubleUp /></a>
			</div>
		</div>
	);
};

export default Internship;
