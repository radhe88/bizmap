import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { TfiMobile } from 'react-icons/tfi';
import { TfiEmail } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
    <footer className='site-footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-lg-4 col-md-12 col-sm-12'>
              <div className='widget'>
                <img className='m-b15' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAA4CAMAAADwxVVEAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAIne78oDdZu4ziFXMqkQMEJRi15nTT0kI+PSiWYME59+1p41e48AsHRadOievPsexc2Pkrn0PAAAGa0lEQVRo3uXaC1eiQBQH8MtQwPASN0LNfFvZu/Z+/++2OOMwDZdBT2Gbu/9z9uwxDe5vnkBCPcP1Q349hP8nfDLDMkFeZGBNr/Cje/g3cn2LVc7GA2jM0yoo3766htMP78/RzM2ymIKZ6a+qVV7gtNPzXZRZeoiLyQ3KzB6ue1DlsT9DkaD8dwk64pcdOKHclWNVZB5uIEY8ByiWOx0GD6lQ96ph7xbDVTm0OyenBw1Gp4sZ/KooT1DmArEvxnD6ECj1OL3rq1Y53wBAcQwyY7A3mdcBeYkqcaTJIsM0n6GRZLem/SrXt+7JyGFfwg7mz1pQxm+yC32AS0lW6ujhRnkvJ08ARyV7sCdRF0vGHDGYbACKS8mKXndknWK5HdSLAgCOTMYQWuMEXZBHiJNdC14I9KjhxOdSeHwyRtCWuJON4QqRVRCJxnFDMWfDbyEHWesHOiGfiT1Jhcnl6u2R9nLv82QeY+AfRsYErOF4DDIMz0e4zfNdd+RM7G/pYWRk9v3pOGSxYoss77sip4RiI7eaEjwWuZzPl6JbAv5XehljaIyPxySzbCnW7t53z2WZ0LI/HZOcA9xtFWNCPvaKLRNZ9qcjkvtQ5rbs5uHfIXtZw4XmN5BfysM//h0y3akieXtzZPJ9efiie3LEGMtayLFa3un+xLwjk53y8AMb+dpC5kyU7CoVTW4s3pTsiwMEDt2fYvgc2WGivIR9jbxuJKcxVsnJ24pMwgyyE5CdislWaCL7oXiPcShjjA9Xrv1OQk70KXI6ayKHBsRzGskhESdmL0NU36m4WsYJ2Q/0UTJwCDkRB9OJM9vV18RK1rVRcoJIzJRcdqKZwDHJqlVSc3/KgZIT83SckGNxSMNsu/p6aSUvkZJ3EQMs2pXiNpGB15omgjo584ydKpSvKNmtNXFEyCJh+qGmpIF8PxK3jxymFrITo43sqipT2ZU+IdO9NgFCBq6q0/sTB0IOP4jS7Yugiew6Zk0pJa9QZsLPGsmDq22DjgnZrJ6L43ut5FT1HiED0y3m7CCEnMqRql464iSEHNdrcgk5wyqlLSVkJuqcckouqyc3AdxKVsM3giYyJNUsd2XhhEzPGVNyeQhSk1MnMzGs1bL6YpDVNF5OwadkfTJdHmshh3pdpuRM7lR6fyLkzFjj5Hig5LChpjp5Jn/6KIfFRWSQ5TSe2K6+qCi3kyPZSRay2qm4HuGarD/gmqekZN7UyibZR1XpIJZzYbAjX01hsF3ZRgXsIZOS1Nt0WKdAycbi5Kk1gpCZ9hnFs301JZqsD4r9j088b18AJog38C4e+jpwGDltJyfmsKNkiOl9lVe/iov2k2lNJnmAiizyLp/aj+9/I86fRRNNoQOyGtZgIZvXLClYyenXya+IwVyTYRieiS34EkX0J/eTfdtc1hxuIeuXeihQ8icGNqMDm29VY0FWue9jldEAbGQ6yvK2FTvRbxIyuX+iZF0+/X3WUlNCl68FYjB0BVnn7kF41TS2k13yiM+2LzNtoeTaEudYyBF9ROJScm7cRcoLXEVWDwVW8k7KyIurp7GdbDZpQq++asPa2UsGrgWWfTkx1gdCNme7vBM3rr623bmh5DL9vX+TEknJU3hK1r2xnwwsARsZ8tptOQ+ayAGvFck+knvlD56hkfy+/29Seqmpbss9IGQyrNvJkNnJDoq4XO/jlKx/EMVqxxNkfUZOyAc++1JxGWNqR+WNZGfPUxGwxyNNJxSMMTmPCFkmLz+AuiZNHl4hvsIXyD6aSaGRHHdDps+Ucp+SI1KTIqtdrfgK2Uk91Il5/W3l6owMRiP7jfsypzVp8nx7UfklMgDz1MFl5ZScYodkyFjVxQ6YZFqTGwFUZLXErwl530NdGrYNfF8cVkZhaDtXH/Hpc+wYcaQe960OIV/Bz44iqxDyI8r/n1blKjbrP7aTr73tnv6zs5d8izgHWC9wl8tVaiPzlSdvt3522slys3zz5/gxF2FKyb31m/rD9w+PnVyO43fjIfhtES1GapcPuUF+CgP5xmwCPz12cqnLgSvvzfmTuMG4fkal3s5rX0zd6ovJi+IEvpZvJ79uJy7KvK2noLLxkys1r9/HJTm8UD1/B6cQO5lX3bl6AjPZ78UZ1rI4mW/b28mw3o1VaEpWruE6N5MNnExayOD4od8yVjfr3bx+Lqbw32Tj52N2GjP4gPwBoMEycTdWwooAAAAASUVORK5CYII=" alt="" />
                <p className='text-capitalize m-b20'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.
                </p>
                <div className='subscribe-form '>
                  <form action="" className='dzSubscribe'>
                    <div className='input-group'>
                      <input type="email" className='form-control' name='EMAIL' placeholder='Email' />
                      <div className='input-group-btn'>
                        <Button className='site-button radius-xl' variant="">Subscribe  </Button>{' '}
                      </div>
                    </div>
                  </form>
                </div>
                <ul className='list-inline social-icon  m-a0'>
                  <li>
                    <a href="" className='site-button facebook circle '>
                      <i><FaFacebookF /></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className='site-button google-plus circle  '>
                      <i><FaGooglePlusG /></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className='site-button linkedin circle '>
                      <i><FaLinkedinIn /></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className='site-button instagram circle  '>
                      <i><FaInstagram /></i>
                    </a>
                  </li>
                  <li>
                    <a href="" className='site-button twitter circle '>
                      <i><FaTwitter /></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-5 col-md-7 col-sm-12 col-12'>
              <div className='widget border-0'>
                <h5 className='m-b30 text-white'>Frequently Asked Questions</h5>
                <ul className='list-2 list-line'>
                  <li>
                    <a href="">Hotel</a>
                  </li> <li>
                    <a href="">Restaurant</a>
                  </li> <li>
                    <a href="">Appartment</a>
                  </li> <li>
                    <a href="">SPA & Beauty</a>
                  </li> <li>
                    <a href="">Atuomation</a>
                  </li> <li>
                    <a href="">Travel</a>
                  </li> <li>
                    <a href="">How It Works</a>
                  </li> <li>
                    <a href="">For Employers</a>
                  </li> <li>
                    <a href="">Underwriting</a>
                  </li> <li>
                    <a href="">Contact Us</a>
                  </li> <li>
                    <a href="">Lending Licnses</a>
                  </li> <li>
                    <a href="">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-3 col-lg-3 col-md-5 col-sm-12 col-12'>
              <div className='widget widget_getintuch'>
                <h5 className='m-b30 text-white'>Contact us</h5>
                <ul className='main2'>
                  <li>
                    <i className='ti-location-pin'><SlLocationPin /></i>
                    <strong>address</strong>
                     demo address #8901 Marmora Road Chi Minh City, Vietnam 
                  </li>
                  <li>
                    <i className='ti-mobile'>< TfiMobile />
                    </i>
                    <strong>phone </strong>
                    0800-123456 (24/7 Support)
                  </li>
                  <li>
                    <i className='ti-email'><TfiEmail /></i>
                    <strong>Email</strong>
                    Info@Example.Com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <span className='fbottom-like'>
               Design With 
              <a href="">
                <i className='like-btn'><FaHeart /></i>
              </a>
              By Rohit Prajapati
            </span>
          </div>
        </div>
      </div>
    </div>
    </footer>
    
    </>
  )
}

export default Footer