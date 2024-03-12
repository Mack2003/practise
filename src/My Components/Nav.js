import React, { useContext, useState } from 'react'
import ReactModal from 'react-modal'
import ContextProvider from '../context/ContextProvider'

export default function Nav(props) {

    const data = useContext(ContextProvider)
    
    let [list, setList] = useState(false)// List toggelable useState() 
    const [loginPopUp, setLoginPopUp] = useState(false)

    function func() {   //Toggel if list is clicked or not
        if (list === true) {
            setList(false)
        } else {
            setList(true)
        }
    }

    window.onload = () => {  // Set list variable value on load of the the page
        if (window.innerWidth > 560) {
            setList(true)
        } else {
            setList(false)
        }
    }

    window.addEventListener('resize', () => {  //Toggel list according to the schreen
        if (window.innerWidth > 560) {
            setList(true)
        } else {
            setList(false)
        }
    })

    function stingPrint() {  //hideing the nav list on mouse out from the list
        if (window.innerWidth < 560) {
            setList(false)

        }
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(#55edb9db, #c74bedb0)'
        }
    }

    const handelLogin = async(e) => {
        e.preventDefault();
        
    }

    return (
        <>
            <div id='navMain' className='navMain container'>
                <span onClick={func} className='arrow'><i className="bi bi-list"></i></span>
                <div onMouseLeave={stingPrint} className={`nav ${list === false ? "hideNav" : ''}`}>
                    <ul>
                        <li className='navLink'><a href="#navMain">Home</a></li>
                        <li className='navLink'><a href="#course">Course </a></li>
                        <li className='navLink'><a href="#teachers">Our Teachers</a></li>
                        <li className='navLink'><a href="#cross">Students</a></li>
                    </ul>
                    {props.isLog === false ? <div className="logIn">
                        <button onClick={() => setLoginPopUp(true)}>Sign in</button>
                    </div> : <h4>User Id</h4>}
                </div>
                <span className='InstituteName'>Gyanada Institute</span>
            </div>
            <ReactModal contentLabel={'Login'} onRequestClose={() => setLoginPopUp(false)} style={customStyles} isOpen={loginPopUp} >
                <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Sign in</h3>
                <form style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                    <div>
                        <input style={{border:'none', outline:'none'}} className='sign-info' placeholder='Type your email' type='email' />
                    </div>
                    <div>
                        <input style={{border:'none', outline:'none'}} placeholder='Type your password' type='password' />
                    </div>
                    <div align='center'>
                        <button onClick={handelLogin} style={{border:'none', outline:'none', padding:'.5rem 1rem', borderRadius:'.3rem'}}>Sign in</button>
                    </div>
                </form>
            </ReactModal>
        </>
    )

}
