import React from 'react'
import Twitter from '../twitter/Twitter'
import PageConntect from '../pageConnect/PageConntect'

function Accueil() {
    return (
        <div>
            <div className="row">
               <div className="col-md-4">
                  <Twitter />
               </div>
               <div className="col-md-8">
                   <PageConntect />
               </div> 
            </div>
        </div>
    )
}

export default Accueil
