import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from './Context/MainProvider';
import { Loading } from '../Loading';
import ReactPaginate from 'react-paginate'

export const Quotes = () => {
  const { AllQuotes, getAllQuote, loading } = useContext(MainContext);
  // console.log(AllQuotes)
  const [skip, setSkip] = useState(0);


  useEffect(() => {
    getAllQuote()
  }, [])


  const handleOnPage = (data) => {
    // console.log(data)
    const PageNo = data.selected + 1;
    setSkip(PageNo)
    getAllQuote(PageNo)
  }



  return (
    <div>
      <h1>
        Quotes
      </h1>
      {
        loading ? <>
          <Loading />
        </> :
          <>
            <div className='d-flex justify-content-center flex-wrap'>
              {
                AllQuotes?.quotes?.map((e, id) =>
                  <>
                    <div className="card"  style={{ width: "280px", margin: "20px", marginLeft: "33px", backgroundColor: "rgb(250, 163, 167)", boxShadow: "1px 1px 6px 1px red" }} key={id}>
                      <div className="card-body" key={id}>
                      <h6>{e.id}</h6>
                        <h5 className="card-title" >{e.author}</h5>
                        <p className="card-text" >{e.quote}</p>
                      </div>
                    </div>
                  </>
                )
              }
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={'next'}
                pageCount={5}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                onPageChange={handleOnPage}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item "}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              >

              </ReactPaginate>
            </div>

          </>


      }



    </div>
  )
}
