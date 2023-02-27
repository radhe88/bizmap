import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { SlUser,SlSpeech } from 'react-icons/sl'


import Button from 'react-bootstrap/Button';





const Sectwo = (props) => {
  return (
    <>
      <Col sm className='item p-3'>
        <Card className='blog-post dez-blog'>
          <div className='dlab-post-media'>
            <Card.Img className='topbox' variant="top" src={props.src} />
            <Card.Body>
              <div className='dlab-info'>
                <div className='category-tag'>
                  <Button className='button1' variant="">TARVEL</Button>{' '}
                </div>
              </div>
              <div className='dlab-post-title'>
                <h5 className='post-title'>
                  <a href="" className='color1'>{props.title}</a>
                </h5>
              </div>
              <div className='dlab-post-text'>
                <p>Achieving only 1 out of the 4 (traffic, opt-in, conversion, email) doesn’t do much help either.</p>
              </div>
              <div className='dlab-post-meta'>
                <ul className=''>
                  <li className='post-author'>
                    <i className='icon-user'>< SlUser/>
                    <a href="">By John Smith</a>
                    </i>
                  </li>
                  <li className='post-comment'>
                    <i className='icon-speech '>< SlSpeech />
                    <a href="#">08 Comments</a>
                    </i>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </div>

        </Card>
      </Col>
    </>


  )
}

export default Sectwo