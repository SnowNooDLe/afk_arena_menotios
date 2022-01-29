import React, { Fragment, useState } from "react";
import { Collapse } from "react-bootstrap";

import arden from "assets/images/cursed/arden.png";
import burning from "assets/images/cursed/burning.png";
import demonic from "assets/images/cursed/demonic.png";
import idre from "assets/images/cursed/idre.png";
import kane from "assets/images/cursed/kane.png";
import shemira from "assets/images/cursed/shemira.png";

import "assets/style/Abyssal.css";

const CursedRealm = () => {
	const [ardenOpen, setArdenOpen] = useState(false);
	const [burningOpen, setBurningOpen] = useState(false);
	const [demonicOpen, setDemonicOpen] = useState(false);
	const [idreOpen, setIdreOpen] = useState(false);
	const [kaneOpen, setKaneOpen] = useState(false);
	const [shemiraOpen, setShemiraOpen] = useState(false);
	return (
		<Fragment>
			<div className="jumbotron">
				<div className="container">
					<h1 className="display-4">저주받은 꿈의 세계</h1>
					<p className="lead">
						덱이 바뀔수도 있으니, 아래 출처에서 수시로 확인하세요.
						<br />
						출처 - <a href="https://www.reddit.com/user/Barbune_Ice/">Reddit</a>
					</p>
				</div>
			</div>
			<div className="container">
				<h2 onClick={() => setArdenOpen(!ardenOpen)}>흑아든</h2>
				<Collapse in={ardenOpen}>
					<div>
						<img src={arden} />
					</div>
				</Collapse>
				<br />

				<h2 onClick={() => setBurningOpen(!burningOpen)}>헬피그</h2>
				<Collapse in={burningOpen}>
					<div>
						<img src={burning} />
					</div>
				</Collapse>
				<br />

				<h2 onClick={() => setDemonicOpen(!demonicOpen)}>흑모라</h2>
				<Collapse in={demonicOpen}>
					<div>
						<img src={demonic} />
					</div>
				</Collapse>
				<br />

				<h2 onClick={() => setIdreOpen(!idreOpen)}>오든</h2>
				<Collapse in={idreOpen}>
					<div>
						<img src={idre} />
					</div>
				</Collapse>
				<br />

				<h2 onClick={() => setKaneOpen(!kaneOpen)}>불기사</h2>
				<Collapse in={kaneOpen}>
					<div>
						<img src={kane} />
					</div>
				</Collapse>
				<br />

				<h2 onClick={() => setShemiraOpen(!shemiraOpen)}>얼미라</h2>
				<Collapse in={shemiraOpen}>
					<div>
						<img src={shemira} />
					</div>
				</Collapse>
				<br />
			</div>
		</Fragment>
	);
};
export default CursedRealm;
