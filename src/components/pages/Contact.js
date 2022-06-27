import React from 'react'
import { NavLink } from 'react-router-dom';

function Contact() {
  return (
   <>
    <li className='contact_home' >
            <NavLink
              to="/home"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b" : "" };
              }}
            >
              home
            </NavLink>
          </li>
   <h2>Contact</h2>
    <hr />
    <p>Lorem ipsum dolor sit amet consectetur 
    adipisicing elit. Voluptates odit, accusamus nam eaqu
    e recusandae repudiandae quo totam fugit. Praesentium
     soluta aspernatur quia commodi ullam! At, reprehenderit? Porro voluptatum aspernatur, labore et deleniti est sunt recusandae esse dolor maiores. Officia omnis repellat esse reiciendis repudiandae vitae doloribus facilis ab, hic architecto fuga quidem itaque nulla amet consectetur nobis ut eos corrupti molestiae rem et voluptates exercitationem quasi iusto. Expedita omnis accusamus nihil eius delectus nulla est? Modi laborum accusamus dolores mollitia natus temporibus aspernatur recusandae pariatur, soluta sit alias totam voluptates deserunt hic ullam ratione nisi eligendi voluptatem ad aut perspiciatis?</p>
     
   </>
  )
}

export default Contact