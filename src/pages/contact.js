import React from 'react';

export const Contact = () => {
	const handleSubmit = (event) => {
		alert('Submitted Successfully');
		setTimeout(() => {
			document.getElementById('input-name').value = '';
			document.getElementById('input-email').value = '';
			document.getElementById('phone').value = '';
			document.getElementById('input-message').value = '';
		}, 100);
	};

	return (
		<>
			<div id='contact-container'>
				<div id='contact-form-container'>
					<form id='contact-form' method='post' onSubmit={handleSubmit} action='https://formspree.io/f/xnqykpga'>
						<input id='input-name' name='name' type='text' placeholder='Your Name' />
						<input id='input-email' name='email' type='email' required placeholder='Your Email' />

						<input type='text' name='phone' id='phone' placeholder='Your Phone no.' required />
						<textarea id='input-message' name='message' rows='2' cols='40' placeholder='Message'></textarea>
						<button className='sub-btn' type='submit'>
							SEND MESSAGE
						</button>
					</form>
				</div>
				<div id='my-details-container'>
					<h4>Get In touch</h4>
					<p>
						Thank you for visiting my portfolio! If you have any questions or would like to get in touch with me, please don’t
						hesitate to reach out. You can contact me by email at{' '}
						<a href='mailto:arijitmandal999@gmail.com'>arijitmandal999@gmail.com</a>, by phone, or by filling out the contact form
						below. I look forward to hearing from you!
					</p>

					<h4>My Address</h4>
					<div className='my-details-info-container'>
						<span>🏠 Bengaluru, India</span>
					</div>
					<div className='my-details-info-container'>
						<span>📞 9635012353</span>
					</div>
					<div className='my-details-info-container'>
						<span>
							✉️&nbsp;
							<a style={{ textDecoration: 'none', color: 'red' }} href='mailto:arijitmandal999@gmail.com'>
								arijitmandal999@gmail.com
							</a>
						</span>
					</div>
				</div>
			</div>

			<div className='text-center social-icons'>
				<ul className='horizontal-list'>
					<li>
						<a href='https://www.linkedin.com/in/arijit-mandal-693b25130/'>
							<img
								src='https://ninjasfiles.s3.amazonaws.com/asset_0000000000000015_1549330433_linkedin-logo.png'
								id='linkedin'
								alt='LinkedIn'
							/>
						</a>
					</li>
					<li>
						<a href='https://github.com/arijitmandal10'>
							<img src='https://img.freepik.com/free-icon/github-logo-silhouette-square_318-54633.jpg' id='stack' alt='GitHub' />
						</a>
					</li>
					<li>
						<a href='https://www.facebook.com/arijit.mandal.752'>
							<img
								src='https://ninjasfiles.s3.amazonaws.com/asset_0000000000000014_1549330414_facebook-logo.png'
								id='fb'
								alt='Facebook'
							/>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
