interface IPaginationProps {
  totalPages: number,
  currentPage: number,
  previousPage: () => void,
  nextPage: () => void,
  firstPage: () => void,
  lastPage: () => void
}

const Pagination = ({
  totalPages,
  currentPage,
  previousPage,
  nextPage,
  firstPage,
  lastPage
}: IPaginationProps) => {
  return (
    <div className="pagination-nav">
      <ul className="pagination">
        {currentPage > 1 && <li className="page-item">
          <button onClick={() => previousPage()} className="page-link">{`<<`}</button>
        </li>}
        {currentPage > 1 && <li className="page-item">
          <button onClick={() => firstPage()} className="page-link">First</button>
        </li>}
        {<li className="page-item active">
          <button disabled className="page-link">{currentPage}</button>
        </li>}
        {currentPage < totalPages && <li className="page-item">
          <button onClick={() => lastPage()} className="page-link">Last</button>
        </li>}
        {currentPage < totalPages && <li className="page-item">
          <button onClick={() => nextPage()} className="page-link">{`>>`}</button>
        </li>}
      </ul>
    </div>
  )
}

export default Pagination
