import React from 'react';
import './TeamCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TeamCard(props) {

  return (
    <>
        <div className='team-card'>
          <div className='team container-team'>
            <Row className={props.direction}>
              <Col sm={6} md={6} lg={4} xl={4} xxl={4} className='col col-img' data-aos={props.fadeImg} data-aos-anchor-placement="center-bottom">
                <img src={props.teamImg} alt="Team Img" style={props.margin} />
              </Col>
              <Col sm={12} md={12} lg={8} xl={8} xxl={8} className='col' data-aos={props.fadePara} data-aos-anchor-placement="center-bottom">
                <aside className={props.direction}>
                    <h2>{props.name}</h2>
                    <p>
                        {props.oneP}
                        <br/>
                        <br/>
                        {props.twoP}
                        <br/>
                        <br/>
                        {props.threeP}
                        <br/>
                    </p>
                </aside>
              </Col>
            </Row>
            <div className="reset"></div>
          </div>
        </div>
    </>
  );
  
}


export default TeamCard;