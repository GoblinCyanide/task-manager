
import React from 'react'
import './CardStatus.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Image from './Image.jpg'


const Card = ( { id, title, tag, userId, status, priority } ) => {
	status = "Done";
	return (
		<>
			<div className="card">
				<div className="top">
					<span className="title">{id}</span>
					<div className="img-container">
						<div className="img-cont">
							<img src={Image} className="userImg" />
						</div>
						<div className="status"></div>
					</div>
				</div>
				<div className="middle">
					
					<span className="heading">{title}</span>
				</div>
				<div className="footer">
					<div className="icon-dash">
						---
					</div>
					<div className="featReq">
						<div className="circle"></div>
						{tag}
					</div>
				</div>

			</div>
		</>
	)
}

export default Card;